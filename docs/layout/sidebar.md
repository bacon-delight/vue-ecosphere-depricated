# Sidebar

```html:no-line-numbers
<v-eco-sidebar />
```

Renders a custom sidebar with nested navigation. This component uses the [Menu](/components/menu.html) component internally.

::: tip
It's recommended to use the [Layout](/layout) instead, which contains the navigation and handles a responsive sidebar as well.
:::

[[toc]]

### Types

```ts:no-line-numbers
export interface sidebar_item {
	label: string;
	route?: string;
	action?: () => void;
	children?: sidebar_item[];
}
```

#### Sidebar Item

The `sidebar_item` interface has the following properties:

| Name       | Type             | Required | Description                                           |
| ---------- | ---------------- | -------- | ----------------------------------------------------- |
| `label`    | `string`         | Yes      | Renders the label for the navigation item             |
| `route`    | `string`         | No       | The route to navigate to when the item is clicked     |
| `action`   | `() => void`     | No       | The action to execute when the item is clicked        |
| `children` | `sidebar_item[]` | No       | The children of the sidebar item, which can be nested |

### Props

| Name      | Type             | Default | Required | Description                                 |
| --------- | ---------------- | ------- | -------- | ------------------------------------------- |
| `options` | `sidebar_item[]` |         | Yes      | List of items to render in the sidebar menu |

### Events

| Name            | Payload | Description                                                                             |
| --------------- | ------- | --------------------------------------------------------------------------------------- |
| `toggleSidebar` |         | When the toggle icon is clicked in the sidebar, signals the action to close the sidebar |

### Usage

:::: code-group
::: code-group-item HTML

```html:no-line-numbers
<v-eco-sidebar :options="options" />
```

:::
::: code-group-item PUG

```pug:no-line-numbers
v-eco-sidebar(:options="options")
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
