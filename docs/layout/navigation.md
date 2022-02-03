# Navigation

```html:no-line-numbers
<v-eco-navigation />
```

[[toc]]

### When to use

Render a navigation bar with custom options

::: tip
It's recommended to use the [Layout](/layout) instead, which contains the navigation and handles a responsive sidebar as well.
:::

## API

### Types

Some types are imported from [Dropdown](/components/dropdown.html#types)

```ts
type navigation_option_type = "dropdown" | "locale" | "theme";

interface navigation_item {
	type: navigation_option_type;
	label?: string;
	flow?: dropdown_flow;
	contain?: boolean;
	centered?: boolean;
	options?: dropdown_option[];
}
```

#### Navigation Item

The `navigation_item` interface has the following properties:

-   `type` - Type of item to render
    When `type` is `dropdown`, the following can be used
    -   `flow` (when `type` is `dropdown`) - Refer to dropdown types
    -   `contain` (when `type` is `dropdown`) - Refer to dropdown types
    -   `centered` (when `type` is `dropdown`) - Refer to dropdown types
    -   `options` (when `type` is `dropdown`) - Refer to dropdown types
-   `label` - Label for the item

::: tip
To add a theme toggle to the navigation, pass the type as `theme`. The functionality is taken care by the component.

```js
const navigationOptions = [
	{
		type: "theme",
	},
];
```

:::

### Props

| Name            | Type                | Default | Required | Description                                                                 |
| --------------- | ------------------- | ------- | -------- | --------------------------------------------------------------------------- |
| `navigation`    | `navigation_item[]` |         | Yes      | List of items to render in the navigation                                   |
| `logo`          | `string`            |         | Yes      | Logo path/link                                                              |
| `sidebarToggle` | `boolean`           | `false` | No       | Display a sidebar toggle on below `sm` breakpoints and emit `onClick` event |

### Events

| Name            | Payload | Description                                                       |
| --------------- | ------- | ----------------------------------------------------------------- |
| `toggleSidebar` |         | When the `sidebarToggle` is `true` and the toggle icon is clicked |

### Usage

:::: code-group
::: code-group-item HTML

```html
<v-eco-navigation logo="/img/logo.png" :navigation="navigationOptions" />
```

:::
::: code-group-item PUG

```pug
v-eco-navigation(logo="/img/logo.png", :navigation="navigationOptions")
```

:::

::: code-group-item SCRIPT

```js
import { defineComponent } from "vue";

export default defineComponent({
	name: "Example",
	data() {
		return {
			navigationOptions: [
				{
					type: "dropdown",
					label: "Resources",
					flow: "left",
					contain: false,
					centered: false,
					options: [
						{
							label: "Ecosphere",
							action: () => {
								window.open("https://ecosphere.dev/", "_blank");
							},
						},
						{
							label: "Remix Icon",
							action: () => {
								window.open("https://remixicon.com/", "_blank");
							},
						},
					],
				},
				{
					type: "locale",
					flow: "left",
					contain: false,
					centered: true,
					options: [
						{
							label: "EN",
							value: "",
						},
						{
							label: "中文",
							value: "",
						},
					],
				},
				{
					type: "theme",
				},
			],
		};
	},
});
```

:::
::::
