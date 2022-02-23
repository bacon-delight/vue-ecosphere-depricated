export interface button_config {
	theme:
		| "auto"
		| "light"
		| "dark"
		| "invert"
		| "hue"
		| "success"
		| "warning"
		| "critical"
		| "transparent";
	outline: boolean;
	compact: boolean;
}
