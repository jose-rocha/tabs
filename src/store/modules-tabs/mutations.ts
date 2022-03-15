import { MutationTree } from 'vuex';
import { TabsStateInterface } from './state';

const mutation: MutationTree <TabsStateInterface> = {
  setTabs(state, payload: string) {
    state.preferenceState = payload;
  },
};

export default mutation;
