import { dropdown_flow, dropdown_option } from "@/plugin/utils/types.interface";

export type navigation_option_type = "dropdown" | "locale" | "theme" | "link";

export interface navigation_item {
	type: navigation_option_type;
	label?: string;
	flow?: dropdown_flow;
	contain?: boolean;
	centered?: boolean;
	options?: dropdown_option[];
	action?: () => void;
	route?: string;
	icon?: string;
}
