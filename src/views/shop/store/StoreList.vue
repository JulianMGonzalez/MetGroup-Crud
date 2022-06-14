<template>
  <div class="h-100 flex flex-wrap justify-center items-center">
    <StorePreview :shop="1" />
    <StorePreview :shop="2"/>
    <StorePreview :shop="3" />
    <StorePreview :shop="4" />
    <StorePreview :shop="5" />
  </div>
</template>

<script>
import StorePreview from "@/components/shop/StorePreview.vue";
export default {
  components: {
    StorePreview,
  },
};
</script>

<style>
</style>