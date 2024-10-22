import {
    BasePromptElementProps,
    PromptElement,
    PromptSizing,
    AssistantMessage,
    UserMessage,
  } from "@vscode/prompt-tsx";
import { CommonPromptProps } from "./commonPromptProps";
  
  export class HelloWorldPrompt extends PromptElement<CommonPromptProps> {
    render(_state: void, _sizing: PromptSizing) {
      return (
        <>
          <AssistantMessage>You are an expert in programming and software development.</AssistantMessage>
          <UserMessage>
            Explain how to create and run a simple "Hello, World!" program in {this.props.language}.
            <br />
            Include the following in your response:
            <br />
            1. A complete, working example of a "Hello, World!" program.
            <br />
            2. Step-by-step instructions on how to create the program file.
            <br />
            3. Explanation of the code structure and any necessary components (e.g., main function, imports).
            <br />
            4. Instructions on how to compile the program (if applicable).
            <br />
            5. Instructions on how to run the program.
            <br />
            6. Any language-specific considerations or best practices for simple programs.
            <br />
            7. Common IDEs or text editors used for this language.
            <br />
            8. Brief explanation of how to set up the development environment (if necessary).
            <br />
            User's specific request (if any): {this.props.userQuery}
          </UserMessage>
        </>
      );
    }
  }