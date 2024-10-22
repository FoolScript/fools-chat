import * as vscode from "vscode";
import {
  PromptElement,
  PromptElementCtor,
  renderPrompt,
} from "@vscode/prompt-tsx";
import { LanguageDetector } from "../utils/languageDetector";
import { LanguageModelService } from "../services/languageModelService";
import { CommonPromptProps } from "../prompts/commonPromptProps";

type PromptType<T extends CommonPromptProps = CommonPromptProps> =
  PromptElementCtor<T, void>;

export async function handleCommand<T extends CommonPromptProps>(
  request: vscode.ChatRequest,
  stream: vscode.ChatResponseStream,
  token: vscode.CancellationToken,
  languageDetector: LanguageDetector,
  languageModelService: LanguageModelService,
  leadingString: string,
  Prompt: PromptType<T>,
  trailingString: string,
  additionalProps: Omit<T, keyof CommonPromptProps> = {} as Omit<
    T,
    keyof CommonPromptProps
  >
) {
  const { language } = languageDetector.detect();

  try {
    const { messages } = await renderPrompt(
      Prompt,
      {
        language,
        userQuery: request.prompt,
        ...additionalProps,
      } as T,
      { modelMaxPromptTokens: 4096 },
      await languageModelService.getModel()
    );

    const response = await languageModelService.sendRequest(messages, token);

    stream.markdown(`${leadingString} ${language}:\n`);

    for await (const fragment of response.text) {
      stream.markdown(fragment);
    }

    stream.markdown(trailingString);
  } catch (err) {
    if (err instanceof vscode.LanguageModelError) {
      console.error(err.message, err.code, err.cause);
      stream.markdown(
        "I'm sorry, I encountered an error while generating the example. Please try again or provide more specific requirements."
      );
    } else {
      throw err;
    }
  }
}
