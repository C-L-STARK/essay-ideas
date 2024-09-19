const { defineConfig } = require("@lobehub/i18n-cli");

const outputLocals = ["en-US", "de-DE", "ja-JP", "ar-SA"];

module.exports = defineConfig({
  entry: "./pages/_meta.en-US.json",
  entryLocale: "en-US",
  output: "./pages/",
  outputLocales: outputLocals,
  reference:
    "For JSON files, Keep Original Key Order!!! only translate the value associated with the key 'title', keeping all other parts, including URLs and code structure, exactly as they are.",
  temperature: 0,
  modelName: "gpt-4",
  markdown: {
    reference:
      "Translate the following content into the target language while preserving the original formatting and specific elements. For MDX files, ensure that markdown syntax, URLs, code blocks, and other formatting elements such as links remain unchanged. Do not alter the structure or content within these elements. keeping all other parts, including URLs and code structure, exactly as they are. translate systemPrompt's value in the mdx component. do not translate the first import line",
    entry: ["./pages/category/cause_and_effect/*.en-US.mdx"],
    entryLocale: "en-US",
    outputLocales: ["de-DE", "ja-JP", "ar-SA"],
    // exclude: ["./contributing/_Sidebar.mdx"],
    outputExtensions: (locale, { filePath }) => {
      if (filePath.includes(".mdx")) {
        return `.${locale}.mdx`;
      }
      if (filePath.includes(".json")) {
        return `.${locale}.json`;
      }
    },
  },
});
