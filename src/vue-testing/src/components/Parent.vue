<template>
  <div>
    PADRE
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
};
</script>
