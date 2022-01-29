import { themes, setTheme } from "./types.interface";

export function setTheme(option: themes): void {
	// Auto
	if (option === "auto") {
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}

	// Dark
	else if (option === "dark") {
		document.body.classList.add("dark");
	}

	// Light
	else {
		document.body.classList.remove("dark");
	}
}
