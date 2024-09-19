const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  i18n: {
    locales: ["en-US", "zh-CN", "de-DE", "ja-JP", "ar-SA"],
    defaultLocale: "en-US",
  },
  defaultShowCopyCode: true,
  latex: true,
});
