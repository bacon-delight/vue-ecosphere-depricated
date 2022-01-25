module.exports = [
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
];
