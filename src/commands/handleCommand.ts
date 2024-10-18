import * as vscode from "vscode";
import { FunctionPrompt } from "../prompts/functionPrompt";
import { renderPrompt } from "@vscode/prompt-tsx";
import { ArrayPrompt } from "../prompts/arrayPrompt";
import { BooleanPrompt } from "../prompts/booleanPrompt";
import { ClassPrompt } from "../prompts/classPrompt";
import { EnumPrompt } from "../prompts/enumPrompt";
import { IfElsePrompt } from "../prompts/ifElsePrompt";
import { InterfacePrompt } from "../prompts/interfacePrompt";
import { NullPrompt } from "../prompts/nullPrompt";
import { NumberPrompt } from "../prompts/numberPrompt";
import { ObjectPrompt } from "../prompts/objectPrompt";
import { StringPrompt } from "../prompts/stringPrompt";
import { TypesPrompt } from "../prompts/typesPrompt";
import { VariablePrompt } from "../prompts/variablePrompt";
import { WhilePrompt } from "../prompts/whilePrompt";
import { LanguageInfoPrompt } from "../prompts/languageInfoPrompt";
import { LanguageDetector } from "../utils/languageDetector";
import { LanguageModelService } from "../services/languageModelService";

type PromptType =
  | typeof ClassPrompt
  | typeof FunctionPrompt
  | typeof NumberPrompt
  | typeof StringPrompt
  | typeof BooleanPrompt
  | typeof InterfacePrompt
  | typeof LanguageInfoPrompt
  | typeof ObjectPrompt
  | typeof ArrayPrompt
  | typeof VariablePrompt
  | typeof NullPrompt
  | typeof IfElsePrompt
  | typeof WhilePrompt
  | typeof EnumPrompt
  | typeof TypesPrompt;

export async function handleCommand(
  request: vscode.ChatRequest,
  stream: vscode.ChatResponseStream,
  token: vscode.CancellationToken,
  languageDetector: LanguageDetector,
  languageModelService: LanguageModelService,
  leadingString: string,
  Prompt: PromptType,
  trailingString: string
) {
  const { language } = languageDetector.detect();

  try {
    const { messages } = await renderPrompt(
      Prompt,
      { language, userQuery: request.prompt },
      { modelMaxPromptTokens: 4096 },
      await languageModelService.getModel()
    );

    const response = await languageModelService.sendRequest(messages, token);

    stream.markdown(`${leadingString} ${language}:\n`);

    for await (const fragment of response.text) {
      stream.markdown(fragment);
    }

    await stream.markdown(trailingString);
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
