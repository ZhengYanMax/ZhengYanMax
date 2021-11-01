<template>
  <div>
    <Menu />
    <router-view/>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
export default {
  components: {
    Menu,
  },
};
</script>

<style>
</style>