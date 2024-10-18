import * as vscode from "vscode";

export class FileReferenceResolver {
  async resolveFileReferences(
    request: vscode.ChatRequest
  ): Promise<Map<string, string>> {
    const fileContents = new Map<string, string>();

    for (const reference of request.references) {
      if (reference.id === "vscode.file") {
        if (reference.value === undefined || reference.value === null) {
          continue;
        }

        try {
          const fileUri = vscode.Uri.parse(reference.value.toString());
          const fileContent = await this.readFileContent(fileUri);
          fileContents.set(reference.id, fileContent);
        } catch (error) {
          console.error(`Error reading file ${reference.id}: ${error}`);
        }
      }
    }

    return fileContents;
  }

  private async readFileContent(uri: vscode.Uri): Promise<string> {
    const readData = await vscode.workspace.fs.readFile(uri);
    return new TextDecoder().decode(readData);
  }
}
