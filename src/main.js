import { createApp } from "vue";
import App from "./App.vue";

// Importa CSS di Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importa JavaScript di Bootstrap (opzionale, solo se usi componenti interattivi)
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle";

// Import Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.css";

const app = createApp(App);
app.provide("bootstrap", bootstrap);
app.mount("#app");
