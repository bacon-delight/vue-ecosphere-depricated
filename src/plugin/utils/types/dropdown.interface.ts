import { directions } from "@/plugin/utils/types.interface";

export interface dropdown_config {
	contain: boolean;
	flow: directions;
	outline: boolean;
	theme: "auto" | "light" | "dark" | "invert" | "transparent";
}
