<template>
  <div>
    <div class="bg-white rounded-xl p-6">
      <div class="flex justify-between mb-6">
        <h3 class="text-2xl font-medium text-left py-2">Racikan Obat</h3>
        
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
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-3 py-3">
                          Nomor
                      </th>
                      <th scope="col" class="px-3 py-3">
                          <div class="flex items-center">
                            Nama Pasien
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
                        Lihat Obat
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(receipt, index ) in receipts" :key="receipt.id" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" class="px-3 py-4 dark:text-white">
                        {{ index+1 }}
                      </td>
                      <td scope="row" class="px-3 py-4 dark:text-white">
                        {{ receipt.patient_id }}
                      </td>
                      <td class="px-3 py-4">
                        {{ receipt.doctor_id }}
                      </td>
                      <td class="px-3 py-4">
                        {{ receipt.diagnose }}
                      </td>
                      <td class="px-3 py-4">
                        <div class="flex gap-1">
                          <div @click="openModal(receipt.id)" class="w-6 p-1 rounded bg-black cursor-pointer">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.4569 7.7975C15.435 7.74813 14.9056 6.57375 13.7287 5.39687C12.1606 3.82875 10.18 3 7.99999 3C5.81999 3 3.83937 3.82875 2.27124 5.39687C1.09437 6.57375 0.562494 7.75 0.543119 7.7975C0.51469 7.86144 0.5 7.93064 0.5 8.00062C0.5 8.0706 0.51469 8.1398 0.543119 8.20375C0.564994 8.25312 1.09437 9.42688 2.27124 10.6038C3.83937 12.1713 5.81999 13 7.99999 13C10.18 13 12.1606 12.1713 13.7287 10.6038C14.9056 9.42688 15.435 8.25312 15.4569 8.20375C15.4853 8.1398 15.5 8.0706 15.5 8.00062C15.5 7.93064 15.4853 7.86144 15.4569 7.7975ZM7.99999 12C6.07624 12 4.39562 11.3006 3.00437 9.92188C2.43352 9.35418 1.94786 8.70685 1.56249 8C1.94776 7.29309 2.43343 6.64574 3.00437 6.07812C4.39562 4.69938 6.07624 4 7.99999 4C9.92374 4 11.6044 4.69938 12.9956 6.07812C13.5676 6.6456 14.0543 7.29295 14.4406 8C13.99 8.84125 12.0269 12 7.99999 12ZM7.99999 5C7.40665 5 6.82663 5.17595 6.33328 5.50559C5.83994 5.83524 5.45542 6.30377 5.22836 6.85195C5.00129 7.40013 4.94188 8.00333 5.05764 8.58527C5.17339 9.16721 5.45912 9.70176 5.87867 10.1213C6.29823 10.5409 6.83278 10.8266 7.41472 10.9424C7.99667 11.0581 8.59987 10.9987 9.14804 10.7716C9.69622 10.5446 10.1648 10.1601 10.4944 9.66671C10.824 9.17336 11 8.59334 11 8C10.9992 7.2046 10.6828 6.44202 10.1204 5.87959C9.55797 5.31716 8.79539 5.00083 7.99999 5ZM7.99999 10C7.60443 10 7.21775 9.8827 6.88885 9.66294C6.55996 9.44318 6.30361 9.13082 6.15224 8.76537C6.00086 8.39991 5.96125 7.99778 6.03842 7.60982C6.11559 7.22186 6.30608 6.86549 6.58578 6.58579C6.86549 6.30608 7.22185 6.1156 7.60981 6.03843C7.99778 5.96126 8.39991 6.00087 8.76536 6.15224C9.13081 6.30362 9.44317 6.55996 9.66293 6.88886C9.8827 7.21776 9.99999 7.60444 9.99999 8C9.99999 8.53043 9.78928 9.03914 9.41421 9.41421C9.03913 9.78929 8.53043 10 7.99999 10Z" fill="white"/>
                            </svg>
                          </div>
                          <div @click="toggleModal" class="py-1 px-2 rounded bg-green-500 cursor-pointer">
                            <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.3038 8.27334L8.73438 0L10 2.36333L4.3038 13L0 6.78889L1.89873 5.2L4.3038 8.27334Z" fill="white"/>
                            </svg>
                          </div>
                        </div>
                      </td>
                      <Modal @close="toggleModal" :modalActive="modalActive">
                          <div class="modal-content">
                            <p class="text-center">Apakah kamu ingin menyetujui item ini?</p>
                          </div>
                          <!--Footer-->
                          <div class="flex justify-center pt-2">
                              <button @click="close" class="px-4 bg-transparent p-3 rounded-lg text-green-600 hover:bg-gray-100 hover:text-green-400 mr-2">Cancel</button>
                              <button @click="approve(receipt.id)" class="modal-close px-4 bg-green-600 p-3 rounded-lg text-white hover:bg-green-400">Setujui</button>
                          </div>
                      </Modal>
                  </tr>
              </tbody>
            </table>
            <div v-if="popupActive">
              <div v-if="selectedReceipt">
                <transition name="modal-animation">
                  <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center">
                    <div class="modal-overlay absolute z-50 w-full h-full bg-gray-900 opacity-50"></div>
                    <div class="bg-white w-11/12 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                      <div class="modal-content py-4 text-left px-6">
                        <div>
                          <div>
                            <p>Obat Normal</p>
                            <div v-if="selectedReceipt.normal_drugs.length>0">
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
                                  <tr v-for="(drug, index) in selectedReceipt.normal_drugs" :key="drug.name" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
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
                          <div class="mt-2">
                            <p>Obat Racikan</p>
                            <div v-if="selectedReceipt.mix_drugs.length>0">
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
                                  <tr v-for="(drug, index) in selectedReceipt.mix_drugs" :key="drug.name" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
                                      <td scope="row" class="px-3 py-2 dark:text-white">
                                        {{ index+1 }}
                                      </td>
                                      <td scope="row" class="px-3 py-2 dark:text-white">
                                          {{ drug.name }}
                                      </td>
                                      <td class="px-3 py-2">
                                          {{ drug.type }}
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
                          <button @click="closeModal" class="px-4 bg-transparent p-3 rounded-lg text-red-600 hover:bg-gray-100 hover:text-red-400 mr-2">Close</button>
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
            <div v-if="successMessage" class="fixed bottom-0 right-0 mb-4 mr-4 bg-primary text-white py-2 px-4 rounded">
              {{ successMessage }}
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
export default {
  data() {
    return {
      search: '',
      receipts: [],
      isLoading: true,
      popupActive: false,
      selectedReceipt: null,
      currentPage: 1, // Halaman saat ini
      totalPages: 0, // Total halaman
      total: 0,
      successMessage: '',
    }
  },
  components: {
    Modal,
  },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    const close = () => {
      modalActive.value = !modalActive.value
    }
    return { modalActive, toggleModal, close };
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    fetchItems(){
      const token = localStorage.token
      axios.get(`receipt?page=${this.currentPage}`, {headers: { "Authorization": `Bearer ${token}` }})
        .then(response => {
          console.log(response)
          this.receipts = response.data.data;
          this.totalPages = response.data.meta.last_page;
          this.total = response.data.meta.total;
          this.isLoading = false;
        })
        .catch(error => {
          console.error(error);
        });
    },
    approve(id){
      const token = localStorage.token
      
      axios.put(`approve/${id}`, {}, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then((response) => {
          this.toggleModal();
          this.successMessage = response.data.message; // Tampilkan notifikasi "Berhasil dihapus"
          setTimeout(() => {
            this.successMessage = ''; // Sembunyikan notifikasi setelah beberapa detik
          }, 4000);
          this.fetchItems(); // Memuat kembali daftar item setelah menghapus
        })
        .catch(error => {
          console.error(error);
        });
    },
    openModal(receiptId) {
      this.selectedReceipt = this.receipts.find(receipt => receipt.id === receiptId);
      this.popupActive = true;
    },
    closeModal() {
      this.popupActive = false;
      this.selectedReceiptId = null;
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
  computed : {
    filteredReceipt: function() {
      return this.receipts.filter(receipt => 
        receipt.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  
}
</script>

<style>

</style>