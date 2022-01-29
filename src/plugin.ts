// Common
import Icon from "./plugin/common/icon/Icon.vue";

// Layout
import Layout from "./plugin/layout/Layout.vue";
import Navigation from "./plugin/layout/navigation/Navigation.vue";
import Sidebar from "./plugin/layout/sidebar/Sidebar.vue";

// Components
import Dropdown from "./plugin/components/dropdown/Dropdown.vue";

// Types & Utilities
import {
	themes,
	ecosphere_config,
	ecosphere_helpers,
} from "./plugin/utils/types.interface";
import { setTheme } from "./plugin/utils/setTheme";

// Configurations & Helpers
const config: ecosphere_config = {
	theme: "auto" as themes,
	// theme: "light" as themes,
};
const helpers: ecosphere_helpers = {
	setTheme,
};
const ecosphere = { config, helpers };
function initialize(): void {
	setTheme(config.theme);
}

/* eslint-disable */
export default {
	install: (app: any, options: any): void => {
		initialize();

		// Provider
		app.provide("ecosphere", ecosphere);

		// Common
		app.component("v-eco-icon", Icon);

		// Layout
		app.component("v-eco-layout", Layout);
		app.component("v-eco-navigation", Navigation);
		app.component("v-eco-sidebar", Sidebar);

		// Components
		app.component("v-eco-dropdown", Dropdown);
	},
};
