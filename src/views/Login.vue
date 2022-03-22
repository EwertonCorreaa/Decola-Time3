<template>
 <form class="container">
    <h2>Cadastro 📝</h2>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="30"
      label="Nome"
      required
    ></v-text-field>
      <v-text-field
      v-model="password"
      :error-messages="nameErrors"
      :counter="15"
      label="Senha"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
    ></v-text-field>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Você aceita os termos de uso?"
      required
    ></v-checkbox>

    <v-btn
      class="mr-4"
      @click="confirmar"
    >
      confirmar
    </v-btn>    
  </form>
</template>

<script>
export default {
  name: 'logiN',
  data: () => ({
    name: "",
    email: "",
  }),
  
  methods: {
    submit() {
      this.$refs.observer.validate();
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  color: black;
}
.container {
  padding: 30px;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(180deg, #ffffff, #8a8dcc, #4f4db9);
}
</style>