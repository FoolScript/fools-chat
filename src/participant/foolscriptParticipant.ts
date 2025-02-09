import * as vscode from "vscode";
import { LanguageModelService } from "../services/languageModelService";
import { LanguageDetector } from "../utils/languageDetector";
import { FileContentProvider } from "../utils/fileContentProvider";
import { handleCommand } from "../commands/handleCommand";
import { ArrayPrompt } from "../prompts/arrayPrompt";
import { BooleanPrompt } from "../prompts/booleanPrompt";
import { ClassPrompt } from "../prompts/classPrompt";
import { EnumPrompt } from "../prompts/enumPrompt";
import { FunctionPrompt } from "../prompts/functionPrompt";
import { IfElsePrompt } from "../prompts/ifElsePrompt";
import { InterfacePrompt } from "../prompts/interfacePrompt";
import { LanguageInfoPrompt } from "../prompts/languageInfoPrompt";
import { NullPrompt } from "../prompts/nullPrompt";
import { NumberPrompt } from "../prompts/numberPrompt";
import { ObjectPrompt } from "../prompts/objectPrompt";
import { StringPrompt } from "../prompts/stringPrompt";
import { TypesPrompt } from "../prompts/typesPrompt";
import { VariablePrompt } from "../prompts/variablePrompt";
import { WhilePrompt } from "../prompts/whilePrompt";
import { DataTypesPrompt } from "../prompts/dataTypesPrompt";
import { HelloWorldPrompt } from "../prompts/helloWorldPrompt";
import { EntryPrompt } from "../prompts/entryPrompt";
import { PatternPrompt } from "../prompts/patternPrompt";
import { StructurePrompt } from "../prompts/structurePrompt";

export class FoolScriptParticipant {
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
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Generating an example class in",
          ClassPrompt,
          "This example class demonstrates basic structure and common patterns. You can modify and extend it based on your specific needs."
        );
        break;
      case "function":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Generating an example function in",
          FunctionPrompt,
          "This example function demonstrates basic structure and common patterns. You can modify and extend it based on your specific needs."
        );
        break;
      case "number":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Demonstrating number declarations and operations in",
          NumberPrompt,
          "This example shows common number operations and declarations. You can modify and extend it based on your specific needs."
        );
        break;
      case "string":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Demonstrating string declarations, operations, and methods in",
          StringPrompt,
          "This example shows common string operations and methods. You can modify and extend it based on your specific needs."
        );
        break;
      case "boolean":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Demonstrating boolean declarations, operations, and conditional usage in",
          BooleanPrompt,
          "This example shows common boolean operations and conditional usage. You can modify and extend it based on your specific needs."
        );
        break;
      case "interface":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Generating an example interface in",
          InterfacePrompt,
          "This example interface demonstrates basic structure and common patterns. You can modify and extend it based on your specific needs."
        );
        break;
      case "language":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Providing information about",
          LanguageInfoPrompt,
          "This information should give you a good overview of the language. If you need more specific details, feel free to ask!"
        );
        break;
      case "object":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Demonstrating object creation, property access, and methods in",
          ObjectPrompt,
          "This example shows basic object manipulation. You can modify and extend it based on your specific needs."
        );
        break;
      case "array":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Demonstrating array declaration, initialization, and common operations in",
          ArrayPrompt,
          "This example shows basic array manipulation. You can modify and extend it based on your specific needs."
        );
        break;
      case "variable":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Demonstrating variable declaration, initialization, and scoping in",
          VariablePrompt,
          "This example shows basic variable usage and scoping. You can modify and extend it based on your specific needs."
        );
        break;
      case "null":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Demonstrating null handling and related concepts in",
          NullPrompt,
          "This example shows how to work with null values and avoid common pitfalls. Adjust the practices based on your specific use case and language features."
        );
        break;
      case "ifelse":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Demonstrating if-else conditional statements in",
          IfElsePrompt,
          "This example shows basic if-else usage. You can modify and extend it based on your specific needs."
        );
        break;
      case "while":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Demonstrating while loops in",
          WhilePrompt,
          "This example shows basic while loop usage. You can modify and extend it based on your specific needs."
        );
        break;
      case "enum":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Demonstrating enumerations in",
          EnumPrompt,
          "This example shows basic enum usage. You can modify and extend it based on your specific needs."
        );
        break;
      case "types":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Demonstrating type-related concepts in",
          TypesPrompt,
          "These examples cover various aspects of types in the language. You can modify and extend them based on your specific needs."
        );
        break;
      case "dataTypes":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Demonstrating various data types in",
          DataTypesPrompt,
          "These examples show the common data types and their usage. You can modify and extend them based on your specific needs."
        );
        break;
      case "helloWorld":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Explaining how to create and run a 'Hello, World!' program in",
          HelloWorldPrompt,
          "This guide provides a simple introduction to creating and running a program in the language. You can use this as a starting point for more complex projects."
        );
        break;
      case "entry":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Explaining program entry points in",
          EntryPrompt,
          "This example shows how programs start and are structured in this language. You can modify based on your specific needs."
        );
        break;

      case "structure":
        await handleCommand(
          request,
          stream,
          token,
          this.languageDetector,
          this.languageModelService,
          "Recommending project structure for",
          StructurePrompt,
          "This structure represents common best practices. Adapt it based on your project's specific needs."
        );
        break;

      default:
        // Handle pattern commands
        if (request.command?.startsWith("pattern")) {
          // Extract pattern name by removing 'pattern' prefix and converting first letter to lowercase
          const patternName = request.command.replace("pattern", "");
          const normalizedPatternName =
            patternName.charAt(0).toLowerCase() + patternName.slice(1);

          await handleCommand(
            request,
            stream,
            token,
            this.languageDetector,
            this.languageModelService,
            `Demonstrating the ${normalizedPatternName} pattern in`,
            PatternPrompt,
            "This example shows a typical implementation of the pattern. Adapt it based on your specific needs.",
            { patternName: normalizedPatternName }
          );
        } else {
          await this.handleGeneralRequest(
            request,
            stream,
            token,
            this.languageDetector
          );
        }
    }
  }

  private async handleGeneralRequest(
    request: vscode.ChatRequest,
    stream: vscode.ChatResponseStream,
    token: vscode.CancellationToken,
    languageDetector: LanguageDetector
  ) {
    const { language } = languageDetector.detect();

    // Replace common FoolScript placeholders in the request
    const foolsRequest = request.prompt
      .toLowerCase()
      .replace("juggle", "loop through")
      .replace("dance", "create a function that returns")
      .replace("sing", "properly format and print out my");

    const prompt = [
      vscode.LanguageModelChatMessage.User(
        `You are FoolScript, an AI assistant specializing in ${language}. The user is describing the code they want to write. Rewrite their request using idiomatic ${language}:`
      ),
      vscode.LanguageModelChatMessage.User(foolsRequest),
    ];

    try {
      const response = await this.languageModelService.sendRequest(
        prompt,
        token
      );

      for await (const fragment of response.text) {
        stream.markdown(fragment);
      }

      /* stream.markdown(
        "You can use the following commands:\n" +
          "- `/class`: Generate a class structure in the current language\n" +
          "- `/function`: Generate a function in the current language\n" +
          "- `/enum`: Demonstrate enumeration types\n" +
          "- `/number`: Demonstrate number declarations and operations\n" +
          "- `/string`: Demonstrate string declarations, operations, and methods\n" +
          "- `/boolean`: Demonstrate boolean declarations, operations, and conditional usage\n" +
          "- `/interface`: Generate an interface in the current language\n" +
          "- `/object`: Demonstrate object creation, property access, and methods\n" +
          "- `/array`: Demonstrate array declaration, initialization, and common operations\n" +
          "- `/variable`: Demonstrate variable declaration, initialization, and scoping\n" +
          "- `/null`: Demonstrate null handling and related concepts\n" +
          "- `/ifelse`: Demonstrate if-else conditional statements\n" +
          "- `/while`: Demonstrate while loops\n" +
          "- `/language`: Provide information about the current programming language\n" +
          "- `/types`: Demonstrate type-related concepts, including definitions and casting"
      ); */
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
