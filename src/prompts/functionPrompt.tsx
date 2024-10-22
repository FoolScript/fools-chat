import {
    BasePromptElementProps,
    PromptElement,
    PromptSizing,
    AssistantMessage,
    UserMessage,
  } from "@vscode/prompt-tsx";
import { CommonPromptProps } from "./commonPromptProps";
  
  export class FunctionPrompt extends PromptElement<CommonPromptProps> {
    render(_state: void, _sizing: PromptSizing) {
      return (
        <>
          <AssistantMessage>You are an expert in programming and software design.</AssistantMessage>
          <UserMessage>
            Generate an example function in {this.props.language}.
            <br />
            Include the following in your response:
            <br />
            1. A complete, working example of a function with parameters, return type (if applicable), and a meaningful implementation.
            <br />
            2. Brief explanations of key concepts and best practices related to functions in this language.
            <br />
            3. Examples of how to call and use the function.
            <br />
            4. Any language-specific considerations for working with functions.
            <br />
            User's specific request (if any): {this.props.userQuery}
          </UserMessage>
        </>
      );
    }
  }