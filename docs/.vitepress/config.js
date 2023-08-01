import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    // script
    [
      "script",
      {
        src: "https://unpkg.com/@badcss/core@0.1.0/lib",
        defer: true,
      },
    ],
  ],
  ignoreDeadLinks: true,
  title: "The Most Bad CSS framework",
  description: "",
  themeConfig: {
    nav: [
      { text: "Documention", link: "/docs" },
      { text: "Our Team", link: "/team" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Installation", link: "/docs" },
          { text: "Components", link: "/components" },
          { text: "Colors", link: "/colors" },
          { text: "Plugins", link: "/plugins" },
        ],
      },

      {
        text: "Components",
        items: [{ text: "Button", link: "/components/button" }],
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
