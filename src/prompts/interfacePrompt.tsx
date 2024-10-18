import {
    BasePromptElementProps,
    PromptElement,
    PromptSizing,
    AssistantMessage,
    UserMessage,
  } from "@vscode/prompt-tsx";
  
  export interface InterfacePromptProps extends BasePromptElementProps {
    language: string;
    userQuery: string;
  }
  
  export class InterfacePrompt extends PromptElement<InterfacePromptProps> {
    render(_state: void, _sizing: PromptSizing) {
      return (
        <>
          <AssistantMessage>You are an expert in software design and object-oriented programming.</AssistantMessage>
          <UserMessage>
            Generate an example interface in {this.props.language}.
            <br />
            Include the following in your response:
            <br />
            1. A complete, working example of an interface with method signatures and property declarations.
            <br />
            2. Brief explanations of key concepts and best practices related to interfaces in this language.
            <br />
            3. Examples of how to implement and use the interface.
            <br />
            4. Any language-specific considerations for working with interfaces.
            <br />
            User's specific request (if any): {this.props.userQuery}
          </UserMessage>
        </>
      );
    }
  }