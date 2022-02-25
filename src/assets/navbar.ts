import { unknown_nested_type } from "@/plugin/utils/types.interface";

export default function (): unknown_nested_type {
	return [
		{
			type: "select",
			attributes: {
				label: "Resources",
				options: [
					{
						label: ":ri-github-fill: GitHub",
						value: "https://github.com/bacon-delight/vue-ecosphere",
					},
					{
						label: ":ri-remixicon-line: Remix Icon",
						value: "https://remixicon.com/",
					},
					{
						label: ":ri-pencil-ruler-2-line: Figma Kit",
						value: "https://www.figma.com/community/file/1067444265295956708/Ecosphere-Design-System",
					},
					{
						label: ":ri-npmjs-line: NPM Package",
						value: "https://www.npmjs.com/package/vue-ecosphere",
					},
					{
						label: ":ri-gamepad-line: Sandbox",
						value: "https://codesandbox.io/s/vue-ecosphere-ooudb?file=/src/App.vue",
					},
				],
				config: {
					flow: "left",
					outline: false,
					contain: false,
					hue: false,
				},
			},
		},
		{
			type: "accessibility",
			attributes: {
				config: {
					flow: "left",
					outline: false,
					hue: false,
					indicator: false,
					theme: "auto",
					resetLabel: `${this.$t("actions.reset")} :ri-restart-line:`,
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
					{
						label: "한글",
						value: "ko",
						action: (): void => {
							this.$router.push("/coming-soon");
						},
					},
					{
						label: "Nynorsk",
						value: "no",
						action: (): void => {
							this.$router.push("/coming-soon");
						},
					},
				],
				config: {
					flow: "left",
					center: true,
					outline: false,
					hue: false,
					indicator: false,
				},
			},
		},
		{
			type: "theme",
		},
	];
}
