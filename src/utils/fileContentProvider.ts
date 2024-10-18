import * as vscode from 'vscode';

export class FileContentProvider {
    async getActiveFileContent(): Promise<string | undefined> {
        const activeEditor = vscode.window.activeTextEditor;
        if (activeEditor) {
            const document = activeEditor.document;
            return document.getText();
        }
        return undefined;
    }
}