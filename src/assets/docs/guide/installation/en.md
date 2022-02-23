## Installation

Install the plugin to a new or an existing Vue application

```bash
npm install vue-ecosphere
```

Import the installed plugin in `main.js`

```js
import { createApp } from "vue";
const app = createApp(App);

// Ecosphere
import Ecosphere, { EcoComponents } from "./plugin";
app.use(Ecosphere);
app.use(EcoComponents);

app.mount("#app");
```

That's it, you're done with the installation and setup of Ecosphere! You can now use all the components and access the `$ecosphere` global property from anywhere within your application.

To learn more about the global property and related configurations, view the [Configuration](/guide/configuration) section.

##### Recommended

Inside `app.vue`, wrap everything with `v-eco-wrapper` to apply the theme globally.

```html
<template>
  <v-eco-wrapper class="wrapper"> <--! Content goes here --> </v-eco-wrapper>
</template>

<style>
  body {
    margin: 0;
  }
  #app,
  .wrapper {
    height: 100vh;
    width: 100vw;
  }
</style>
```
