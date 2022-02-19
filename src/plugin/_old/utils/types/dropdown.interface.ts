export type dropdown_flow = "left" | "right";

export interface dropdown_option {
	label: string;
	route?: string;
	action?: () => void;
}
