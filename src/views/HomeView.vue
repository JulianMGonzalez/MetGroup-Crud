<template>
  <div class="container mx-auto">
    <div class="flex justify-end my-1">
      <button
        type="button"
        class="
          flex
          items-center
          rounded-lg
          bg-blue-700
          px-4
          py-2
          text-white
          hover:bg-blue-900
        "
      >
        <span class="font-medium" @click="conditionalCreate = true">
          Add Store
        </span>
      </button>
    </div>

    <div class="h-100 flex flex-wrap justify-center items-center">
      <div v-for="item in shops" :key="item.id">
        <StorePreview :shop="item" />
      </div>
    </div>
    <StoreAdd
      :open="conditionalCreate"
      @closeSlider="changeConditional"
      @addStoreSlider="createStore"
    />
  </div>
</template>

<script>
import StorePreview from "@/components/shop/StorePreview.vue";
import StoreAdd from "@/components/shop/StoreAdd.vue";
import axiosS from "@/services/store";
export default {
  components: {
    StorePreview,
    StoreAdd,
  },
  data() {
    return {
      shops: [],
      conditionalCreate: false,
    };
  },
  mounted() {
    this.getStore()
  },
  methods: {
    changeConditional() {
      this.conditionalCreate = false;
    },
    createStore() {
      this.changeConditional()
      this.getStore();
    },
    getStore() {
      axiosS.storeList().then((res) => {
        this.shops = res.data;
      });
    },
  },
};
</script>

<style>
</style>