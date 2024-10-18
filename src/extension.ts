import * as vscode from "vscode";
import { LanguageDetector } from "./utils/languageDetector";
import { LanguageModelService } from "./services/languageModelService";
import { CrashifyParticipant } from "./participant/crashifyParticipant";

export function activate(context: vscode.ExtensionContext) {
  const languageDetector = new LanguageDetector();
  const languageModelService = new LanguageModelService();

  const crashify = new CrashifyParticipant(languageDetector, languageModelService);

  context.subscriptions.push(
    vscode.chat.createChatParticipant(
      "crashify-chat-extension.crashify",
      crashify.handleRequest.bind(crashify)
    )
  );
}

export function deactivate() {}