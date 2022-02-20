import { unknown_nested_type } from "@/plugin/utils/types.interface";

export type navbar_item_type =
	| "link"
	| "dropdown"
	| "select"
	| "text"
	| "theme";

export enum navbar_item_types {
	"link" = "link",
	"dropdown" = "dropdown",
	"select" = "select",
	"text" = "text",
	"theme" = "theme",
}

export interface navbar_option {
	type: navbar_item_type;
	attributes: unknown_nested_type;
}