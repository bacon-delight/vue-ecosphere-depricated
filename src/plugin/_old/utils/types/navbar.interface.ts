import {
	dropdown_flow,
	dropdown_option,
	link_icon_direction,
} from "@/plugin/utils/types.interface";

export type navbar_option_type = "dropdown" | "locale" | "theme" | "link";

export interface navbar_item {
	type: navbar_option_type;
	label?: string;
	flow?: dropdown_flow;
	contain?: boolean;
	centered?: boolean;
	options?: dropdown_option[];
	action?: () => void;
	route?: string;
	icon?: string;
}

export interface navbar_item_theme {
	type: "theme";
}

export interface navbar_item_dropdown {
	type: "dropdown";
	options: {
		label: string;
		flow: dropdown_flow;
		contain: boolean;
		centered: boolean;
		options: dropdown_option[];
	};
}

export interface navbar_item_link {
	type: "link";
	options: {
		label?: string;
		icon?: string;
		direction?: link_icon_direction;
		action?: () => void;
		route?: string;
	};
}

// export type navbar_item = dropdown_option | navbar_item_theme
