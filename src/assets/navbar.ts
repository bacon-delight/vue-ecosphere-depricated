export default [
	{
		type: "select",
		attributes: {
			label: "Resources",
			options: [
				{
					label: "API Guide :ri-arrow-right-up-line:",
					value: "https://docs.ecosphere.dev/",
				},
				{
					label: "Remix Icon :ri-arrow-right-up-line:",
					value: "https://remixicon.com/",
				},
			],
			config: {
				flow: "left",
				outline: false,
				contain: false,
			},
		},
	},
	{
		type: "select",
		attributes: {
			label: ":ri-translate:",
			options: [
				{
					label: "EN",
					value: "en",
				},
				{
					label: "中文",
					value: "zh",
				},
			],
			config: {
				flow: "left",
				center: true,
				outline: false,
			},
		},
	},
	{
		type: "theme",
	},
];
