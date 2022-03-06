#### Usage

```html
<v-eco-toggle
  :options="[ { label: 'Home :ri-home-line:', value: 'none' }, { label: 'Settings :ri-settings-line:', value: 'settings' }, ]"
  hue="primary"
/>
```

#### API

| Name           | Type                                                                                         | Default  | Description                                                                                          |
| :------------- | :------------------------------------------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------- |
| `options`      | [`choice_option[]`](/guide/types)                                                            | Required | The options to render in the array                                                                   |
| `theme`        | `'auto'` , `'light'`, `'dark'`, `'invert'`                                                   | `'auto'` | Apply a specific theme to the toggle                                                                 |
| `hue`          | `'hue'`, `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'critical'`, `'information'` | `'auto'` | Apply a specific hue to the active toggle item                                                       |
| `defaultIndex` | `number`                                                                                     | `null`   | Set the default value of the toggle with this index, index must be less than the length of `options` |
| `defaultValue` | `string`, `number`                                                                           | `null`   | Set the default value of the toggle, value must exist in one of the `options`                        |

#### Events

| Name     | Payload                               | Description                                        |
| :------- | :------------------------------------ | :------------------------------------------------- |
| `select` | [`choice_option.value`](/guide/types) | Emitted when an option is selected from the toggle |
