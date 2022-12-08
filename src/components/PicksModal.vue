<template>
    <div class="modal" ref="modal">
        <div class="modalcontent">
            <p class="goback" @click="closeAnimation" ref="goback">←</p>
            <div class="title" ref="content">
                <h1>Top Picks</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PicksModal",
    emits: ["close"],
    methods: {
        closeAnimation() {
            this.$refs.modal.classList.add('close')
            this.$refs.content.style.display = "none"
            this.$refs.goback.style.display = "none"
            setTimeout(this.emitClose, 1000)
        },
        emitClose() {
            this.$router.push('/')
        },
    }
}
</script>

<style scoped>
.modal {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    background-image: url("../assets/rainbowslider.png");
    z-index: 10;
    overflow-y: hidden;
    background-position: -95%;
    animation-name: openModal;
    animation-duration: 1000ms;
    animation-fill-mode: forwards;
}

@keyframes openModal {
    0% {
        background-position: -95%;
    }

    100% {
        background-position: 100%;
    }
}

@keyframes closeModal {
    0% {
        background-position: 100%;
    }

    100% {
        background-position: -95%;
    }
}

.modalcontent {
    opacity: 0;
    transform: translateY(10px);
    animation: fadein ease-out 500ms forwards;
    animation-delay: 1100ms;
}

.modal.close {
    animation-name: closeModal;
    animation-duration: 1000ms;
    animation-fill-mode: forwards;
}

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

.title>h1 {
    font-weight: 800;
    font-size: 60px;
}

.goback {
    color: rgb(255, 107, 107);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-decoration: none;
    font-size: 50px;
    -webkit-user-select: none;
    /* Safari */
    -ms-user-select: none;
    /* IE 10 and IE 11 */
    user-select: none;
    /* Standard syntax */
    cursor: pointer;
    position: absolute;
    top: -10px;
    left: 10px;
    margin: 0;
}
</style>