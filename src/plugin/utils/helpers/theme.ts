import { themes } from "../types.interface";

export default class Theme {
	private static theme: themes;

	constructor(option: themes = "auto") {
		Theme.setTheme(option);
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
}
