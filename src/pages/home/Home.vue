<template>
  <div class="flex" style="width: 100%;">
    <PanelTabs v-if="$q.screen.gt.xs" />
    <TabMobile v-else/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TabMobile from 'components/tabs/TabMobile.vue';
import PanelTabs from 'src/components/tabs/PanelTabs.vue';

export default defineComponent({
  name: 'Home',
  components: { TabMobile, PanelTabs },
  setup() {
    return {
    };
  },
});
</script>
