module.exports = {
	head: [["link", { rel: "icon", href: "/logo/general.png" }]],
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
	},
	plugins: [
		[
			"@vuepress/docsearch",
			{
				appId: process.env.DOCSEARCH_APP_ID,
				apiKey: process.env.DOCSEARCH_API_KEY,
				indexName: "vue-ecosphere",
				locales: {
					"/": {
						placeholder: "Search",
						translations: {
							button: {
								buttonText: "Search",
							},
						},
					},
					"/zh/": {
						placeholder: "搜索文档",
						translations: {
							button: {
								buttonText: "搜索文档",
							},
						},
					},
				},
			},
		],
	],
};
