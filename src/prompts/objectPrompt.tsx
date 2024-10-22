import {
    BasePromptElementProps,
    PromptElement,
    PromptSizing,
    AssistantMessage,
    UserMessage,
  } from "@vscode/prompt-tsx";
import { CommonPromptProps } from "./commonPromptProps";
 
  export class ObjectPrompt extends PromptElement<CommonPromptProps> {
    render(_state: void, _sizing: PromptSizing) {
      return (
        <>
          <AssistantMessage>You are an expert in object-oriented programming and software design.</AssistantMessage>
          <UserMessage>
            Generate an example demonstrating object creation, property access, and methods in {this.props.language}.
            <br />
            Include the following in your response:
            <br />
            1. A complete, working example of object creation with properties and methods.
            <br />
            2. Demonstration of how to access and modify object properties.
            <br />
            3. Examples of calling object methods.
            <br />
            4. Brief explanations of key concepts related to objects in this language.
            <br />
            5. Any language-specific considerations for working with objects.
            <br />
            User's specific request (if any): {this.props.userQuery}
          </UserMessage>
        </>
      );
    }
  }