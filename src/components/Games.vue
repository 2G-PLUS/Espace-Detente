<template>
    <div class="wrapper">
        <div class="games">
            
            <div class="game-card" v-for="game in games" v-bind:key="game.id">
                <router-link :to="`/gameDetails/${game.id}`">
                    <img v-bind:src="game.image" height="150" width="150">
                    <h3>{{ game.title }}</h3>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";

export default {
    name: 'GamesComponent',
    data() {
        return {
            games: null,
        }
    },
    created() {
        // axios.get("/api/games").then((response) => {
        //     this.games = response.data
        //     this.games = [{
        //         "image": "https://holarse.de/sites/default/files/2014-08-23-1294/2048_1.png",
        //         "title": "2048"
        //     }]
        // })
        this.games = [
            {
                "id": 1,
                "image": "https://holarse.de/sites/default/files/2014-08-23-1294/2048_1.png",
                "title": "2048"
            },
            {
                "image": "https://holarse.de/sites/default/files/2014-08-23-1294/2048_1.png",
                "title": "2048"
            },
            {
                "image": "https://holarse.de/sites/default/files/2014-08-23-1294/2048_1.png",
                "title": "2048"
            },
            {
                "image": "https://holarse.de/sites/default/files/2014-08-23-1294/2048_1.png",
                "title": "2048"
            },
            {
                "image": "https://holarse.de/sites/default/files/2014-08-23-1294/2048_1.png",
                "title": "2048"
            },
            {
                "image": "https://holarse.de/sites/default/files/2014-08-23-1294/2048_1.png",
                "title": "2048"
            },
            {
                "image": "https://holarse.de/sites/default/files/2014-08-23-1294/2048_1.png",
                "title": "2048"
            },
            {
                "image": "https://holarse.de/sites/default/files/2014-08-23-1294/2048_1.png",
                "title": "2048"
            },
            {
                "image": "https://holarse.de/sites/default/files/2014-08-23-1294/2048_1.png",
                "title": "2048"
            },
            {
                "image": "https://holarse.de/sites/default/files/2014-08-23-1294/2048_1.png",
                "title": "2048"
            },
            {
                "image": "https://holarse.de/sites/default/files/2014-08-23-1294/2048_1.png",
                "title": "2048"
            },
            {
                "image": "https://holarse.de/sites/default/files/2014-08-23-1294/2048_1.png",
                "title": "2048"
            },
        ]
    },
    methods: {
        displayGamesDetails() {

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

.game-card {
    background-color: #2b2d42;
    padding: 5px;
    padding-top: 10px;
    text-align: center;
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