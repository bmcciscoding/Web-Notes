module.exports = {
  title: '打发无聊的旧时光xxx jjj',
  description: 'Jxxxx',
  head: [
    ['link', { rel: 'icon', href: './logo.png' }]
  ],
  themeConfig: {
    logo: './icon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}