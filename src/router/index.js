import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Games from '../components/Games.vue';
import GameDetails from '../components/GameDetails.vue';
import Profile from '../components/Profile.vue';
import LoginForm from "@/components/LoginForm.vue";
import AuthProvider from '../services/AuthProvider';
import Streaming from "@/components/Streaming.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Accueil',
            component: Home,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/streaming',
            name: 'Streaming',
            component: Streaming,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: "/games",
            name: "Games",
            component: Games,
            meta: {
                requiresAuth: true,
            }
        },
        { 
            path: "/gameDetails/:id",
            name: "GameDetails",
            component: GameDetails
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginForm,
        },
    ],
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = AuthProvider.isAuthenticated();
    console.log('isAuthenticated', isAuthenticated);
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router;
