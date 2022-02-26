import {
	accessibility_toggles,
	accessibility_toggle,
	accessibility_states,
	accessibility_state,
	accessibility_class,
} from "@/plugin/utils/types.interface";

export default class Accessibility {
	private static size: accessibility_states = 0;
	private static spacing: accessibility_states = 0;
	private static height: accessibility_states = 0;
	private static saturation: accessibility_states = 1;

	public static resetSize(): void {
		document.body.classList.remove(accessibility_class.size1);
		document.body.classList.remove(accessibility_class.size2);
		localStorage.removeItem(accessibility_class.size);
	}

	public static resetSpacing(): void {
		document.body.classList.remove(accessibility_class.spacing1);
		document.body.classList.remove(accessibility_class.spacing2);
		localStorage.removeItem(accessibility_class.spacing);
	}

	public static resetHeight(): void {
		document.body.classList.remove(accessibility_class.height1);
		document.body.classList.remove(accessibility_class.height2);
		localStorage.removeItem(accessibility_class.height);
	}

	public static resetSaturation(): void {
		document.body.classList.remove(accessibility_class.saturation0);
		document.body.classList.remove(accessibility_class.saturation2);
		localStorage.removeItem(accessibility_class.saturation);
	}

	public static toggleSize(
		toggle: accessibility_toggles | null = null
	): void {
		if (toggle === accessibility_toggle.increase) {
			this.size += 1;
		} else if (toggle === accessibility_toggle.decrease) {
			this.size -= 1;
		}

		this.resetSize();
		if (this.size === accessibility_state.one) {
			localStorage.setItem(
				accessibility_class.size,
				String(accessibility_state.one)
			);
			document.body.classList.add(accessibility_class.size1);
		} else if (this.size === accessibility_state.two) {
			localStorage.setItem(
				accessibility_class.size,
				String(accessibility_state.two)
			);
			document.body.classList.add(accessibility_class.size2);
		}
	}

	public static toggleSpacing(
		toggle: accessibility_toggles | null = null
	): void {
		if (toggle === accessibility_toggle.increase) {
			this.spacing += 1;
		} else if (toggle === accessibility_toggle.decrease) {
			this.spacing -= 1;
		}

		this.resetSpacing();
		if (this.spacing === accessibility_state.one) {
			localStorage.setItem(
				accessibility_class.spacing,
				String(accessibility_state.one)
			);
			document.body.classList.add(accessibility_class.spacing1);
		} else if (this.spacing === accessibility_state.two) {
			localStorage.setItem(
				accessibility_class.spacing,
				String(accessibility_state.two)
			);
			document.body.classList.add(accessibility_class.spacing2);
		}
	}

	public static toggleHeight(
		toggle: accessibility_toggles | null = null
	): void {
		if (toggle === accessibility_toggle.increase) {
			this.height += 1;
		} else if (toggle === accessibility_toggle.decrease) {
			this.height -= 1;
		}

		this.resetHeight();
		if (this.height === accessibility_state.one) {
			localStorage.setItem(
				accessibility_class.height,
				String(accessibility_state.one)
			);
			document.body.classList.add(accessibility_class.height1);
		} else if (this.height === accessibility_state.two) {
			localStorage.setItem(
				accessibility_class.height,
				String(accessibility_state.two)
			);
			document.body.classList.add(accessibility_class.height2);
		}
	}

	public static toggleSaturation(
		toggle: accessibility_toggles | null = null
	): void {
		if (toggle === accessibility_toggle.increase) {
			this.saturation += 1;
		} else if (toggle === accessibility_toggle.decrease) {
			this.saturation -= 1;
		}

		this.resetSaturation();
		if (this.saturation === accessibility_state.zero) {
			localStorage.setItem(
				accessibility_class.saturation,
				String(accessibility_state.zero)
			);
			document.body.classList.add(accessibility_class.saturation0);
		} else if (this.saturation === accessibility_state.two) {
			localStorage.setItem(
				accessibility_class.saturation,
				String(accessibility_state.two)
			);
			document.body.classList.add(accessibility_class.saturation2);
		}
	}

	public static reset(): void {
		this.size = 0;
		this.spacing = 0;
		this.height = 0;
		this.saturation = 1;
		this.resetSize();
		this.resetSpacing();
		this.resetHeight();
		this.resetSaturation();
	}
}
