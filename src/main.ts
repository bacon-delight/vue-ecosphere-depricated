import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(store);
app.use(router);

// Import as a Plugin
import Ecosphere from "./plugin";
app.use(Ecosphere);

app.mount("#app");
