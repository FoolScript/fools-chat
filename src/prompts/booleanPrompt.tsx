import {
    BasePromptElementProps,
    PromptElement,
    PromptSizing,
    AssistantMessage,
    UserMessage,
  } from "@vscode/prompt-tsx";
  
  export interface BooleanPromptProps extends BasePromptElementProps {
    language: string;
    userQuery: string;
  }
  
  export class BooleanPrompt extends PromptElement<BooleanPromptProps> {
    render(_state: void, _sizing: PromptSizing) {
      return (
        <>
          <AssistantMessage>You are an expert in programming and boolean logic.</AssistantMessage>
          <UserMessage>
            Generate examples of boolean declarations, operations, and conditional usage in {this.props.language}.
            <br />
            Include the following in your response:
            <br />
            1. Declaration and initialization of boolean variables.
            <br />
            2. Basic boolean operations (AND, OR, NOT).
            <br />
            3. Comparison operations resulting in boolean values.
            <br />
            4. Conditional statements using boolean expressions (if, else if, else).
            <br />
            5. Short-circuit evaluation (if applicable to the language).
            <br />
            6. Any language-specific considerations or best practices for working with booleans.
            <br />
            7. Brief explanations of key concepts related to booleans in this language.
            <br />
            User's specific request (if any): {this.props.userQuery}
          </UserMessage>
        </>
      );
    }
  }