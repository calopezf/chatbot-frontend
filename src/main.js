// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueChatScroll from 'vue-chat-scroll'
import './assets/css/bootstrap/bootstrap-grid.css'

Vue.use(VueChatScroll)

Vue.config.productionTip = false

// Creación de componente dinámico de conversa usuario y chatbot
Vue.component('app-conversation-user', {
  props: ['nombreCliente','mensaje', 'tipoContenedor', 'tipoIcono'],
  template: '<div><div :class="tipoContenedor"><div v-if="tipoIcono === \'iconChatDiners\'" :class="tipoIcono"></div><div class="textClienteAndreaHeader">{{nombreCliente}}</div><div class="textClienteAndrea">{{ mensaje}}</div><div v-if="tipoIcono === \'iconChatUser\'" :class="tipoIcono"></div></div></div>'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
