## Configuration

Once the plugin is imported, you'll have access to a global property `$ecosphere` (or `this.$ecosphere` depending on where it's used) which will expose some helper functions.

#### Theme

```
$ecosphere.theme
```

The configuration helpers for theme will be availble under `this.$ecosphere.theme` in the global property.

##### API

| Name              | Param Type                                                       | Return Type              | Description                                                                                   |
| :---------------- | :--------------------------------------------------------------- | :----------------------- | :-------------------------------------------------------------------------------------------- |
| `setTheme`        | [`themes`](/guide/types)                                         | `void`                   | Set a theme which will be applied to all the components                                       |
| `getCurrentTheme` | `void`                                                           | [`themes`](/guide/types) | Returns the current theme                                                                     |
| `setColors`       | [`color_palette`](/guide/types), [`color_palette`](/guide/types) | `void`                   | Override the default palettes with custom colors, pass the `light` followed by `dark` palette |

#### Handlers

```
$ecosphere.handlers
```

The handlers be availble under `this.$ecosphere.handlers` in the global property.

##### API

| Name       | Param Type | Return Type | Description                                                                        |
| :--------- | :--------- | :---------- | :--------------------------------------------------------------------------------- |
| `navigate` | `string`   | `void`      | Handle click on links - `$router.push` for internal and `window.open` for external |
