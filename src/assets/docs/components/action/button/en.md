##### Usage

```html
<v-eco-button label="Click me!" :config="{ theme: 'auto', outline: true }" />
```

You can also render an icon anywhere inside the button, just wrap the icon name with `:` on both sides and pass it with the `label`.

```html
<v-eco-button label="Start Playing :ri-play-line:" />
```

You can place the icon anywhere within the `label`, before, after, or even within the label. You can even have multiple icons inside the `label`.

```html
<v-eco-button label=":ri-arrow-left-line: Return" />
```

##### API

| Name             | Type                                                                                        | Default  | Description                                        |
| :--------------- | :------------------------------------------------------------------------------------------ | :------- | :------------------------------------------------- |
| `label`          | `string`                                                                                    | Required | The text to display in button, also supports icons |
| `config.theme`   | `'auto'` , `'light'`, `'dark'`, `'invert'`, `'hue'`, `'success'`, `'warning'`, `'critical'` | `'auto'` | Apply a specific theme to the button               |
| `config.outline` | `boolean`                                                                                   | `true`   | Apply a border outline to the button               |

##### Events

All events that works with a regular `button` element are supported through [Attribute Inheritence](https://vuejs.org/guide/components/attrs.html#attribute-inheritance). Directly use them on the component.

For example, to listen to the `click` event, you can use the following code:

```js
<template>
  <v-eco-button label="Click me" @click="handleClick" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    handleClick() {
      console.log("Clicked!");
    },
  },
});
</script>
```
