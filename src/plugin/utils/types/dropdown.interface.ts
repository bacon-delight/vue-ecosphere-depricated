export type dropdown_flow = "left" | "right";

export interface dropdown_option {
	label: string;
	value?: string;
	action?: () => void;
}

export type dropdown_options = dropdown_option[];
