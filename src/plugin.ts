import Test from "./plugin/Test.vue";

/* eslint-disable */
export default {
	install: (app: any): void => {
		app.component("v-eco-test", Test);
	},
};
