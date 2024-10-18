import * as vscode from "vscode";

interface LanguageDefinition {
  id: string;
  extensions: string[];
  aliases: string[];
}

export class LanguageDetector {
  private static fallbackDefinitions: LanguageDefinition[] = [
    { id: "abap", extensions: [".abap"], aliases: ["ABAP", "abap"] },
    { id: "bat", extensions: [".bat", ".cmd"], aliases: ["Batch", "bat"] },
    { id: "bibtex", extensions: [".bib"], aliases: ["BibTeX", "bibtex"] },
    {
      id: "clojure",
      extensions: [".clj", ".cljs", ".cljc"],
      aliases: ["Clojure", "clojure"],
    },
    {
      id: "coffeescript",
      extensions: [".coffee"],
      aliases: ["CoffeeScript", "coffeescript"],
    },
    { id: "c", extensions: [".c", ".h"], aliases: ["C", "c"] },
    {
      id: "cpp",
      extensions: [".cpp", ".cc", ".cxx", ".hpp", ".hh", ".hxx"],
      aliases: ["C++", "cpp"],
    },
    { id: "csharp", extensions: [".cs"], aliases: ["C#", "csharp"] },
    { id: "css", extensions: [".css"], aliases: ["CSS", "css"] },
    {
      id: "cuda-cpp",
      extensions: [".cu", ".cuh"],
      aliases: ["CUDA C++", "cuda-cpp"],
    },
    { id: "dart", extensions: [".dart"], aliases: ["Dart", "dart"] },
    {
      id: "dockerfile",
      extensions: [".dockerfile"],
      aliases: ["Dockerfile", "dockerfile"],
    },
    {
      id: "elixir",
      extensions: [".ex", ".exs"],
      aliases: ["Elixir", "elixir"],
    },
    {
      id: "erlang",
      extensions: [".erl", ".hrl"],
      aliases: ["Erlang", "erlang"],
    },
    {
      id: "fortran",
      extensions: [
        ".f",
        ".f77",
        ".f90",
        ".f95",
        ".f03",
        ".f08",
        ".for",
        ".ftn",
      ],
      aliases: ["Fortran", "fortran"],
    },
    {
      id: "fsharp",
      extensions: [".fs", ".fsi", ".fsx"],
      aliases: ["F#", "fsharp"],
    },
    { id: "go", extensions: [".go"], aliases: ["Go", "go"] },
    {
      id: "groovy",
      extensions: [".groovy", ".gvy", ".gy", ".gsh"],
      aliases: ["Groovy", "groovy"],
    },
    { id: "haskell", extensions: [".hs"], aliases: ["Haskell", "haskell"] },
    { id: "html", extensions: [".html", ".htm"], aliases: ["HTML", "html"] },
    { id: "java", extensions: [".java"], aliases: ["Java", "java"] },
    {
      id: "javascript",
      extensions: [".js", ".mjs"],
      aliases: ["JavaScript", "javascript", "js"],
    },
    { id: "json", extensions: [".json"], aliases: ["JSON", "json"] },
    { id: "julia", extensions: [".jl"], aliases: ["Julia", "julia"] },
    {
      id: "kotlin",
      extensions: [".kt", ".kts"],
      aliases: ["Kotlin", "kotlin"],
    },
    {
      id: "latex",
      extensions: [".tex", ".ltx", ".latex"],
      aliases: ["LaTeX", "latex"],
    },
    { id: "less", extensions: [".less"], aliases: ["LESS", "less"] },
    { id: "lua", extensions: [".lua"], aliases: ["Lua", "lua"] },
    { id: "markdown", extensions: [".md"], aliases: ["Markdown", "markdown"] },
    { id: "matlab", extensions: [".m"], aliases: ["MATLAB", "matlab"] },
    {
      id: "objective-c",
      extensions: [".m", ".h"],
      aliases: ["Objective-C", "objective-c"],
    },
    { id: "perl", extensions: [".pl", ".pm"], aliases: ["Perl", "perl"] },
    {
      id: "php",
      extensions: [
        ".php",
        ".phtml",
        ".php3",
        ".php4",
        ".php5",
        ".php7",
        ".php8",
      ],
      aliases: ["PHP", "php"],
    },
    {
      id: "powershell",
      extensions: [".ps1", ".psm1", ".psd1"],
      aliases: ["PowerShell", "powershell"],
    },
    {
      id: "python",
      extensions: [".py", ".rpy", ".pyw", ".cpy", ".gyp", ".gypi"],
      aliases: ["Python", "python"],
    },
    {
      id: "r",
      extensions: [".r", ".rhistory", ".rprofile"],
      aliases: ["R", "r"],
    },
    { id: "ruby", extensions: [".rb"], aliases: ["Ruby", "ruby"] },
    { id: "rust", extensions: [".rs"], aliases: ["Rust", "rust"] },
    {
      id: "sass",
      extensions: [".sass", ".scss"],
      aliases: ["Sass", "sass", "SCSS", "scss"],
    },
    { id: "scala", extensions: [".scala", ".sc"], aliases: ["Scala", "scala"] },
    {
      id: "shellscript",
      extensions: [
        ".sh",
        ".bash",
        ".bats",
        ".cgi",
        ".command",
        ".fcgi",
        ".ksh",
        ".sh.in",
        ".tmux",
        ".tool",
        ".zsh",
      ],
      aliases: ["Shell", "shellscript"],
    },
    { id: "sql", extensions: [".sql"], aliases: ["SQL", "sql"] },
    { id: "swift", extensions: [".swift"], aliases: ["Swift", "swift"] },
    {
      id: "typescript",
      extensions: [".ts"],
      aliases: ["TypeScript", "typescript", "ts"],
    },
    { id: "vb", extensions: [".vb"], aliases: ["VB.NET", "vb"] },
    { id: "vue", extensions: [".vue"], aliases: ["Vue", "vue"] },
    {
      id: "xml",
      extensions: [".xml", ".xsl", ".xsd", ".xhtml"],
      aliases: ["XML", "xml"],
    },
    { id: "yaml", extensions: [".yaml", ".yml"], aliases: ["YAML", "yaml"] },
  ];

  detect(): { language: string } {
    const activeEditor = vscode.window.activeTextEditor;
    let language = "Not detected";

    if (activeEditor) {
      language = activeEditor.document.languageId;

      // If the language is not detected or is 'plaintext', try to detect from file extension
      if (language === "plaintext" || language === "Not detected") {
        const fileName = activeEditor.document.fileName;
        language = this.detectFromExtension(fileName) || language;
      }
    }

    return { language };
  }

  private detectFromExtension(fileName: string): string | null {
    const ext = fileName.split(".").pop()?.toLowerCase();
    if (!ext) return null;

    for (const lang of LanguageDetector.fallbackDefinitions) {
      if (lang.extensions.includes(`.${ext}`)) {
        return lang.id;
      }
    }

    return null;
  }

  static getLanguageInfo(languageId: string): LanguageDefinition | undefined {
    return this.fallbackDefinitions.find((lang) => lang.id === languageId);
  }
}
