// Imports
export * from "./types/dropdown.interface";
export * from "./types/navigation.interface";

// Configurations & Helpers
export type themes = "light" | "dark" | "auto";
export type setTheme = (option: themes) => void;
export interface ecosphere_config {
	theme: themes;
}
export interface ecosphere_helpers {
	setTheme: setTheme;
}

export interface unknown_nested_object {
	// eslint-disable-next-line
	[key: string]: any;
}
