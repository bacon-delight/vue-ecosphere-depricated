import { choice_option } from "@/plugin/utils/types.interface";

export interface breadcrumb_option extends choice_option {
	children?: choice_option[];
}
