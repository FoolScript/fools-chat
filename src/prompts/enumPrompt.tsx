import {
    BasePromptElementProps,
    PromptElement,
    PromptSizing,
    AssistantMessage,
    UserMessage,
  } from "@vscode/prompt-tsx";
import { CommonPromptProps } from "./commonPromptProps";
 
  export class EnumPrompt extends PromptElement<CommonPromptProps> {
    render(_state: void, _sizing: PromptSizing) {
      return (
        <>
          <AssistantMessage>You are an expert in programming and data structures.</AssistantMessage>
          <UserMessage>
            Generate examples of enumerations in {this.props.language}.
            <br />
            Include the following in your response:
            <br />
            1. A simple enum declaration with a few members.
            <br />
            2. How to access enum members and their values.
            <br />
            3. An example of using enums in a switch statement (if applicable in the language).
            <br />
            4. An enum with custom values (if supported in the language).
            <br />
            5. Any language-specific features of enums (e.g., methods, properties).
            <br />
            6. Best practices for using enums in this language.
            <br />
            7. Brief explanations of key concepts related to enums in this language.
            <br />
            8. If the language doesn't support enums natively, show the closest equivalent or workaround.
            <br />
            User's specific request (if any): {this.props.userQuery}
          </UserMessage>
        </>
      );
    }
  }