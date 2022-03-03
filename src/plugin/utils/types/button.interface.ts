export type button_theme =
	| "auto"
	| "light"
	| "dark"
	| "invert"
	| "hue"
	| "success"
	| "warning"
	| "critical"
	| "transparent"
	| "primary"
	| "secondary";

export interface button_config {
	theme: button_theme;
	outline: boolean;
	compact: boolean;
}
