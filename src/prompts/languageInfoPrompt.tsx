import {
  BasePromptElementProps,
  PromptElement,
  PromptSizing,
  AssistantMessage,
  UserMessage,
} from "@vscode/prompt-tsx";

export interface LanguageInfoPromptProps extends BasePromptElementProps {
  language: string;
  userQuery: string;
}

export class LanguageInfoPrompt extends PromptElement<LanguageInfoPromptProps> {
  render(_state: void, _sizing: PromptSizing) {
    return (
      <>
        <AssistantMessage>
          You are an expert in programming languages and their characteristics.
        </AssistantMessage>
        <UserMessage>
          Provide information about the {this.props.language} programming
          language.
          <br />
          Include the following in your response:
          <br />
          1. Whether it's dynamically or statically typed.
          <br />
          2. Common file extension(s) used for {this.props.language} files.
          <br />
          3. The official website or main package manager website for{" "}
          {this.props.language}.
          <br />
          4. A brief history of the language, including its creator(s) and year
          of creation.
          <br />
          5. Key features and paradigms supported by the language.
          <br />
          6. Common use cases and types of applications built with{" "}
          {this.props.language}.
          <br />
          7. Popular frameworks or libraries associated with the language.
          <br />
          User's specific request (if any): {this.props.userQuery}
          <br />
          Example (Each item should be on a new line.):
          <br />
          - **Types**: [Type system]
          <br />
          - **Extension(s)**: [File extension(s)] <br />
          - **Official Website**: [URL of the official website] <br />
          - **Created**: [Creation information] <br />
          - **Features and Paradigms**: [Key features and programming paradigms]{" "}
          <br />
          - **Use Cases**: [Common applications or domains] <br />
          - **Popular Frameworks**: [List of popular frameworks] <br />
        </UserMessage>
      </>
    );
  }
}
