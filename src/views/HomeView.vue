<template>
  <div class="h-100 flex justify-center items-center">
    <StorePreview />
    <StorePreview />
    <StorePreview />
  </div>
</template>

<script>
import StorePreview from "@/components/shop/StorePreview.vue";

export default {
  name: "HomeView",
  components: {
    StorePreview,
  },
};
</script>
