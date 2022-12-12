import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import FloatingVue from "floating-vue"
import "floating-vue/dist/style.css";


import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons'

import UpcomingEventsModal from './components/UpcomingEventsModal.vue'
import Homepage from "./components/AboutPage.vue"
import PicksModal from "./components/PicksModal"
import ResourcesModal from "./components/ResourcesModal"
import ShopModal from "./components/ShopModal"
import QuestionsModal from "./components/QuestionsModal"
import AllQuestionsView from "./components/AllQuestionsView"
import SpecificQuestionView from "./components/SpecificQuestionView"

library.add(faUserSecret, faInstagram, faChalkboardUser)

const routes = [
    { path: '/events', component: UpcomingEventsModal },
    { path: '/', component: Homepage, props: true},
    { path: '/shop', component: ShopModal },
    { path: '/picks', component: PicksModal },
    { path: '/resources', component: ResourcesModal },
    { path: '/forum', component: QuestionsModal, children: [{ path: '', component: AllQuestionsView, props: true }, { path: 'question/:id', component: SpecificQuestionView }] }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(FloatingVue).mount('#app')
