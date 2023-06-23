<template>
    <div class="game-details">
        <div class="iframe-container">
            <iframe
                v-bind:src="game.link"
                frameborder="0"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>

<script>
// import axios from "axios";

export default {
    name: 'GameDetailsComponent',
    data() {
        return {
            game: null,
        }
    },
    created() {
        console.log(this.$route.params.id);
        this.game = { "id": 1, link: "https://play2048.co/"}
        // axios.get("/api/games").then((response) => {
        //     this.games = response.data
        //     this.games = [{
        //         "image": "https://holarse.de/sites/default/files/2014-08-23-1294/2048_1.png",
        //         "title": "2048"
        //     }]
        // })
    },
    methods: {},
};
</script>

<style>
.game-details {
    height: calc(100vh - var(--header-height) - var(--footer-height));
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.iframe-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

iframe {
    width: 100%;
    height: 100%;
}
</style>