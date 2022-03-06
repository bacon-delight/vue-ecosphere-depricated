#### Usage

```html
<v-eco-toggle
  label="Select language"
  :options="[{ label: 'English', value: 'en' }, { label: 'Español', value: 'es' }]"
  :config="{ }"
/>
```

#### API

| Name      | Type                              | Default  | Description                        |
| :-------- | :-------------------------------- | :------- | :--------------------------------- |
| `options` | [`choice_option[]`](/guide/types) | Required | The options to render in the array |

#### Events

| Name     | Payload                               | Description                                        |
| :------- | :------------------------------------ | :------------------------------------------------- |
| `select` | [`choice_option.value`](/guide/types) | Emitted when an option is selected from the toggle |
