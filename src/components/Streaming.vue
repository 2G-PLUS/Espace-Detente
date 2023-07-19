<template>
    <div class="streaming">
        <div class="iframe-container">
            <iframe
                src="https://app.plex.tv/desktop/#!/media/9a304ae287c45c5c36750cb69e0d17203c74d403/com.plexapp.plugins.library?source=3"
                frameborder="0"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StreamingComponent',
};
</script>

<style>
.streaming {
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
