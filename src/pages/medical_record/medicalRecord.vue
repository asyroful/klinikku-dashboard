<template>
  <div>
    <div class="bg-white rounded-xl p-6">
      <div class="flex justify-between mb-6">
        <h3 class="text-2xl font-medium text-left py-2">Rekam Medis</h3>
        <div v-if="isDoctor">
          <router-link to="/medical-record/add">
            <button type="button" class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-sm py-2 px-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><span class="pr-2">+</span>Tambah Rekam Medis</button>
          </router-link>
        </div>
      </div>
      <div>
        <form class="flex items-center w-full mb-6">
          <label for="voice-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
              </svg>
             </div>
            <input v-model="search" type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search..." required>
          </div>
        </form>     
      </div>
      <div v-if="isLoading">
          <div class="w-full p-4 rounded shadow animate-pulse">
            <div class="items-center mt-4 space-y-3">
              <div>
                <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div>
                <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div>
                <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div>
                <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
      </div>
      <div v-else class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div v-if="patients.length > 0">
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
                      <th v-if="isDoctor" scope="col" class="px-3 py-3">
                        Aksi
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(patient, index ) in filteredPatients" :key="patient.id" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" class="px-3 py-4 dark:text-white">
                        {{ index+1 }}
                      </td>
                      <td class="px-3 py-4">
                        {{ patient.date }}
                      </td>
                      <td scope="row" class="px-3 py-4 dark:text-white">
                        {{ patient.patient_id }}
                      </td>
                      <td class="px-3 py-4">
                        {{ patient.complaint }}
                      </td>
                      <td class="px-3 py-4">
                        {{ patient.doctor_id }}
                      </td>
                      <td class="px-3 py-4">
                        {{ patient.diagnose }}
                      </td>
                      <td class="px-3 py-4">
                        <div class="flex justify-center items-center">
                          <div @click="openPopUp(patient.id)" class="w-6 p-1 rounded bg-black cursor-pointer">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.4569 7.7975C15.435 7.74813 14.9056 6.57375 13.7287 5.39687C12.1606 3.82875 10.18 3 7.99999 3C5.81999 3 3.83937 3.82875 2.27124 5.39687C1.09437 6.57375 0.562494 7.75 0.543119 7.7975C0.51469 7.86144 0.5 7.93064 0.5 8.00062C0.5 8.0706 0.51469 8.1398 0.543119 8.20375C0.564994 8.25312 1.09437 9.42688 2.27124 10.6038C3.83937 12.1713 5.81999 13 7.99999 13C10.18 13 12.1606 12.1713 13.7287 10.6038C14.9056 9.42688 15.435 8.25312 15.4569 8.20375C15.4853 8.1398 15.5 8.0706 15.5 8.00062C15.5 7.93064 15.4853 7.86144 15.4569 7.7975ZM7.99999 12C6.07624 12 4.39562 11.3006 3.00437 9.92188C2.43352 9.35418 1.94786 8.70685 1.56249 8C1.94776 7.29309 2.43343 6.64574 3.00437 6.07812C4.39562 4.69938 6.07624 4 7.99999 4C9.92374 4 11.6044 4.69938 12.9956 6.07812C13.5676 6.6456 14.0543 7.29295 14.4406 8C13.99 8.84125 12.0269 12 7.99999 12ZM7.99999 5C7.40665 5 6.82663 5.17595 6.33328 5.50559C5.83994 5.83524 5.45542 6.30377 5.22836 6.85195C5.00129 7.40013 4.94188 8.00333 5.05764 8.58527C5.17339 9.16721 5.45912 9.70176 5.87867 10.1213C6.29823 10.5409 6.83278 10.8266 7.41472 10.9424C7.99667 11.0581 8.59987 10.9987 9.14804 10.7716C9.69622 10.5446 10.1648 10.1601 10.4944 9.66671C10.824 9.17336 11 8.59334 11 8C10.9992 7.2046 10.6828 6.44202 10.1204 5.87959C9.55797 5.31716 8.79539 5.00083 7.99999 5ZM7.99999 10C7.60443 10 7.21775 9.8827 6.88885 9.66294C6.55996 9.44318 6.30361 9.13082 6.15224 8.76537C6.00086 8.39991 5.96125 7.99778 6.03842 7.60982C6.11559 7.22186 6.30608 6.86549 6.58578 6.58579C6.86549 6.30608 7.22185 6.1156 7.60981 6.03843C7.99778 5.96126 8.39991 6.00087 8.76536 6.15224C9.13081 6.30362 9.44317 6.55996 9.66293 6.88886C9.8827 7.21776 9.99999 7.60444 9.99999 8C9.99999 8.53043 9.78928 9.03914 9.41421 9.41421C9.03913 9.78929 8.53043 10 7.99999 10Z" fill="white"/>
                            </svg>
                          </div>
                        </div>
                      </td>
                      <td class="px-3 py-4">
                        <div v-if="isDoctor">
                          <div class="flex gap-1">
                            <div @click="editItem(patient.id)" class="p-1 rounded bg-primary cursor-pointer">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.79375 13.4999H3C2.86739 13.4999 2.74022 13.4473 2.64645 13.3535C2.55268 13.2597 2.5 13.1326 2.5 12.9999V10.2062C2.49978 10.1413 2.51236 10.0769 2.53702 10.0169C2.56169 9.95682 2.59796 9.90222 2.64375 9.85619L10.1438 2.3562C10.1903 2.30895 10.2457 2.27144 10.3069 2.24583C10.3681 2.22022 10.4337 2.20703 10.5 2.20703C10.5663 2.20703 10.632 2.22022 10.6931 2.24583C10.7543 2.27144 10.8097 2.30895 10.8563 2.3562L13.6438 5.1437C13.691 5.19022 13.7285 5.24568 13.7541 5.30684C13.7797 5.368 13.7929 5.43364 13.7929 5.49995C13.7929 5.56625 13.7797 5.63189 13.7541 5.69305C13.7285 5.75421 13.691 5.80967 13.6438 5.85619L6.14375 13.3562C6.09773 13.402 6.04313 13.4383 5.98307 13.4629C5.92301 13.4876 5.85868 13.5002 5.79375 13.4999Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.5 4L12 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.25 5.75L4.25 11.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.96875 13.4688L2.53125 10.0312" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            </div>
                            <div @click="() => toggleModal(patient.id)" class="p-1 rounded bg-red-600 cursor-pointer">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 3.5H2.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.5 6.5V10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.5 6.5V10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </td>
                      <div v-if="modalActive" class="fixed w-full h-full top-0 left-0 flex items-center justify-center">
                        <div class="modal-overlay absolute z-50 w-full h-full bg-gray-700 opacity-50"></div>
                        <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                          <div class="modal-content modal-content py-4 px-6">
                            <div class="flex justify-center items-center pb-3">
                              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="36" cy="36" r="36" fill="#FFF4F2"/>
                                <path d="M32.6672 41.2867L47.9872 25.965L50.3455 28.3217L32.6672 46L22.0605 35.3934L24.4172 33.0367L32.6672 41.2867Z" fill="#CB3A31"/>
                              </svg>
                            </div>
                            <p class="text-center">Apakah kamu ingin menghapus {{ patientToDelete.patient_id }}?</p>
                          </div>
                          <div class="flex justify-center py-2">
                            <button @click="cancelDelete" class="px-4 bg-transparent p-3 rounded-lg text-red-600 hover:bg-gray-100 hover:text-red-400 mr-2">Cancel</button>
                            <button @click="confirmDelete" class="modal-close px-4 bg-red-600 p-3 rounded-lg text-white hover:bg-red-400">Delete</button>
                          </div>
                        </div>
                      </div>
                    </tr>
                  </tbody>
                </table>
                <div v-if="popupActive">
                  <div v-if="selectedPatient">
                    <transition name="modal-animation">
                      <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center">
                        <div class="modal-overlay absolute z-50 w-full h-full bg-gray-900 opacity-50"></div>
                        <div class="bg-white w-2/5 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                          <div class="modal-content py-4 text-left px-6">
                            <div>
                              <div>
                                <p>Obat Normal</p>
                                <div v-if="selectedPatient.normal_drugs.length>0">
                                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                      <tr>
                                          <th scope="col" class="px-3 py-3">
                                              Nomor
                                          </th>
                                          <th scope="col" class="px-3 py-3">
                                              <div class="flex items-center">
                                                Nama Obat
                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                              </div>
                                          </th>
                                          <th scope="col" class="px-3 py-3">
                                              <div class="flex items-center">
                                                Dosis
                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                              </div>
                                          </th>
                                          <th scope="col" class="px-3 py-3">
                                              <div class="flex items-center">
                                                Pemakaian
                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                              </div>
                                          </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr v-for="(drug, index) in selectedPatient.normal_drugs" :key="drug.name" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
                                          <td scope="row" class="px-3 py-2 dark:text-white">
                                            {{ index+1 }}
                                          </td>
                                          <td scope="row" class="px-3 py-2 dark:text-white">
                                              {{ drug.name }}
                                          </td>
                                          <td class="px-3 py-2">
                                              {{ drug.amount }}
                                          </td>
                                          <td class="px-3 py-2">
                                              {{ drug.times }} X {{ drug.dd }}
                                          </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div v-else>
                                  <p class="py-6 text-center">Tidak ada obat yang tercatat</p>
                                </div>
                              </div>
                              <div>
                                <p>Obat Racikan</p>
                                <div v-if="selectedPatient.mix_drugs.length>0">
                                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                      <tr>
                                          <th scope="col" class="px-3 py-3">
                                              Nomor
                                          </th>
                                          <th scope="col" class="px-3 py-3">
                                              <div class="flex items-center">
                                                Nama Obat
                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                              </div>
                                          </th>
                                          <th scope="col" class="px-3 py-3">
                                              <div class="flex items-center">
                                                Jenis
                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                              </div>
                                          </th>
                                          <th scope="col" class="px-3 py-3">
                                              <div class="flex items-center">
                                                Dosis
                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                              </div>
                                          </th>
                                          <th scope="col" class="px-3 py-3">
                                              <div class="flex items-center">
                                                Pemakaian
                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                              </div>
                                          </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr v-for="(drug, index) in selectedPatient.mix_drugs" :key="drug.name" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
                                          <td scope="row" class="px-3 py-2 dark:text-white">
                                            {{ index+1 }}
                                          </td>
                                          <td scope="row" class="px-3 py-2 dark:text-white">
                                              {{ drug.name }}
                                          </td>
                                          <td class="px-3 py-2">
                                              {{ drug.type_concoction_id.name }}
                                          </td>
                                          <td class="px-3 py-2">
                                              {{ drug.amount }}
                                          </td>
                                          <td class="px-3 py-2">
                                              {{ drug.times }} X {{ drug.dd }}
                                          </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div v-else>
                                  <p class="py-6 text-center">Tidak ada obat yang tercatat</p>
                                </div>
                              </div>
                            </div>
                            <div class="flex justify-center pt-2">
                              <button @click="closePopUp" class="px-4 bg-transparent p-3 rounded-lg text-red-600 hover:bg-gray-100 hover:text-red-400 mr-2">Close</button>
                            </div>
                        </div>
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>
                <div class="flex flex-col items-center my-4">
                  <!-- Help text -->
                  <span class="text-sm text-gray-700 dark:text-gray-400">
                      Showing <span class="font-semibold text-gray-900 dark:text-white">{{ currentPage }}</span> to <span class="font-semibold text-gray-900 dark:text-white">{{ totalPages }}</span> of <span class="font-semibold text-gray-900 dark:text-white">{{ total }}</span> Entries
                  </span>
                  <!-- Buttons -->
                  <div class="inline-flex mt-2 xs:mt-0">
                      <button @click="previousPage" :disabled="currentPage === 1" class="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          Prev
                      </button>
                      <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          Next
                      </button>
                  </div>
                </div>
                <div v-if="successMessage" class="fixed bottom-0 right-0 mb-4 mr-4 bg-green-500 text-white py-2 px-4 rounded">
                  {{ successMessage }}
                </div>
              </div>
        
        <div v-else>
          <p class="py-32 text-center">Tidak ada rekam medis yang tercatat</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      search: '',
      role: '',
      isLoading: true,
      patients: [],
      modalActive: false,
      patientToDelete: null,
      popupActive: false,
      selectedPatient: null,
      currentPage: 1, // Halaman saat ini
      totalPages: 0, // Total halaman
      total: 0,
      successMessage: '',
    }
  },
  computed: {
    isAdmin() {
      return this.role === 'admin'; // Validasi apakah role adalah 'admin'
    },
    isSuperadmin() {
      return this.role === 'superadmin'; // Validasi apakah role adalah 'superadmin'
    },
    isPharmacist() {
      return this.role === 'pharmacist'; // Validasi apakah role adalah 'pharmacist'
    },
    isDoctor() {
      return this.role === 'doctor'; // Validasi apakah role adalah 'doctor'
    },
    filteredPatients() {
      if (this.search) {
        return this.patients.filter(patient => patient.patient_id.toLowerCase().startsWith(this.search.toLowerCase()));
      } else {
        return this.patients;
      }
    },
  },
  mounted() {
    this.fetchItems();
    this.fetchUserRole();
  },
  created() {
    // Periksa apakah ada pesan sukses dalam LocalStorage
    const successMessage = localStorage.getItem("successMessage");
    if (successMessage) {
      // Tampilkan notifikasi
      this.successMessage = successMessage
      setTimeout(() => {
        this.successMessage = ''; // Sembunyikan notifikasi setelah beberapa detik
      }, 4000);
      localStorage.removeItem("successMessage");
    }
  },
  methods: {
    fetchUserRole() {
      const token = localStorage.token
      // Panggil API /me untuk mendapatkan data peran pengguna
      axios.get('/me', {headers: { "Authorization": `Bearer ${token}` }})
      .then(response => {
          console.log(response)
          this.role = response.data.data.role; // Asumsikan response.data.role berisi peran pengguna
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchItems(){
      const sortBy = 'date'; // Kolom yang digunakan untuk mengurutkan (misalnya kolom tanggal pembuatan)
      const sortOrder = 'desc';
      const token = localStorage.token
      axios.get(`record?page=${this.currentPage}&sort=${sortBy}&order=${sortOrder}`, {headers: { "Authorization": `Bearer ${token}` }})
      .then(response => {
          console.log(response)
          this.patients = response.data.data;
          this.totalPages = response.data.meta.last_page;
          this.total = response.data.meta.total;
          this.isLoading = false;
        })
        .catch(error => {
          console.error(error);
        });
    },
    confirmDelete(){
      const patientId = this.patientToDelete.id;
      const token = localStorage.token
      // Menghapus item dengan ID tertentu dari API
      axios.delete(`record/${patientId}`, {headers: { "Authorization": `Bearer ${token}` }})
        .then((response) => {
          console.log(response)
          this.modalActive = false;
          this.patientToDelete = null;
          this.successMessage = response.data.message; // Tampilkan notifikasi "Berhasil dihapus"
          setTimeout(() => {
            this.successMessage = ''; // Sembunyikan notifikasi setelah beberapa detik
          }, 3000);
          this.fetchItems(); // Memuat kembali daftar item setelah menghapus
        })
        .catch(error => {
          console.error(error);
        });
      // if (window.confirm('Apakah Anda yakin ingin menghapus item ini?')) {
      // }
    },
    editItem(id) {
      // Navigasi ke halaman edit dengan menggunakan ID item
      this.$router.push({ name: 'Edit Medical Record', params: { id: id } });
    },
    openPopUp(patientId) {
      this.selectedPatient = this.patients.find(patient => patient.id === patientId);
      this.popupActive = true;
    },
    toggleModal(patientId) {
      this.patientToDelete = this.patients.find(patient => patient.id === patientId);
      this.modalActive = true;
    },
    cancelDelete() {
      this.modalActive = false;
      this.patientToDelete = null;
    },
    closePopUp() {
      this.popupActive = false;
      this.selectedPatientId = null;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchItems();
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchItems();
      }
    },
  },
}
</script>

<style>

</style>