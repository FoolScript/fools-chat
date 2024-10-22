# Crashify VS Code Extension

Crashify is a powerful VS Code chat extension designed to generate crash course style documentation for any programming language. It integrates seamlessly with the GitHub Copilot chat window, providing quick and easy access to language-specific information and code examples.

## Features

- **Multi-Language Support**: Crashify automatically detects the [language](https://code.visualstudio.com/docs/languages/identifiers) of your active file and provides language-specific assistance.
- **Crash Course Documentation**: Quickly generate concise, informative documentation for various programming concepts.
- **Interactive Chat Interface**: Communicate with Crashify using natural language within the Copilot chat window.
- **Code Examples**: Get relevant code snippets and examples for better understanding.

### Available Commands

Crashify offers a variety of commands to generate documentation and code examples:

#### Basic Concepts
- `/class`: Get a crash course on classes in the current language
- `/function`: Learn about functions and their usage
- `/enum`: Understand enumeration types
- `/variable`: Explore variable declarations and scoping

#### Data Types & Operations
- `/number`: Explore number types and operations
- `/string`: Discover string manipulations
- `/boolean`: Learn about boolean operations
- `/array`: Learn about array operations
- `/object`: Get a crash course on objects and their usage
- `/null`: Understand null handling

#### Control Flow
- `/ifelse`: Learn about conditional statements
- `/while`: Get examples of loop structures

#### Project Structure
- `/entry`: Understand program entry points and initialization
- `/structure`: Learn about recommended project organization and file structure

#### Design Patterns
- `/patternMvc`: Learn about the Model-View-Controller pattern
- `/patternRepository`: Understand the Repository pattern
- `/patternFactory`: Explore the Factory pattern
- `/patternSingleton`: Learn about the Singleton pattern
- `/patternObserver`: Understand the Observer pattern
- `/patternStrategy`: Explore the Strategy pattern

#### Language Information
- `/types`: Explore type-related concepts
- `/language`: Get comprehensive information about the current programming language
- `/interface`: Understand interface definitions

## Installation

### Install from VS Code Marketplace

1. Open VS Code
2. Go to the Extensions view (Ctrl+Shift+X)
3. Search for "Crashify"
4. Click Install

### Manual Installation

If you prefer to install the extension manually, follow these steps:

1. Clone the repository or download the source code
2. Open a terminal and navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `npm run package` to create a .vsix file
5. In VS Code, go to the Extensions view (Ctrl+Shift+X)
6. Click on the "..." menu at the top of the Extensions view
7. Choose "Install from VSIX..."
8. Navigate to and select the .vsix file you created
9. Click "Install"

## Usage

1. Open a file in VS Code
2. Open the GitHub Copilot chat window
3. Type `@crashify` followed by your query or command

Examples:
- `@crashify /language` to get information about the current language
- `@crashify /patternStrategy` to learn about the Strategy pattern
- `@crashify /structure` to understand project organization
- `@crashify Explain how to declare variables in this language`

## Requirements

- VS Code version 1.85.0 or higher
- GitHub Copilot extension installed and activated

## Extension Settings

Currently, Crashify doesn't require any specific settings. It works out of the box!

## Known Issues

Please report any issues you encounter on our [GitHub repository](https://github.com/jtmuller5/crashify/issues).

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

This extension is released under the [MIT License](LICENSE).

---

**Enjoy learning with Crashify!** 🚀

For more information, visit our [GitHub repository](https://github.com/jtmuller5/crashify).

