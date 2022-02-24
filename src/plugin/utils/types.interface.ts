// Import Component Types
export * from "./types/button.interface";
export * from "./types/dropdown.interface";
export * from "./types/menu.interface";
export * from "./types/navbar.interface";
export * from "./types/select.interface";

// Plugin Configuration & Helper Types
export type themes = "light" | "dark" | "auto";
export interface color_palette {
	[key: string]: string;
}
export type accessibility_toggles = "increase" | "decrease";
export enum accessibility_toggle {
	increase = "increase",
	decrease = "decrease",
}
export type accessibility_states = 0 | 1 | 2;
export enum accessibility_state {
	zero = 0,
	one = 1,
	two = 2,
}
export enum accessibility_class {
	// DOM Body
	size1 = "accessibility__size--1",
	size2 = "accessibility__size--2",
	spacing1 = "accessibility__spacing--1",
	spacing2 = "accessibility__spacing--2",
	height1 = "accessibility__height--1",
	height2 = "accessibility__height--2",
	saturation0 = "accessibility__saturation--0",
	saturation2 = "accessibility__saturation--2",

	// Local Storage
	size = "accessibility__size",
	spacing = "accessibility__spacing",
	height = "accessibility__height",
	saturation = "accessibility__saturation",
}

// Commons
export type directions = "left" | "right" | "center";
export interface choice_option {
	label: string;
	value: string | number;
}

// Unknowns
export interface unknown_nested_type {
	// eslint-disable-next-line
	[key: string]: any;
}
// eslint-disable-next-line
export type unknown_type = any;
