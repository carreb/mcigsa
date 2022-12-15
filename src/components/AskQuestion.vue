<template>
    <div class="container">
        <h1>Ask a Question:</h1>
        <input class="title" type="text" placeholder="What is x y z...">
        <h1>Question Body</h1>
        <textarea class="bodytext" maxlength="240" placeholder="I've been wondering about x y z for a while, anyone have any answers?"></textarea>
        <h2>POST</h2>
    </div>
</template>

<script>
import io from "socket.io-client"

export default {
    name: "AskQuestion",
    data() {
        return {
            socket: {},
            post: {},
            postErrorData: "",
            postId: "",
            replyModel: ""
        }
    },
    created() {
        this.socket = io("http://localhost:1013/forum")
        this.getPostId()
    },
    mounted() {
        this.socket.on("gotPost", data => {
            this.post = data
            this.replyModel = ""
        })
        this.socket.on("errorWhileGettingPost", data => {
            this.post = "error"
            this.postErrorData = data
        })
    },
    methods: {
        getPostId() {
            this.postId = this.$route.params.id
            this.socket.emit("getPost", this.postId)
        },
        submitReply() {
            if (this.replyModel.length > 0) {
                this.$refs.submitbutton.style.display = "none"
                this.socket.emit("postReply", this.replyModel, this.postId)
            }
        }
    },
    computed: {
        reverseOrder() {
            return function (arg) {
                if (arg != undefined) {
                    return arg.slice().reverse()
                }
                return []
            }
        },
        isEmpty() {
            return function (array) {
                if (array != undefined) {
                    return array.length
                }
                return 0
            }
        },
        // replies() {
        //     return function(replies, page) {
        //         if (replies != undefined) {

        //         }
        //     }
        // }
    }
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
</style>