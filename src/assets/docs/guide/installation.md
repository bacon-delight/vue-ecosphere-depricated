#### Installation - En

Install the plugin to a new or an existing Vue application

```bash
npm install vue-ecosphere
```

Import the installed plugin in `main.js`

```js
import { createApp } from "vue";
import Ecosphere from "vue-ecosphere";

const app = createApp(App);
app.use(Ecosphere);
app.mount("#app");
```

You're done! You can now use the components and access the `$ecosphere` global property from anywhere in your application. To learn more about the global property and related configurations, view the [Configurations](/guide/configurations) section.
