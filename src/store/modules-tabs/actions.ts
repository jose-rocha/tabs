import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { TabsStateInterface } from './state';

const actions: ActionTree<TabsStateInterface, StateInterface> = {
  setTabs({ commit }, payload: boolean) {
    commit('setTabs', payload);
  },
};

export default actions;
