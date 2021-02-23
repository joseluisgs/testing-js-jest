<template>
  <div id="final">
      <div>
        <h3>Testeando tu habilidad matemática.</h3>
        <p>¿Cuál es la suma de estos números?</p>
        <div class="inline">
          <p>{{ x1 }} + {{ x2 }} =</p>
          <input v-model="guess"> <button v-on:click="check">Comprobar respuesta</button>
        </div>
        <button v-on:click="refresh">Refrescar</button>
        <p>{{message}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Final',

  // Mi modelo de datos
  data: () => ({
    x1: Math.ceil(Math.random() * 100),
    x2: Math.ceil(Math.random() * 100),
    guess: '',
    message: '',
  }),

  // Mis métodos
  methods: {
    // Comprueba
    check() {
      if (this.x1 + this.x2 === parseInt(this.guess, 10)) {
        this.message = '¡HAS ACERTADO! 😁';
      } else {
        this.message = '¡INTÉNTALO OTRA VEZ! 🤨';
      }
    },

    // Refresca
    refresh() {
      this.x1 = Math.ceil(Math.random() * 100);
      this.x2 = Math.ceil(Math.random() * 100);
      this.message = '';
      this.guess = '';
    },
  },
};
</script>

<style>
#final {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.inline * {
  display: inline-block;
}
img {
  height: 350px;
}
</style>
