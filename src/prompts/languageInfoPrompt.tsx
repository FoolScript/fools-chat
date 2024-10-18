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
          <AssistantMessage>You are an expert in programming languages and their characteristics.</AssistantMessage>
          <UserMessage>
            Provide information about the {this.props.language} programming language.
            <br />
            Include the following in your response:
            <br />
            1. Whether it's dynamically or statically typed.
            <br />
            2. Common file extension(s) used for {this.props.language} files.
            <br />
            3. The official website or main package manager website for {this.props.language}.
            <br />
            4. A brief history of the language, including its creator(s) and year of creation.
            <br />
            5. Key features and paradigms supported by the language.
            <br />
            6. Common use cases and types of applications built with {this.props.language}.
            <br />
            7. Popular frameworks or libraries associated with the language.
            <br />
            User's specific request (if any): {this.props.userQuery}
            <br />
            Example (Each item should be on a new line.): 
            <br />
            1. Statically typed\n
            <br />
            2. .java\n
            <br />
            3. https://www.java.com/\n
            <br />
            4. Created by James Gosling in 1995\n
            <br />
            5. Object-oriented, imperative, and structured\n
            <br />
            6. Web applications, mobile apps, enterprise software\n
            <br />
            7. Spring, Hibernate, JUnit\n
          </UserMessage>
        </>
      );
    }
  }