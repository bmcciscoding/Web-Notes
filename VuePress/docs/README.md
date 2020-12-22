# Vue Press 使用教程

## 创建项目


1. 新建一个文件夹，`mkdir vuepress-demo`
2. 执行 `npm init`，并安装 vuepress `npm install -D vuepress`
3. 创建 docs 文件夹，并创建 README.md，`mkdir docs && echo '# Hello VuePress' > docs/README.md`，这个是主页入口
4. 在 package.json 添加 
```js
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
```
5. 启动 `npm run docs:dev`

这时你的项目文件结构应该如下，即我们修改 md 文件，都会实时看到变化

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwoqo0r96j308p02n3yg.jpg)


## 配置

项目创建完毕，就可以开始配置了。可配置导航栏，侧边栏，首页。详细配置内容可以移步[文档](https://vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE)。

**导航栏配置**
```js
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
```
很尴尬，写完发现和文档一样。建议直接看文档

## 部署

执行 `npm run docs:build` 后，将 .vuepress/dist 里的东西推到你到服务器即可。
