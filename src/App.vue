<template>
  <div>
    <div class="app">
      <router-view></router-view>
      <navbar></navbar>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Lower from "@/components/Lower.vue"
export default{
  components:{
    Navbar, Lower
  }
}
</script>
<style>
</style>
