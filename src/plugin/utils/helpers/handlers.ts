import router from "@/router";

export default class Handlers {
	public static navigate(link: string): void {
		if (!link) return;
		try {
			new URL(link);
			window.open(link, "_blank");
		} catch {
			router.replace(link);
		}
	}
}
