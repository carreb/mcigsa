<template>
<div class="title">
    <h1>
        <span class="red">M</span>
        <span class="orange">C</span>
        <span class="yellow space">I </span>
        <span class="green">G</span>
        <span class="blue">S</span>
        <span class="purple">A</span>
    </h1>
</div>
</template>

<script>
export default {
    name: "GSAHeader"
}
</script>

<style scoped>
.title {
    position: absolute;
    padding-left: 10px;
    padding-right: 10px;
    top: 0;
    margin: auto;
    width: fit-content;
    left: 0;
    right: 0;
}

.title > h1 {
    font-weight: 800;
    font-size: 120px;
}

.title > h1 > span {
    display: inline-block;
}
.title > h1 > .space {
    /* puts the space in between MCI and GSA */
    letter-spacing: 0.5em;
}

.red {
    color: rgb(255, 107, 107);
    animation-name: fadein;
    animation-duration: 500ms;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateY(10px);
}

.orange {
    color: rgb(248, 186, 71);
    animation-name: fadein;
    animation-duration: 500ms;
    animation-timing-function: ease-out;
    animation-delay: 300ms;
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateY(10px);
}

.yellow {
    color: #FFD966;
    animation-name: fadein;
    animation-duration: 500ms;
    animation-timing-function: ease-out;
    animation-delay: 600ms;
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateY(10px);
}

.green {
    color: rgb(38, 206, 38);
    animation-duration: 500ms;
    animation-name: fadein;
    animation-timing-function: ease-out;
    animation-delay: 900ms;
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateY(10px);
}

.blue {
    color: rgb(90, 90, 255);
    animation-duration: 500ms;
    animation-name: fadein;
    animation-timing-function: ease-out;
    animation-delay: 1200ms;
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateY(10px);
}

.purple {
    color: rgb(216, 50, 216);
    animation-duration: 500ms;
    animation-name: fadein;
    animation-timing-function: ease-out;
    animation-delay: 1500ms;
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateY(10px);
}

@keyframes fadein {
    0% {
        transform: translateY(10px);
        opacity: 0;
    } 
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>