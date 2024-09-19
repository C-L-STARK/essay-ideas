import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import getConfigStr from "./seo/seo_config";

const config: DocsThemeConfig = {
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <svg width='24' height='24' viewBox='0 0 24 24'>
          <path
            fill='currentColor'
            d='M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z'
          />
        </svg>
        <span style={{ marginLeft: ".4em", fontWeight: 800 }}>{getConfigStr(locale, "title")}</span>
      </>
    );
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { title } = useConfig();
    // warning: frontMatter.title/description was nullable here!!! do not use this config.
    const url = "https://essay-ideas.com" + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    let seoTitle = getConfigStr(locale, "title");
    // if not main,
    if (asPath !== "/") {
      seoTitle = title + " | " + getConfigStr(locale, "title");
    }

    const seoDescription = getConfigStr(locale, "description");

    return (
      <>
        <title>{seoTitle}</title>
        <link rel='icon' type='image/svg' sizes='32x32' href='/favicon/pencil.svg' />
        <meta name='twitter:title' content={seoTitle}></meta>
        <meta name='twitter:description' content={seoDescription}></meta>
        <meta name='twitter:image' content='https://oss.fastx-ai.com/1.png'></meta>
        <meta name='twitter:card' content='summary_large_image'></meta>
        <meta name='twitter:site' content='@Deep_door'></meta>
        <meta name='twitter:handle' content='@Deep_door'></meta>

        <meta name='description' content={seoDescription}></meta>

        <meta property='og:url' content={url}></meta>
        <meta property='og:type' content='website'></meta>
        <meta property='og:title' content={seoTitle}></meta>
        <meta property='og:description' content={seoDescription}></meta>
        <meta property='og:siteName' content='Essay Ideas Finder - Spark Your Inspiration'></meta>
        <meta property='og:image' content='https://oss.fastx-ai.com/1.png'></meta>
        <meta property='og:image:width' content='800'></meta>
        <meta property='og:image:height' content='600'></meta>
        <meta property='og:image:alt' content='Essay Ideas Finder - Spark Your Inspiration'></meta>
      </>
    );
  },
  useNextSeoProps() {
    return {
      openGraph: {
        title: (useConfig().title ? useConfig().title + " | " : "") + "Essay Ideas Finder - Spark Your Inspiration",
      },
    };
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "zh-CN", text: "中文" },
    { locale: "de-DE", text: "Deutsch" },
    { locale: "ja-JP", text: "にほんご" },
    { locale: "ar-SA", text: "العربية", direction: "rtl" },
  ],
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) => {
      const { locale } = useRouter();

      if (type === "separator") {
        return <div style={{ width: "100%", height: 1, backgroundColor: "#ddd", padding: 0, margin: 0 }} />;
      }
      if (title.startsWith(getConfigStr(locale, "titleEmojiBeginChar"))) {
        return <>👉 {title}</>;
      }
      return <>{title}</>;
    },
  },
  banner: {
    dismissible: true,
    key: "welcome",
    text: () => {
      const { locale } = useRouter();

      return (
        <>
          <div style={{ width: "100vw", height: 44, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <p style={{ fontSize: 20 }}>👾 &nbsp;</p>
            <p style={{ fontSize: 12 }}>{getConfigStr(locale, "banner")}</p>
          </div>
        </>
      );
    },
  },
  project: {
    link: "https://github.com/TONY-STARK-TECH/essay-ideas",
  },
  chat: {
    link: "https://fastx-ai.com",
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
        <path
          fill='currentColor'
          d='M0 13C0 6.373 5.373 1 12 1s12 5.373 12 12v8.657a.75.75 0 0 1-1.5 0V13c0-5.799-4.701-10.5-10.5-10.5S1.5 7.201 1.5 13v8.657a.75.75 0 0 1-1.5 0V13Z'></path>
        <path d='M8 19.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75ZM5.25 9.5h13.5c.966 0 1.75.784 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75v-3.5c0-.966.784-1.75 1.75-1.75Zm.22 1.47a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06 0L12 12.56l2.47 2.47a.75.75 0 0 0 1.06 0l3-3a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L15 13.44l-2.47-2.47a.75.75 0 0 0-1.06 0L9 13.44l-2.47-2.47a.75.75 0 0 0-1.06 0Z'></path>
      </svg>
    ),
  },
  docsRepositoryBase: "https://github.com/TONY-STARK-TECH/essay-ideas",
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href='https://essay-ideas.com/' target='_blank'>
          Essay-ideas.com
        </a>
        .
      </span>
    ),
  },
  editLink: {
    component: ({ filePath }) => {
      const { locale } = useRouter();
      return (
        <a
          style={{ fontSize: 12, color: "#a3a3a3" }}
          href={"https://github.com/TONY-STARK-TECH/essay-ideas/tree/main/" + filePath}>
          {getConfigStr(locale, "editText")}
        </a>
      );
    },
  },
  feedback: {
    content: () => {
      const { locale } = useRouter();
      return <span style={{ fontSize: 12, color: "#a3a3a3" }}>{getConfigStr(locale, "feedBackText")}</span>;
    },
  },
  primaryHue: 17,
};

export default config;
