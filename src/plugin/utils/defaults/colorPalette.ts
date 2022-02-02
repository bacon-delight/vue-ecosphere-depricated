import { color_palette } from "../types.interface";

export const defaultLightPalette: color_palette = [
	{
		variable: "--color-background",
		value: "#fdfdfd",
	},
	{
		variable: "--color-background-faded",
		value: "#f5f5f5",
	},
	{
		variable: "--color-contrast",
		value: "#1d242b",
	},
	{
		variable: "--color-contrast-faded",
		value: "#303841",
	},
];

export const defaultDarkPalette: color_palette = [
	{
		variable: "--color-background",
		value: "#1d242b",
	},
	{
		variable: "--color-background-faded",
		value: "#303841",
	},
	{
		variable: "--color-contrast",
		value: "#fdfdfd",
	},
	{
		variable: "--color-contrast-faded",
		value: "#f5f5f5",
	},
];
