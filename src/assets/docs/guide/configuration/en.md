## Configuration

Once the plugin is imported, you'll have access to a global property `$ecosphere` (or `this.$ecosphere` depending on where it's used) which will expose some helper functions.

#### Theme

```
$ecosphere.theme
```

| Name              | Type                                                             | Default                  | Description                                                                                   |
| :---------------- | :--------------------------------------------------------------- | :----------------------- | :-------------------------------------------------------------------------------------------- |
| `setTheme`        | [`themes`](/guide/types)                                         | `void`                   | Set a theme which will be applied to all the components                                       |
| `getCurrentTheme` | `void`                                                           | [`themes`](/guide/types) | Returns the current theme                                                                     |
| `setColors`       | [`color_palette`](/guide/types), [`color_palette`](/guide/types) | `void`                   | Override the default palettes with custom colors, pass the `light` followed by `dark` palette |

#### Handlers

```
$ecosphere.handlers
```

| Name       | Type     | Default | Description                                                                        |
| :--------- | :------- | :------ | :--------------------------------------------------------------------------------- |
| `navigate` | `string` | `void`  | Handle click on links - `$router.push` for internal and `window.open` for external |

#### Accessibility

```
$ecosphere.accessibility
```

| Name               | Type     | Default                            | Description                                         |
| :----------------- | :------- | :--------------------------------- | :-------------------------------------------------- |
| `toggleSize`       | `string` | `'increase'`, `'decrease'`, `null` | Toggle the `font-size` of fonts and icons           |
| `toggleSpacing`    | `string` | `'increase'`, `'decrease'`, `null` | Toggle the default `letter-spacing` property        |
| `toggleHeight`     | `string` | `'increase'`, `'decrease'`, `null` | Toggle the default `line-height` property           |
| `toggleSaturation` | `string` | `'increase'`, `'decrease'`, `null` | Increase or decrease default saturation             |
| `resetSize`        | `void`   | `void`                             | Reset to the default `font-size` of fonts and icons |
| `resetSpacing`     | `void`   | `void`                             | Reset to the default `letter-spacing` property      |
| `resetHeight`      | `void`   | `void`                             | Reset to the default `line-height` property         |
| `resetSaturation`  | `void`   | `void`                             | Reset to the default saturation                     |
| `reset`            | `void`   | `void`                             | Reset everything to default settings                |
