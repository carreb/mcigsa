<template>
    <div class="wrapper">
        <div class="navbar">
            <div class="navItem">
                <h3 @click="this.$emit('events')">Upcoming Events</h3>
            </div>
            <div class="navItem">
                <h3 @click="this.$emit('shop')">Our Shop</h3>
            </div>
            <div class="navItem">
                <h3 @click="this.$emit('picks')">Top Picks</h3>
            </div>
            <div class="navItem">
                <h3 @click="this.$emit('resources')">Resources</h3>
            </div>
            <div class="navItem">
                <h3 @click="this.$emit('q&a')">Q&A</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GSANavbar",
        emits: ["events", "shop", "picks", "resources", "q&a"]
    }
</script>

<style scoped>
    .wrapper {
        position: absolute;
        top: 180px;
        margin: 0;
        left: 0;
        right: 0;
    }
    .navbar {
        position: sticky;
        position: -webkit-sticky;
        width: 100%;
        display: flex;
        text-align: center;
        justify-content: center;
        top: 0px;
    }

    .navItem {
        cursor: pointer;
        transition: all 200ms;
        width: 200px;
        
    }

    .navItem:hover {
        background-color: rgb(255, 107, 107);
        color: white;
    }
</style>