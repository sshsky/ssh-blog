module.exports = {
  title: 'sshsky的博客',
  tagline: '学无止境，learn everything!',
  url: 'https://www.sshsky.com',
  baseUrl: '/',
  favicon: 'img/favicon.jpeg',
  organizationName: 'sshsky', // Usually your GitHub org/user name.
  projectName: 'ssh-blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'sshsky 的博客',
      logo: {
        alt: 'logo',
        src: 'img/favicon.jpeg',
      },
      links: [
        // {
        //   to: 'docs/doc1',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {
          href: 'https://sshsky.com/',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/sshsky',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/doc1',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/sshsky',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} sshsky.com. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/',
        // },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          path: "./blog",
          routeBasePath: "/",
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
