import { createApp } from 'vue'
import App from './App.vue'
import './interceptors/axios'


// import css
import './assets/css/app.css'

// import router
import router from './router'

// import axios from 'axios';

// import store
import store from './store/index.js'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// Mendaftarkan interceptor pada Axios
// axios.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response.status === 401) {
//       // Jika error 401, arahkan pengguna kembali ke halaman login
//       router.push('/login'); // Ubah '/login' dengan rute login yang sesuai
//     }
//     return Promise.reject(error);
//   }
// );

const app = createApp(App)
  app.use(router)
  app.use(store)
  app.component('VueDatePicker', VueDatePicker);
  app.mount('#app')
