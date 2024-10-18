import {
    BasePromptElementProps,
    PromptElement,
    PromptSizing,
    AssistantMessage,
    UserMessage,
  } from "@vscode/prompt-tsx";
  
  export interface TypesPromptProps extends BasePromptElementProps {
    language: string;
    userQuery: string;
  }
  
  export class TypesPrompt extends PromptElement<TypesPromptProps> {
    render(_state: void, _sizing: PromptSizing) {
      return (
        <>
          <AssistantMessage>You are an expert in programming languages and type systems.</AssistantMessage>
          <UserMessage>
            Generate examples of type-related concepts in {this.props.language}.
            <br />
            Include the following in your response:
            <br />
            1. Basic type declarations for common data types (int, float, string, boolean, etc.).
            <br />
            2. Complex type definitions (e.g., arrays, lists, dictionaries, tuples).
            <br />
            3. User-defined types (structs, classes, or equivalent).
            <br />
            4. Type inference (if supported by the language).
            <br />
            5. Type casting and conversion.
            <br />
            6. Generics or templates (if supported by the language).
            <br />
            7. Function/method parameter and return type declarations.
            <br />
            8. Any language-specific type features (e.g., union types, intersection types).
            <br />
            9. Best practices for working with types in this language.
            <br />
            10. Common pitfalls and how to avoid them.
            <br />
            11. Brief explanations of key concepts related to the type system in this language.
            <br />
            If the language is dynamically typed, explain how types are handled and any type-checking mechanisms available.
            <br />
            User's specific request (if any): {this.props.userQuery}
          </UserMessage>
        </>
      );
    }
  }