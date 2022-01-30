// Import Component Types
export * from "./types/dropdown.interface";
export * from "./types/navigation.interface";

// Plugin Configuration & Helper Types
export type themes = "light" | "dark" | "auto";
export type setTheme = (option: themes) => void;

// export interface unknown_nested_object {
// 	// eslint-disable-next-line
// 	[key: string]: any;
// }
