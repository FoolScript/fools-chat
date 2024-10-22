import {
  AssistantMessage,
  PromptElement,
  PromptSizing,
  UserMessage,
} from "@vscode/prompt-tsx";
import { CommonPromptProps } from "./commonPromptProps";

export class StructurePrompt extends PromptElement<CommonPromptProps> {
  render(_state: void, _sizing: PromptSizing) {
    return (
      <>
        <AssistantMessage>
          You are an expert in project architecture and organization.
        </AssistantMessage>
        <UserMessage>
          Provide recommended project structure and file organization for{" "}
          {this.props.language}. Include: 1. Directory layout 2. File naming
          conventions 3. Module organization 4. Configuration files 5. Test
          organization 6. Documentation structure 7. Common conventions and best
          practices User's specific request (if any): {this.props.userQuery}
        </UserMessage>
      </>
    );
  }
}
