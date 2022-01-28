import Vue from "vue";
import type { DefineComponent } from "vue";

/* eslint-disable */
declare module "*.vue" {
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		ecosphere: any;
	}
}
