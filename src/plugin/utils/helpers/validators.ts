export default class Validators {
	private static email =
		/^$|null|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	private static phone = /^\+?[0-9]{10,}$/;

	public static validate(regex: RegExp, value: string): boolean {
		return regex.test(value);
	}
}
