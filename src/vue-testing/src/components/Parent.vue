<template>
  <div>
    PADRE
    <ul>
      <li>PROPS</li>
      <li>message: {{ message }}</li>
      <li v-text="propComputed"></li>
    </ul>
    <hr>
    <child-component />
  </div>
</template>
<script>
import ChildComponent from './Child.vue';

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent,
  },
  props: {
    message: {
      type: String,
      default: '',
    },
  },
  computed: {
    propComputed() {
      return `Propiedad computada: ${this.message}`;
    },
  },
};
</script>
