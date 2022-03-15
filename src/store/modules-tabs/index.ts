import { Module } from 'vuex';
import { StateInterface } from 'src/store';
import state, { TabsStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const tabsModule: Module <TabsStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default tabsModule;
