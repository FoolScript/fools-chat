import * as vscode from "vscode";
import { LanguageDetector } from "./utils/languageDetector";
import { LanguageModelService } from "./services/languageModelService";
import { FoolScriptParticipant } from "./participant/foolscriptParticipant";

export function activate(context: vscode.ExtensionContext) {
  const languageDetector = new LanguageDetector();
  const languageModelService = new LanguageModelService();

  const foolscript = new FoolScriptParticipant(languageDetector, languageModelService);

  context.subscriptions.push(
    vscode.chat.createChatParticipant(
      "fools-chat-extension.foolscript",
      foolscript.handleRequest.bind(foolscript)
    )
  );
}

export function deactivate() {}