import { createStore } from "vuex";
import navbar from "@/assets/navbar";
import sidebar from "@/assets/sidebar";

export default createStore({
	state: {
		navbar: navbar,
		sidebar: sidebar,
	},
	mutations: {},
	actions: {},
	modules: {},
	getters: {
		navbar: (state) => {
			return state.navbar;
		},
		sidebar: (state) => {
			return state.sidebar;
		},
	},
});
