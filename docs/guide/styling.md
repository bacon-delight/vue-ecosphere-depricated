# Styling

Ecosphere uses some CSS variables for themeing.

### Type

```ts
interface color_palette {
	[key: string]: string;
}
```

### Default Variables

```js
const defaultLightPalette: color_palette = {
	"--color-background": "#fdfdfd",
	"--color-background-faded": "#f5f5f5",
	"--color-contrast": "#1d242b",
	"--color-contrast-faded": "#303841",
};

const defaultDarkPalette: color_palette = {
	"--color-background": "#1d242b",
	"--color-background-faded": "#303841",
	"--color-contrast": "#fdfdfd",
	"--color-contrast-faded": "#f5f5f5",
};
```

Learn more on how to <b>override</b> the default variables using the `setColors` method in the [Configurations](/guide/configurations.html#set-custom-colors) section.
