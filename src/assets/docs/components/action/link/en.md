#### Usage

```html
<v-eco-link label="Click here!" />
```

##### Recommended

For external or internal routing, use `$ecosphere` handlers as follows:

```html
<v-eco-link
  label=":ri-remixicon-line: Remix Icon"
  @click="$ecosphere.handlers.navigate('https://remixicon.com/')"
/>
```

Learn more at the [Configuration](/guide/configuration) section.

#### API

| Name    | Type     | Default  | Description                                        |
| :------ | :------- | :------- | :------------------------------------------------- |
| `label` | `string` | Required | The text to display in button, also supports icons |

#### Events

All events that works with a regular `a` element are supported through [Attribute Inheritence](https://vuejs.org/guide/components/attrs.html#attribute-inheritance). Directly use them on the component.

For example, to listen to the `click` event, you can use the following code:

```js
<template>
  <v-eco-link label="Click me" @click="handleClick" />
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
