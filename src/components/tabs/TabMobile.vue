<template>
    <div v-if="$q.screen.lt.sm">
        <div  style="width:100vw; height:100%" >
            <q-tab-panels v-model="tab" animated class="full-width;" style="height:100%">
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
        </div>
        <q-footer >
        <div class="q-px-xl bg-black">
            <div class="q-gutter-y-md " >
            <q-tabs
                v-model="tab"
                narrow-indicator
                align="justify"
                active-color="red"
                indicator-color="blue"
            >
                <q-tab  name="mails" icon="mail" label="Mails" />
                <q-tab  name="alarms" icon="alarm" label="Alarms" />
                <q-tab  name="movies" icon="movie" label="Movies" />
            </q-tabs>
            </div>
        </div>
        </q-footer>
    </div>
</template>

<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    return {
      tab: ref('mails'),
    };
  },
});
</script>
