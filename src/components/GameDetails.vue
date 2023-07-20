<template>
    <div class="game-details">
        <div class="iframe-container">
            <iframe
                v-bind:src="game?.link"
                frameborder="0"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'GameDetailsComponent',
    data() {
        return {
            game: null,
            apiUrl: 'http://45.147.99.71:8000/api'
        }
    },
    created() {
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        axios.get(`${this.apiUrl}/games/${this.$route.params.id}`).then((response) => {
            this.game = response.data
        })
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
