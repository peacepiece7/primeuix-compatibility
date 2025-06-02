import { toValues } from '@peacepieceuix-compatibility/forms/utils';
import { isNotEmpty } from '@peacepieceuix-compatibility/utils/object';
import type { AnyObjectSchema, ValidateOptions, ValidationError } from 'yup';
import type { ResolverOptions, ResolverResult } from '..';

export const yupResolver =
    <T>(schema: AnyObjectSchema, schemaOptions?: ValidateOptions<any>, resolverOptions?: ResolverOptions) =>
    async ({ values, name }: any): Promise<ResolverResult<T>> => {
        const { sync = false, raw = false } = resolverOptions || {};

        try {
            const result = await schema[sync ? 'validateSync' : 'validate'](values, { abortEarly: false, ...schemaOptions });

            return {
                values: toValues(raw ? values : result, name),
                errors: {}
            };
        } catch (e: any) {
            if (e?.inner) {
                return {
                    values: toValues(raw ? values : undefined, name),
                    errors: e.inner.reduce((acc: Record<string, any[]>, error: ValidationError) => {
                        const pathKey = isNotEmpty(error.path) ? error.path : name;

                        if (pathKey) {
                            acc[pathKey] ||= [];
                            acc[pathKey].push(error);
                        }

                        return acc;
                    }, {})
                };
            }

            throw e;
        }
    };
