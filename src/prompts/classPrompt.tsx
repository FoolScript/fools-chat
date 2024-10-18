import {
    BasePromptElementProps,
    PromptElement,
    PromptSizing,
    AssistantMessage,
    UserMessage,
  } from "@vscode/prompt-tsx";
  
  export interface ClassPromptProps extends BasePromptElementProps {
    language: string;
    userQuery: string;
  }
  
  export class ClassPrompt extends PromptElement<ClassPromptProps> {
    render(_state: void, _sizing: PromptSizing) {
      return (
        <>
          <AssistantMessage>You are an expert in object-oriented programming and software design.</AssistantMessage>
          <UserMessage>
            Generate an example class in {this.props.language}.
            <br />
            Include the following in your response:
            <br />
            1. A complete, working example of a class with common features like constructor, properties, methods, and if applicable, inheritance or interfaces.
            <br />
            2. Brief explanations of key concepts and best practices related to classes in this language.
            <br />
            3. Examples of how to instantiate and use the class.
            <br />
            4. Any language-specific considerations for working with classes.
            <br />
            User's specific request (if any): {this.props.userQuery}
          </UserMessage>
        </>
      );
    }
  }