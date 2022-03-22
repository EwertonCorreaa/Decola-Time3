<template>
  <v-app>
    <div class="banner" min-width="100%">
        <h1 class="text-h4 font-weight-bold mb-4 mt-5 ">
          Pascolândia 
                 <v-icon> mdi-rabbit
                  </v-icon>
        </h1>
 
        <h4 class="subheading"  mb-4>
          Venda e compra de ovos de páscoa 
        </h4>

      <v-btn class="button" elevation="5" m-b="0px"  plain raised to='/login'>
        Seja um vendedor 
      </v-btn>
  </div>

    <v-carousel class="slide">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

  <div>


    <v-expansion-panels
      v-model="panel"
      :readonly="readonly"
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header>Como comprar</v-expansion-panel-header>
        <v-expansion-panel-content>
          Navegue pela nossa página de produtos, adicione ao seu carrinho e selecione a forma de entrega
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Como vender</v-expansion-panel-header>
        <v-expansion-panel-content>
          Faça o seu cadastro e monte a sua loja online 
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Quem somos nós</v-expansion-panel-header>
        <v-expansion-panel-content>
          Somos um market place de ovos de páscoa, ajudamos compradores e vendedores.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>


  </v-app>
</template>

<script>
  export default {
    data () {
      return {
      panel: [0, 1],
      readonly: false,

        items: [
          {
            src: 'https://robertajungmann.com.br/wp-content/uploads/2020/04/Ovo-de-p%C3%A1scoa-artesanal-990x556.jpg',
          },
          {
            src: 'https://img.elo7.com.br/product/main/1DA4C41/ovo-de-pascoa-grande-artesanal-chocolate-tipo-belga-3-kg-ovo-de-chocolate-gigante.jpg',
          },
          {
            src: 'https://blog.pajaris.com.br/wp-content/uploads/2021/01/ovo-de-pascoa.jpg',
          },
        ],
      }
    },

    
  }
</script>

<style>

.banner{
  height: 150px;
  width: 100%;
  text-align: center;
  background-image: linear-gradient(180deg, #ffffff, #8a8dcc, #4f4db9);
  
};

.button{
  margin-right: 2px;
  height: 10px;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
};

.subheading{
  margin-bottom: 5px;

};

.text-h4{
  font-weight: bold;
}

</style>
