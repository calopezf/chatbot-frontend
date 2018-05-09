// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueChatScroll from 'vue-chat-scroll'
import './assets/css/bootstrap/bootstrap-grid.css'

// Creación de scroll para chat
Vue.use(VueChatScroll)

// Creación de moment para fechas
const moment = require('moment')
require('moment/locale/es')
Vue.use(require('vue-moment'), {
  moment
})

Vue.config.productionTip = false

// Creación de componente dinámico de conversa usuario y chatbot
Vue.component('app-conversation-user', {
  props: ['nombreCliente', 'fechaHora', 'mensaje', 'tipoContenedor', 'tipoIcono'],
  template: '' +
  '<div :class="tipoContenedor">' +
    '<div class="textochat">{{ mensaje}}</div>' +
  '</div>'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
