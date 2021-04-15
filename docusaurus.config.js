module.exports = {
  title: 'Ezmeral MLOps!',
  tagline: 'Education resources for learning MLOps',
  url: 'https://nataliiaskopiuk.github.io/',
  baseUrl: '/mlops/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'NataliiaSkopiuk',
  projectName: 'mlops',
  themeConfig: {
    navbar: {
      title: 'Learn MLOps!',
      logo: {
        alt: 'Learn MLOps!',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/kubedirector',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/bluek8s',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Learn KubeDirector on GitHub',
              href: 'https://github.com/kmathur2/mlops',
            },
            {
              label: 'KubeDirector Lab on GitHub',
              href: 'https://github.com/kmathur2/mlops',
            },
            {
              label: 'KubeDirector on GitHub',
              href: 'https://github.com/bluek8s/kubedirector',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hewlett Packard Enterprise.`,
    },
    colorMode: {
          defaultMode: 'light',
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/kmathur2/mlops/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
