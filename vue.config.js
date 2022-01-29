module.exports = {
	pwa: {
		name: process.env.APP_NAME || "Ecosphere Design System",
	},
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "@/assets/scss/main.scss";`,
			},
		},
		extract: false,
	},
};
