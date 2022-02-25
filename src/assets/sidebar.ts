import { unknown_nested_type } from "@/plugin/utils/types.interface";

export default function (): unknown_nested_type {
	return [
		{
			label: this.$t("headers.guide"),
			value: "",
			children: [
				{
					label: this.$t("headers.installation"),
					value: "/guide/installation",
				},
				{
					label: this.$t("headers.configuration"),
					value: "/guide/configuration",
				},
				{
					label: this.$t("headers.theme"),
					value: "/guide/theme",
				},
				{
					label: this.$t("headers.types"),
					value: "/guide/types",
				},
			],
		},
		{
			label: this.$t("headers.components"),
			value: "",
			children: [
				{
					label: this.$t("headers.layout"),
					value: "",
					children: [
						{
							label: this.$t("headers.navbar"),
							value: "/components/layout/navbar",
						},
						{
							label: this.$t("headers.sidebar"),
							value: "/components/layout/sidebar",
						},
					],
				},
				{
					label: this.$t("headers.action"),
					value: "",
					children: [
						{
							label: this.$t("headers.accessibility"),
							value: "/components/action/accessibility",
						},
						{
							label: this.$t("headers.button"),
							value: "/components/action/button",
						},
						{
							label: this.$t("headers.link"),
							value: "/components/action/link",
						},
						{
							label: this.$t("headers.menu"),
							value: "/components/action/menu",
						},
						{
							label: this.$t("headers.select"),
							value: "/components/action/select",
						},
					],
				},
				{
					label: this.$t("headers.common"),
					value: "",
					children: [
						{
							label: this.$t("headers.header"),
							value: "/components/common/header",
						},
						{
							label: this.$t("headers.icon"),
							value: "/components/common/icon",
						},
					],
				},
				{
					label: this.$t("headers.inputs"),
					value: "",
					children: [
						{
							label: this.$t("headers.dropdown"),
							value: "/components/input/dropdown",
						},
					],
				},
			],
		},
	];
}
