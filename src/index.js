import 'Styles/main.scss';
import Vue from 'vue';
import HelloWorld from 'Components/HelloWorld.vue';
import Vuex from 'vuex'
import {createStore} from './store'

Vue.use(Vuex)
const store = createStore()

new Vue({
  store,
  render: createElement => createElement(HelloWorld),
  el: '#app'
});
