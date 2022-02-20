## 安装

使用 `npm` 安装

```bash
npm install vue-ecosphere
```

安装全部组件在 `main.js`

```js
import { createApp } from "vue";
const app = createApp(App);

// Ecosphere
import Ecosphere from "vue-ecosphere";
app.use(Ecosphere);

app.mount("#app");
```

而已！您已完成 Ecosphere 的安装和设置。您现在可以使用所有组件并从应用程序中的任何位置访问 `$ecosphere` 全局属性。

要了解有关全局属性和相关配置的更多信息，请查看 [配置](/guide/configuration) 部分。
