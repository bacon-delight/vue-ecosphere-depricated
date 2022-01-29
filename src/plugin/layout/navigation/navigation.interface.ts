import {
	dropdown_flow,
	dropdown_option,
} from "@/plugin/components/dropdown/dropdown.interface";

export type navigation_option_type = "dropdown";
export type navigation_option_category = "locale";

export interface navigation_item {
	type: navigation_option_type;
	label?: string;
	category?: navigation_option_category;
	flow?: dropdown_flow;
	contain?: boolean;
	centered?: boolean;
	options: dropdown_option[];
}

export type navigation = navigation_item[];
