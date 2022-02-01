// Modules
const modulePrefix = "v-eco";
const modules = [
	require.context("./plugin/common", true, /[a-z]\w+\.(vue)$/),
	require.context("./plugin/components", true, /[a-z]\w+\.(vue)$/),
	require.context("./plugin/layout", true, /[a-z]\w+\.(vue)$/),
];

// Utilities
/* eslint-disable-next-line */
const ecosphere: any = {};
const utilities = [
	require.context("./plugin/utils/helpers", true, /[a-z]\w+\.(ts)$/),
];
utilities.forEach((module) => {
	module.keys().forEach((utility: string) => {
		ecosphere[utility.slice(2, -3)] = module(utility).default;
	});
});

// Initialize
function initialize(): void {
	new ecosphere.theme();
}

export default {
	/* eslint-disable-next-line */
	install: (app: any, options: any): void => {
		initialize();

		// Provider
		app.config.globalProperties.$ecosphere = ecosphere;

		// Import & Register Modules
		modules.forEach((module) => {
			module.keys().forEach((component) => {
				app.component(
					`${modulePrefix}-${component.slice(2, -4)}`,
					module(component).default
				);
			});
		});
	},
};
