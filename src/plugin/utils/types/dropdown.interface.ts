import { directions } from "@/plugin/utils/types.interface";

export type dropdown_theme =
	| "auto"
	| "light"
	| "dark"
	| "invert"
	| "transparent";

export interface dropdown_config {
	contain: boolean;
	flow: directions;
	outline: boolean;
	theme: dropdown_theme;
}
