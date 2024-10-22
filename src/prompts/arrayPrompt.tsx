import {
    BasePromptElementProps,
    PromptElement,
    PromptSizing,
    AssistantMessage,
    UserMessage,
  } from "@vscode/prompt-tsx"; 
import { CommonPromptProps } from "./commonPromptProps";

  export class ArrayPrompt extends PromptElement<CommonPromptProps> {
    render(_state: void, _sizing: PromptSizing) {
      return (
        <>
          <AssistantMessage>You are an expert in programming and data structures.</AssistantMessage>
          <UserMessage>
            Generate an example demonstrating array declaration, initialization, and common operations in {this.props.language}.
            <br />
            Include the following in your response:
            <br />
            1. A complete, working example of array declaration and initialization.
            <br />
            2. Demonstration of how to access and modify array elements.
            <br />
            3. Examples of common array operations (e.g., adding/removing elements, searching, sorting).
            <br />
            4. Brief explanations of key concepts related to arrays in this language.
            <br />
            5. Any language-specific considerations for working with arrays (e.g., fixed-size vs. dynamic arrays).
            <br />
            6. If applicable, show how to use built-in array methods or functions.
            <br />
            User's specific request (if any): {this.props.userQuery}
          </UserMessage>
        </>
      );
    }
  }