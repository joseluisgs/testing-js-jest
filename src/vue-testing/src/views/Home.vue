<template>
  <div class="home">
    <TheHeader title="Testing Vue"/>
    <hr />
    <ChildComponent/>
    <hr />
    <ParentComponent message=" Soy Padre" />
    <hr />
    <Events />
    <hr />
    <Final />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue';
import ChildComponent from '@/components/Child.vue';
import ParentComponent from '@/components/Parent.vue';
import Events from '@/components/Events.vue';
import Final from '@/components/Final.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
    ChildComponent,
    ParentComponent,
    Events,
    Final,
  },

  data: () => ({
    valueParent: '',
  }),
};
</script>

<style lang="css" scoped>
  .home {
    margin: 10px;
  }
</style>
