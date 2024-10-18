import * as vscode from "vscode";
import { LanguageModelService } from "../services/languageModelService";
import { LanguageDetector } from "../utils/languageDetector";
import { renderPrompt } from "@vscode/prompt-tsx";
import { InterfacePrompt } from "../prompts/interfacePrompt";

export async function handleInterfaceCommand(
  request: vscode.ChatRequest,
  stream: vscode.ChatResponseStream,
  token: vscode.CancellationToken,
  languageDetector: LanguageDetector,
  languageModelService: LanguageModelService
) {
  const { language } = languageDetector.detect();

  try {
    const { messages } = await renderPrompt(
      InterfacePrompt,
      { language, userQuery: request.prompt },
      { modelMaxPromptTokens: 4096 },
      await languageModelService.getModel()
    );

    const response = await languageModelService.sendRequest(messages, token);

    await stream.markdown(`Generating an example interface in ${language}:`);

    for await (const fragment of response.text) {
      await stream.markdown(fragment);
    }

    await stream.markdown(
      "This example interface demonstrates basic structure and common patterns. You can modify and extend it based on your specific needs."
    );
  } catch (err) {
    handleError(err, stream);
  }
}

function handleError(err: unknown, stream: vscode.ChatResponseStream) {
  if (err instanceof vscode.LanguageModelError) {
    console.error(err.message, err.code, err.cause);
    stream.markdown(
      "I'm sorry, I encountered an error while generating the example interface. Please try again or provide more specific requirements."
    );
  } else {
    throw err;
  }
}
