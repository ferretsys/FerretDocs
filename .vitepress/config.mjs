import { readdirSync } from 'fs';
import { defineConfig } from 'vitepress'
const foldersToRead = {
  usage: [
    'index',
    'networks',
    'running',
  ],
  system: [
    'index',
    'getting_started'
  ]
};

const sidebar = Object.entries(foldersToRead).map(([folder, files]) => {
  const items = files.map(name => {
    return {
      text: name,
      link: `/${folder}/${name}`
    };
  });

  return {
    text: folder,
    items: items
  };
});

sidebar.unshift({
  text: 'home',
  link: '/ferret'
})

export default defineConfig({
  title: "Ferret Docs",
  description: "Documentation of ferret",
  themeConfig: {
    nav: [
      { text: 'home', link: '/' },
      { text: 'system', link: '/system/' },
      { text: 'usage', link: '/usage/' }
    ],

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  srcDir: 'docs',
})
