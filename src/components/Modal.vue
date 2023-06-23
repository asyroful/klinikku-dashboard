<template>
	
  <transition name="modal-animation">
    <div v-show="modalActive" class="fixed w-full h-full top-0 left-0 flex items-center justify-center">
			<div class="modal-overlay absolute z-50 w-full h-full bg-gray-900 opacity-50"></div>
			<div class="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
				<div class="modal-content py-4 px-6">
          
        <!--Body-->
        <slot />

        <!--Footer-->
        <!-- <div class="flex justify-center pt-2">
          <button @click="close" class="px-4 bg-transparent p-3 rounded-lg text-red-600 hover:bg-gray-100 hover:text-red-400 mr-2">Cancel</button>
          <button class="modal-close px-4 bg-red-600 p-3 rounded-lg text-white hover:bg-red-400">Hapus</button>
        </div> -->
      </div>
			</div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },
};
</script>