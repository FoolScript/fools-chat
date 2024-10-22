import {
  PromptElement,
  PromptSizing,
  AssistantMessage,
  UserMessage,
} from "@vscode/prompt-tsx";
import { CommonPromptProps } from "./commonPromptProps";

export class WhilePrompt extends PromptElement<CommonPromptProps> {
  render(_state: void, _sizing: PromptSizing) {
    return (
      <>
        <AssistantMessage>
          You are an expert in programming and control structures.
        </AssistantMessage>
        <UserMessage>
          Generate examples of while loops in {this.props.language}.
          <br />
          Include the following in your response:
          <br />
          1. A simple while loop that counts from 1 to 10.
          <br />
          2. A while loop with a complex condition.
          <br />
          3. A do-while loop example (if supported in the language).
          <br />
          4. An example of using break and continue statements within a while
          loop.
          <br />
          5. An infinite loop with a condition to break out of it.
          <br />
          6. Any language-specific considerations or best practices for using
          while loops.
          <br />
          7. Brief explanations of key concepts related to while loops in this
          language.
          <br />
          User's specific request (if any): {this.props.userQuery}
        </UserMessage>
      </>
    );
  }
}
