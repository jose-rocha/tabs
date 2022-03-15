<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          v-if="$q.screen.gt.xs"
        />

        <q-toolbar-title>
          Quasar Tabs
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="bg-white"
      show-if-above
    >
      <q-list>
        <q-item-label
          header
        >
          Links Tabs
        </q-item-label>

        <q-tabs
            v-model="setTabs"
            narrow-indicator
            align="justify"
            active-color="red"
            indicator-color="blue"
            vertical
          >
            <q-tab  name="mails">
              <div class="flex items-center"
                   style="justify-content: center; width: 300px;
                   height: 100%; padding-right: 80px;"
              >
                <q-icon name="mail" size="2rem" class="q-mr-xl"/>
                <div>Mails</div>
              </div>
            </q-tab>
            <q-tab  name="alarms" >
              <div class="flex items-center"
                   style="justify-content: center; width: 300px;
                   height: 100%; padding-right: 70px;">
              <q-icon name="alarm"  size="2rem" class="q-mr-xl"/>
              <div>Alarms</div>
              </div>
            </q-tab>
            <q-tab  name="movies" >
              <div class="flex items-center"
                   style="justify-content: center; width: 300px;
                   height: 100%; padding-right: 70px;">
                   <q-icon name="movie"  size="2rem" class="q-mr-xl"/>
                   <div>Movies</div>
              </div>
            </q-tab>
          </q-tabs>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'src/store';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);
    const store = useStore();
    const setTabs = computed({
      get: () => store.state.tabs.preferenceState,
      set: (value) => { store.commit('tabs/setTabs', value); },
    });

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      tab: ref('movies'),
      setTabs,
    };
  },
});
</script>
