import guide_installation from "@/assets/docs/guide/installation/en.md";
import guide_configuration from "@/assets/docs/guide/configuration/en.md";
import components_action_button from "@/assets/docs/components/action/button/en.md";

export default {
	site: {
		title: "Ecosphere Design Language",
		description:
			"A modern lightweight design language, built on the principles of minimalism with inspirations from Scandinavian architecture, handcrafted for data intensive applications",
		footer_mistake: "Caught a mistake or want to improve the content? ",
		footer_edit: "Edit this page on GitHub :ri-arrow-right-up-line:",
	},
	headers: {
		guide: "Guide",
		installation: "Installation",
		configuration: "Configuration",
		components: "Components",
		layout: "Layout",
		action: "Action",
		inputs: "Inputs",
		button: "Button",
	},
	actions: {
		learn: "Design Philosophy",
		get_started: "Get Started :ri-arrow-right-line:",
	},
	modules: {
		guide: {
			installation: guide_installation,
			configuration: guide_configuration,
		},
		components: {
			action: {
				button: components_action_button,
			},
		},
	},
	keywords: {
		default: "Default",
		light: "Light",
		dark: "Dark",
		inverted: "Inverted",
		brand: "Brand",
		themed: "Themed",
		with_icon: "With Icon :ri-remixicon-line:",
		critical: "Critical",
		success: "Success",
		warning: "Warning",
		no_outline: "No Outline",
		examples: "Examples",
	},
};
