#### Usage

```html
<v-eco-switch label="Switch it on!" hue="hue" />
```

#### API

| Name           | Type                                                                                         | Default  | Description                              |
| :------------- | :------------------------------------------------------------------------------------------- | :------- | :--------------------------------------- |
| `label`        | `string`                                                                                     | `null`   | Label for the switch                     |
| `hue`          | `'hue'`, `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'critical'`, `'information'` | `'auto'` | Apply a specific hue to the active state |
| `defaultValue` | `boolean`                                                                                    | `false`  | Default state of the switch              |

#### Events

| Name     | Payload   | Description                                                           |
| :------- | :-------- | :-------------------------------------------------------------------- |
| `change` | `boolean` | Emitted when the switch is toggled, emits the new state of the switch |
