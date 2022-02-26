#### Usage

```html
<v-eco-accessibility />
```

#### API

| Name                | Type                                       | Default                     | Description                                               |
| :------------------ | :----------------------------------------- | :-------------------------- | :-------------------------------------------------------- |
| `label`             | `string`                                   | `':ri-service-line:'`       | Custom label for accessibility panel                      |
| `resetLabel`        | `string`                                   | `'Reset :ri-restart-line:'` | Replace the label in the reset button with a custom label |
| `config.theme`      | `'auto'` , `'light'`, `'dark'`, `'invert'` | `'auto'`                    | Apply a specific theme to the dropdown                    |
| `config.hue`        | `boolean`                                  | `true`                      | Apply hue to the label                                    |
| `config.outline`    | `boolean`                                  | `true`                      | Apply a border outline to the dropdown                    |
| `config.flow`       | `'left'` , `'right'`                       | `'right'`                   | Direction of flow of the drop area                        |
| `config.indicator`  | `boolean`                                  | `true`                      | Display the default drop arrow indicator                  |
| `config.size`       | `boolean`                                  | `true`                      | Display the size controls                                 |
| `config.spacing`    | `boolean`                                  | `true`                      | Display the spacing controls                              |
| `config.height`     | `boolean`                                  | `true`                      | Display the height controls                               |
| `config.saturation` | `boolean`                                  | `true`                      | Display the saturation controls                           |
| `config.reset`      | `boolean`                                  | `true`                      | Display the reset button                                  |

#### Events

| Name     | Payload                               | Description                                          |
| :------- | :------------------------------------ | :--------------------------------------------------- |
| `change` | [`choice_option.value`](/guide/types) | Emitted when a dropdown value is selected or changed |
