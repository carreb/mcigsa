<template>
    <div class="container">
        <h1>Ask a Question:</h1>
        <input class="title" type="text" placeholder="What is x y z..." v-model="postData.title">
        <h1>Question Body</h1>
        <textarea class="bodytext" v-model="postData.body" maxlength="240" placeholder="I've been wondering about x y z for a while, anyone have any answers?"></textarea>
        <h2 ref="postbutton" @click="PostQuestion" :class="{ posting: postInProgress }">POST</h2>
        <p ref="failtext" v-if="postFailed">There was a problem while trying to post your question... Please try again later</p>
    </div>
</template>

<script>
import io from "socket.io-client"

export default {
    name: "AskQuestion",
    data() {
        return {
            socket: {},
            postInProgress: false,
            postFailed: false,
            postData: {
                title: "",
                body: ""
            }
        }
    },
    created() {
        this.socket = io("http://localhost:1013/forum")
    },
    mounted() {
        this.socket.on("posted", (data) => {
            this.$router.push(`/forum/question/${data}`)
        })
        this.socket.on("postFailed", () => {
            this.postFailed = true
            this.postInProgress = false
        })
    },
    methods: {
        PostQuestion() {
            if (!this.postInProgress) {
                this.postInProgress = true
                if (this.postData.title && this.postData.body != "") {
                    return this.socket.emit("postQuestion", this.postData)
                }
                alert("You can't post a question with an empty title or body.")
            }
            return this.postInProgress = false
        }
    },
}
</script>

<style scoped>
.container {
    text-align: center;
    width: 95%;
    background-color: whitesmoke;
    padding: 25px;
    border-radius: 10px;
}

h1 {
    font-weight: 800;
    font-size: 40px;
}

input.title {
    border: none;
    text-align: center;
    transition: all 200ms;
    width: 30%;
    height: 25px;
    font-weight: 600;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
}

input.title:focus {
    scale: 1.10;
    border: none;
    outline: none;
}

textarea {
    border: none;
    text-align: center;
    transition: all 200ms;
    width: 50%;
    height: 100px;
    font-weight: 600;
    font-size: 20px;
    padding: 10px;
    resize: none;
    border-radius: 10px;
}

textarea:focus {
    scale: 1.10;
    border: none;
    outline: none;
}

h2 {
    cursor: pointer;
    transition: 400ms all;
    width: 200px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    border-radius: 5px;
}

h2:hover {
    background-color: var(--red);
    color: white;
}

h2.posting {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>