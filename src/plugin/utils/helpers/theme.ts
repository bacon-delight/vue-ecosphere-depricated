import { themes, color_palette, unknown_type } from "../types.interface";
import {
	defaultLightPalette,
	defaultDarkPalette,
} from "../defaults/colorPalette";

export default class Theme {
	private static theme: themes;

	constructor(option: themes = "auto") {
		Theme.setTheme(option);
		Theme.setColors(defaultLightPalette, defaultDarkPalette);
	}

	public static setTheme(option: themes): void {
		// Auto
		if (option === "auto") {
			if (
				window.matchMedia &&
				window.matchMedia("(prefers-color-scheme: dark)").matches
			) {
				this.theme = "dark";
				document.body.classList.add("dark");
			} else {
				this.theme = "light";
				document.body.classList.remove("dark");
			}
		}

		// Dark
		else if (option === "dark") {
			this.theme = "dark";
			document.body.classList.add("dark");
		}

		// Light
		else {
			this.theme = "light";
			document.body.classList.remove("dark");
		}
	}

	public static getCurrentTheme(): themes {
		return this.theme;
	}

	public static setColors(
		lightPalette: color_palette,
		darkPalette: color_palette
	): void {
		// Apply Light Variables
		const lightSelector: unknown_type = document.querySelector(":root");
		for (const color in lightPalette) {
			lightSelector.style.setProperty(color, lightPalette[color]);
		}

		// Apply Dark Variables
		let darkStyle = "";
		for (const color in darkPalette) {
			darkStyle = darkStyle.concat(`${color}: ${darkPalette[color]}; \n`);
		}
		const style: unknown_type = document.createElement("style");
		style.type = "text/css";
		style.innerHTML = `body.dark { ${darkStyle} };`;
		document.getElementsByTagName("head")[0].appendChild(style);
	}
}
