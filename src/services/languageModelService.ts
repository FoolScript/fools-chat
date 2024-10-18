import * as vscode from "vscode";

export class LanguageModelService {
  private model: vscode.LanguageModelChat | null = null;

  async getModel(): Promise<vscode.LanguageModelChat> {
    if (!this.model) {
      const [model] = await vscode.lm.selectChatModels({
        vendor: "copilot",
        family: "gpt-4o",
      });
      this.model = model;
    }
    return this.model;
  }

  async sendRequest(
    prompt: vscode.LanguageModelChatMessage[],
    token: vscode.CancellationToken
  ): Promise<vscode.LanguageModelChatResponse> {
    const model = await this.getModel();
    return model.sendRequest(prompt, {}, token);
  }
}
