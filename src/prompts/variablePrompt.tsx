import {
    BasePromptElementProps,
    PromptElement,
    PromptSizing,
    AssistantMessage,
    UserMessage,
  } from "@vscode/prompt-tsx";
import { CommonPromptProps } from "./commonPromptProps";
  
  export class VariablePrompt extends PromptElement<CommonPromptProps> {
    render(_state: void, _sizing: PromptSizing) {
      return (
        <>
          <AssistantMessage>You are an expert in programming and variable usage.</AssistantMessage>
          <UserMessage>
            Generate an example demonstrating variable declaration, initialization, and scoping in {this.props.language}.
            <br />
            Include the following in your response:
            <br />
            1. Examples of declaring and initializing variables of different data types.
            <br />
            2. Demonstration of variable scoping (global, local, block-scoped if applicable).
            <br />
            3. Examples of variable reassignment and mutation (if applicable).
            <br />
            4. Explanation of constants or immutable variables (if supported in the language).
            <br />
            5. Brief explanations of key concepts related to variables in this language.
            <br />
            6. Any language-specific considerations for working with variables (e.g., type inference, hoisting).
            <br />
            7. Best practices for naming variables and using them effectively.
            <br />
            User's specific request (if any): {this.props.userQuery}
          </UserMessage>
        </>
      );
    }
  }