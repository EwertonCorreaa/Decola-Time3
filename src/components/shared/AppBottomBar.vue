<template>
        <v-bottom-navigation app :value="value" appcolor="primary" horizontal fixed class = "bottom-bar">
            
                <v-btn 
                to = "/Home">
                <span>Home</span>
                <v-icon>mdi-home-heart</v-icon>
                </v-btn>

                <v-btn
                to="/ovos">
                <span>Produtos</span>

                <v-icon>mdi-egg-easter</v-icon>
                </v-btn>

       
                <v-btn
                to='/listalocais'>
                <span>Localize</span>

                <v-icon>mdi-map-marker</v-icon>
                </v-btn>
            
        </v-bottom-navigation>
</template>



<script>


  export default {
      name: 'BottomBar',
    data: () => ({ value: 1 }),
  }
</script>


<style scoped>

.bottom-bar a{
   
    text-decoration: none;

}

</style>