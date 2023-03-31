<template>
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-2xl font-medium text-left py-2">Tambah Rekam Medis</h3>
    <div class="py-6">
      <form @submit.prevent="add" class="space-y-4 md:space-y-6">
        <div>
          <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
          <input v-model="form.name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis nama pasien disini" required="">
        </div>
        <div>
          <label for="complaint" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keluhan</label>
          <textarea v-model="form.complaint" name="complaint" id="" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis keluhan pasien disini"></textarea>
        </div>
        <div>
          <label for="doctor" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Dokter</label>
          <select v-model="form.doctor" id="doctor" placeholder="Pilih dokter anda disini" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="L">dr.Irsyad Musthofa</option>
            <option value="P">drg. Rina Kurniawati</option>
          </select>
        </div>
        <div>
          <label for="diagnose" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Diagnosa</label>
          <textarea v-model="form.diagnose" name="diagnose" id="" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis diagnosa pasien disini"></textarea>
        </div>
        <div>
          <label for="medicine" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Obat</label>
          <select v-model="form.medicine" id="medicine" placeholder="Pilih obat anda disini" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="L">Sanmol</option>
            <option value="P">Tera-F</option>
            <option value="L">Sanmol</option>
            <option value="P">Tera-F</option>
          </select>
        </div>
        <div>
          <label for="createdAt" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Periksa</label>
          <input type="text" name="createdAt" id="createdAt" class="bg-gray-100 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block cursor-not-allowed w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="21/03/2023">
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

export default {
  data() {
    return {
      form: {
        name : '',
        complaint: '',
        doctor: '',
        medicine: '',
        createdAt: '',
      },
    };
  }, 
  methods: {
    async add() {
      const token = localStorage.getItem("token")
      this.form.birth = new Date (this.form.birth).toLocaleDateString('en-GB')
                        .split("/")
                        .reverse()
                        .join("-")
      await axios.post('user',{...this.form}, { headers: {"Authorization" : `Bearer ${token}`} })
      .then(response => {console.log(response)})
    }
  }
}  
</script>