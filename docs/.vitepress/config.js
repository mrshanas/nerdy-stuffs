export default {
  themeConfig: {
    logo: "https://img.icons8.com/external-vectorslab-flat-vectorslab/53/null/external-notebook-education-vectorslab-flat-vectorslab.png",
    siteTitle: "Memorandum",
    editLink: {
      pattern: "https://github.com/mrshanas/nerdy-stuffs/edit/main/docs/:path",
    },
    nav: [
      {
        text: "Snippets",
        link: "/snippets",
      },
      {
        text: "Guides",
        link: "/tips",
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/mrshanas" },
      { icon: "twitter", link: "https://twitter.com/mrshanas" },
      { icon: "discord", link: "https://discord.com" },
      {
        icon: "linkedin",
        link: "https://linkedin.com/in/shabani-nassibu-9335b2219/",
      },
    ],
    sidebar: [
      {
        text: "Frontend Development",
        collapsible: true,
        items: [
          { text: "React Js", link: "/frontend/reactjs" },
          { text: "NextJs", link: "/frontend/nextjs" },
          { text: "Vue Js", link: "/frontend/vuejs" },
          { text: "Nuxt Js", link: "/frontend/nuxtjs" },
        ],
      },
      {
        text: "Backend Development",
        collapsible: true,
        items: [
          { text: "Django", link: "/backend/django" },
          { text: "Django Rest Framework", link: "/backend/drf" },
        ],
      },
      {
        text: "Mobile Development",
        collapsible: true,
        items: [
          { text: "React Native", link: "/mobile/react-native" },
          { text: "Flutter", link: "/mobile/flutter" },
          { text: "Android", link: "/mobile/android" },
        ],
      },
      {
        text: "Programming Languages",
        collapsible: true,
        items: [
          { text: "Dart", link: "/languages/dart" },
          { text: "TypeScript", link: "/languages/ts" },
          { text: "Python", link: "/languages/py" },
        ],
      },
      {
        text: "Operating Systems",
        collapsible: true,
        items: [
          { text: "Windows", link: "/os/windows" },
          { text: "Linux", link: "/os/linux" },
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License",
      copyright: `Copyright &copy; ${new Date().getFullYear()} @mrshanas`,
    },
    base: "nerdy-stuffs",
  },
  title: "Memorandum",
  description: "My own small Google & StackOverflow",
};
