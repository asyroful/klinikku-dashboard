<template>
  <div>
    <div class="flex justify-between rounded-xl bg-white px-5 py-4">
      <div class="flex ">
        <div class="mr-16">
          <label for="birth" class="text-left block mb-4 text-xs font-medium text-gray-900 dark:text-white">Dari Tanggal :</label>
          <div class="relative bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <VueDatePicker></VueDatePicker>
          </div>
        </div>
        <div>
          <label for="birth" class="text-left block mb-4 text-xs font-medium text-gray-900 dark:text-white">Ke Tanggal : </label>
          <div class="relative bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <VueDatePicker></VueDatePicker>
          </div>
        </div>
      </div>
      <div class="my-auto">
        <router-link to="/home">
          <button type="button" class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-sm py-3 px-16 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Mencari Data</button>
        </router-link>
      </div>
    </div>
    <div class="bg-white rounded-xl mt-4 p-6">
      <div class="mb-6">
        <h3 class="text-2xl font-medium text-left py-2">Laporan Data Rekam Medis</h3>
        <div class="flex mt-2 gap-2">
          <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-light rounded-lg text-sm py-2 px-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Export PDF</button>
          <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-light rounded-lg text-sm py-2 px-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Export Excel</button>
        </div>
      </div>
      
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-3 py-3">
                          Nomor
                      </th>
                      <th scope="col" class="px-3 py-3">
                          <div class="flex items-center">
                            Tanggal Periksa
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                      </th>
                      <th scope="col" class="px-3 py-3">
                          <div class="flex items-center">
                            Nama Pasien
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                      </th>
                      <th scope="col" class="px-3 py-3">
                          <div class="flex items-center">
                            Keluhan
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                      </th>
                      <th scope="col" class="px-3 py-3">
                          <div class="flex items-center">
                            Nama Dokter
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                      </th>
                      <th scope="col" class="px-3 py-3">
                          <div class="flex items-center">
                            Diagnosa
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                      </th>
                      <th scope="col" class="px-3 py-3">
                          <div class="flex items-center">
                            Obat
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                      </th>
                      <th scope="col" class="px-3 py-3">
                        Aksi
                      </th>
                  </tr>
              </thead>
              <tbody>
                
                  <tr v-for="(patient, index ) in patients" :key="patient.id" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" class="px-3 py-4 dark:text-white">
                        {{ index+1 }}
                      </td>
                      <td class="px-3 py-4">
                        {{ patient.created_at }}
                      </td>
                      <td scope="row" class="px-3 py-4 dark:text-white">
                        {{ patient.name }}
                      </td>
                      <td class="px-3 py-4">
                        {{ patient.complaint }}
                      </td>
                      <td class="px-3 py-4">
                          dr. lorem
                      </td>
                      <td class="px-3 py-4">
                        {{ patient.diagnose }}
                      </td>
                      <td class="px-3 py-4">
                          lorem ipsum
                      </td>
                      <td class="px-3 py-4">
                        <div class="flex gap-1">
                          <div class="p-1 rounded bg-primary">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.79375 13.4999H3C2.86739 13.4999 2.74022 13.4473 2.64645 13.3535C2.55268 13.2597 2.5 13.1326 2.5 12.9999V10.2062C2.49978 10.1413 2.51236 10.0769 2.53702 10.0169C2.56169 9.95682 2.59796 9.90222 2.64375 9.85619L10.1438 2.3562C10.1903 2.30895 10.2457 2.27144 10.3069 2.24583C10.3681 2.22022 10.4337 2.20703 10.5 2.20703C10.5663 2.20703 10.632 2.22022 10.6931 2.24583C10.7543 2.27144 10.8097 2.30895 10.8563 2.3562L13.6438 5.1437C13.691 5.19022 13.7285 5.24568 13.7541 5.30684C13.7797 5.368 13.7929 5.43364 13.7929 5.49995C13.7929 5.56625 13.7797 5.63189 13.7541 5.69305C13.7285 5.75421 13.691 5.80967 13.6438 5.85619L6.14375 13.3562C6.09773 13.402 6.04313 13.4383 5.98307 13.4629C5.92301 13.4876 5.85868 13.5002 5.79375 13.4999Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M8.5 4L12 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M10.25 5.75L4.25 11.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M5.96875 13.4688L2.53125 10.0312" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                          <div class="p-1 rounded bg-red-600">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.5 3.5H2.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M6.5 6.5V10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M9.5 6.5V10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      patients: [
        { name: 'Asyroful', created_at: '01/02/23', complaint: 'Demam', diagnose: 'Masuk Angin'  },
        { name: 'Boy', created_at: '01/02/23', complaint: 'Batuk', diagnose: 'Masuk Angin'  },
        { name: 'Albert', created_at: '02/02/23', complaint: 'Pilek', diagnose: 'Masuk Angin'  },
        { name: 'Vyn', created_at: '03/02/23', complaint: 'Panas Dalam', diagnose: 'Masuk Angin'  },
        { name: 'Asyroful', created_at: '01/02/23', complaint: 'Demam', diagnose: 'Masuk Angin'  },
        { name: 'Boy', created_at: '01/02/23', complaint: 'Batuk', diagnose: 'Masuk Angin'  },
        { name: 'Albert', created_at: '02/02/23', complaint: 'Pilek', diagnose: 'Masuk Angin'  },
        { name: 'Vyn', created_at: '03/02/23', complaint: 'Panas Dalam', diagnose: 'Masuk Angin'  },
      ]
    }
  }
}
</script>

<style>

</style>