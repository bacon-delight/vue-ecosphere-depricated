#### Usage

```html
<v-eco-input label="What do we call you?" placeholder="Enter your name" />
```

#### API

| Name                    | Type                                                       | Default                 | Description                                                                        |
| :---------------------- | :--------------------------------------------------------- | :---------------------- | :--------------------------------------------------------------------------------- |
| `label`                 | `string`                                                   | `''`                    | The label of the input field                                                       |
| `placeholder`           | `string`                                                   | `''`                    | The placeholder of the input input                                                 |
| `type`                  | `'text'`, `'number'`, `'password'`, `'email'`              | `'text'`                | The type of the input field                                                        |
| `required`              | `boolean`                                                  | `true`                  | Require input                                                                      |
| `regex`                 | `RegExp`                                                   | `null`                  | Apply a regex validation                                                           |
| `defaultValue`          | `string`, `number`                                         | `null`                  | Set the default value of the input field, value must exist in one of the `options` |
| `config.invalidWarning` | `string`                                                   | `'Required or Invalid'` | Replace the default invalid warning, used with `required` and `regex`              |
| `config.theme`          | `'auto'`, `'light'`, `'dark'`, `'invert'`, `'transparent'` | `'auto'`                | Apply a specific theme to the input field                                          |
| `config.outline`        | `boolean`                                                  | `true`                  | Apply a border outline to the input field                                          |

#### Events

| Name     | Payload                  | Description                                                                                           |
| :------- | :----------------------- | :---------------------------------------------------------------------------------------------------- |
| `change` | `string`, `number`, `''` | Emitted when input value is changed                                                                   |
| `valid`  | `string`, `number`, `''` | Emitted when a change in input value is valid, meets both `required` and `regex` checks if applicable |
