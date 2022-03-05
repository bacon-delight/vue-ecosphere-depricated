#### Usage

```html
<v-eco-avatar label="Kevin Bacon" />
```

#### API

| Name       | Type                                                                                                                   | Default    | Description              |
| :--------- | :--------------------------------------------------------------------------------------------------------------------- | :--------- | :----------------------- |
| `source`   | `string`, `URL`                                                                                                        | Required   | Source image URL or name |
| `hue`      | `'auto'`, `'light'`, `'dark'`, `'invert'`, `'hue'`, `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'critical'` | `'auto'`   | The hue of the initials  |
| `circular` | `boolean`                                                                                                              | `false`    | Render a circular avatar |
| `size`     | `'tiny'`, `'small'`, `'medium'`, `'large'`                                                                             | `'medium'` | The size of the avatar   |
| `status`   | `'online'`, `'away'`, `'busy'`, `'offline'`, `false`                                                                   | `false`    | The status of the avatar |
