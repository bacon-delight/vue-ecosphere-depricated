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
		start_urls: ["https://docs.ecosphere.dev/"],
		discoveryPatterns: ["https://docs.ecosphere.dev/**"],
		selectors: {
			lvl0: {
				selector: ".sidebar-heading.active",
				global: true,
				default_value: "Documentation",
			},
			lvl1: ".theme-default-content h1",
			lvl2: ".theme-default-content h2",
			lvl3: ".theme-default-content h3",
			lvl4: ".theme-default-content h4",
			lvl5: ".theme-default-content h5",
			text: ".theme-default-content p, .theme-default-content li",
			lang: {
				selector: "/html/@lang",
				type: "xpath",
				global: true,
			},
		},
		custom_settings: {
			attributesForFaceting: ["lang"],
		},
	},
];
