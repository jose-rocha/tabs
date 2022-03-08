<template>
  <q-page class="row" style="height: 100%;">
    <Home/>
  </q-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Home from './home/Home.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { Home },
  setup() {
    return { };
  },
});
</script>
