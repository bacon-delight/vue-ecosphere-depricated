import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
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
				path: "action",
				component: () => import("../views/RouteInjection.vue"),
				children: [
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
				path: "input",
				component: () => import("../views/RouteInjection.vue"),
				children: [
					{
						path: "dropdown",
						component: () =>
							import("../views/components/input/Dropdown.vue"),
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
