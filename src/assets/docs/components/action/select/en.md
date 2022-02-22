##### Usage

```html
<v-eco-select
  label="Select language"
  :options="[{ label: 'English', value: 'en' }, { label: 'Español', value: 'es' }]"
  :config="{ flow: 'right', contain: true, outline: true, center: false, theme: 'auto' }"
/>
```

##### API

| Name             | Type                                       | Default   | Description                                         |
| :--------------- | :----------------------------------------- | :-------- | :-------------------------------------------------- |
| `label`          | `string`                                   | `''`      | The label of the to display                         |
| `options`        | [`choice_option[]`](/guide/types)          | Required  | The options to render in the array                  |
| `config.theme`   | `'auto'` , `'light'`, `'dark'`, `'invert'` | `'auto'`  | Apply a specific theme to the dropdown              |
| `config.outline` | `boolean`                                  | `true`    | Apply a border outline to the dropdown              |
| `config.contain` | `boolean`                                  | `true`    | Match the drop area to the width of the input field |
| `config.flow`    | `'left'` , `'right'`                       | `'right'` | Direction of flow of the drop area                  |
| `config.center`  | `boolean`                                  | `false`   | Center align the contents of the drop area          |
| `config.theme`   | `'auto'` , `'light'`, `'dark'`, `'invert'` | `'auto'`  | Apply a specific theme to the dropdown              |

##### Events

| Name     | Payload                               | Description                                          |
| :------- | :------------------------------------ | :--------------------------------------------------- |
| `change` | [`choice_option.value`](/guide/types) | Emitted when a dropdown value is selected or changed |
