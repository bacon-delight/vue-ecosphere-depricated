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

##### Guided Examples

###### Setting a Theme

To set a theme across all components, use the `setTheme` methods as follows:

```js
this.$ecosphere.theme.setTheme("light");
```

###### Get Current Theme

To get the current theme being applied, use the `getCurrentTheme` method as follows:

```js
const currentTheme = this.$ecosphere.theme.getCurrentTheme();
```

###### Set Custom Colors

Ecosphere uses its own colors for themeing by default. You can override them with your own custom or brand colors using the `setColors` method, and Ecosphere will apply your colors across all components and themes. Here are the defaults used by Ecosphere that you can override:

```ts
// Set a palette for light mode, applied to :root
export const defaultLightPalette: color_palette = {
  "--color-background": "#fdfdfd",
  "--color-background-faded": "#f5f5f5",
  "--color-contrast": "#191919",
  "--color-contrast-faded": "#232323",
  "--color-hue": "#5ba5ef",
  "--color-hue-faded": "#8dc6ff",
  "--color-hue-contrast": "#fdfdfd",
};

// Set a palette for dark mode
export const defaultDarkPalette: color_palette = {
  "--color-background": "#191919",
  "--color-background-faded": "#232323",
  "--color-contrast": "#fdfdfd",
  "--color-contrast-faded": "#f5f5f5",
};

// Pass over the palettes to the setColors method
this.$ecosphere.theme.setColors(customLightPalette, customDarkPalette);
```

These CSS variables will be availble globally and can be used across the components. You can also add your own variables to make them available globally.

#### Handlers

```
$ecosphere.handlers
```

The handlers be availble under `this.$ecosphere.handlers` in the global property.

##### API

| Name       | Param Type | Return Type | Description                                                                        |
| :--------- | :--------- | :---------- | :--------------------------------------------------------------------------------- |
| `navigate` | `string`   | `void`      | Handle click on links - `$router.push` for internal and `window.open` for external |
