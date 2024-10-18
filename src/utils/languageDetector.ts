import * as vscode from "vscode";

export class LanguageDetector {
  detect(): { language: string } {
    const activeEditor = vscode.window.activeTextEditor;
    let language = "Not detected";

    if (activeEditor) {
      language = activeEditor.document.languageId;
    }

    return { language };
  }
}