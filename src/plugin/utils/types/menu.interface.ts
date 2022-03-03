import { choice_option } from "@/plugin/utils/types.interface";

export interface menu_option extends choice_option {
	children?: menu_option[];
}

export type menu_theme = "auto" | "light" | "dark" | "invert";
export type menu_hue =
	| "hue"
	| "primary"
	| "secondary"
	| "warning"
	| "success"
	| "critical"
	| "information";

export interface menu_config {
	theme: menu_theme;
	hue: menu_hue;
}
