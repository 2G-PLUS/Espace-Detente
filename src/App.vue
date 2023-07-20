<template>
    <div id="app">
        <header class="header-container">
            <img src="./assets/2g.png" height="75" >
        </header>
        <main>
            <div class="content">
                <sidebar-menu></sidebar-menu>
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script>
import SidebarMenu from '@/components/Sidebar.vue';

export default {
    name: 'App',
    components: {
        SidebarMenu,
    },
};
</script>

<style>
:root {
    --header-height: 119px;
    --footer-height: 130px;
}

body {
    background-color: rgba(43, 45, 66, 0.9);
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #2b2d42;
    padding: 20px;
    text-align: center;
}

.content {
    padding-top: 120px;
    padding-bottom: 120px;
}
</style>
