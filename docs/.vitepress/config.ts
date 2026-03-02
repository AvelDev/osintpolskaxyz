import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";
import { presetIcons, presetUno } from "unocss";

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  lang: "pl-PL",

  title: "OsintPolska.xyz",
  description: "OsintPolska.xyz - katalog narzędzi Osint",
  transformHead({ assets }) {
    // adjust the regex accordingly to match your font
    const robotoFontFile = assets.find((file) =>
      /Roboto-Regular\.[\w-]+\.woff2/.test(file),
    );
    if (robotoFontFile) {
      return [
        [
          "link",
          {
            rel: "preload",
            href: robotoFontFile,
            as: "font",
            type: "font/woff2",
            crossorigin: "",
          },
        ],
      ];
    }
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
  ],
  themeConfig: {
    nav: [{ text: "Wprowadzenie", link: "/wprowadzenie" }],
    sidebar: {
      "/": [
        {
          text: "Start",
          items: [
            { text: "📚 Wprowadzenie", link: "/wprowadzenie" },
            { text: "📚 Książki", link: "/ksiazki" },
            { text: "📖 Glosariusz", link: "/glosariusz" },
          ],
        },
        {
          text: "Wiki",
          collapsed: false,
          items: [
            {
              text: "🔎 Wyszukiwanie",
              link: "/wyszukiwanie",
            },
            {
              text: "🌐 Sieci",
              link: "/sieci",
            },
            {
              text: "💬 Social media",
              link: "/social",
            },
            {
              text: "🏢 Publiczne rejestry",
              link: "/rejestry",
            },
            {
              text: "🗺️ Lokalizacja",
              link: "/lokalizacja",
            },
            {
              text: "💳 Krypto",
              link: "/krypto",
            },
            {
              text: "🕵️‍♂️ Dark Web",
              link: "/dark-web",
            },
            {
              text: "🔐 OPSEC",
              link: "/opsec",
            },
            {
              text: "📦 Archiwa",
              link: "/archiwa",
            },
            {
              text: "❓ Inne",
              link: "/inne",
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/AvelDev/osintpolskaxyz" },
    ],
    search: {
      provider: "local",
    },
    editLink: {
      pattern: "https://github.com/AvelDev/osintpolskaxyz/edit/main/docs/:path",
      text: "📝 Zaproponuj zmianę",
    },
    footer: {
      message: "OsintPolska.xyz - katalog narzędzi",
      copyright: "Copyright © 2026 OsintPolska.xyz",
    },
  },
  vite: {
    plugins: [
      UnoCSS({
        presets: [
          presetUno(),
          presetIcons({
            extraProperties: {
              display: "inline-block",
              "vertical-align": "middle",
            },
          }),
        ],
      }),
    ],
  },
});
