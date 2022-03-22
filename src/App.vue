<template>
  <v-app class="barras-iniciais">
    <AppTopBar/>
    
    <v-main>
      
      <router-view></router-view>
      
    </v-main>
    <BottomBar/>
  </v-app>
</template>

<script>

import AppTopBar from './components/shared/AppTopBar.vue'
import BottomBar from './components/shared/AppBottomBar.vue'

export default {
  components: {
    AppTopBar,
    BottomBar,

  }
}
</script>


<style scoped>
  
</style>