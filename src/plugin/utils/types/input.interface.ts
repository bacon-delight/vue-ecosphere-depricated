export interface input_config {
	outline: boolean;
	theme: "auto" | "light" | "dark" | "invert" | "transparent";
	invalidWarning: string;
	regex: RegExp | null;
}

export type input_type = "text" | "number" | "password" | "email" | "phone";

export enum input_types {
	text = "text",
	number = "number",
	password = "password",
	email = "email",
	phone = "phone",
}

export enum input_types_to_html_types {
	text = "text",
	number = "number",
	password = "password",
	email = "text",
	phone = "number",
	color = "color",
}
