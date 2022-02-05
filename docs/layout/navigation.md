# Navigation

```html:no-line-numbers
<v-eco-navigation />
```

Render a navigation bar with custom options

::: tip
It's recommended to use the [Layout](/layout) instead, which contains the navigation and handles a responsive sidebar as well.
:::

[[toc]]

### Types

Some types are imported from [Dropdown](/components/dropdown.html#types)

```ts:no-line-numbers
type navigation_option_type = "dropdown" | "locale" | "theme" | "link";

interface navigation_item {
	type: navigation_option_type;
	label?: string;
	flow?: dropdown_flow;
	contain?: boolean;
	centered?: boolean;
	options?: dropdown_option[];
	action?: () => void;
	route?: string;
	icon?: string;
}
```

#### Navigation Item

The `navigation_item` interface has the following properties:

| Name    | Type                     | Required | Description                               |
| ------- | ------------------------ | -------- | ----------------------------------------- |
| `type`  | `navigation_option_type` | Yes      | The type of the navigation item           |
| `label` | `string`                 | No       | Renders the label for the navigation item |

When `type` is `dropdown`, the following can be used:

-   `flow`
-   `contain`
-   `centered`
-   `options`

Refer to [Dropdown](/components/dropdown.html#types) types for more information on these properties.

When `type` is `link`, the following can be used:

-   `action` - A function that is called when the link is clicked, use this for external links
-   `route` - The internal route to navigate to when the link is clicked
-   `icon` - The icon to display in the link

::: tip
To add a theme toggle to the navigation, pass the type as `theme`. The functionality will be taken care of by the component.

```js:no-line-numbers
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

```html:no-line-numbers
<v-eco-navigation logo="/img/logo.png" :navigation="navigationOptions" />
```

:::
::: code-group-item PUG

```pug:no-line-numbers
v-eco-navigation(logo="/img/logo.png", :navigation="navigationOptions")
```

:::

::: code-group-item Script

```js
import { defineComponent } from "vue";

export default defineComponent({
	name: "Example",
	data() {
		return {
			navigationOptions: [
				{
					type: "link",
					label: "API Guide",
					icon: "ri-arrow-right-up-line",
					action: () => {
						window.open("https://docs.ecosphere.dev/", "_blank");
					},
				},
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
