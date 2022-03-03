#### Usage

```html
<v-eco-checkbox label="Pick me maybe?" hue="hue" />
```

#### API

| Name           | Type                                                                                         | Default  | Description                              |
| :------------- | :------------------------------------------------------------------------------------------- | :------- | :--------------------------------------- |
| `label`        | `string`                                                                                     | `null`   | Label for the checkbox                   |
| `hue`          | `'hue'`, `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'critical'`, `'information'` | `'auto'` | Apply a specific hue to the active state |
| `defaultValue` | `boolean`                                                                                    | `false`  | Default state of the checkbox            |

#### Events

| Name     | Payload   | Description                                                                               |
| :------- | :-------- | :---------------------------------------------------------------------------------------- |
| `change` | `boolean` | Emitted when the checkbox is selected or un-selected, emits the new state of the checkbox |
