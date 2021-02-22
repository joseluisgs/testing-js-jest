<template>
  <div class="home">
    <hr />
    <TheHeader title="Testing Vue"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
  },
};
</script>
