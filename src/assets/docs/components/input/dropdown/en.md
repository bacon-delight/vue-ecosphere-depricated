##### Usage

```html
<v-eco-dropdown
  label="Select language"
  :options="[{ label: 'English', value: 'en' }, { label: 'Español', value: 'es' }]"
  placeholder="Select an option"
  :config="{ flow: 'right', contain: true, outline: true, theme: 'auto' }"
/>
```

##### API

| Name             | Type                                       | Default   | Description                                                                                            |
| :--------------- | :----------------------------------------- | :-------- | :----------------------------------------------------------------------------------------------------- |
| `label`          | `string`                                   | ""        | The label of the dropdown field                                                                        |
| `placeholder`    | `string`                                   | ""        | The placeholder of the dropdown input                                                                  |
| `options`        | [`choice_option[]`](/guide/types)          | Required  | The options to render in the array                                                                     |
| `config.theme`   | `'auto'` , `'light'`, `'dark'`, `'invert'` | `'auto'`  | Apply a specific theme to the dropdown                                                                 |
| `config.outline` | `boolean`                                  | `true`    | Apply a border outline to the dropdown                                                                 |
| `config.contain` | `boolean`                                  | `true`    | Match the drop area to the width of the input field                                                    |
| `config.flow`    | `'left'` , `'right'`                       | `'right'` | Direction of flow of the drop area                                                                     |
| `defaultIndex`   | `number`                                   | `null`    | Set the default value of the dropdown with this index, index must be less than the length of `options` |
| `defaultValue`   | `string`, `number`                         | `null`    | Set the default value of the dropdown, value must exist in one of the `options`                        |

##### Events

| Name     | Payload                               | Description                                          |
| :------- | :------------------------------------ | :--------------------------------------------------- |
| `change` | [`choice_option.value`](/guide/types) | Emitted when a dropdown value is selected or changed |
