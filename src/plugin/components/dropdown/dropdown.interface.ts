export interface dropdown_option {
	label: string;
	value?: string;
	action?: () => void;
}

export type dropdown_flow = "left" | "right";

export type dropdown = dropdown_option[];
