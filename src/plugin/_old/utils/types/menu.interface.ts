import { link_icon_direction } from "@/plugin/utils/types.interface";

export interface menu_item {
	label: string;
	icon?: string;
	iconDirection?: link_icon_direction;
	route?: string;
	action?: () => void;
	children?: menu_item[];
}
