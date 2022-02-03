# Configurations

Once the plugin is imported, you'll have access to a global property `$ecosphere` (or `this.$ecosphere` depending on where it's used) which will expose some helper functions.

[[toc]]

## Theme

The configuration helpers for theme will be availble under `this.$ecosphere.theme` in the global property.

### Types

```ts
type themes = "light" | "dark" | "auto";
interface color_palette {
	[key: string]: string;
}
```

### Methods

Use prefix: `this.$ecosphere.theme`

| Property          | Param Type(s)                    | Returns Type(s) | Description                                                                                   |
| ----------------- | -------------------------------- | --------------- | --------------------------------------------------------------------------------------------- |
| `setTheme`        | `themes`                         | `void`          | Set a theme which will be applied to all the components                                       |
| `getCurrentTheme` | `void`                           | `themes`        | Returns the current theme                                                                     |
| `setColors`       | `color_palette`, `color_palette` | `void`          | Override the default palettes with custom colors, pass the `light` followed by `dark` palette |

### Guided Examples

#### Setting a Theme

To set a theme across all components, use the `setTheme` methods as follows:

```js
this.$ecosphere.theme.setTheme("light");
```

#### Get Current Theme

To get the current theme being applied, use the `getCurrentTheme` method as follows:

```js
const currentTheme = this.$ecosphere.theme.getCurrentTheme();
```

#### Set Custom Colors

Ecosphere uses its own colors for themeing by default. You can override them with your own custom or brand colors using the `setColors` method, and Ecosphere will apply your colors across all components and themes. Here are the defaults used by Ecosphere that you can override:

```ts
// Set a palette for light mode
const customLightPalette: color_palette = {
	"--color-background": "#fdfdfd",
	"--color-background-faded": "#f5f5f5",
	"--color-contrast": "#1d242b",
	"--color-contrast-faded": "#303841",
};

// Set a palette for dark mode
const customDarkPalette: color_palette = {
	"--color-background": "#1d242b",
	"--color-background-faded": "#303841",
	"--color-contrast": "#fdfdfd",
	"--color-contrast-faded": "#f5f5f5",
};

// Pass over the palettes to the setColors method
this.$ecosphere.theme.setColors(customLightPalette, customDarkPalette);
```

These CSS variables will be availble globally and can be used across the components. You can also add your own variables to make them available globally.
