#### Usage

```html
<v-eco-breadcrumb
  :options="[ { label: 'Components', value: '/components/action/button' }, { label: 'Breadcrumb', value: '/components/action/breadcrumb' }, ]"
/>
```

View [Guided Example](#guided-example) for adding [Select](/components/action/select) within the breadcrumb.

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

| Name      | Type                                  | Default                     | Description                             |
| :-------- | :------------------------------------ | :-------------------------- | :-------------------------------------- |
| `options` | [`breadcrumb_option[]`](/guide/types) | Required                    | The options to render in the breadcrumb |
| `divider` | `string`                              | `':ri-arrow-right-s-line:'` | The divider to use between breadcrumbs  |

##### Guided Example

```html
<template>
  <v-eco-breadcrumb :options="options" />
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    data() {
      return {
        options: [
          {
            label: "Home",
            value: "/",
          },
          {
            label: "Components",
            children: [
              {
                label: "Design",
                value: "/design/colours",
              },
              {
                label: "Guide",
                value: "/guide/installation",
              },
            ],
          },
          {
            label: "Action",
            value: "/components/action/accessibility",
          },
          {
            label: "Breadcrumb",
            value: "/components/action/breadcrumb",
          },
        ],
      };
    },
  });
</script>
```
