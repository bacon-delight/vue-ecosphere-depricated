import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/explore",
		name: "Explore",
		component: () => import("../views/Explore.vue"),
		children: [
			// {
			// 	path: "/",
			// 	component: () => import("../views/layout/Layout.vue"),
			// },
			{
				path: "layout",
				component: () => import("../views/layout/Layout.vue"),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
