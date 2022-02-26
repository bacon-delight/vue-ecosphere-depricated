#### Usage

This component is meant to be used only for a sidebar navigation. Check out [Menu](/components/action/menu) for an alternative use cases.

```html
<v-eco-sidebar
  :options="[{label: 'Home', value: '/'},{label: 'Components', value: '/components', children: [{label:'hello'}]}]"
/>
```

#### API

| Name           | Type                                       | Default  | Description                        |
| :------------- | :----------------------------------------- | :------- | :--------------------------------- |
| `options`      | [`menu_option[]`](/guide/types)            | Required | The options to render in the array |
| `config.theme` | `'auto'` , `'light'`, `'dark'`, `'invert'` | `'auto'` | Apply a specific theme to the menu |

#### Events

| Name     | Payload | Description                                                                                                  |
| :------- | :------ | :----------------------------------------------------------------------------------------------------------- |
| `toggle` |         | Emitted when a particular menu item is selected, signals that the sidebar can be collapsed on mobile screens |
