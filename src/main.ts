import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(store);
app.use(router);

// Import as a Plugin
import Ecosphere, { EcoComponents } from "./plugin";
app.use(Ecosphere);
app.use(EcoComponents);

// Markdown
import Markdown from "vue3-markdown-it";
import "highlight.js/styles/obsidian.css"; // agate | dark | noed
app.use(Markdown);

// i18n
import { createI18n } from "vue-i18n";
import en from "@/assets/locales/en";
import zh from "@/assets/locales/zh";
const i18n = createI18n({
	legacy: false,
	locale: "en",
	fallbackLocale: "en",
	messages: {
		en,
		zh,
	},
	globalInjection: true,
});
app.use(i18n);

// Splitbee
import splitbee from "@splitbee/web";
if (process.env.NODE_ENV === "production") {
	splitbee.init({
		token: process.env.VUE_APP_SPLITBEE_TOKEN,
	});
}

app.mount("#app");
