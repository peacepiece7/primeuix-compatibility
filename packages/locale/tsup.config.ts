import { defineConfig } from 'tsup';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    outDir: 'dist',
    dts: true,
    external: [/^@peacepieceuix-compatibility\/(.*)$/],
    sourcemap: true,
    splitting: false
});
