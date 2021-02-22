<template>
  <div>
    <h1>{{title}}</h1>
    <button @click="changeTitle">Cambiar Título</button>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data: () => ({
    title: 'Hola',
  }),

  methods: {
    changeTitle() {
      this.title = 'Adiós';
    },
  },
};
</script>
