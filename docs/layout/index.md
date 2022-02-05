# Layout

```html:no-line-numbers
<v-eco-layout />
```

Render a responsive layout with navigation and sidebar

[[toc]]

### Types

Types are imported from

-   [Navigation](/layout/navigation.html#types)
-   [Sidebar](/layout/sidebar.html#types)

### Props

| Name         | Type                | Default | Required | Description                               |
| ------------ | ------------------- | ------- | -------- | ----------------------------------------- |
| `logo`       | `string`            |         | Yes      | Logo path/link                            |
| `navigation` | `navigation_item[]` |         | Yes      | List of items to render in the navigation |
| `sidebar`    | `sidebar_item[]`    |         | Yes      | List of items to render in the sidebar    |

### Usage

:::: code-group
::: code-group-item HTML

```html:no-line-numbers
<v-eco-layout logo="/img/logo.png" :navigation="navigationOptions", :sidebar="sidebarOptions" />
```

:::
::: code-group-item PUG

```pug:no-line-numbers
v-eco-layout(logo="/img/logo.png", :navigation="navigationOptions", :sidebar="sidebarOptions")
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
			sidebarOptions: [
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
