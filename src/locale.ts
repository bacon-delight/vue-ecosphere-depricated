import { unknown_nested_type } from "./plugin/utils/types.interface";

export default function ($i18n: unknown_nested_type): string {
	let locale = $i18n.locale;
	if (!$i18n.availableLocales.includes(locale)) {
		if ($i18n.availableLocales.includes(locale.slice(0, 2))) {
			locale = locale.slice(0, 2);
		} else {
			locale = $i18n.fallbackLocale;
		}
	}
	return locale;
}
