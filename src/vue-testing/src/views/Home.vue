<template>
  <div class="home">
    <TheHeader title="Testing Vue"/>
    <hr />
    <ChildComponent/>
    <hr />
    <ParentComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue';
import ChildComponent from '@/components/Child.vue';
import ParentComponent from '@/components/Parent.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
    ChildComponent,
    ParentComponent,
  },
};
</script>
