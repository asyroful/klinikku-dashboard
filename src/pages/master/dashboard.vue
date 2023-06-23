<template>
  <div class="flex">
    <!-- Side bar -->
    <aside class="w-[268px] fixed left-0 top-0 mt-16 h-screen bg-white" v-show="showSide">
      <div class="h-[calc(100vh-50px)] bg-white py-5">
        <div class="flex flex-col justify-between h-full px-2">
          <div class=" flex flex-col justify-between text-gray-600">
            <router-link to="/home" active-class="text-primary bg-surface" class="inline-flex relative items-center my-2 py-3 px-4 w-full text-sm font-medium rounded-xl border-gray-200 hover:text-primary focus:text-primary hover:bg-surface focus:bg-surface transition duration-400 ease-in-out">
              <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 13V10C9.5 9.8674 9.44732 9.74023 9.35355 9.64646C9.25979 9.55269 9.13261 9.50001 9 9.50001H7C6.86739 9.50001 6.74021 9.55269 6.64645 9.64646C6.55268 9.74023 6.5 9.8674 6.5 10V13C6.5 13.1326 6.44732 13.2598 6.35355 13.3536C6.25979 13.4473 6.13261 13.5 6 13.5H3C2.86739 13.5 2.74021 13.4473 2.64645 13.3536C2.55268 13.2598 2.5 13.1326 2.5 13V7.21876C2.50112 7.14957 2.51607 7.08129 2.54398 7.01796C2.57189 6.95463 2.61219 6.89753 2.6625 6.85001L7.6625 2.30626C7.75467 2.22194 7.87507 2.17517 8 2.17517C8.12493 2.17517 8.24533 2.22194 8.3375 2.30626L13.3375 6.85001C13.3878 6.89753 13.4281 6.95463 13.456 7.01796C13.4839 7.08129 13.4989 7.14957 13.5 7.21876V13C13.5 13.1326 13.4473 13.2598 13.3536 13.3536C13.2598 13.4473 13.1326 13.5 13 13.5H10C9.86739 13.5 9.74021 13.4473 9.64645 13.3536C9.55268 13.2598 9.5 13.1326 9.5 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Dashboard
            </router-link>
            <router-link to="/medical-record" v-if="isDoctor || isSuperadmin" active-class="text-primary bg-surface" class="inline-flex relative items-center my-2 py-3 px-4 w-full text-sm font-medium rounded-xl border-gray-200 hover:text-primary focus:text-primary hover:bg-surface focus:bg-surface transition duration-400 ease-in-out">
              <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71412 1.7948H4.19031C3.34875 1.7948 2.6665 2.46829 2.6665 3.29907V13.829C2.6665 14.6598 3.34875 15.3333 4.19031 15.3333H11.8094C12.6509 15.3333 13.3332 14.6598 13.3332 13.829V3.29907C13.3332 2.46829 12.6509 1.7948 11.8094 1.7948H10.2856V2.54694H11.8094C12.2302 2.54694 12.5713 2.88368 12.5713 3.29907V13.829C12.5713 14.2444 12.2302 14.5811 11.8094 14.5811H4.19031C3.76951 14.5811 3.42841 14.2444 3.42841 13.829V3.29907C3.42841 2.88368 3.76951 2.54694 4.19031 2.54694H5.71412V1.7948Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33301 1.79483C5.33301 1.17174 5.84466 0.666626 6.47587 0.666626H9.52348C10.1547 0.666626 10.6663 1.17174 10.6663 1.79483V2.54697C10.6663 3.17008 10.1547 3.67517 9.52348 3.67517H6.47587C5.84466 3.67517 5.33301 3.17008 5.33301 2.54697V1.79483ZM6.47587 1.41876C6.26546 1.41876 6.09491 1.58714 6.09491 1.79483V2.54697C6.09491 2.75466 6.26546 2.92304 6.47587 2.92304H9.52348C9.73388 2.92304 9.90444 2.75466 9.90444 2.54697V1.79483C9.90444 1.58714 9.73388 1.41876 9.52348 1.41876H6.47587Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.57129 7.05978C4.57129 6.85208 4.74184 6.68372 4.95224 6.68372H7.61891C7.82931 6.68372 7.99986 6.85208 7.99986 7.05978C7.99986 7.26749 7.82931 7.43585 7.61891 7.43585H4.95224C4.74184 7.43585 4.57129 7.26749 4.57129 7.05978Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.57129 5.17941C4.57129 4.97171 4.74184 4.80334 4.95224 4.80334H10.857C11.0674 4.80334 11.238 4.97171 11.238 5.17941C11.238 5.38712 11.0674 5.55548 10.857 5.55548H4.95224C4.74184 5.55548 4.57129 5.38712 4.57129 5.17941Z" fill="currentColor"/>
                <path d="M9.40806 7.43591C9.05796 7.43591 8.77148 7.71364 8.77148 8.05304C8.77148 8.39248 9.05796 8.67021 9.40806 8.67021C9.75815 8.67021 10.0446 8.39248 10.0446 8.05304C10.0446 7.71364 9.75815 7.43591 9.40806 7.43591Z" fill="currentColor"/>
                <path d="M8.60552 9.56305H6.79436C6.61931 9.56305 6.47607 9.42421 6.47607 9.25449C6.47607 9.08477 6.61931 8.94592 6.79436 8.94592H11.8721C12.0471 8.94592 12.1904 9.08477 12.1904 9.25449C12.1904 9.42421 12.0471 9.56305 11.8721 9.56305H10.0609L11.1598 13.2659C11.1598 13.4356 11.0166 13.5745 10.8415 13.5745C10.3486 13.5745 10.0166 12.0805 9.86392 11.723H8.80251C8.64979 12.0805 8.31783 13.5745 7.82491 13.5745C7.64986 13.5745 7.50663 13.4356 7.50663 13.2659L8.60552 9.56305Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33319 11.1966V11.9487H6.0951V11.1966H5.33319ZM4.95224 10.4445C4.74184 10.4445 4.57129 10.6128 4.57129 10.8205V12.3248C4.57129 12.5325 4.74184 12.7009 4.95224 12.7009H6.47605C6.68645 12.7009 6.857 12.5325 6.857 12.3248V10.8205C6.857 10.6128 6.68645 10.4445 6.47605 10.4445H4.95224Z" fill="currentColor"/>
              </svg>
              Rekam Medis
            </router-link>
            <div v-if="!isAdmin" active-class="text-primary bg-surface" class="inline-flex relative items-center mt-2 py-3 px-4 w-full text-sm font-medium rounded-xl border-gray-200 hover:text-primary focus:text-primary hover:bg-surface focus:bg-surface transition duration-400 ease-in-out" @click="toggleObatDrop">
              <svg class="mr-2" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.53719 8.58753L3.50549 9.77872C2.86428 10.1547 2.64459 10.9873 3.0148 11.6384C3.38497 12.2895 4.20488 12.5126 4.84608 12.1367L6.87779 10.9455L5.53719 8.58753ZM3.17034 9.18925C2.20853 9.75312 1.87901 11.002 2.43429 11.9787C2.98959 12.9554 4.21942 13.29 5.18123 12.7262L7.64833 11.2797C7.72846 11.2327 7.75594 11.1286 7.70966 11.0473L5.86634 7.80509C5.82006 7.72368 5.71757 7.69581 5.63744 7.74281L3.17034 9.18925Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.20151 8.39455L8.37836 7.11828C8.9394 6.78934 9.65682 6.98456 9.98074 7.55429C10.3047 8.12405 10.1124 8.85254 9.55138 9.18148L7.37453 10.4577L6.20151 8.39455ZM8.04321 6.52881C8.92486 6.0119 10.0522 6.31865 10.5612 7.21395C11.0702 8.10924 10.7682 9.25407 9.88653 9.77098L7.27432 11.3025C7.19415 11.3495 7.09166 11.3216 7.04538 11.2402L5.36963 8.29279C5.32338 8.21141 5.35083 8.10734 5.431 8.06034L8.04321 6.52881Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70966 11.0473C7.75594 11.1286 7.72846 11.2327 7.64833 11.2797L5.18123 12.7261C4.21942 13.29 2.98959 12.9554 2.43429 11.9787C1.87901 11.002 2.20853 9.75311 3.17034 9.18924L5.63744 7.7428C5.71757 7.6958 5.82006 7.72367 5.86634 7.80508L8.0432 6.52881C8.92484 6.0119 10.0522 6.31865 10.5612 7.21395C11.0702 8.10924 10.7682 9.25407 9.88652 9.77098L7.70966 11.0473ZM6.20149 8.39455L7.37451 10.4578L9.55137 9.18148C10.1124 8.85254 10.3046 8.12405 9.98073 7.55429C9.65681 6.98456 8.93939 6.78934 8.37835 7.11828L6.20149 8.39455ZM4.84608 12.1366C4.20488 12.5126 3.38497 12.2895 3.0148 11.6384C2.64459 10.9873 2.86428 10.1546 3.50549 9.77871L5.53719 8.58752L6.87779 10.9455L4.84608 12.1366Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.71533 4.16663C8.50061 4.96412 9.77384 4.96412 10.5591 4.16663C11.3444 3.36919 11.3444 2.07624 10.5591 1.27878C9.77384 0.481311 8.50061 0.481311 7.71533 1.27878C6.93001 2.07624 6.93001 3.36919 7.71533 4.16663ZM7.24136 4.64797C8.2884 5.71123 9.98606 5.71123 11.0331 4.64797C12.0802 3.58469 12.0802 1.86074 11.0331 0.797465C9.98606 -0.265822 8.2884 -0.265822 7.24136 0.797465C6.19429 1.86074 6.19429 3.58469 7.24136 4.64797Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6181 4.58808L7.30029 1.21889L7.65578 0.85791L10.9736 4.22708L10.6181 4.58808Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.52432 5.92274L2.88005 1.86652L0.671105 5.63607L4.52432 5.92274ZM3.49987 1.60741C3.2896 1.08873 2.58649 1.03641 2.30403 1.51843L0.095082 5.28798C-0.159732 5.72283 0.125168 6.27795 0.622123 6.31491L4.47536 6.60162C4.97228 6.63858 5.33384 6.13157 5.14415 5.66364L3.49987 1.60741Z" fill="currentColor"/>
              </svg>
              Obat
              <svg class="ml-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_182_551)">
                <path d="M7.99999 8.78132L11.3 5.48132L12.2427 6.42399L7.99999 10.6667L3.75732 6.42399L4.69999 5.48132L7.99999 8.78132Z" fill="currentColor"/>
                </g>
                <defs>
                <clipPath id="clip0_182_551">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </div>
            <div class="pl-4 flex flex-col" v-show="showObat">
              <router-link to="/receipt" v-if="isPharmacist" active-class="text-primary bg-surface" class="inline-flex relative items-center my-2 py-3 px-4 w-full text-sm font-medium rounded-xl border-gray-200 hover:text-primary focus:text-primary hover:bg-surface focus:bg-surface transition duration-400 ease-in-out">
                Racikan Obat
              </router-link>
              <router-link to="/medicine" active-class="text-primary bg-surface" class="inline-flex relative items-center my-2 py-3 px-4 w-full text-sm font-medium rounded-xl border-gray-200 hover:text-primary focus:text-primary hover:bg-surface focus:bg-surface transition duration-400 ease-in-out">
                Resepsi Obat
              </router-link>
            </div>
            <div v-if="!isPharmacist" active-class="text-primary bg-surface" class="inline-flex relative items-center mt-2 py-3 px-4 w-full text-sm font-medium rounded-xl border-gray-200 hover:text-primary focus:text-primary hover:bg-surface focus:bg-surface transition duration-400 ease-in-out" @click="toggleSideDrop">
              <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8C11.0376 8 13.5 6.65685 13.5 5C13.5 3.34315 11.0376 2 8 2C4.96243 2 2.5 3.34315 2.5 5C2.5 6.65685 4.96243 8 8 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 5V8C2.5 9.65625 4.9625 11 8 11C11.0375 11 13.5 9.65625 13.5 8V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 8V11C2.5 12.6562 4.9625 14 8 14C11.0375 14 13.5 12.6562 13.5 11V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Manajemen Data
              <svg class="ml-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_182_551)">
                <path d="M7.99999 8.78132L11.3 5.48132L12.2427 6.42399L7.99999 10.6667L3.75732 6.42399L4.69999 5.48132L7.99999 8.78132Z" fill="currentColor"/>
                </g>
                <defs>
                <clipPath id="clip0_182_551">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </div>
            <div class="pl-4 flex flex-col" v-show="showManagementData">
              <router-link to="/patient" active-class="text-primary" class="inline-flex relative items-center my-1 py-3 px-4 w-full text-sm font-medium rounded-xl border-gray-200 hover:text-primary focus:text-primary hover:bg-surface focus:bg-surface transition duration-400 ease-in-out">
                Data Pasien
              </router-link>
              <router-link v-if="isAdmin || isSuperadmin" to="/doctor" active-class="text-primary" class="inline-flex relative items-center my-1 py-3 px-4 w-full text-sm font-medium rounded-xl border-gray-200 hover:text-primary focus:text-primary hover:bg-surface focus:bg-surface transition duration-400 ease-in-out"> 
                Data Dokter
              </router-link>
              <router-link v-if="isAdmin || isSuperadmin" to="/admin" active-class="text-primary" class="inline-flex relative items-center my-1 py-3 px-4 w-full text-sm font-medium rounded-xl border-gray-200 hover:text-primary focus:text-primary hover:bg-surface focus:bg-surface transition duration-400 ease-in-out">
                Data Admin
              </router-link>
              <router-link v-if="isAdmin || isSuperadmin" to="/pharmacist" active-class="text-primary" class="inline-flex relative items-center my-1 py-3 px-4 w-full text-sm font-medium rounded-xl border-gray-200 hover:text-primary focus:text-primary hover:bg-surface focus:bg-surface transition duration-400 ease-in-out">
                Data Apoteker
              </router-link>
            </div>
            <router-link to="/login" active-class="text-primary bg-surface" class="inline-flex relative items-center my-2 py-3 px-4 w-full text-sm font-medium rounded-xl border-gray-200 hover:text-primary focus:text-primary hover:bg-surface focus:bg-surface transition duration-400 ease-in-out">
              <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13.5C7 13.6326 6.94732 13.7598 6.85355 13.8536C6.75979 13.9473 6.63261 14 6.5 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H6.5C6.63261 2 6.75979 2.05268 6.85355 2.14645C6.94732 2.24021 7 2.36739 7 2.5C7 2.63261 6.94732 2.75979 6.85355 2.85355C6.75979 2.94732 6.63261 3 6.5 3H3V13H6.5C6.63261 13 6.75979 13.0527 6.85355 13.1464C6.94732 13.2402 7 13.3674 7 13.5ZM13.8538 7.64625L11.3538 5.14625C11.2599 5.05243 11.1327 4.99972 11 4.99972C10.8673 4.99972 10.7401 5.05243 10.6462 5.14625C10.5524 5.24007 10.4997 5.36732 10.4997 5.5C10.4997 5.63268 10.5524 5.75993 10.6462 5.85375L12.2931 7.5H6.5C6.36739 7.5 6.24021 7.55268 6.14645 7.64645C6.05268 7.74021 6 7.86739 6 8C6 8.13261 6.05268 8.25979 6.14645 8.35355C6.24021 8.44732 6.36739 8.5 6.5 8.5H12.2931L10.6462 10.1462C10.5524 10.2401 10.4997 10.3673 10.4997 10.5C10.4997 10.6327 10.5524 10.7599 10.6462 10.8538C10.7401 10.9476 10.8673 11.0003 11 11.0003C11.1327 11.0003 11.2599 10.9476 11.3538 10.8538L13.8538 8.35375C13.9002 8.30731 13.9371 8.25217 13.9623 8.19147C13.9874 8.13077 14.0004 8.06571 14.0004 8C14.0004 7.93429 13.9874 7.86923 13.9623 7.80853C13.9371 7.74783 13.9002 7.69269 13.8538 7.64625Z" fill="#757575"/>
              </svg>
              Keluar
            </router-link>
            <!-- <router-link to="/report" active-class="text-primary bg-surface" class="inline-flex relative items-center my-2 py-3 px-4 w-full text-sm font-medium rounded-xl border-gray-200 hover:text-primary focus:text-primary hover:bg-surface focus:bg-surface transition duration-400 ease-in-out">
              <svg class="mr-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.4 13.3H9.8C10.1866 13.3 10.5 12.9866 10.5 12.6V1.4C10.5 1.0134 10.1866 0.7 9.8 0.7H1.4C1.0134 0.7 0.7 1.0134 0.7 1.4V12.6C0.7 12.9866 1.0134 13.3 1.4 13.3ZM9.8 14H1.4C0.626801 14 0 13.3732 0 12.6V1.4C0 0.626801 0.626801 0 1.4 0H9.8C10.5732 0 11.2 0.626801 11.2 1.4V12.6C11.2 13.3732 10.5732 14 9.8 14Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8999 3.15005C4.8999 2.95674 5.0566 2.80005 5.2499 2.80005H9.4499C9.64321 2.80005 9.7999 2.95674 9.7999 3.15005C9.7999 3.34335 9.64321 3.50005 9.4499 3.50005H5.2499C5.0566 3.50005 4.8999 3.34335 4.8999 3.15005Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8999 4.54995C4.8999 4.35665 5.0566 4.19995 5.2499 4.19995H9.4499C9.64321 4.19995 9.7999 4.35665 9.7999 4.54995C9.7999 4.74326 9.64321 4.89995 9.4499 4.89995H5.2499C5.0566 4.89995 4.8999 4.74326 4.8999 4.54995Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8999 7.35C4.8999 7.15669 5.0566 7 5.2499 7H9.4499C9.64321 7 9.7999 7.15669 9.7999 7.35C9.7999 7.5433 9.64321 7.7 9.4499 7.7H5.2499C5.0566 7.7 4.8999 7.5433 4.8999 7.35Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8999 8.75015C4.8999 8.55684 5.0566 8.40015 5.2499 8.40015H9.4499C9.64321 8.40015 9.7999 8.55684 9.7999 8.75015C9.7999 8.94345 9.64321 9.10015 9.4499 9.10015H5.2499C5.0566 9.10015 4.8999 8.94345 4.8999 8.75015Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.0999 7.7V8.75H3.1499V7.7H2.0999ZM1.7499 7H3.4999C3.69321 7 3.8499 7.1567 3.8499 7.35V9.1C3.8499 9.2933 3.69321 9.45 3.4999 9.45H1.7499C1.5566 9.45 1.3999 9.2933 1.3999 9.1V7.35C1.3999 7.1567 1.5566 7 1.7499 7Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.09739 2.90256C4.23406 3.03923 4.23406 3.26085 4.09739 3.39753L2.4499 5.04501L1.50241 4.09753C1.36573 3.96085 1.36573 3.73923 1.50241 3.60256C1.6391 3.46588 1.86071 3.46588 1.99739 3.60256L2.4499 4.05507L3.60242 2.90256C3.73909 2.76588 3.96071 2.76588 4.09739 2.90256Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2999 7.00005H12.5999V12.3667L12.9499 12.8334L13.2999 12.3667V7.00005ZM13.9999 12.6L12.9499 14L11.8999 12.6V6.30005H13.9999V12.6Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2999 4.54985H12.5999V5.24985H13.2999V4.54985ZM12.5999 3.84985H13.2999C13.6865 3.84985 13.9999 4.16324 13.9999 4.54985V5.94985H11.8999V4.54985C11.8999 4.16324 12.2133 3.84985 12.5999 3.84985Z" fill="currentColor"/>
              </svg>
              Laporan Data
            </router-link> -->
          </div>
        </div>
      </div>
    </aside>
    <div class="flex-1 ml-[268px] h-full bg-gray-400">
      <div class="fixed top-0 right-0 h-16 bg-white flex justify-between items-center px-5 w-full py-2.5 z-10">
        <div class="h-20 pl-[90px] flex justify-center items-center ">
          <svg width="35" height="39" viewBox="0 0 254 281" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.91514 270.516L3.81622 263.694L20.3691 246.903H29.9573L5.91514 270.516ZM0 280.295V246.903H8.10946V280.295H0ZM21.4185 280.295L9.01581 263.981L14.5016 259.258L30.8637 280.295H21.4185Z" fill="#0278F5"/>
            <path d="M35.2646 280.295V246.903H43.3741V273.14H58.2573V280.295H35.2646Z" fill="#0278F5"/>
            <path d="M63.6656 280.295V273.473H69.2945V253.725H63.6656V246.903H83.0806V253.725H77.404V273.473H83.0806V280.295H63.6656Z" fill="#0278F5"/>
            <path d="M90.7936 280.295V246.903H98.0444L115.551 270.754L113.977 270.516C113.818 269.466 113.691 268.465 113.595 267.511C113.5 266.557 113.405 265.618 113.309 264.696C113.246 263.774 113.182 262.836 113.118 261.882C113.087 260.928 113.055 259.894 113.023 258.781C113.023 257.668 113.023 256.46 113.023 255.156V246.903H120.894V280.295H113.548L95.2776 255.68L97.7104 256.014C97.8694 257.541 97.9967 258.845 98.0921 259.926C98.2193 260.975 98.3147 261.914 98.3783 262.74C98.4737 263.567 98.5373 264.315 98.5691 264.982C98.6009 265.65 98.6168 266.318 98.6168 266.986C98.6486 267.622 98.6645 268.338 98.6645 269.133V280.295H90.7936Z" fill="#0278F5"/>
            <path d="M128.605 280.295V273.473H134.234V253.725H128.605V246.903H148.02V253.725H142.343V273.473H148.02V280.295H128.605Z" fill="#0278F5"/>
            <path d="M161.648 270.516L159.549 263.694L176.102 246.903H185.69L161.648 270.516ZM155.733 280.295V246.903H163.842V280.295H155.733ZM177.151 280.295L164.748 263.981L170.234 259.258L186.596 280.295H177.151Z" fill="#0278F5"/>
            <path d="M196.912 270.516L194.813 263.694L211.366 246.903H220.955L196.912 270.516ZM190.997 280.295V246.903H199.107V280.295H190.997ZM212.416 280.295L200.013 263.981L205.499 259.258L221.861 280.295H212.416Z" fill="#0278F5"/>
            <path d="M239.635 280.581C236.869 280.581 234.404 280.025 232.241 278.912C230.079 277.767 228.378 276.208 227.137 274.237C225.929 272.265 225.325 270.007 225.325 267.463V246.903H233.529V267.034C233.529 268.242 233.8 269.339 234.34 270.325C234.881 271.279 235.612 272.042 236.535 272.615C237.457 273.155 238.49 273.426 239.635 273.426C240.844 273.426 241.909 273.155 242.831 272.615C243.785 272.042 244.549 271.279 245.121 270.325C245.694 269.339 245.98 268.242 245.98 267.034V246.903H253.898V267.463C253.898 270.007 253.278 272.265 252.038 274.237C250.83 276.208 249.144 277.767 246.982 278.912C244.819 280.025 242.37 280.581 239.635 280.581Z" fill="#0278F5"/>
            <path d="M97.1703 30.8083C97.1703 13.7935 110.963 0.000244141 127.978 0.000244141V0.000244141C144.993 0.000244141 158.786 13.7935 158.786 30.8083V163.978C158.786 180.993 144.993 194.786 127.978 194.786V194.786C110.963 194.786 97.1703 180.993 97.1703 163.978V30.8083Z" fill="#0278F5"/>
            <path d="M193.763 66.1082C210.778 66.1618 224.528 79.9985 224.474 97.0132V97.0132C224.42 114.028 210.584 127.778 193.569 127.724L60.3995 127.304C43.3848 127.25 29.6351 113.414 29.6888 96.399V96.399C29.7424 79.3843 43.579 65.6346 60.5938 65.6883L193.763 66.1082Z" fill="#0278F5"/>
            <mask id="mask0_48_3596" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="29" y="0" width="196" height="195">
            <path d="M97.1703 30.8083C97.1703 13.7935 110.963 0.000244141 127.978 0.000244141V0.000244141C144.993 0.000244141 158.786 13.7935 158.786 30.8083V163.978C158.786 180.993 144.993 194.786 127.978 194.786V194.786C110.963 194.786 97.1703 180.993 97.1703 163.978V30.8083Z" fill="#007AF4"/>
            <path d="M193.763 66.1082C210.778 66.1618 224.528 79.9985 224.474 97.0132V97.0132C224.42 114.028 210.584 127.778 193.569 127.724L60.3995 127.304C43.3848 127.25 29.6351 113.414 29.6888 96.399V96.399C29.7424 79.3843 43.579 65.6346 60.5938 65.6883L193.763 66.1082Z" fill="#007AF4"/>
            </mask>
            <g mask="url(#mask0_48_3596)">
            <path d="M289.969 159.009C289.969 213.896 245.475 258.39 190.588 258.39C135.702 258.39 91.2076 213.896 91.2076 159.009C91.2076 104.123 135.702 59.6287 190.588 59.6287C245.475 59.6287 289.969 104.123 289.969 159.009Z" fill="#0063ED"/>
            </g>
          </svg>
        </div>
        <div class="px-1 cursor-pointer rounded-md text-surface hover:bg-hover transition duration-400 ease-in-out">
          <div class="flex gap-1">
            <div class="flex items-center justify-center" @click="toggleDrop">
              <svg aria-hidden="true" class="w-10 h-10 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <!-- Drop down -->
            <div v-show="showDropDown" class="absolute right-2.5 z-10 mt-2 w-56 origin-top-right rounded-md bg-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1 text-left" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a href="#" class="hover:bg-hover block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                <a href="#" class="hover:bg-hover block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                <a href="#" class="hover:bg-hover block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                <form>
                  <button @click="logout" type="submit" class="hover:bg-hover block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                </form>
              </div>
            </div>
            <div class="mt-1 text-black">
              <p class="font-bold">{{ name }}</p>
              <p>{{ role }}</p>
            </div>
          </div>
        </div>
        
      </div>
      <!-- Main  -->
      <div class="mt-16 bg-surface py-5 px-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
// import  {mapGetters} from 'vuex'

export default {
  data() {
    return {
      items: [],
      role: '',
      name: '',
      showDropDown: false,
      showManagementData: false,
      showSide: true,
      showObat: false,
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
  },

  methods: {
    // hide show side bar
    toggleSideBar() {
      this.showSide = !this.showSide

    },
    // toggle user 
    toggleDrop() {
      this.showDropDown = !this.showDropDown

    },
    // toggle management data 
    toggleSideDrop() {
      this.showManagementData = !this.showManagementData
    },
    // toggle obat 
    toggleObatDrop() {
      this.showObat = !this.showObat
    },
    fetchUserRole() {
      const token = localStorage.token
      // Panggil API /me untuk mendapatkan data peran pengguna
      axios.get('/me', {headers: { "Authorization": `Bearer ${token}` }})
      .then(response => {
          console.log(response, 'dari dashboard')
          this.role = response.data.data.role; // Asumsikan response.data.role berisi peran pengguna
          this.name = response.data.data.name; // Asumsikan response.data.role berisi peran pengguna
        })
        .catch(error => {
          console.log(error);
        });
    },
    logout (){
      const token = localStorage.token
      axios.post('logout', { headers: {"Authorization" : `Bearer ${token}`} })
        .then(() => {
          localStorage.removeItem('token');
          this.$router.replace('/login');
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getData() {
      const token = this.token
      axios.get('me', {headers: { "Authorization": `Bearer ${token}` }})
        .then(response => {
          console.log(response, 'items me')
          this.items = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.fetchUserRole();
    console.log('dashboard mounted')
  },

}
</script>

<style>

</style>