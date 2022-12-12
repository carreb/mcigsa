<template>
    <div class="modal" ref="modal">
        <div class="modalcontent" ref="content">
            <p class="goback" @click="closeAnimation" @click.right="signIn($event)" ref="goback">←</p>
            <div class="title">
                <h1>Questions & Answers</h1>
                <h3 class="button">ASK A QUESTION</h3>
                <br>
            </div>
            <div class="routerview">
                <router-view :posts="posts" v-slot="{ Component }">
                    <transition name="slide-in" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script>
import io from "socket.io-client";

export default {
    name: "QuestionForumModal",
    emits: ["close"],
    data() {
        return {
            socket: {},
            posts: [],
            allowScrolling: this.$route.fullPath
        }
    },
    created() {
        this.socket = io("http://localhost:1013/forum")
    },
    mounted() {
        this.socket.on("posts", data => {
            this.posts = data
        })
    },
    methods: {
        closeAnimation() {
            if (this.$route.fullPath == '/forum') {
                this.$refs.modal.classList.add('close')
                this.$refs.content.style.display = "none"
                this.$refs.goback.style.display = "none"
                setTimeout(this.emitClose, 1000)
            }
            return this.$router.push('/forum')
        },
        emitClose() {
            this.$router.push('/')
        },
        attemptScroll(e) {
            console.log(e.target)
            if (this.$route.fullPath == "/forum") {
                if (e.target == this.$refs.modal || e.target == this.$refs.content) {
                    return e.preventDefault()
                }
            }
            return
        },
        signIn(e) {
            e.preventDefault()
            console.log("Sign In Modal Should Open Here")
        }
    }
}
</script>

<style scoped>
.modal {
    width: 100%;
    height: 100%;
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
    position: relative;
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
    position: fixed;
    top: -10px;
    left: 10px;
    margin: 0;
}

.slide-in-enter-active,
.slide-in-leave-active {
    transition: 600ms ease all;
}

.slide-in-enter-from,
.slide-in-leave-to {
    transform: translateY(1000px);
    opacity: 0;
}

.routerview {
    position: relative;
    width: 80%;
    margin: auto;
    left: 0;
    right: 0;
    overflow: auto;
    outline: 10px red;
}

.button {
    text-align: center;
    user-select: none;
    cursor: pointer;
    transition: all 200ms;
    width: 200px;
    position: relative;
    margin: auto;
    top: 0px;
    left: 0;
    right: 0;
    background-color: whitesmoke;
    border-radius: 5px;
    padding: 10px;
}

.button:hover {
    background-color: var(--red);
    color: white;
}
</style>