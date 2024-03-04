import {createApp, ref} from 'vue'
import App from './App.vue'
import {createStore} from "vuex";

const app = createApp(App);

const store = createStore({

})

app.use(store)
app.mount('#app')