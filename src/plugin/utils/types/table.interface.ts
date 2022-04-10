import { unknown_nested_type } from "@/plugin/utils/types.interface";

export type table_column_type = "string" | "email" | "phone" | "link";

export interface table_column {
	label: string;
	key: string;
	css?: unknown_nested_type;
	type?: table_column_type;
}
