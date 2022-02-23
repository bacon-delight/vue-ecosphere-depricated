##### Usage

```html
<v-eco-navbar
  logo="/img/logo.png"
  brand="Ecosphere"
  :options="[{ type: 'link', attributes: { label: 'Link to nowhere', value: '/link' } }, { type: 'theme' }]"
/>
```

Check out the [Guided Example](#guided-example) below for an in-depth view at the usage.

##### API

| Name      | Type                            | Default | Description                                                       |
| :-------- | :------------------------------ | :------ | :---------------------------------------------------------------- |
| `logo`    | `string`                        | `''`    | URL of the logo                                                   |
| `brand`   | `string`                        | `''`    | Name of the brand                                                 |
| `options` | [`navbar_option`](/guide/types) | `[]`    | Options to be displayed in the navbar                             |
| `toggle`  | `boolean`                       | `false` | Show the sidebar toggle button for screens below `sm` breakpoints |

##### Events

| Name     | Payload | Description                                                                              |
| :------- | :------ | :--------------------------------------------------------------------------------------- |
| `toggle` |         | Emitted when the toggle button is clicked, `toggle` prop must be `true` for this to work |

##### Guided Example

In the `attribute` of the `options`, pass the props of the component you want to render as a key-value pair. For example, if you want to render a [Select](/components/action/select) with the following properties:

- **Label**: Select language
- **Options**: English, Deutsch
- **Config**:
  - **Outline**: `true`
  - **Hue**: `false`

```html
<template>
  <v-eco-navbar :options="options" />
</template>
<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    data() {
      return {
        options: [
          {
            type: "select",
            attributes: {
              label: "Select language",
              options: [
                { label: "English", value: "en" },
                { label: "Deutsch", value: "de" },
              ],
              config: {
                outline: true,
                hue: false,
              },
            },
          },
          // Add other options like a link
        ],
      };
    },
  });
</script>
```
