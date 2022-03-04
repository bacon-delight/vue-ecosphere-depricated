import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/introduction",
		name: "Introduction",
		component: () => import("../views/Docs.vue"),
		children: [
			{
				path: "ecosphere",
				component: () => import("../views/introduction/Ecosphere.vue"),
			},
		],
	},
	{
		path: "/design",
		name: "Design",
		component: () => import("../views/Docs.vue"),
		children: [
			{
				path: "typography",
				component: () => import("../views/design/Typography.vue"),
			},
		],
	},
	{
		path: "/guide",
		name: "Guide",
		component: () => import("../views/Docs.vue"),
		children: [
			{
				path: "installation",
				component: () => import("../views/guide/Installation.vue"),
			},
			{
				path: "configuration",
				component: () => import("../views/guide/Configuration.vue"),
			},
			{
				path: "theme",
				component: () => import("../views/guide/Theme.vue"),
			},
			{
				path: "types",
				component: () => import("../views/guide/Types.vue"),
			},
		],
	},
	{
		path: "/components",
		name: "Components",
		component: () => import("../views/Docs.vue"),
		children: [
			{
				path: "layout",
				component: () => import("../views/RouteInjection.vue"),
				children: [
					{
						path: "navbar",
						component: () =>
							import("../views/components/layout/Navbar.vue"),
					},
					{
						path: "sidebar",
						component: () =>
							import("../views/components/layout/Sidebar.vue"),
					},
				],
			},
			{
				path: "action",
				component: () => import("../views/RouteInjection.vue"),
				children: [
					{
						path: "accessibility",
						component: () =>
							import(
								"../views/components/action/Accessibility.vue"
							),
					},
					{
						path: "button",
						component: () =>
							import("../views/components/action/Button.vue"),
					},
					{
						path: "link",
						component: () =>
							import("../views/components/action/Link.vue"),
					},
					{
						path: "menu",
						component: () =>
							import("../views/components/action/Menu.vue"),
					},
					{
						path: "select",
						component: () =>
							import("../views/components/action/Select.vue"),
					},
				],
			},
			{
				path: "common",
				component: () => import("../views/RouteInjection.vue"),
				children: [
					{
						path: "font",
						component: () =>
							import("../views/components/common/Font.vue"),
					},
					{
						path: "header",
						component: () =>
							import("../views/components/common/Header.vue"),
					},
					{
						path: "icon",
						component: () =>
							import("../views/components/common/Icon.vue"),
					},
					{
						path: "tag",
						component: () =>
							import("../views/components/common/Tag.vue"),
					},
				],
			},
			{
				path: "input",
				component: () => import("../views/RouteInjection.vue"),
				children: [
					{
						path: "checkbox",
						component: () =>
							import("../views/components/input/Checkbox.vue"),
					},
					{
						path: "dropdown",
						component: () =>
							import("../views/components/input/Dropdown.vue"),
					},
					{
						path: "input",
						component: () =>
							import("../views/components/input/Input.vue"),
					},
					{
						path: "radio",
						component: () =>
							import("../views/components/input/Radio.vue"),
					},
					{
						path: "switch",
						component: () =>
							import("../views/components/input/Switch.vue"),
					},
				],
			},
		],
	},
	{
		path: "/test",
		name: "Test",
		component: () => import("../views/Test.vue"),
	},
	{
		path: "/coming-soon",
		name: "ComingSoon",
		component: () => import("../views/ComingSoon.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior: () => {
		/* eslint-disable-next-line */
		const content: any = document.querySelector(".layout__content");
		content ? (content.scrollTop = 0) : null;
	},
});

export default router;
