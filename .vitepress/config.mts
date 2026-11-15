import { defineConfig } from "vitepress";

const base = process.env.VITEPRESS_BASE ?? "/Nota-public-relations/";

export default defineConfig({
  lang: "zh-CN",
  title: "Nota Stories",
  description: "Nota 的开发故事、软件哲学与藏在细节里的选择。",
  base,
  cleanUrls: true,
  srcExclude: ["README.md"],
  lastUpdated: true,
  markdown: {
    math: true,
  },
  head: [
    ["meta", { name: "theme-color", content: "#f7f9fc" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Nota Stories" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Nota 的开发故事、软件哲学与藏在细节里的选择。",
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: "开发故事", link: "/Stories/" },
      { text: "Nota 主程序", link: "https://github.com/Nota-MD/Nota" },
      { text: "主题", link: "https://github.com/Nota-MD/Nota-themes" },
      { text: "插件", link: "https://github.com/Nota-MD/Nota-plugins" },
    ],
    sidebar: {
      "/Stories/": [
        {
          text: "开发故事",
          items: [
            { text: "目录", link: "/Stories/" },
            { text: "01 · 何以起源", link: "/Stories/01-origins" },
            { text: "02 · CDE 主题从哪里来", link: "/Stories/02-cde-theme" },
            { text: "03 · 在细节中藏彩蛋", link: "/Stories/03-easter-eggs" },
            {
              text: "04 ·《Nota 软件使用须知》从何而来",
              link: "/Stories/04-usage-guidelines",
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Nota-MD/Nota-public-relations",
      },
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索故事",
            buttonAriaLabel: "搜索故事",
          },
          modal: {
            noResultsText: "没有找到相关内容",
            resetButtonTitle: "清除搜索",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
    editLink: {
      pattern:
        "https://github.com/Nota-MD/Nota-public-relations/edit/main/:path",
      text: "在 GitHub 上改进这篇故事",
    },
    footer: {
      message:
        '文字采用 <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> 许可',
      copyright: "Copyright © 2026 Leo Lee",
    },
    outline: {
      level: [2, 3],
      label: "本页目录",
    },
    darkModeSwitchLabel: "切换外观",
    sidebarMenuLabel: "故事目录",
    returnToTopLabel: "返回顶部",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "long",
        timeStyle: "short",
      },
    },
  },
});
