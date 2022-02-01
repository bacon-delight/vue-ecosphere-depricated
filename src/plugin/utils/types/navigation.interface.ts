import { dropdown_flow, dropdown_option } from "@/plugin/utils/types.interface";

export type navigation_option_type = "dropdown" | "locale" | "theme";

export interface navigation_item {
	type: navigation_option_type;
	label?: string;
	flow?: dropdown_flow;
	contain?: boolean;
	centered?: boolean;
	options?: dropdown_option[];
}

export type navigation_items = navigation_item[];
