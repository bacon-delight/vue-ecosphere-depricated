import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/components",
		name: "Components",
		component: () => import("../views/components/Components.vue"),
		children: [
			{
				path: "button",
				component: () =>
					import("../views/components/button/Button.vue"),
			},
			{
				path: "dropdown",
				component: () =>
					import("../views/components/dropdown/Dropdown.vue"),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
