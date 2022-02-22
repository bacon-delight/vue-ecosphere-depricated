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
						// {
						// 	label: "Layout",
						// 	value: "/components/layout/layout",
						// },
						// {
						// 	label: "Navbar",
						// 	value: "/components/layout/navbar",
						// },
						// {
						// 	label: "Sidebar",
						// 	value: "/components/layout/sidebar",
						// },
					],
				},
				{
					label: this.$t("headers.action"),
					value: "",
					children: [
						{
							label: this.$t("headers.button"),
							value: "/components/action/button",
						},
						// {
						// 	label: "Link",
						// 	value: "/components/action/link",
						// },
						// {
						// 	label: "Menu",
						// 	value: "/components/action/menu",
						// },
						// {
						// 	label: "Select",
						// 	value: "/components/action/select",
						// },
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
