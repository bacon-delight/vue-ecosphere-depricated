import { createStore } from "vuex";
// import router from "@/router";

export default createStore({
	state: {
		navigation: [
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
	},
	mutations: {},
	actions: {},
	modules: {},
	getters: {
		navigation: (state) => {
			return state.navigation;
		},
	},
});
