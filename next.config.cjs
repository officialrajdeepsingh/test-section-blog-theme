/** @type {import('nextra').ThemeConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const withNextra = require("nextra")({
  theme: "section-blog-theme",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra();