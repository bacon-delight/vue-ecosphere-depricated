# Menu

```html:no-line-numbers
<v-eco-menu />
```

Menu can be used for rendering a vertical nested tree style navigation. Sidebar uses this component to generate the nested navigation.

::: tip
This component automatically tracks internal page routes and displayes active states accordingly. The current route will be displayed as active if it matches with the `route` option in the `menu_item` interface.
:::

[[toc]]

### Types

Some types are imported from [Link](/components/link.html#types)

```ts:no-line-numbers
interface menu_item {
	label: string;
	icon?: string;
	iconDirection?: link_icon_direction;
	route?: string;
	action?: () => void;
	children?: menu_item[];
}
```

#### Menu Item

The `menu_item` interface has the following properties:

-   `label` - The label of the menu item
-   `icon` - The icon to render by the menu item
    -   `iconDirection` - Refer to link types
-   `route` - The route to navigate to when the menu item is clicked
-   `action` - The action to execute when the menu item is clicked
-   `children` - The children of the menu item, which can be nested

### Props

| Name      | Type          | Default | Required | Description                         |
| --------- | ------------- | ------- | -------- | ----------------------------------- |
| `options` | `menu_item[]` |         | Yes      | List of items to render in the menu |

### Usage

:::: code-group
::: code-group-item HTML

```html:no-line-numbers
<v-eco-menu :options="options" />
```

:::
::: code-group-item PUG

```pug:no-line-numbers
v-eco-menu(:options="options")
```

:::
::: code-group-item Script

```js:no-line-numbers
import { defineComponent } from "vue";

export default defineComponent({
	name: "Example",
	data() {
		return {
			options: [
				{
                    label: "Introduction",
                    children: [
                        {
                            label: "Getting Started",
                            action: () => {
                                console.log("Do something here!");
                            },
                        },
                        {
                            label: "Configurations",
                            route: "/introduction/configurations",
                        },
                    ],
                },
                {
                    label: "Components",
                    children: [
                        {
                            label: "Button",
                            route: "/components/button",
                        },
                        {
                            label: "Dropdown",
                            route: "/components/dropdown",
                        },
                    ],
                },
			],
		};
	},
});
```

:::
::::
