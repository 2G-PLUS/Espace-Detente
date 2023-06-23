<template>
    <div class="HomePage">
        <h1>Bienvenue sur la page d'accueil !</h1>
        <p>Contenu de la page d'accueil...</p>
    </div>
</template>

<script>
import AuthProvider from '@/services/AuthProvider';

export default {
    name: 'HomePage',
    computed: {
        user() {
            return AuthProvider.state.user;
        },
    },

    methods: {
        logout() {
            AuthProvider.logout();
            this.$router.push('/login');
        },
    },
};
</script>

<style scoped>

</style>
