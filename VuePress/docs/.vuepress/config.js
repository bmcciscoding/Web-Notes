module.exports = {
  title: 'VuePress 标题',
  description: 'VuePress 描述',

  themeConfig: {
    nav: [
      {
        text: '技术',
        ariaLabel: 'Language Menu',
        items: [
          {text: 'iOS',link: '../posts/tech/iOS/iOS组件化实践.md'}
        ]
      },
      {
        text: '杂谈',
        link: './'
      },
      {
        text: '关于我',
        link: './'
      }
    ]
  }
}