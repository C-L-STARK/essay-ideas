const { defineConfig } = require("@lobehub/i18n-cli");

module.exports = defineConfig({
  temperature: 0,
  modelName: "gpt-3.5-turbo",
  markdown: {
    reference:
      "Translate the following content into the target language while preserving the original formatting and specific elements. For MDX files, ensure that markdown syntax, URLs, code blocks, and other formatting elements such as links remain unchanged. Do not alter the structure or content within these elements. keeping all other parts, including URLs and code structure, exactly as they are. translate systemPrompt's value in the mdx component. do not translate the first import line. do not translate the marked words.",
    entry: ["./pages/class/**/*.en-US.mdx"],
    entryLocale: "en-US",
    outputLocales: ["zh-CN", "de-DE", "ja-JP", "ar-SA"],
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
