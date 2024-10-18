import * as vscode from "vscode";
import { LanguageModelService } from "../services/languageModelService";
import { LanguageDetector } from "../utils/languageDetector";
import { renderPrompt } from "@vscode/prompt-tsx";
import { LanguageInfoPrompt } from "../prompts/languageInfoPrompt";

export async function handleLanguageCommand(
  request: vscode.ChatRequest,
  stream: vscode.ChatResponseStream,
  token: vscode.CancellationToken,
  languageDetector: LanguageDetector,
  languageModelService: LanguageModelService
) {
  const { language } = languageDetector.detect();

  try {
    const { messages } = await renderPrompt(
      LanguageInfoPrompt,
      { language, userQuery: request.prompt },
      { modelMaxPromptTokens: 4096 },
      await languageModelService.getModel()
    );

    const response = await languageModelService.sendRequest(messages, token);

    await stream.markdown(
      `Providing information about ${language}:`
    );

    for await (const fragment of response.text) {
      await stream.markdown(fragment);
    }

    await stream.markdown(
      "This information should give you a good overview of the language. If you need more specific details, feel free to ask!"
    );
  } catch (err) {
    handleError(err, stream);
  }
}

function handleError(err: unknown, stream: vscode.ChatResponseStream) {
  if (err instanceof vscode.LanguageModelError) {
    console.error(err.message, err.code, err.cause);
    stream.markdown(
      "I'm sorry, I encountered an error while fetching language information. Please try again or ask for specific language details."
    );
  } else {
    throw err;
  }
}