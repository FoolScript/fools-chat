import {
  AssistantMessage,
  PromptElement,
  PromptSizing,
  UserMessage,
} from "@vscode/prompt-tsx";
import { CommonPromptProps } from "./commonPromptProps";

export class EntryPrompt extends PromptElement<CommonPromptProps> {
  render(_state: void, _sizing: PromptSizing) {
    return (
      <>
        <AssistantMessage>
          You are an expert in programming languages and application
          architecture.
        </AssistantMessage>
        <UserMessage>
          Explain how programs start and entry points work in{" "}
          {this.props.language}. Include: 1. Main entry point file/function 2.
          Required boilerplate code 3. Command line arguments handling 4.
          Environment setup 5. Common initialization patterns 6. Examples of
          different types of applications User's specific request (if any):{" "}
          {this.props.userQuery}
        </UserMessage>
      </>
    );
  }
}
