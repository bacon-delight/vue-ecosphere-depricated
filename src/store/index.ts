import { createStore } from "vuex";
// import router from "@/router";

export default createStore({
	state: {
		navigation: [],
		sidebar: [],
		// navigation: [
		// 	{
		// 		type: "link",
		// 		label: "API Guide",
		// 		icon: "ri-arrow-right-up-line",
		// 		action: () => {
		// 			window.open("https://docs.ecosphere.dev/", "_blank");
		// 		},
		// 	},
		// 	{
		// 		type: "dropdown",
		// 		label: "Resources",
		// 		flow: "left",
		// 		contain: false,
		// 		centered: false,
		// 		options: [
		// 			{
		// 				label: "Ecosphere",
		// 				action: () => {
		// 					window.open("https://ecosphere.dev/", "_blank");
		// 				},
		// 			},
		// 			{
		// 				label: "Remix Icon",
		// 				action: () => {
		// 					window.open("https://remixicon.com/", "_blank");
		// 				},
		// 			},
		// 		],
		// 	},
		// 	{
		// 		type: "locale",
		// 		flow: "left",
		// 		contain: false,
		// 		centered: true,
		// 		options: [
		// 			{
		// 				label: "EN",
		// 				value: "",
		// 			},
		// 			{
		// 				label: "中文",
		// 				value: "",
		// 			},
		// 		],
		// 	},
		// 	{
		// 		type: "theme",
		// 	},
		// ],
		// sidebar: [
		// 	{
		// 		label: "Introduction",
		// 		children: [
		// 			{
		// 				label: "Design System",
		// 				action: () => {
		// 					console.log("yo");
		// 				},
		// 			},
		// 		],
		// 	},
		// 	{
		// 		label: "Layout",
		// 		children: [
		// 			{
		// 				label: "Layout",
		// 				route: "/layout/layout",
		// 			},
		// 			{
		// 				label: "Navigation",
		// 				route: "/layout/navigation",
		// 			},
		// 			{
		// 				label: "Sidebar",
		// 				route: "/layout/sidebar",
		// 			},
		// 		],
		// 	},
		// 	{
		// 		label: "Components",
		// 		children: [
		// 			{
		// 				label: "Dropdown",
		// 				route: "/components/dropdown",
		// 			},
		// 			{
		// 				label: "Link",
		// 				route: "/components/link",
		// 			},
		// 			{
		// 				label: "Menu",
		// 				route: "/components/menu",
		// 			},
		// 		],
		// 	},
		// ],
	},
	mutations: {},
	actions: {},
	modules: {},
	getters: {
		navigation: (state) => {
			return state.navigation;
		},
		sidebar: (state) => {
			return state.sidebar;
		},
	},
});
