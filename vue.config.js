module.exports = {
	pwa: {
		name: process.env.APP_NAME || "Ecosphere Design System",
	},
	// chainWebpack: (config) => {
	// 	config.plugin("html").tap((args) => {
	// 		args[0].title = process.env.APP_NAME || "Ecosphere Design System";
	// 		return args;
	// 	});
	// },
};
