import type { TerminalTokenSections } from '@peacepieceuix-compatibility/themes/types/terminal';

export * from '@peacepieceuix-compatibility/themes/types/terminal';

declare const root: TerminalTokenSections.Root;
declare const prompt: TerminalTokenSections.Prompt;
declare const commandResponse: TerminalTokenSections.CommandResponse;
declare const css: TerminalTokenSections.CSS;
declare const _default: {
    root: TerminalTokenSections.Root;
    prompt: TerminalTokenSections.Prompt;
    commandResponse: TerminalTokenSections.CommandResponse;
    css: string;
};

export { commandResponse, css, _default as default, prompt, root };
