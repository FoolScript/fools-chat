import { BasePromptElementProps } from "@vscode/prompt-tsx";

export interface CommonPromptProps extends BasePromptElementProps {
  language: string;
  userQuery: string;
}
