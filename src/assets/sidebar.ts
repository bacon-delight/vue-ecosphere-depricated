import { unknown_nested_type } from "@/plugin/utils/types.interface";

export default function (): unknown_nested_type {
	return [
		{
			label: this.$t("headers.guide"),
			value: "",
			children: [
				{ label: "Installation", value: "/guide/installation" },
				{ label: "Configuration", value: "/guide/configuration" },
			],
		},
		{
			label: "Components",
			value: "",
			children: [
				{
					label: "Layout",
					value: "/components/layout",
					children: [
						{
							label: "Navbar",
							value: "/components/layout/navbar",
						},
						{
							label: "Sidebar",
							value: "/components/layout/sidebar",
						},
					],
				},
				{
					label: "Action",
					value: "",
					children: [
						{
							label: "Link",
							value: "/components/action/link",
						},
						{
							label: "Menu",
							value: "/components/action/menu",
						},
						{
							label: "Select",
							value: "/components/action/select",
						},
					],
				},

				{
					label: "Inputs",
					value: "",
					children: [
						{
							label: "Dropdown",
							value: "/components/inputs/dropdown",
						},
					],
				},
			],
		},
	];
}
