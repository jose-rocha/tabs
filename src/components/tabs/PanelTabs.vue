<template>
    <q-tab-panels v-model="setTabs" animated  style="height:100%; width: 100%;">
        <q-tab-panel name="mails" class="bg-purple" >
        <div class="text-h6">Mails</div>
         Email
        </q-tab-panel>

        <q-tab-panel name="alarms" class="bg-orange">
            <div class="text-h6">Alarms</div>
            Alarm
        </q-tab-panel>

        <q-tab-panel name="movies" class="bg-teal">
        <div class="text-h6">Movies</div>
            Filme.
        </q-tab-panel>
    </q-tab-panels>
</template>

<script>
import { ref, defineComponent, computed } from 'vue';
import { useStore } from 'src/store';

export default defineComponent({
  name: 'PanelTabs',
  setup() {
    const store = useStore();
    const setTabs = computed({
      get: () => store.state.tabs.preferenceState,
      set: (value) => { store.commit('tabs/setTabs', value); },
    });

    return {
      tab: ref('mails'), setTabs,
    };
  },
});
</script>
