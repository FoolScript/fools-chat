import {
    BasePromptElementProps,
    PromptElement,
    PromptSizing,
    AssistantMessage,
    UserMessage,
  } from "@vscode/prompt-tsx";
  
  export interface NullPromptProps extends BasePromptElementProps {
    language: string;
    userQuery: string;
  }
  
  export class NullPrompt extends PromptElement<NullPromptProps> {
    render(_state: void, _sizing: PromptSizing) {
      return (
        <>
          <AssistantMessage>
            You are an expert in programming and null handling concepts.
          </AssistantMessage>
          <UserMessage>
            Generate an example demonstrating null handling and related concepts
            in {this.props.language}.
            <br />
            Include the following in your response:
            <br />
            <br />
            1. How null (or its equivalent) is represented in the language
            <br />
            2. Checking for null values
            <br />
            3. Null safety features (if available in the language)
            <br />
            4. Best practices for avoiding null-related errors
            <br />
            5. Common pitfalls and how to avoid them
            <br />
            6. Any language-specific considerations for working with null
            <br />
            7. Alternatives to null, if applicable (e.g., Option/Maybe types)
            <br />
            <br />
            Format your response with clear headings and code examples where
            appropriate.
            <br />
            <br />
            User's specific request (if any): {this.props.userQuery}
          </UserMessage>
        </>
      );
    }
  }