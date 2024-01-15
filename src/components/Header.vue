<script setup>
import {routes} from "@/routes/routes.ts";

</script>
<template>
  <header class="header">
   <div class="header_wrapper">
     <span v-for="rout in routes">
        <router-link :to="rout.path" v-if="!rout.isAuth" >{{rout.title}}</router-link>
     </span>
   </div>
  </header>
</template>



<style scoped lang="scss">

.header_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  border-bottom: 1px solid hsla(160, 100%, 37%, 1);
}


</style>
