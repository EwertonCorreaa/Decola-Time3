<template>
  <v-container fluid>
    <h1>Lista de Ovos de Páscoa</h1>
    <v-row dense>
        <v-col
            v-for="ovo in listaGeral"
            :key="ovo.id"
        >
            <v-card
                :loading="loading"
                class="mx-auto mb-5"
                max-width="374"
            >
                <v-img
                height="150"
                :src="ovo.imagem"
                gradient="to top right, rgba(19,84,122,.2), rgba(128,208,199,.1)"
                />

            
                <v-card-title class="pb-3">{{ovo.nome}}</v-card-title>
                <v-card-subtitle class="deep-purple--text">
                    <v-icon small>mdi-map-marker</v-icon> {{ovo.local.nome}}
                </v-card-subtitle>

                <v-card-text>
                    <div class="mx-0 text-subtitle-1">
                        Ovo de páscoa {{ovo.sabor}}
                    </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-actions>
                    
                <v-card-text>
                    <div class=" text-display-1 purple--text font-weight-medium">
                        R$ {{ovo.preco}}
                    </div>
                </v-card-text>
                    <v-btn
                        color="deep-purple"
                        class="pa-4 mr-2"
                        text
                        @click="comprar"
                        outlined
                        rounded
                        small
                    >
                    <v-icon>mdi-cart</v-icon>
                    Comprar
                    </v-btn>
                    
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data(){
            return {
                listaGeral: []
            }
        },
        created(){
            fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
                .then(resposta => resposta.json())
                .then(json => {
                    this.listaGeral = json
                    console.log(this.listaGeral)
                })
        },
}
</script>

<style scoped>
    h1{
        text-align: center;
        margin-bottom: 4px;
    }

</style>