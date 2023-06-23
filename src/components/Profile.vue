<template>
    <div class="ProfilePage">
        <h1>Profil de l'utilisateur</h1>
        <div>
            <p><strong>Nom d'utilisateur:</strong> {{ username }}</p>
            <p><strong>Email:</strong> {{ email }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfilePage',
    data() {
        return {
            username: 'Utilisateur',
            email: 'utilisateur@example.com'
        };
    },
};
</script>

<style scoped>
</style>
