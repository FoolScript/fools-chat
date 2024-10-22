import {
    BasePromptElementProps,
    PromptElement,
    PromptSizing,
    AssistantMessage,
    UserMessage,
  } from "@vscode/prompt-tsx";
import { CommonPromptProps } from "./commonPromptProps";
  
  export class NumberPrompt extends PromptElement<CommonPromptProps> {
    render(_state: void, _sizing: PromptSizing) {
      return (
        <>
          <AssistantMessage>You are an expert in programming and numerical operations.</AssistantMessage>
          <UserMessage>
            Generate examples of number declarations and operations in {this.props.language}.
            <br />
            Include the following in your response:
            <br />
            1. Declaration and initialization of integer and floating-point numbers.
            <br />
            2. Basic arithmetic operations (addition, subtraction, multiplication, division).
            <br />
            3. More advanced operations (modulus, exponentiation) if applicable to the language.
            <br />
            4. Type conversion between different number types (if applicable).
            <br />
            5. Any language-specific considerations or best practices for working with numbers.
            <br />
            6. Brief explanations of key concepts related to numbers in this language.
            <br />
            User's specific request (if any): {this.props.userQuery}
          </UserMessage>
        </>
      );
    }
  }