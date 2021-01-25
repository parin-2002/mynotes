module.exports = {
  title: "Dev Notes",
<<<<<<< HEAD
  tagline: "work smart and become clever programmer",
=======
  tagline: "be smart and become clever programmer",
>>>>>>> 604db64943ab9f007776907c9dffbd04702af052
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Dev Notes",
      logo: {
        alt: "My Site Logo",
<<<<<<< HEAD
        src:
          "https://i.pinimg.com/originals/ba/c2/c3/bac2c3f58112c9be8cc52de00f019e00.png", //navbar logo
=======
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwllQ4NuJE7UxJ3Glm9nCFCiUWNgDl3FapsA&usqp=CAU",
>>>>>>> 604db64943ab9f007776907c9dffbd04702af052
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/parin-2002",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "other site",
          items: [
            {
              label: "Node.js/Python",
              to: "http://codehelperdesk.blogspot.com",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/parin-2002",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dev Notes, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
