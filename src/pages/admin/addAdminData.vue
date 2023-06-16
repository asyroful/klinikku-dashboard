<template>
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-2xl font-medium text-left py-2">Tambah Admin</h3>
    <div class="py-6">
      <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
        <div>
          <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Admin</label>
          <input v-model="name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis nama admin disini" required="">
        </div>
        <div>
          <label for="gender" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Kelamin</label>
          <select v-model="gender" id="gender" placeholder="Pilih jenis kelamin" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="L">Laki-laki</option>
            <option value="P">Perempuan</option>
          </select>
        </div>
        <div>
          <label for="birth" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Lahir</label>
          <div class="relative bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <VueDatePicker v-model="birth"></VueDatePicker>
          </div>
        </div>
        <div>
          <label for="address" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
          <textarea v-model="address" name="address" id="" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis alamat disini"></textarea>
        </div>
        <div>
          <label for="phone" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Telepon</label>
          <input v-model="phone" type="number" name="phone" id="phone" placeholder="Tulis Nomor Telepon" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
        </div>
        <div>
          <label for="email" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input v-model="email" type="text" name="email" id="email" placeholder="Tulis email anda disini" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
        </div>
        <div>
          <label for="password" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input v-model="password" type="text" name="password" id="password" placeholder="Tulis password anda disini" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
        </div>
        <div class="grid justify-items-end">
          <button type="submit" class="w-32 text-white bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Simpan</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: { VueDatePicker },
  data() {
    return {
      name : '',
      gender : '',
      birth: '',
      role: 'admin',
      address: '',
      phone: '',
      email: '',
      password: '',
    };
  }, 
  methods: {
    formatDateToSend(dateObject) {
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  },
    handleSubmit(event) {
      event.preventDefault();

      const formattedDate = this.formatDateToSend(this.birth);
      
        const data = { 
          name: this.name,
          gender: this.gender,
          birth: formattedDate,
          role: this.role,
          address: this.address,
          phone: this.phone,
          email: this.email,
          password: this.password,
        }; // Data baru yang akan ditambahkan
        const token = localStorage.token

      axios
        .post('user?role=admin', data, {headers: { "Authorization": `Bearer ${token}` }}) // Ganti dengan URL API yang sesuai
        .then((response) => {
          const successMessage = response.data.message;
          localStorage.setItem("successMessage", successMessage);
          this.$router.push('/admin'); // Mengarahkan kembali ke halaman utama setelah menyimpan data
        })
        .catch(error => {
          console.error(error);
          if (error.response && error.response.data && error.response.data.message) {
            this.errorMessage = error.response.data.message; // Menyimpan pesan kesalahan dari respons API
          } else {
            this.errorMessage = 'Terjadi kesalahan saat menyimpan data.'; // Menyimpan pesan kesalahan umum
          }
        });
    }
  }
}  
</script>