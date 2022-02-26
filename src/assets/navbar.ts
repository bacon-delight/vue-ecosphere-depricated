import { unknown_nested_type } from "@/plugin/utils/types.interface";

export default function (): unknown_nested_type {
	return [
		{
			type: "select",
			attributes: {
				label: this.$t("headers.resources"),
				options: [
					{
						label: `:ri-github-fill: ${this.$t("headers.github")}`,
						value: "https://github.com/bacon-delight/vue-ecosphere",
					},
					{
						label: `:ri-remixicon-line: ${this.$t(
							"headers.remix_icon"
						)}`,
						value: "https://remixicon.com/",
					},
					{
						label: `:ri-pencil-ruler-2-line: ${this.$t(
							"headers.figma_kit"
						)}`,
						value: "https://www.figma.com/community/file/1067444265295956708/Ecosphere-Design-System",
					},
					{
						label: `:ri-npmjs-line: ${this.$t(
							"headers.npm_package"
						)}`,
						value: "https://www.npmjs.com/package/vue-ecosphere",
					},
					{
						label: `:ri-gamepad-line: ${this.$t(
							"headers.sandbox"
						)}`,
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
				resetLabel: `${this.$t("actions.reset")} :ri-restart-line:`,
				config: {
					flow: "left",
					outline: false,
					hue: false,
					indicator: false,
					theme: "auto",
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
