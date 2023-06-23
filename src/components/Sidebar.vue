<template>
    <div class="sidebar-menu" v-if="isAuthenticated">
        <ul>
            <li>
                <router-link to="/streaming">
                    <img class="icon" src="./../assets/icons/icons8-bobine-de-film-96.png" />Streaming
                </router-link>
            </li>
            <li>
                <router-link to="/jeux">
                    <img class="icon" src="./../assets/icons/icons8-apple-arcade-96.png" />Jeux
                </router-link>
            </li>
            <li>
                <a href="#" @click="logout"><img class="icon" src="./../assets/icons/icons8-fermer-96.png" />Déconnexion</a>
            </li>
        </ul>
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
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #2b2d42;
    padding: 20px;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
}

li {
    text-align: center;
}

li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 115px;
    height: 100px;
    color: #e75c34;
    border-radius: 10px;
    transition: all 0.2s;
}

li a:hover {
    background-color: rgba(231, 92, 52, 0.2);
}

li a img {
    height: 50px;
    width: 50px;
    margin-bottom: 10px;
}

a {
    text-decoration: none;
    
    font-weight: bold;
}

.router-link-active {
    font-weight: bold;
}

.fa-play-circle,
.fa-gamepad,
.fa-power {
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
