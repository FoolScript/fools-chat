import {
    BasePromptElementProps,
    PromptElement,
    PromptSizing,
    AssistantMessage,
    UserMessage,
  } from "@vscode/prompt-tsx";
  
  export interface StringPromptProps extends BasePromptElementProps {
    language: string;
    userQuery: string;
  }
  
  export class StringPrompt extends PromptElement<StringPromptProps> {
    render(_state: void, _sizing: PromptSizing) {
      return (
        <>
          <AssistantMessage>You are an expert in programming and string manipulation.</AssistantMessage>
          <UserMessage>
            Generate examples of string declarations, operations, and methods in {this.props.language}.
            <br />
            Include the following in your response:
            <br />
            1. Declaration and initialization of strings.
            <br />
            2. String concatenation and interpolation.
            <br />
            3. Common string methods (e.g., length, substring, indexOf, toLowerCase, toUpperCase).
            <br />
            4. String comparison and equality checks.
            <br />
            5. Regular expression usage with strings (if applicable to the language).
            <br />
            6. Any language-specific considerations or best practices for working with strings.
            <br />
            7. Brief explanations of key concepts related to strings in this language.
            <br />
            User's specific request (if any): {this.props.userQuery}
          </UserMessage>
        </>
      );
    }
  }