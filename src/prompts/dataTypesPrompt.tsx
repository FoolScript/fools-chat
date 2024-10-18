import {
    BasePromptElementProps,
    PromptElement,
    PromptSizing,
    AssistantMessage,
    UserMessage,
  } from "@vscode/prompt-tsx";
  
  export interface DataTypesPromptProps extends BasePromptElementProps {
    language: string;
    userQuery: string;
  }
  
  export class DataTypesPrompt extends PromptElement<DataTypesPromptProps> {
    render(_state: void, _sizing: PromptSizing) {
      return (
        <>
          <AssistantMessage>You are an expert in programming languages and data structures.</AssistantMessage>
          <UserMessage>
            Generate examples of various data types available in {this.props.language}.
            <br />
            Include the following in your response:
            <br />
            1. Primitive data types (e.g., integers, floating-point numbers, characters, booleans).
            <br />
            2. Composite data types (e.g., arrays, structs, classes).
            <br />
            3. Special data types (e.g., null/nil, optional types, any/dynamic types).
            <br />
            4. Examples of declaring and initializing variables with these data types.
            <br />
            5. Brief explanations of the use cases for each data type.
            <br />
            6. Any language-specific considerations or best practices for working with these data types.
            <br />
            7. Common operations or methods associated with each data type.
            <br />
            User's specific request (if any): {this.props.userQuery}
          </UserMessage>
        </>
      );
    }
  }