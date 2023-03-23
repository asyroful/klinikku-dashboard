import { createApp } from 'vue'
import App from './App.vue'
import './interceptors/axios'


// import css
import './assets/css/app.css'

// import router
import router from './router'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const app = createApp(App)
  app.use(router)
  app.component('VueDatePicker', VueDatePicker);
  app.mount('#app')
