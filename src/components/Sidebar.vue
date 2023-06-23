<template>
    <div class="sidebar-menu" v-if="isAuthenticated">
        <ul>
            <li>
                <router-link to="/streaming">
                    <i class="fas fa-play-circle"></i> Streaming
                </router-link>
            </li>
            <li>
                <router-link to="/jeux">
                    <i class="fas fa-gamepad"></i> Jeux
                </router-link>
            </li>
        </ul>
        <div class="logout-container">
            <button class="logout-button" @click="logout">Se déconnecter</button>
        </div>
    </div>
</template>

<script>
import AuthProvider from "@/services/AuthProvider";

export default {
    name: 'SidebarMenu',
    computed: {
        isAuthenticated() {
            return AuthProvider.state.isAuthenticated;
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

<style>
.sidebar-menu {
    width: 200px;
    background-color: #f8f8f8;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    padding: 10px;
}

.router-link-active {
    font-weight: bold;
}

.fa-play-circle,
.fa-gamepad {
    margin-right: 10px;
}

.logout-container {
    margin-top: auto;
}

.logout-button {
    width: 100%;
    padding: 10px;
    background-color: red;
    border: none;
    cursor: pointer;
}

</style>
