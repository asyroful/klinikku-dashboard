<template>
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-2xl font-medium text-left py-2">Edit Rekam Medis</h3>
    <div class="py-6">
      <form @submit.prevent="updateItem" class="space-y-4 md:space-y-6">
        <div>
          <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
          <input id="patient" v-model="editedItem.patient" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pilih nama pasien disini" readonly>
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
        <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Obat Racikan</label>
        <div v-for="(mix, index) in editedItem.mix_drugs" :key="index" class="flex gap-3">
          <div class="w-64">
            <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Obat</label>
            <input id="drug" v-model="mix.name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pilih nama dokter disini">
          </div>
          <div class="w-32">
            <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dosis</label>
            <input v-model="mix.amount" type="number" name="" id="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
          </div>
          <div class="w-48">
            <label for="medicine" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Obat</label>
            <input v-model="mix.type" id="medicine" placeholder="Pilih obat anda disini" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">              
          </div>
          <div class="w-1/3">
            <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aturan Pakai</label>
            <div class="flex gap-3">
              <input v-model="mix.times" type="number" name="" id="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
              <input v-model="mix.dd" type="number" name="" id="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            </div>
          </div>
          <button @click="removeDrugMix(index)" class="mt-5">
            <div class="rounded-full border border-black p-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 3.5H2.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.5 6.5V10.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.5 6.5V10.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
        <div @click="addDrugMix" class="w-full text-white bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Tambah Obat
        </div>
        <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Obat Normal</label>
        <div v-for="(normal, index) in editedItem.normal_drugs" :key="index" class="flex gap-3">
          <div class="w-2/5">
            <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Obat</label>
            <input id="drug" v-model="normal.name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pilih nama dokter disini">
          </div>
          <div class="w-44">
            <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jumlah Obat</label>
            <input v-model="normal.amount" type="number" name="" id="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
          </div>
          <div class="w-1/3">
            <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aturan Pakai</label>
            <div class="flex gap-3">
              <input v-model="normal.times" type="number" name="" id="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
              <input v-model="normal.dd" type="number" name="" id="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            </div>
          </div>
          <button @click="removeDrugNormal(index)" class="mt-5">
            <div class="rounded-full border border-black p-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 3.5H2.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.5 6.5V10.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.5 6.5V10.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
        <div @click="addDrugNormal" class="w-full text-white bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Tambah Obat
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
        patient: '',
        patients: [],
        selectedPatient: '',
        doctor: '',
        drugs: [],
        concoctions: [],
        normal_drugs: [{
          selectedDrugNormal: null,
          name: '',
          amount: '',
          times: '',
          dd: '',
        }],
        mix_drugs: [{
          selectedDrugMix: null,
          name: '',
          selectedConcoction: null,
          type: '',
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
    this.fetchConcoctions(); // Panggil method untuk mengambil data pasien saat komponen dimuat
  },
  methods: {
    addDrugMix() {
      const newDrug = {
        id: this.mix_drugs.selectedDrugMix,
        name: this.mix_drugs.name,
        type_concoction_id: this.mix_drugs.selectedConcoction,
        type: this.mix_drugs.type,
        amount: this.mix_drugs.amount,
        times: this.mix_drugs.times,
        dd: this.mix_drugs.dd
      };

      this.mix_drugs.push(newDrug);
    },
    removeDrugMix(index) {
      this.mix_drugs.splice(index, 1);
    },
    addDrugNormal() {
      const newDrug = {
        id: this.normal_drugs.selectedDrugNormal,
        name: this.normal_drugs.name,
        amount: this.normal_drugs.amount,
        times: this.normal_drugs.times,
        dd: this.normal_drugs.dd 
      };
      this.normal_drugs.push(newDrug);
    },
    removeDrugNormal(index) {
      this.normal_drugs.splice(index, 1);
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
    fetchConcoctions() {
      const token = localStorage.token
        // Mengambil data pasien dari API menggunakan axios atau metode lainnya
        axios.get('/concoction', {headers: { "Authorization": `Bearer ${token}` }})
          .then(response => {
            this.concoctions = response.data.data; // Menyimpan data pasien ke dalam array patients
          })
          .catch(error => {
            console.error(error);
          });
      },
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