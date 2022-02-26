export interface input_config {
	outline: boolean;
	theme: "auto" | "light" | "dark" | "invert" | "transparent";
}

export type input_type = "text" | "number" | "password" | "email";

export enum input_types {
	text = "text",
	number = "number",
	password = "password",
	email = "email",
}
