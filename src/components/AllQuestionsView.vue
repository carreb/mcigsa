<template>
    <div class="container">
        <div class="flex-container" ref="flexcontainer" v-if="posts.length > 0">
                <div class="question" v-for="post in posts" :key="post._id" @click="this.$router.push(`/forum/question/${post._id}`)">
                    <h1 class="qTitle">{{ post.title }}</h1>
                    <p class="postTime">Posted <Timeago :datetime="post.createdAt"></Timeago></p>
                    <p class="qReplyAmt">{{ post.replies.length }} repl<span v-if="!plural(post.replies.length)">y</span><span v-else>ies</span></p>
                </div>
        </div>
        <div v-else style="text-align: center;">
            <h1>Nobody has asked a question yet... You should be the first!</h1>
            <!-- <h3 class="button">ASK AWAY!</h3> -->
        </div>
    </div>
</template>

<script>
import { Timeago } from "vue2-timeago"

    export default {
        name: "AllQuestionsView",
        props: ['posts'],
        computed: {
            plural() {
                return function(num) {
                    if (num != 1) {
                        return true
                    } else {
                        return false
                    }
                }
            }
        },
        components: {
            Timeago
        }
    }
</script>

<style scoped>
.question {
    width: 98%;
    height: fit-content;
    min-height: 0;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 10px 10px 2px 15px;
    cursor: pointer;
    transition: all 200ms ease-out;
}

.question:hover {
    background-color: rgb(255, 107, 107);
    color: white !important;
}

.qTitle {
    display: inline-block;
}

.qReplyAmt {
    position: relative;
    top: -5px;
}

.postTime {
    display: inline-block;
    vertical-align: 10%;
    margin-left: 1.5%;
}

.flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column-reverse;
    width: 100%;
    gap: 15px;
    flex: 1;
    margin-top: auto;
    margin-bottom: 160px;
}

.container {
    overflow-y: scroll;
    height: 100vh;
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
    background-color: whitesmoke;
    padding: 10px;
}

.button:hover {
    background-color: var(--red);
    color: white;
}
</style>