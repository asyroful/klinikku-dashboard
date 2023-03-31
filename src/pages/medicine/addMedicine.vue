<template>
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-2xl font-medium text-left py-2">Tambah Obat</h3>
    <div class="py-6">
      <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
        <div>
          <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Obat</label>
          <input v-model="form.name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis nama obat disini" required="">
        </div>
        <div>
          <label for="information" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keterangan</label>
          <textarea v-model="form.information" name="information" id="" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis Keterangan disini"></textarea>
        </div>
        <div>
          <label for="stock" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Barang</label>
          <input v-model="form.stock" type="number" name="phone" id="phone" placeholder="Tulis Stock Barang" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
        </div>
        <div class="grid justify-items-end">
          <button type="submit" class="w-32 text-white bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Simpan</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      form: {
        name : '',
        information : '',
        stock: '',
      },
    };
  }, 
  methods: {
    handleSubmit() {
      let newPatient = {
        name: this.form.name,
        information: this.form.information,
        stock: this.form.stock,
      }
      this.$emit('create-patient', newPatient)
      console.log(this.$emit('create-patient', newPatient))
    }
    // async add() {
    //   const token = localStorage.getItem("token")
    //   this.form.birth = new Date (this.form.birth).toLocaleDateString('en-GB')
    //                     .split("/")
    //                     .reverse()
    //                     .join("-")
    //   await axios.post('user',{...this.form}, { headers: {"Authorization" : `Bearer ${token}`} })
    //   .then(response => {console.log(response)})
    // }
  }
}  
</script>