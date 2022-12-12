<template>
    <div class="container">
        <div v-if="post != 'error'" class="post">
            <h1>{{ post.title }}</h1>
            <p class="subheading">Posted <Timeago :datetime="post.createdAt" locale="en" :tooltip="true"></Timeago></p>
            <div class="bodytext">
                <p>{{ post.body }}</p>
                <textarea v-model="replyModel" placeholder="Add a reply" rows="4" maxlength="280"></textarea>
                <h3 class="button" ref="submitbutton" @click="submitReply">Submit Reply</h3>
                <h2>Replies</h2>
                <div class="reply-container">
                    <div class="replies" v-if="isEmpty(post.replies) > 0">
                        <div v-for="(reply, index) in reverseOrder(post.replies)" :key="index" class="reply">
                            <h3>#{{ index + 1 }}</h3>
                            <p>{{reply.body}}</p>
                            <p class="smalltext">Posted <Timeago :datetime="reply.createdAt" locale="en" :tooltip="true"></Timeago>
                            </p>
                        </div>
                    </div>
                    <div v-else>
                        <p>Nobody has replied yet... :(</p>
                    </div>
                </div>
                </div>
            </div>
        <div v-else>
            <h1>Yikes!</h1>
            <p>Something went wrong while trying to fetch this post. Contact webadmin@mcigsa.com and tell them this error code:
                <br><br>{{ postErrorData }}
            </p>
            <p style="cursor: pointer;" @click="this.$router.push('/forum')">Go back</p>
        </div>
    </div>
</template>

<script>
import io from "socket.io-client"
import { Timeago } from "vue2-timeago"

    export default {
        name: "SpecificQuestionView",
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
        components: {
            Timeago
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
.post {
    width: 96%;
    background-color: whitesmoke;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 25px;
    padding-top: 1px;
    border-radius: 25px;
    overflow: auto;
    position: relative;
}

.post>h1 {
    font-size: 55px;
    display: inline-block;
}

.post>p {
    font-size: 20px;
}

.post>h2 {
    font-size: 30px;
}

textarea {
    width: 80%;
    resize: none;
    position: relative;
    margin: auto;
    display: block;
    padding: 15px;
    border: none;
    border-radius: 5px;
    transition: all 200ms;
    box-shadow: -2px 2px rgb(196, 190, 190);
    font-size: 15px;
}

.subheading {
    color: gray;
    position: relative;
    margin-top: 20px;
    top: -60px;
    margin-left: 10px;
}

.smalltext {
    font-size: 12px;
    color: gray;
}

.replies {
    display: flex;
    flex-direction: column;
    height: 80%;
    flex-wrap: nowrap;
    flex-basis: auto;
}

.reply-container {
    overflow-y: scroll;
    height: 320px;
}

.reply {
    max-height: 100px;
    min-height: 100px;
}

.button {
    text-align: center;
    user-select: none;
    cursor: pointer;
    transition: all 200ms;
    width: 200px;
    position: relative;
    margin: auto;
    top: 10px;
    left: 0;
    right: 0;
}

.button:hover {
    background-color: var(--red);
    color: white;
}

.bodytext {
    position: relative;
    top: -60px;
}
</style>