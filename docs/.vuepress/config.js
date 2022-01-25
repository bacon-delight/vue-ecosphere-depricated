const { path } = require("@vuepress/utils");
const docsearch = require("./theme/docsearch.js");
const sidebar = require("./theme/sidebar.js");
const navigation = require("./theme/navigation.js");

module.exports = {
	head: [["link", { rel: "icon", href: "/logo/generic.png" }]],
	theme: path.resolve(__dirname, "./theme"),
	locales: {
		"/": {
			lang: "en-US",
			title: "Ecosphere Design System",
			description:
				"The design language for modern data intensive applications",
		},
		"/zh/": {
			lang: "zh-CN",
			title: "生态圈设计系统",
			description:
				"The design language for modern data intensive applications",
		},
	},
	themeConfig: {
		locales: {
			"/": {
				selectLanguageName: "English",
			},
			"/zh/": {
				selectLanguageName: "简体中文",
			},
		},
		logo: "/logo/light.png",
		logoDark: "/logo/dark.png",
		repo: "bacon-delight/vue-ecosphere",
		editLink: true,
		editLinkText:
			"Caught a mistake or want to improve the documentation? Edit this page",
		editLinkPattern: ":repo/edit/:branch/docs/:path",
		sidebar: sidebar,
		sidebarDepth: 3,
		navbar: navigation,
	},
	plugins: [docsearch],
};
