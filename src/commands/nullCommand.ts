import * as vscode from "vscode";
import { LanguageModelService } from "../services/languageModelService";
import { LanguageDetector } from "../utils/languageDetector";
import { renderPrompt } from "@vscode/prompt-tsx";
import { NullPrompt } from "../prompts/nullPrompt";

export async function handleNullCommand(
  request: vscode.ChatRequest,
  stream: vscode.ChatResponseStream,
  token: vscode.CancellationToken,
  languageDetector: LanguageDetector,
  languageModelService: LanguageModelService
) {
  const { language } = languageDetector.detect();

  try {
    const { messages } = await renderPrompt(
      NullPrompt,
      { language, userQuery: request.prompt },
      { modelMaxPromptTokens: 4096 },
      await languageModelService.getModel()
    );

    const response = await languageModelService.sendRequest(messages, token);

    stream.markdown(`Demonstrating null handling and related concepts in ${language}:\n`);

    for await (const fragment of response.text) {
      stream.markdown(fragment);
    }

    stream.markdown(
      "\nThis example shows how to work with null values and avoid common pitfalls. Adjust the practices based on your specific use case and language features."
    );
  } catch (err) {
    handleError(err, stream);
  }
}

function handleError(err: unknown, stream: vscode.ChatResponseStream) {
  if (err instanceof vscode.LanguageModelError) {
    console.error(err.message, err.code, err.cause);
    stream.markdown(
      "I'm sorry, I encountered an error while generating the null handling example. Please try again or provide more specific requirements."
    );
  } else {
    throw err;
  }
}