// Import Component Types
export * from "./types/dropdown.interface";
export * from "./types/link.interface";
export * from "./types/navigation.interface";

// Plugin Configuration & Helper Types
export type themes = "light" | "dark" | "auto";
export interface color {
	variable: string;
	value: string;
}
export type color_palette = color[];

export interface unknown_nested_type {
	// eslint-disable-next-line
	[key: string]: any;
}
// eslint-disable-next-line
export type unknown_type = any;