import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import authProvider from './services/AuthProvider';

// Créez une instance de l'application Vue
const app = createApp(App);

// Utilisez le router créé pour l'application
app.use(router);

// Injectez le fournisseur d'authentification dans l'application
app.provide('auth', authProvider);

// Montez l'application sur l'élément avec l'ID "app" dans votre index.html
app.mount('#app');
