<template>
  <div class="grid grid-cols-4 gap-5"> 
    <div class="py-3 px-2 rounded-xl bg-white h-24">
      <div class="flex flex-row gap-5">
        <div class="rounded-full bg-surface px-3 py-4">
          <svg width="41" height="28" viewBox="0 0 41 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5713 14C17.4388 14 20.5713 10.8675 20.5713 7C20.5713 3.1325 17.4388 0 13.5713 0C9.70379 0 6.57129 3.1325 6.57129 7C6.57129 10.8675 9.70379 14 13.5713 14ZM18.5713 7C18.5713 9.7629 16.3342 12 13.5713 12C10.8084 12 8.57129 9.7629 8.57129 7C8.57129 4.2371 10.8084 2 13.5713 2C16.3342 2 18.5713 4.2371 18.5713 7Z" fill="#0063ED"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.571289 28V22.4C0.571289 18.144 9.23249 16 13.5713 16C16.4575 16 21.2564 16.9487 24.1462 18.8368C26.2059 18.2798 28.4649 18 30.0713 18C31.9292 18 34.4223 18.3742 36.4805 19.1307C37.5077 19.5084 38.4902 20.004 39.2335 20.6463C39.9821 21.2931 40.5713 22.1676 40.5713 23.2667V28H0.571289ZM2.57129 22.4C2.57129 22.0826 2.71685 21.6486 3.33747 21.0846C3.97037 20.5095 4.94451 19.9511 6.17811 19.4645C8.64729 18.4906 11.6479 18 13.5713 18C15.4947 18 18.4953 18.4906 20.9645 19.4645C22.1981 19.9511 23.1722 20.5095 23.8051 21.0846C24.4257 21.6486 24.5713 22.0826 24.5713 22.4V26H2.57129V22.4ZM25.9245 20.4692C27.437 20.1565 28.9547 20 30.0713 20C31.7178 20 33.9747 20.3405 35.7904 21.0079C36.7001 21.3423 37.4356 21.736 37.9259 22.1597C38.4111 22.5789 38.5713 22.947 38.5713 23.2667V26H26.5713V22.4C26.5713 21.6991 26.3364 21.0554 25.9245 20.4692Z" fill="#0063ED"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.5713 10.5C35.5713 13.5387 33.11 16 30.0713 16C27.0326 16 24.5713 13.5387 24.5713 10.5C24.5713 7.4612 27.0326 5 30.0713 5C33.11 5 35.5713 7.4612 35.5713 10.5ZM30.0713 14C32.0055 14 33.5713 12.4342 33.5713 10.5C33.5713 8.5658 32.0055 7 30.0713 7C28.1371 7 26.5713 8.5658 26.5713 10.5C26.5713 12.4342 28.1371 14 30.0713 14Z" fill="#0063ED"/>
          </svg>
        </div>
        <div class="flex flex-col text-left">
          <p class="text-base">Total Pasien</p>
          <h1 class="mt-1 font-bold text-3xl">{{ patients.length }}</h1>
        </div>
      </div>
    </div>
    <div class="py-3 px-2 rounded-xl bg-white h-24">
      <div class="flex flex-row gap-5">
        <div class="rounded-full bg-surface px-3 py-4">
          <svg width="38" height="30" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3589 24.1757C11.3574 24.1742 11.3567 24.1733 11.3567 24.1733M37 32.3094V37H1V32.3094C1 30.832 2.12695 29.1679 4.24297 27.6241C6.22233 26.1799 8.85287 25.007 11.4789 24.3626C11.4909 24.3843 11.5036 24.408 11.5172 24.4337C11.5463 24.4892 11.575 24.5464 11.6075 24.6111L11.6114 24.6189C11.6413 24.6783 11.6756 24.7469 11.7101 24.8126L12.0078 25.3781H12.6471H16.95C17.9256 25.3779 18.4018 25.378 18.8835 25.3781C19.3543 25.3782 19.8306 25.3783 20.7842 25.3781H25.0875H25.7266L26.0243 24.8126C26.1097 24.6505 26.245 24.4543 26.3747 24.3294C26.3753 24.3288 26.376 24.3283 26.3765 24.3276C29.0504 24.964 31.7414 26.1535 33.757 27.6241C35.8731 29.1679 37 30.832 37 32.3094Z" stroke="#0063ED" stroke-width="2"/>
            <path d="M10.5295 33.7803C11.6477 33.7803 12.5883 32.8703 12.5883 31.7059C12.5883 30.5415 11.6477 29.6315 10.5295 29.6315C9.41128 29.6315 8.47067 30.5415 8.47067 31.7059C8.47067 32.8703 9.41128 33.7803 10.5295 33.7803ZM12.706 31.7059C12.706 32.908 11.7316 33.8824 10.5295 33.8824C9.32742 33.8824 8.35303 32.908 8.35303 31.7059C8.35303 30.5038 9.32742 29.5294 10.5295 29.5294C11.7316 29.5294 12.706 30.5038 12.706 31.7059Z" fill="#333333" stroke="#0063ED" stroke-width="2"/>
            <path d="M27.4707 33.8236H25.353V31.7059L26.4119 29.5883H30.6471L31.706 31.7059V33.8236H29.5883" stroke="#0063ED" stroke-width="2" stroke-linejoin="round"/>
            <path d="M28.5295 29.5882C29.059 28.8823 29.5884 25.8823 29.059 24.8235" stroke="#0063ED" stroke-width="2"/>
            <path d="M10.2196 29.5882C9.69024 28.8823 9.16083 25.8823 9.69024 24.8235" stroke="#0063ED" stroke-width="2"/>
            <path d="M28.5295 10.5294C28.5295 15.7946 24.2653 20.0588 19.0001 20.0588C13.7349 20.0588 9.4707 15.7946 9.4707 10.5294C9.4707 5.2642 13.7349 1 19.0001 1C24.2653 1 28.5295 5.2642 28.5295 10.5294Z" stroke="#0063ED" stroke-width="2"/>
          </svg>
        </div>
        <div class="flex flex-col text-left">
          <p class="text-base">Total Dokter</p>
          <h1 class="mt-1 font-bold text-3xl">{{ doctors.length }}</h1>
        </div>
      </div>
    </div>
    <div class="py-3 px-2 rounded-xl bg-white h-24">
      <div class="flex flex-row gap-5">
        <div class="rounded-full bg-surface px-3 py-4">
          <svg width="40" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.8889 11.1111C28.8889 16.0227 24.9116 20 20 20C15.0884 20 11.1111 16.0227 11.1111 11.1111C11.1111 6.19956 15.0884 2.22222 20 2.22222C24.9116 2.22222 28.8889 6.19956 28.8889 11.1111ZM20 22.2222C26.1389 22.2222 31.1111 17.25 31.1111 11.1111C31.1111 4.97222 26.1389 0 20 0C13.8611 0 8.88889 4.97222 8.88889 11.1111C8.88889 17.25 13.8611 22.2222 20 22.2222ZM28.2709 25.835C28.0013 25.7719 27.7367 25.71 27.4786 25.6488L23.2328 37.7778H37.7778V31.6667C37.7778 30.5043 36.9954 29.2809 35.159 28.0751C34.3432 27.5394 33.0139 27.0613 31.4563 26.6277C30.3882 26.3303 29.295 26.0746 28.272 25.8352L28.2709 25.835ZM25.5946 24.3049L22.2222 33.9388V33.3333L21.5839 28.8651C21.9934 28.7789 22.3279 28.466 22.4327 28.0472L22.9882 25.825C23.1634 25.1238 22.6331 24.4444 21.9102 24.4444H18.0898C17.3669 24.4444 16.8364 25.1238 17.0118 25.825L17.5673 28.0472C17.672 28.466 18.0066 28.7789 18.4161 28.8651L17.7919 33.2342L14.3991 24.2919L14.376 24.245C14.0378 23.5567 13.2688 23.181 12.5144 23.365C12.1352 23.4574 11.718 23.5551 11.2772 23.6582C10.2354 23.9021 9.06167 24.1768 7.94767 24.4869C6.37733 24.9241 4.75122 25.4756 3.62124 26.2176C1.5406 27.5837 0 29.3923 0 31.6667V40H40V31.6667C40 29.3923 38.4594 27.5838 36.3788 26.2176C35.2488 25.4756 33.6227 24.9241 32.0523 24.4869C30.9383 24.1768 29.7651 23.9022 28.7233 23.6583C28.2824 23.5551 27.8648 23.4574 27.4854 23.3649C26.7311 23.181 25.9622 23.5566 25.624 24.2449L25.5946 24.3049ZM12.5358 25.6453L17.139 37.7778H2.22222V31.6667C2.22222 30.5043 3.0046 29.2809 4.841 28.0751C5.65678 27.5394 6.98611 27.0613 8.54367 26.6278C9.61178 26.3303 10.705 26.0746 11.7279 25.8353C12.0029 25.7709 12.2728 25.7078 12.5358 25.6453Z" fill="#0063ED"/>
          </svg>
        </div>
        <div class="flex flex-col text-left">
          <p class="text-base">Total Admin</p>
          <h1 class="mt-1 font-bold text-3xl">{{ admins.length }}</h1>
        </div>
      </div>
    </div>
    <div class="py-3 px-2 rounded-xl bg-white h-24">
      <div class="flex flex-row gap-5">
        <div class="rounded-full bg-surface px-3 py-4">
          <svg width="40" height="30" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7403 28.6222L11.8638 32.5924C9.69352 33.8454 8.94995 36.6205 10.203 38.7906C11.4558 40.9608 14.2309 41.7044 16.4012 40.4514L23.2777 36.4812L18.7403 28.6222ZM10.7294 30.6277C7.47405 32.5071 6.35875 36.6697 8.23815 39.925C10.1177 43.1803 14.2802 44.2956 17.5355 42.4162L25.8857 37.5952C26.1569 37.4386 26.2499 37.0917 26.0933 36.8205L19.8544 26.0143C19.6977 25.743 19.3508 25.6501 19.0796 25.8067L10.7294 30.6277Z" fill="#0063ED"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9885 27.9789L28.3564 23.7251C30.2553 22.6287 32.6835 23.2794 33.7798 25.1783C34.8762 27.0773 34.2255 29.5054 32.3266 30.6017L24.9588 34.8556L20.9885 27.9789ZM27.222 21.7604C30.206 20.0375 34.0217 21.0599 35.7445 24.0439C37.4674 27.028 36.445 30.8437 33.461 32.5665L24.6196 37.6711C24.3483 37.8277 24.0014 37.7348 23.8447 37.4635L18.173 27.6397C18.0164 27.3685 18.1093 27.0216 18.3807 26.865L27.222 21.7604Z" fill="#0063ED"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0933 36.8204C26.2499 37.0916 26.1569 37.4385 25.8857 37.5951L17.5355 42.4161C14.2802 44.2955 10.1177 43.1802 8.23815 39.9249C6.35875 36.6696 7.47405 32.507 10.7294 30.6276L19.0796 25.8066C19.3508 25.65 19.6977 25.7429 19.8544 26.0142L27.2222 21.7604C30.2062 20.0375 34.0218 21.0599 35.7447 24.0439C37.4675 27.028 36.4452 30.8437 33.4611 32.5665L26.0933 36.8204ZM20.9887 27.9789L24.9589 34.8556L32.3268 30.6017C34.2257 29.5054 34.8763 27.0773 33.78 25.1783C32.6836 23.2794 30.2554 22.6287 28.3565 23.7251L20.9887 27.9789ZM16.4012 40.4513C14.2309 41.7043 11.4558 40.9607 10.203 38.7905C8.94995 36.6204 9.69352 33.8453 11.8638 32.5923L18.7403 28.6221L23.2777 36.4811L16.4012 40.4513Z" fill="#0063ED"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1125 13.8874C28.7704 16.5454 33.0798 16.5454 35.7377 13.8874C38.3957 11.2295 38.3957 6.92011 35.7377 4.26217C33.0798 1.60421 28.7704 1.60421 26.1125 4.26217C23.4545 6.92011 23.4545 11.2295 26.1125 13.8874ZM24.5083 15.4917C28.0521 19.0355 33.7981 19.0355 37.342 15.4917C40.8859 11.9478 40.8859 6.20184 37.342 2.65795C33.7981 -0.885985 28.0521 -0.885985 24.5083 2.65795C20.9644 6.20184 20.9644 11.9478 24.5083 15.4917Z" fill="#0063ED"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.9385 15.2918L24.709 4.06229L25.9122 2.85913L37.1417 14.0886L35.9385 15.2918Z" fill="#0063ED"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3131 19.7404L9.74788 6.22101L2.27144 18.785L15.3131 19.7404ZM11.8457 5.35741C11.1341 3.62864 8.7543 3.45427 7.79827 5.06085L0.321817 17.6248C-0.540631 19.0741 0.423648 20.9244 2.10565 21.0475L15.1474 22.0031C16.8293 22.1263 18.053 20.4365 17.411 18.8768L11.8457 5.35741Z" fill="#0063ED"/>
          </svg>
        </div>
        <div class="flex flex-col text-left">
          <p class="text-base">Total Obat</p>
          <h1 class="mt-1 font-bold text-3xl">{{ medicines.length }}</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-2 mt-5 gap-5"> 
    <div class="p-6 rounded-xl bg-white h-80">
      <div class="flex justify-between items-center">
        <h3 class="text-xl font-medium">Data Pasien Terakhir</h3>
        <router-link to="/patient">
          <button type="button" class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-sm py-2 px-4  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Lihat Semua</button>
        </router-link>
      </div>
      <div class="mt-5">
        <div v-if="patients.length > 0">
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
                        Jenis Kelamin
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                      </div>
                  </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(latestPatient, index ) in patients" :key="latestPatient.id" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
                  <td scope="row" class="px-3 py-2 dark:text-white">
                    {{ index+1 }}
                  </td>
                  <td scope="row" class="px-3 py-2 dark:text-white">
                      {{ latestPatient.name }}
                  </td>
                  <td class="px-3 py-2">
                      {{ latestPatient.gender }}
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <p class="py-16 text-center">Tidak ada pasien yang tercatat</p>
        </div>
      </div>
    </div>
    <div class="p-6 rounded-xl bg-white h-80">
      <div class="flex justify-between items-center">
        <h3 class="text-xl font-medium">Data Persediaan Obat</h3>
        <router-link to="/medicine">
          <button type="button" class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-sm py-2 px-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Lihat Semua</button>
        </router-link>
      </div>
      <div class="mt-5">
        <div v-if="medicines.length > 0">
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
                              Stock Barang
                              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(medicine, index ) in medicines" :key="medicine.id" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="px-3 py-2 dark:text-white">
                            {{ index+1 }}
                        </td>
                        <td scope="row" class="px-3 py-2 dark:text-white">
                            {{ medicine.name}}
                        </td>
                        <td class="px-3 py-2">
                            {{ medicine.stock}}
                        </td>
                    </tr>
                </tbody>
          </table>
        </div>
        <div v-else>
          <p class="py-16">Tidak ada obat yang tercatat</p>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5"> 
    <div class="p-6 rounded-xl bg-white h-fit">
      <div class="flex justify-between items-center">
        <h3 class="text-xl font-medium">Data yang berkunjung hari ini</h3>
        <router-link to="/medical-record">
          <button type="button" class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-sm py-2 px-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Lihat Semua</button>
        </router-link>
      </div>
      <div class="mt-5">
        <div v-if="items.length > 0">
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
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="(patient, index) in items" :key="patient.id" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
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
                          Sanmol
                      </td>
                  </tr>
                    
                    
                </tbody>
          </table>
        </div>
        <div v-else>
          <p class="py-32 text-center">Tidak ada rekam medis yang tercatat</p>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <h3 class="text-2xl font-bold text-left py-2">Home Page</h3>
    <div class="overflow-x-auto relative  sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Product name
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Color
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                  </svg></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Category
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                  </svg></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Price
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                  </svg></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Apple MacBook Pro 17"
            </th>
            <td class="py-4 px-6">
              Sliver
            </td>
            <td class="py-4 px-6">
              Laptop
            </td>
            <td class="py-4 px-6">
              $2999
            </td>
            <td class="py-4 px-6 text-right">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Microsoft Surface Pro
            </th>
            <td class="py-4 px-6">
              White
            </td>
            <td class="py-4 px-6">
              Laptop PC
            </td>
            <td class="py-4 px-6">
              $1999
            </td>
            <td class="py-4 px-6 text-right">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Magic Mouse 2
            </th>
            <td class="py-4 px-6">
              Black
            </td>
            <td class="py-4 px-6">
              Accessories
            </td>
            <td class="py-4 px-6">
              $99
            </td>
            <td class="py-4 px-6 text-right">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div> -->
  <!-- <router-link v-if="!isLoggedIn" to="/login"><button>Login</button></router-link> -->
</template>

<script>
import axios from 'axios';
// import { mapGetters } from "vuex";
export default {
  data() {
    return {
      patients: [],
      medicines: [],
      items: [],
      admins: [],
      doctors: [],
    }
  },
  
  async mounted(){
    if (!localStorage.getItem('token')) {
      console.log(localStorage.getItem('token'), 'cek get');
      // Jika tidak ada token, alihkan pengguna ke halaman login
      this.$router.push('/login');
    }
    const token = localStorage.token
      axios.get('record', {headers: { "Authorization": `Bearer ${token}` }})
        .then(response => {
          console.log(response)
          this.items = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
      axios.get('patient', { headers: { "Authorization": `Bearer ${token}`}})
        .then(response => {
          console.log(response)
          this.patients = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
      axios.get('drug', { headers: { "Authorization": `Bearer ${token}`}})
        .then(response => {
          console.log(response)
          this.medicines = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
      axios.get('user?role=doctor', { headers: { "Authorization": `Bearer ${token}`}})
        .then(response => {
          console.log(response)
          this.doctors = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
      axios.get('user?role=admin', { headers: { "Authorization": `Bearer ${token}`}})
        .then(response => {
          console.log(response)
          this.admins = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
  },
}
</script>

<style>

</style>