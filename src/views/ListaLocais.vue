<template>
    <v-container fluid>
        <h1>Lista de Locais</h1>

        <v-card
            class="mt-10"
            max-width="344"
            v-for="(item, index) of listaLocais" :key="index"
        >
            <!-- <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            ></v-img> -->
            <div >


            </div>
            <v-card-title>
            {{ nomeLocais[index] }}
            </v-card-title>

            <v-card-subtitle>
            {{ enderecoLocais[index] }}
            </v-card-subtitle>

            <v-btn
                color="orange lighten-2"
                text
            >
                Confira os sabores
            </v-btn>

            <v-spacer></v-spacer>

                <v-divider></v-divider>
                
                
                <div v-for="(ovo) of listaGeral" :key="ovo.nome">
                    <v-card-subtitle class="my-0 py-1" v-if="ovo.local.nome === nomeLocais[index]"> {{ ovo.sabor }}</v-card-subtitle>
                </div>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'ListaLocais',
    data(){
        return {
            listaGeral: [],
            listaLocais: [],
            nomeLocais: [],
            enderecoLocais: [],
            cepLocais: [],
            show: [],
        }
    },
   created(){
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
            .then(resposta => resposta.json())
            .then(json => {
                this.listaGeral = json
                console.log(this.listaGeral)
                this.listaGeral.forEach(element => {
                    if (this.listaLocais.indexOf(element.local.id) == -1){
                        this.listaLocais.push(element.local.id)
                        this.nomeLocais.push(element.local.nome)
                        this.enderecoLocais.push(element.local.endereco)
                        this.cepLocais.push(element.local.cep)
                        /* this.show.push(false) */
                    }
                }) 
            })
    },
}
</script>

<style>
h1{
    text-align: center;
}
</style>