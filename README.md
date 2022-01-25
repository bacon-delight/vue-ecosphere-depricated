<h3 align="center">Ecosphere Design System | 生态圈设计系统</h3>
<p  align="center">Ecosphere is a modern and minimal design system built for better clarity and insights from data. A lot of the inspirations in this system comes from the natural world.</p>

<p align="center">
<img alt="Code Climate maintainability" src="https://img.shields.io/codeclimate/maintainability-percentage/bacon-delight/vue-ecosphere?label=Maintainability&style=flat-square">
<img alt="Code Climate technical debt" src="https://img.shields.io/codeclimate/tech-debt/bacon-delight/vue-ecosphere?label=Technical%20Debt&style=flat-square">
<img alt="Code Climate issues" src="https://img.shields.io/codeclimate/issues/bacon-delight/vue-ecosphere?label=Issues&style=flat-square">
<img alt="Snyk Vulnerabilities for GitHub Repo" src="https://img.shields.io/snyk/vulnerabilities/github/bacon-delight/vue-ecosphere?label=Vulnerabilities&style=flat-square">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/bacon-delight/vue-ecosphere?label=Languages&style=flat-square">
</p>

Translations:

-   [中文版](#中文版)

##### Resources:

-   [Figma Kit](https://www.figma.com/community/file/1067444265295956708/Ecosphere-Design-System)
-   [Homepage](https://ecosphere.dev/)
-   [Documentation](https://docs.ecosphere.dev/)
-   [Sandbox](https://codesandbox.io/s/vue-ecosphere-ooudb)

<br/>

### Usage

Install

```sh
npm install vue-ecosphere
```

Import the plugin in `main.js`

```js
import { createApp } from "vue";
import Ecosphere from "vue-ecosphere";

const app = createApp(App);
app.use(Ecosphere);
app.mount("#app");
```

<br/>

### Plugin, Site and Documentation Development/Improvement

This is sort of a monorepo which is divided into 3 parts:

-   Plugin - `/plugin` - Plugin components
-   Documentation - `/docs` - Static documentation
-   Site - `/views`, `/components`, `/store`, `/router` - Landing site

```sh
# Install Dependencies
npm install

# Run Site Development Server
npm run serve

# Run Documentation Development Server
npm run docs:dev

# Unit Testing
npm run test:unit

# Lint
npm run lint

# Build
npm run build

# Package Build
npm run pack
```

<br/>

# 中文版

> 我在学习中文，但是我的中文还不好。请原谅我的错误。:sweat_smile:

### 用法

安装

```sh
# 最新稳定版
npm install vue-ecosphere
```

在`main.js`中添加一些

```js
import { createApp } from "vue";
import Ecosphere from "vue-ecosphere";

const app = createApp(App);
app.use(Ecosphere);
app.mount("#app");
```
