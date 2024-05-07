import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import roteador from './roteador'

createApp(App)
// aqui estou dizendo para utilizar o reteador
.use(roteador)
.mount('#app')
