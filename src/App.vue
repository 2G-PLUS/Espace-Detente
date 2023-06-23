<template>
    <div id="app">
        <header class="header-container">
            <h1>Mon Application</h1>
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
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
}

.content {
    display: flex;
    height: calc(100vh - var(--header-height));
}
</style>
