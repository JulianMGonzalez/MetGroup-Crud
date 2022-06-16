<template>
  <div>
    <div>
      <NavBar />
    </div>

    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/layout/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
</style>
