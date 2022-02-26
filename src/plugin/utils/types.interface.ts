// Import Component Types
export * from "./types/accessibility.interface";
export * from "./types/button.interface";
export * from "./types/dropdown.interface";
export * from "./types/input.interface";
export * from "./types/menu.interface";
export * from "./types/navbar.interface";
export * from "./types/select.interface";

// Plugin Configuration & Helper Types
export type themes = "light" | "dark" | "auto";
export interface color_palette {
	[key: string]: string;
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
