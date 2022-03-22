<template>
<div class="app-bar">
    <v-app-bar color="#4f4db9" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="text left">Menu</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary >
      <v-list
        nav
        dense
      >
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4" >
        <router-link to='/Home'> 
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home-heart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          </router-link>

        <router-link to='/login'> 
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-face-woman-profile</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cadastro</v-list-item-title>
          </v-list-item>
        </router-link>
        



        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
    name: 'AppTopBar',
    data: () => ({
      drawer: false,
      group: null,
    })
}

</script>



<style scoped>

    .app-bar a{
        text-decoration: none;
        
    }

</style>