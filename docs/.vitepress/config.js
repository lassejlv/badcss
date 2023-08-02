import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    // script
    [
      "script",
      {
        src: "https://unpkg.com/@badcss/core@0.1.5/lib",
        type: "module",
      },
    ],
  ],

  ignoreDeadLinks: true,
  title: "Bad CSS",
  description:
    "A lightweight and customizable framework designed to simplify web development and enhance the styling capabilities of your projects.",
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      { text: "Documention", link: "/docs" },
      {
        text: "🫶 Donate",
        link: "https://ko-fi.com/lassejlv",
      },
      {
        text: "Select Version",
        items: [
          {
            text: "0.1.5 >",
            link: "/docs",
          },
        ],
      },
      { text: "Team", link: "/team" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          { text: "Installation", link: "/docs" },
          { text: "Components", link: "/components" },
          { text: "Colors", link: "/colors" },
          { text: "Plugins", link: "/plugins" },
        ],
      },

      {
        text: "Components",
        collapsed: false,
        items: [
          { text: "Alert", link: "/components/alert" },
          { text: "Button", link: "/components/button" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/lassejlv/themostbadd-css-framework",
      },
    ],
  },
});
