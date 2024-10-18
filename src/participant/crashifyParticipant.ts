import * as vscode from "vscode";
import { LanguageModelService } from "../services/languageModelService";
import { LanguageDetector } from "../utils/languageDetector";
import { FileContentProvider } from "../utils/fileContentProvider";
import { handleClassCommand } from "../commands/classCommand";
import { handleFunctionCommand } from "../commands/functionCommand";
import { handleNumberCommand } from "../commands/numberCommand";
import { handleStringCommand } from "../commands/stringCommand";
import { handleBooleanCommand } from "../commands/booleanCommand";
import { handleInterfaceCommand } from "../commands/interfaceCommand";
import { handleLanguageCommand } from "../commands/languageCommand";
import { handleObjectCommand } from "../commands/objectCommand";
import { handleArrayCommand } from "../commands/arrayCommand";
import { handleVariableCommand } from "../commands/variableCommand";
import { handleNullCommand } from "../commands/nullCommand";

export class CrashifyParticipant {
  private fileContentProvider: FileContentProvider;

  constructor(
    private languageDetector: LanguageDetector,
    private languageModelService: LanguageModelService
  ) {
    this.fileContentProvider = new FileContentProvider();
  }

  async handleRequest(
    request: vscode.ChatRequest,
    context: vscode.ChatContext,
    stream: vscode.ChatResponseStream,
    token: vscode.CancellationToken
  ) {
    switch (request.command) {
      case "class":
        await handleClassCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService
        );
        break;
      case "function":
        await handleFunctionCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService
        );
        break;
      case "number":
        await handleNumberCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService
        );
        break;
      case "string":
        await handleStringCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService
        );
        break;
      case "boolean":
        await handleBooleanCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService
        );
        break;
      case "interface":
        await handleInterfaceCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService
        );
        break;
      case "language":
        await handleLanguageCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService
        );
        break;
      case "object":
        await handleObjectCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService
        );
        break;
      case "array":
        await handleArrayCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService
        );
        break;
      case "variable":
        await handleVariableCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService
        );
        break;
      case "null":
        await handleNullCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService
        );
        break;
      default:
        await this.handleGeneralRequest(request, stream, token);
    }
  }

  private async handleGeneralRequest(
    request: vscode.ChatRequest,
    stream: vscode.ChatResponseStream,
    token: vscode.CancellationToken
  ) {
    const prompt = [
      vscode.LanguageModelChatMessage.User(
        "You are Crashify, an AI assistant specializing in debugging and crash analysis tasks. Respond to queries about error handling, debugging techniques, and crash report analysis."
      ),
      vscode.LanguageModelChatMessage.User(request.prompt),
    ];

    try {
      const response = await this.languageModelService.sendRequest(
        prompt,
        token
      );

      for await (const fragment of response.text) {
        await stream.markdown(fragment);
      }

      await stream.markdown(
        "You can use the following commands:\n" +
          "- `/list`: Generate a list of common crash causes\n" +
          "- `/model`: Create an error model (usage: `/model ErrorName [description]`)\n" +
          "- `/json`: Generate a sample crash report JSON based on the current file content\n" +
          "- `/get`: Retrieve specific error information"
      );
    } catch (err) {
      this.handleError(err, stream);
    }
  }

  private handleError(err: unknown, stream: vscode.ChatResponseStream) {
    if (err instanceof vscode.LanguageModelError) {
      console.error(err.message, err.code, err.cause);
      stream.markdown(
        "I apologize, but I encountered an error while processing your request. This might be related to the crash you're investigating. Can you provide more details or try rephrasing your query?"
      );
    } else {
      throw err;
    }
  }
}
