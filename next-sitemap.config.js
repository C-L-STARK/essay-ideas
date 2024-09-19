/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://essay-ideas.com",
  generateRobotsTxt: true, // (optional)
  // Default transformation function
  transform: async (config, path) => {
    let realPath = path;

    if (path.endsWith(".zh-CN")) {
      realPath = "/zh-CN" + path.replace(".zh-CN", "");
    }

    if (path.endsWith(".ja-JP")) {
      realPath = "/ja-JP" + path.replace(".ja-JP", "");
    }

    if (path.endsWith(".de-DE")) {
      realPath = "/de-DE" + path.replace(".de-DE", "");
    }

    if (path.endsWith(".ar-SA")) {
      realPath = "/ar-SA" + path.replace(".ar-SA", "");
    }

    return {
      loc: realPath, // => this will be exported as http(s)://<config.siteUrl>/<path>
    };
  },
};
