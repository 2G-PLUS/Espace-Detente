<template>
    <div class="login-form">
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

        <form @submit.prevent="login" action="">
            <div class="form-group">
                <label for="username">Nom d'utilisateur:</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="password">Mot de passe:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Se connecter</button>
        </form>
    </div>
</template>

<style>

.login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - var(--header-height) - var(--footer-height));
}


.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input[type="text"],
input[type="password"] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.error-message {
    color: red;
    margin-bottom: 1rem;
}
</style>

<script>
import AuthService from "@/AuthService";
import AuthProvider from "@/services/AuthProvider";

export default {
    data() {
        return {
            username: "",
            password: "",
            errorMessage: "",
        };
    },
    methods: {
        login() {
            AuthService.login(this.username, this.password)
                .then(() => {
                    if (AuthProvider.isAuthenticated()) {
                        this.$router.push("/");
                    } else {
                        this.errorMessage = "Identifiants invalides";
                    }
                })
                .catch((error) => {
                    this.errorMessage = error.message;
                });
        },
    },
};
</script>
