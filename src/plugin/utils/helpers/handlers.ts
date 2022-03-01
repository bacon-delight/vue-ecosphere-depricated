import router from "@/router";

export default class Handlers {
	public static navigate(link: string): void {
		try {
			new URL(link);
			window.open(link, "_blank");
		} catch {
			if (link[0] === "/") {
				router.push(link);
			}
		}
	}

	public static runAction(action: () => void): void {
		if (!action) return;
		action();
	}
}
