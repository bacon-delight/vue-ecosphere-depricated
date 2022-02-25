import { directions } from "@/plugin/utils/types.interface";

export interface accessibility_config {
	flow: directions;
	outline: boolean;
	hue: boolean;
	indicator: boolean;
	theme: "auto" | "light" | "dark" | "invert";
	size: boolean;
	spacing: boolean;
	height: boolean;
	saturation: boolean;
	reset: boolean;
	resetLabel: string;
}
