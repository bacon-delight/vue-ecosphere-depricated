export default class Handlers {
	public static navigate(link: string): void {
		if (!link || !link[0]) {
			return;
		}
		try {
			console.log("try");
			new URL(link);
			window.open(link, "_blank");
		} catch {
			if (link[0] === "/") {
				window.location.assign(link);
			}
		}
	}

	public static runAction(action: () => void): void {
		if (!action) return;
		action();
	}
}
