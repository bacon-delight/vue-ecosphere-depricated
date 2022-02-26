#### Usage

```html
<v-eco-menu
  :options="[{label: 'Home', value: '/'},{label: 'Components', value: '/components', children: [{label:'hello'}]}]"
  :config="{ theme: 'auto' }"
/>
```

The string passed in the `value` properties will be automatically matched with the current route, and the current route will be highlighted.

#### API

| Name           | Type                                       | Default  | Description                        |
| :------------- | :----------------------------------------- | :------- | :--------------------------------- |
| `options`      | [`menu_option[]`](/guide/types)            | Required | The options to render in the array |
| `config.theme` | `'auto'` , `'light'`, `'dark'`, `'invert'` | `'auto'` | Apply a specific theme to the menu |

#### Events

| Name     | Payload                               | Description                                     |
| :------- | :------------------------------------ | :---------------------------------------------- |
| `select` | [`choice_option.value`](/guide/types) | Emitted when a particular menu item is selected |
