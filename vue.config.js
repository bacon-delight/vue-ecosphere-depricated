module.exports = {
	pwa: {
		name: process.env.APP_NAME || "Ecosphere Design System",
		themeColor: "#5ba5ef",
		msTileColor: "#000000",
		appleMobileWebAppCapable: "yes",
		appleMobileWebAppStatusBarStyle: "black",
		manifestOptions: {
			name: process.env.APP_NAME || "Ecosphere Design System",
			short_name: "Ecosphere",
			start_url: ".",
			theme_color: "#5ba5ef",
		},
	},
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "@/assets/scss/main.scss";`,
			},
		},
		extract: false,
	},
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.md$/i,
					loader: "raw-loader",
				},
			],
		},
	},
};
