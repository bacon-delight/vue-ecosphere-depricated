import { directions } from "@/plugin/utils/types.interface";

export interface dropdown_config {
	contain: boolean;
	flow: directions;
	// theme: themes;
	outline: boolean;
}

export enum dropdown_types {
	dropdown = "dropdown",
	select = "select",
}
