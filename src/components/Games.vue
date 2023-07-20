<template>
    <div class="wrapper">
        <div class="games">

            <div class="game-card" v-for="game in games" v-bind:key="game.id">
                <div v-on:click="redirectUrl(game.id)">
                    <img v-bind:src="game.image" height="150" width="150">
                    <h3>{{ game.name }}</h3>
                    <p class="game-description">{{game.description}}</p>
                </div>
                <router-link :to="`/gameDetails/${game.id}`">

                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {

    name: 'GamesComponent',
    data() {
        return {
            games: null,
            apiUrl: 'http://45.147.99.71:8000/api'
        }
    },
    created() {
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        axios.get(`${this.apiUrl}/games`).then((response) => {
            this.games = response.data
        })
    },
    methods: {
        redirectUrl(id) {
            this.$router.push(`/gameDetails/${id}`)
        }
    },
};
</script>

<style>
.games {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}
.game-description {
    color: grey;
    font-size: 12px;
    margin-top: 10px;
}
.game-card {
    background-color: #2b2d42;
    padding: 20px;
    text-align: center;
    border-radius: 20px;
    height: 300px;
    width: 20%;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.game-card h3 {
    color: white;
}

.game-card a {
    display: block;
    height: 100%;
}

.wrapper {
    margin: 0 auto;
    width: 70%;
}
</style>
