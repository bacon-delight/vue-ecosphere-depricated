export type avatar_size = "tiny" | "small" | "medium" | "large";

export type avatar_hue =
	| "light"
	| "dark"
	| "auto"
	| "invert"
	| "hue"
	| "primary"
	| "secondary"
	| "success"
	| "information"
	| "warning"
	| "critical";

export type avatar_status = "online" | "offline" | "away" | "busy" | false;

export enum avatar_status_mapper {
	online = "success",
	offline = "offline",
	away = "warning",
	busy = "critical",
}
