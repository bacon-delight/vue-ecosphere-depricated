export interface sidebar_item {
	label: string;
	route?: string;
	action?: () => void;
	children?: sidebar_item[];
}
