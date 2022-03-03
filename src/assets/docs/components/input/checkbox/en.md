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

| Name     | Payload   | Description                                                             |
| :------- | :-------- | :---------------------------------------------------------------------- |
| `toggle` | `boolean` | Emitted when the switch is toggled, emits the new state of the checkbox |
