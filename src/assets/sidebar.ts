import { unknown_nested_type } from "@/plugin/utils/types.interface";

export default function (): unknown_nested_type {
	return [
		{
			label: this.$t("headers.introduction"),
			value: "",
			children: [
				{
					label: this.$t("headers.ecosphere"),
					value: "/introduction/ecosphere",
				},
				{
					label: this.$t("site.expo"),
					value: "/introduction/expo",
				},
				{
					label: this.$t("headers.team"),
					value: "/introduction/team",
				},
			],
		},
		{
			label: this.$t("headers.design"),
			value: "",
			children: [
				{
					label: this.$t("headers.colours"),
					value: "/design/colours",
				},
				{
					label: this.$t("headers.typography"),
					value: "/design/typography",
				},
				{
					label: this.$t("headers.remix_icon"),
					value: "https://remixicon.com/",
				},
			],
		},
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
							label: this.$t("headers.breadcrumb"),
							value: "/components/action/breadcrumb",
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
						{
							label: this.$t("headers.toggle"),
							value: "/components/action/toggle",
						},
					],
				},
				{
					label: this.$t("headers.common"),
					value: "",
					children: [
						{
							label: this.$t("headers.avatar"),
							value: "/components/common/avatar",
						},
						{
							label: this.$t("headers.header"),
							value: "/components/common/header",
						},
						{
							label: this.$t("headers.icon"),
							value: "/components/common/icon",
						},
						{
							label: this.$t("headers.paragraph"),
							value: "/components/common/paragraph",
						},
						{
							label: this.$t("headers.table"),
							value: "/components/common/table",
						},
						{
							label: this.$t("headers.tag"),
							value: "/components/common/tag",
						},
					],
				},
				{
					label: this.$t("headers.inputs"),
					value: "",
					children: [
						{
							label: this.$t("headers.checkbox"),
							value: "/components/input/checkbox",
						},
						{
							label: this.$t("headers.dropdown"),
							value: "/components/input/dropdown",
						},
						{
							label: this.$t("headers.input"),
							value: "/components/input/input",
						},
						{
							label: this.$t("headers.radio"),
							value: "/components/input/radio",
						},
						{
							label: this.$t("headers.switch"),
							value: "/components/input/switch",
						},
					],
				},
			],
		},
	];
}
