<h3 align="center">Ecosphere Design System | 生态圈设计系统</h3>
<p  align="center">Ecosphere is a modern and minimal design system built for better clarity and insights from data. A lot of the inspirations in this system comes from the natural world.</p>

Translations:

-   [中文版](#中文版)

##### Resources:

-   [Figma Kit](https://www.figma.com/community/file/1067444265295956708/Ecosphere-Design-System)
-   [Homepage](https://ecosphere.dev/)
-   [Documentation](https://docs.ecosphere.dev/)
-   [Sandbox](https://codesandbox.io/s/vue-ecosphere-ooudb)

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

<br/><br/><br/>

# 中文版

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
