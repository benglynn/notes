import { createApp } from "vue";
import App from "./App.vue";
import { subscribe } from "./midi/bus";

createApp(App).mount("#app");

subscribe(console.log);
