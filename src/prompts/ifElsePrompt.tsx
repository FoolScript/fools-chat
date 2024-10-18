import {
    BasePromptElementProps,
    PromptElement,
    PromptSizing,
    AssistantMessage,
    UserMessage,
  } from "@vscode/prompt-tsx";
  
  export interface IfElsePromptProps extends BasePromptElementProps {
    language: string;
    userQuery: string;
  }
  
  export class IfElsePrompt extends PromptElement<IfElsePromptProps> {
    render(_state: void, _sizing: PromptSizing) {
      return (
        <>
          <AssistantMessage>You are an expert in programming and control structures.</AssistantMessage>
          <UserMessage>
            Generate examples of if-else conditional statements in {this.props.language}.
            <br />
            Include the following in your response:
            <br />
            1. A simple if-else statement.
            <br />
            2. An if-else if-else statement with multiple conditions.
            <br />
            3. Nested if-else statements.
            <br />
            4. Use of logical operators (AND, OR) in conditions.
            <br />
            5. Any language-specific considerations or best practices for using if-else.
            <br />
            6. Brief explanations of key concepts related to if-else in this language.
            <br />
            User's specific request (if any): {this.props.userQuery}
          </UserMessage>
        </>
      );
    }
  }