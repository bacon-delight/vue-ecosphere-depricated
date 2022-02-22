import { directions, choice_option } from "@/plugin/utils/types.interface";

export interface select_config {
	contain: boolean;
	flow: directions;
	outline: boolean;
	center: boolean;
	hue: boolean;
	theme: "auto" | "light" | "dark" | "invert";
}

export interface select_option extends choice_option {
	action?: () => void;
}
