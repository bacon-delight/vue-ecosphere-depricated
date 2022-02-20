import { unknown_nested_type } from "@/plugin/utils/types.interface";

export default function (): unknown_nested_type {
	return [
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
						action: (): void => {
							this.$i18n.locale = "en";
							localStorage.setItem("locale", "en");
						},
					},
					{
						label: "中文",
						value: "zh",
						action: (): void => {
							this.$i18n.locale = "zh";
							localStorage.setItem("locale", "zh");
						},
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
}
