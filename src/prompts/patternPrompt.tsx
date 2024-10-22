import {
  AssistantMessage,
  PromptElement,
  PromptSizing,
  UserMessage,
} from "@vscode/prompt-tsx";
import { CommonPromptProps } from "./commonPromptProps";

export interface PatternPromptProps extends CommonPromptProps {
  patternName: string;
}

export class PatternPrompt extends PromptElement<PatternPromptProps> {
  render(_state: void, _sizing: PromptSizing) {
    return (
      <>
        <AssistantMessage>
          You are an expert in software design patterns and architecture.
        </AssistantMessage>
        <UserMessage>
          Show how to implement the {this.props.patternName} pattern in{" "}
          {this.props.language}. Include: 1. Complete implementation example 2.
          Common use cases 3. Benefits and tradeoffs 4. Best practices 5. Common
          pitfalls to avoid 6. Integration with other patterns 7.
          Language-specific considerations User's specific request (if any):{" "}
          {this.props.userQuery}
        </UserMessage>
      </>
    );
  }
}
