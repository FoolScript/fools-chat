import * as vscode from "vscode";
import { LanguageModelService } from "../services/languageModelService";
import { LanguageDetector } from "../utils/languageDetector";
import { renderPrompt } from "@vscode/prompt-tsx";
import { StringPrompt } from "../prompts/stringPrompt";

export async function handleStringCommand(
  request: vscode.ChatRequest,
  stream: vscode.ChatResponseStream,
  token: vscode.CancellationToken,
  languageDetector: LanguageDetector,
  languageModelService: LanguageModelService
) {
  const { language } = languageDetector.detect();

  try {
    const { messages } = await renderPrompt(
      StringPrompt,
      { language, userQuery: request.prompt },
      { modelMaxPromptTokens: 4096 },
      await languageModelService.getModel()
    );

    const response = await languageModelService.sendRequest(messages, token);

    await stream.markdown(
      `Demonstrating string declarations, operations, and methods in ${language}:`
    );

    for await (const fragment of response.text) {
      await stream.markdown(fragment);
    }

    await stream.markdown(
      "This example shows common string operations and methods. You can modify and extend it based on your specific needs."
    );
  } catch (err) {
    handleError(err, stream);
  }
}

function handleError(err: unknown, stream: vscode.ChatResponseStream) {
  if (err instanceof vscode.LanguageModelError) {
    console.error(err.message, err.code, err.cause);
    stream.markdown(
      "I'm sorry, I encountered an error while generating the string examples. Please try again or provide more specific requirements."
    );
  } else {
    throw err;
  }
}