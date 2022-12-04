import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faInstagram, faChalkboardUser)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
