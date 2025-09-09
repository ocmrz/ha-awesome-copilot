# 🤖 Awesome GitHub Copilot Customizations

A curated collection of prompts, instructions, and chat modes to supercharge your GitHub Copilot experience across different domains, languages, and use cases.

## 🚀 What is Awesome GitHub Copilot?

This repository provides a comprehensive toolkit for enhancing GitHub Copilot with specialized:

- **[![Awesome Prompts](https://img.shields.io/badge/Awesome-Prompts-blue?logo=githubcopilot)](README.prompts.md)** - Focused, task-specific prompts for generating code, documentation, and solving specific problems
- **[![Awesome Instructions](https://img.shields.io/badge/Awesome-Instructions-blue?logo=githubcopilot)](README.instructions.md)** - Comprehensive coding standards and best practices that apply to specific file patterns or entire projects
- **[![Awesome Chat Modes](https://img.shields.io/badge/Awesome-Chat_Modes-blue?logo=githubcopilot)](README.chatmodes.md)** - Specialized AI personas and conversation modes for different roles and contexts

## Joyride Extension

The [Joyride Extension](https://marketplace.visualstudio.com/items?itemName=BetterThanTomorrow.joyride) is a powerful extension that lets you run automations scripts in VS Code. We use it to browse, preview, and install Awesome Copilot prompts, instructions, and chat modes.

### Install and use

1. Install [Joyride](https://marketplace.visualstudio.com/items?itemName=BetterThanTomorrow.joyride).
2. Create the user script:
   - Open `scripts/awesome-copilot.cljs` in this repo and copy all contents.
   - Open the Command Palette and run "Joyride: Create User Script...".
   - Name it `ha-awesome-copilot`, paste the contents, and save.
3. Set your GitHub PAT in the script by updating `GITHUB-PAT`.
4. Run the script:
   - Command Palette → "Joyride: Run User Script..." → select `ha-awesome-copilot`.
   - Pick a category, choose an item, and select an action (View, Install Globally, Install in Workspace).

<!--
## MCP Server

To make it easy to add these customizations to your editor, we have created a [MCP Server](https://developer.microsoft.com/blog/announcing-awesome-copilot-mcp-server) that provides a prompt for searching and installing prompts, instructions, and chat modes directly from this repository.

[![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/mcp/vscode) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/mcp/vscode-insiders)

<details>
<summary>Show MCP Server JSON configuration</summary>

```json
{
  "servers": {
    "awesome-copilot": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/microsoft/mcp-dotnet-samples/awesome-copilot:latest"
      ]
    }
  }
}
``` -->

</details>

## 🔧 How to Use

### 🎯 Prompts
Use the `/` command in GitHub Copilot Chat to access prompts:
```
/awesome-copilot create-readme
```

### 📋 Instructions
Instructions automatically apply to files based on their patterns and provide contextual guidance for coding standards, frameworks, and best practices.

### 💭 Chat Modes
Activate chat modes to get specialized assistance from AI personas tailored for specific roles like architects, DBAs, or security experts.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on how to:
- Add new prompts, instructions, or chat modes
- Improve existing content
- Report issues or suggest enhancements

### Quick Contribution Guide
1. Follow our file naming conventions and frontmatter requirements
2. Test your contributions thoroughly
3. Update the appropriate README tables
4. Submit a pull request with a clear description

## 📖 Repository Structure

```
├── prompts/          # Task-specific prompts (.prompt.md)
├── instructions/     # Coding standards and best practices (.instructions.md)
├── chatmodes/        # AI personas and specialized modes (.chatmode.md)
└── scripts/          # Utility scripts for maintenance
```

## 🌟 Getting Started

1. **Browse the Collections**: Check out our comprehensive lists of [prompts](README.prompts.md), [instructions](README.instructions.md), and [chat modes](README.chatmodes.md).
2. **Add to your editor**: Click the "Install" button to install to VS Code, or copy the file contents for other editors.
3. **Start Using**: Copy prompts to use with `/` commands, let instructions enhance your coding experience, or activate chat modes for specialized assistance.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🛡️ Security & Support

- **Security Issues**: Please see our [Security Policy](SECURITY.md)
- **Support**: Check our [Support Guide](SUPPORT.md) for getting help
- **Code of Conduct**: We follow the [Contributor Covenant](CODE_OF_CONDUCT.md)

## 🎯 Why Use Awesome GitHub Copilot?

- **Productivity**: Pre-built prompts and instructions save time and provide consistent results
- **Best Practices**: Benefit from community-curated coding standards and patterns
- **Specialized Assistance**: Access expert-level guidance through specialized chat modes
- **Continuous Learning**: Stay updated with the latest patterns and practices across technologies

---

**Ready to supercharge your coding experience?** Start exploring our [prompts](README.prompts.md), [instructions](README.instructions.md), and [chat modes](README.chatmodes.md)!

## 📚 Additional Resources

- [VS Code Copilot Customization Documentation](https://code.visualstudio.com/docs/copilot/copilot-customization) - Official Microsoft documentation
- [GitHub Copilot Chat Documentation](https://code.visualstudio.com/docs/copilot/chat/copilot-chat) - Complete chat feature guide
- [Custom Chat Modes](https://code.visualstudio.com/docs/copilot/chat/chat-modes) - Advanced chat configuration
- [VS Code Settings](https://code.visualstudio.com/docs/getstarted/settings) - General VS Code configuration guide
