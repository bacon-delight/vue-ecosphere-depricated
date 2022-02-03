# Dropdown

[[toc]]

```html:no-line-numbers
<v-eco-dropdown />
```

#### When to use

When there are multiple secondary options to be selected that don't need to be rendered by default, you can use the dropdown component. The list will be rendered when the use clicks on the dropdown.

## API

### Types

```ts
type dropdown_flow = "left" | "right";

interface dropdown_option {
	label: string;
	route?: string;
	action?: () => void;
}
```

#### Dropdown Option

The `dropdown_option` interface has the following properties:

-   `label` - Label to for the option
-   `route` - Navigate to a route within the application
-   `action` - Perform a custom action when the option is selected

::: tip
For navigating to an external URL, use `action` instead of the `route`. The `route` will be pushed through `$router.push` internally and might lead to error. For example,

```js
const options = [
	{
		label: "Remix Icon",
		action: () => {
			window.open("https://remixicon.com/", "_blank");
		},
	},
];
```

:::

### Props

| Name       | Type                | Default | Required | Description                                              |
| ---------- | ------------------- | ------- | -------- | -------------------------------------------------------- |
| `label`    | `string`            | ''      | No       | Label used in the dropdown                               |
| `options`  | `dropdown_option[]` |         | Yes      | List of options to be rendered in the dropdown           |
| `flow`     | `dropdown_flow`     | `right` | No       | Dropdown list overflow direction                         |
| `contain`  | `boolean`           | `false` | No       | Contains the dropdown list within the width of the label |
| `centered` | `bolean`            | `false` | No       | Center align the list items                              |

### Usage

:::: code-group
::: code-group-item HTML

```html
<v-eco-dropdown label="Resources" :options="options" flow="left" />
```

:::
::: code-group-item PUG

```pug
v-eco-dropdown(label="Resources", :options="options", flow="left")
```

:::

::: code-group-item SCRIPT

```js
import { defineComponent } from "vue";

export default defineComponent({
	name: "Example",
	data() {
		return {
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
				{
					label: "About",
					route: "/about",
				},
			],
		};
	},
});
```

:::
::::
