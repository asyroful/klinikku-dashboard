<template>
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-2xl font-medium text-left py-2">Tambah Rekam Medis</h3>
    <div class="py-6">
      <form @submit.prevent="updateItem" class="space-y-4 md:space-y-6">
        <div>
          <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
          <select id="patient" v-model="editedItem.patient" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pilih nama pasien disini">
            <option v-for="patient in patients" :key="patient.id" :value="patient.id">
              {{ patient.name }}
            </option>
          </select>
        </div>
        <div>
          <label for="complaint" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keluhan</label>
          <textarea v-model="editedItem.complaint" name="complaint" id="" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis keluhan pasien disini"></textarea>
        </div>
        <div>
          <label for="doctor" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Dokter</label>
          <input v-model="editedItem.doctor" type="text" name="doctor" id="doctor" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" readonly>
        </div>
        <div>
          <label for="diagnose" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Diagnosa</label>
          <textarea v-model="editedItem.diagnose" name="diagnose" id="" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis diagnosa pasien disini"></textarea>
        </div>
        <div>
          <label for="medicine" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Obat</label>
          <select v-model="editedItem.selectedJenisObat" id="medicine" placeholder="Pilih obat anda disini" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="normal">Obat Normal</option>
            <option value="racikan">Obat Racikan</option>
          </select>
        </div>
        <div v-if="selectedJenisObat === 'racikan'" class="flex gap-3">
          <div class="w-64">
            <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Obat</label>
            <select id="drug" v-model="selectedDrug" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pilih nama dokter disini">
              <option v-for="drug in drugs" :key="drug.id" :value="drug.id">
                {{ drug.name }}
              </option>
            </select>
          </div>
          <div class="w-32">
            <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dosis</label>
            <input type="text" name="" id="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
          </div>
          <div class="w-48">
            <label for="medicine" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Obat</label>
            <select v-model="medicine" id="medicine" placeholder="Pilih obat anda disini" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="saleb">Saleb</option>
              <option value="sirup">Sirup</option>
            </select>
          </div>
          <div class="w-1/3">
            <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aturan Pakai</label>
            <div class="flex gap-3">
              <input type="text" name="" id="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
              <input type="text" name="" id="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            </div>
          </div>
          <button class="mt-5">
            <div class="rounded-full border border-black p-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7C14 7.15471 13.9385 7.30308 13.8291 7.41248C13.7197 7.52188 13.5714 7.58333 13.4167 7.58333H7.58333V13.4167C7.58333 13.5714 7.52188 13.7197 7.41248 13.8291C7.30308 13.9385 7.15471 14 7 14C6.84529 14 6.69692 13.9385 6.58752 13.8291C6.47812 13.7197 6.41667 13.5714 6.41667 13.4167V7.58333H0.583333C0.428624 7.58333 0.280251 7.52188 0.170854 7.41248C0.0614583 7.30308 0 7.15471 0 7C0 6.84529 0.0614583 6.69692 0.170854 6.58752C0.280251 6.47812 0.428624 6.41667 0.583333 6.41667H6.41667V0.583333C6.41667 0.428624 6.47812 0.280251 6.58752 0.170854C6.69692 0.0614583 6.84529 0 7 0C7.15471 0 7.30308 0.0614583 7.41248 0.170854C7.52188 0.280251 7.58333 0.428624 7.58333 0.583333V6.41667H13.4167C13.5714 6.41667 13.7197 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7Z" fill="black"/>
              </svg>
            </div>
          </button>
        </div>
        <div v-else-if="selectedJenisObat === 'normal'" class="flex gap-3">
          
          <div class="w-2/5">
            <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Obat</label>
            <select id="drug" v-model="editedItem.normal_drugs.name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pilih nama dokter disini">
              <option v-for="drug in drugs" :key="drug.id" :value="drug.id">
                {{ drug.name }}
              </option>
            </select>
          </div>
          <div class="w-44">
            <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jumlah Obat</label>
            <input v-model="editedItem.normal_drugs.amount" type="text" name="" id="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
          </div>
          <div class="w-1/3">
            <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aturan Pakai</label>
            <div class="flex gap-3">
              <input v-model="editedItem.normal_drugs.times" type="text" name="" id="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
              <input v-model="editedItem.normal_drugs.dd" type="text" name="" id="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            </div>
          </div>
          <button class="mt-5">
            <div class="rounded-full border border-black p-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7C14 7.15471 13.9385 7.30308 13.8291 7.41248C13.7197 7.52188 13.5714 7.58333 13.4167 7.58333H7.58333V13.4167C7.58333 13.5714 7.52188 13.7197 7.41248 13.8291C7.30308 13.9385 7.15471 14 7 14C6.84529 14 6.69692 13.9385 6.58752 13.8291C6.47812 13.7197 6.41667 13.5714 6.41667 13.4167V7.58333H0.583333C0.428624 7.58333 0.280251 7.52188 0.170854 7.41248C0.0614583 7.30308 0 7.15471 0 7C0 6.84529 0.0614583 6.69692 0.170854 6.58752C0.280251 6.47812 0.428624 6.41667 0.583333 6.41667H6.41667V0.583333C6.41667 0.428624 6.47812 0.280251 6.58752 0.170854C6.69692 0.0614583 6.84529 0 7 0C7.15471 0 7.30308 0.0614583 7.41248 0.170854C7.52188 0.280251 7.58333 0.428624 7.58333 0.583333V6.41667H13.4167C13.5714 6.41667 13.7197 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7Z" fill="black"/>
              </svg>
            </div>
          </button>
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
      editedItem: {
        complaint: '',
        diagnose: '',
        patients: [],
        patient: '',
        doctor: '',
        drugs: [],
        selectedDrug: '',
        selectedJenisObat: 'normal',
        normal_drugs: [{
          amount: '',
          times: '',
          dd: '',
        }]
      }
    };
  },
  created() {
    const itemId = this.$route.params.id; // Mendapatkan ID item dari URL
    this.fetchItem(itemId);
  },
  mounted() {
    this.fetchPatients(); // Panggil method untuk mengambil data pasien saat komponen dimuat
    this.fetchDoctors(); // Panggil method untuk mengambil data pasien saat komponen dimuat
    this.fetchDrugs(); // Panggil method untuk mengambil data pasien saat komponen dimuat
  },
  methods: {
    fetchItem(itemId) {
      const token = localStorage.token
      // Mengambil data item dari API menggunakan ID
      axios.get(`record/${itemId}`, {headers: { "Authorization": `Bearer ${token}` }})
        .then(response => {
          console.log(response, 'cek respon')
          this.editedItem = response.data.data;
          console.log(this.editedItem, 'cek respon edit')
        })
        .catch(error => {
          console.error(error);
        }); 
    },
    fetchPatients() {
      const token = localStorage.token
        // Mengambil data pasien dari API menggunakan axios atau metode lainnya
        axios.get('/patient', {headers: { "Authorization": `Bearer ${token}` }})
          .then(response => {
            this.patients = response.data.data; // Menyimpan data pasien ke dalam array patients
          })
          .catch(error => {
            console.error(error);
          });
      },
    fetchDoctors() {
      const token = localStorage.token
        // Mengambil data pasien dari API menggunakan axios atau metode lainnya
        axios.get('/me', {headers: { "Authorization": `Bearer ${token}` }})
          .then(response => {
            console.log(response)
            this.doctor = response.data.data.name; // Menyimpan data pasien ke dalam array patients
          })
          .catch(error => {
            console.error(error);
          });
      },
    fetchDrugs() {
      const token = localStorage.token
        // Mengambil data pasien dari API menggunakan axios atau metode lainnya
        axios.get('/drug', {headers: { "Authorization": `Bearer ${token}` }})
          .then(response => {
            this.drugs = response.data.data; // Menyimpan data pasien ke dalam array patients
          })
          .catch(error => {
            console.error(error);
          });
      },
      updateItem() {
      const itemId = this.$route.params.id; // Mendapatkan ID item dari URL
      const token = localStorage.token
      // Mengirim perubahan data item ke API
      axios.put(`record/${itemId}`, this.editedItem, {headers: { "Authorization": `Bearer ${token}` }})
        .then((response) => {
          const successMessage = response.data.message;
          localStorage.setItem("successMessage", successMessage);
          this.$router.push('/medical-record'); // Navigasi ke halaman utama setelah mengupdate item
        })
        .catch(error => {
          console.error(error);
        });
    },
  }
}  
</script>