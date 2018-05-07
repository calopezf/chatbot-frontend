<template>
  <div class="bootstrap-wrapper">
    <div class="col-sm-8 col-md-8 col-xl-8 bannerBlack">
      <img src="../assets/logodiners.png" class="bannerIco">
      <div class="linkDiv">
        <a href="https://www.w3schools.com">PayClub </a>
        <span style="color: white">|</span>
        <a href="https://www.w3schools.com"> AppMovil</a>
      </div>
    </div>
    <div class="col-sm-8 col-md-8 col-xl-8 containerGeneralBlack">
      <div class="fechaActual"><span>{{ new Date() | moment("dddd, D MMMM  YYYY") }}</span></div>
      <ul style="list-style: none;">
        <li v-for= "ch in chats" style="list-style:none" >
          <app-conversation-user v-bind:nombreCliente="ch.nombreCliente" v-bind:fechaHora="ch.fechaHora" v-bind:mensaje="ch.mensaje" v-bind:tipoContenedor="ch.tipoComponente" v-bind:tipoIcono="ch.tipoIcono"></app-conversation-user>
        </li>
      </ul>
    </div>
    <div class="col-sm-8 col-md-8 col-xl-8 containerGeneralInputBlack">
      <input type="text" class="inputBlack" v-on:keyup.enter="addChat" v-model="userInput">
      <button v-on:click="addChat"  class="iconSend" style="border: 0; background: transparent"><img src="../assets/send.png" style="width: 30px; height: 30px;" ></button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data: function () {
    return {
      userInput: '',
      chats: [],
      postBody: '',
      errors: [],
      respuesta: []
    }
  },
  methods: {
    // función que añade un chat del usuario a la conversación
    addChat: function () {
      if (this.userInput === '') {
        return
      }
      var date = new Date()
      var newChat = {
        mensaje: this.userInput,
        tipoComponente: 'col-sm-8 col-md-8 col-xl-8 containerCliente',
        tipo: 'cliente',
        nombreCliente: 'Cristian Alejandro López Freire',
        fechaHora: date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
        tipoIcono: 'iconChatUser'
      }
      this.chats.push(newChat)
      this.userInput = ''
      this.created()
    },
    // función que pone el scroll al final para ver el último mensaje
    scrollToEnd: function () {
      var container = document.querySelector('.containerGeneral')
      var scrollHeight = container.scrollHeight
      container.scrollTop = scrollHeight
    },
    // Llamada a servicio sin datos
    created: function () {
      axios.get('http://www.mocky.io/v2/5aef7e332f00006600739bcb')
        .then(response => {
          // JSON responses are automatically parsed.
          this.respuesta = response.data
          var newChatResponse = {
            mensaje: response.data.mensaje,
            tipoComponente: 'col-sm-8 col-md-8 col-xl-8 containerAndrea',
            tipo: 'andrea',
            nombreCliente: 'Chatbot Andrea',
            fechaHora: response.data.fechaHora,
            tipoIcono: 'iconChatDiners'
          }
          this.chats.push(newChatResponse)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    // Llamada a servicio con parámetros
    postPost: function () {
      axios.post('http://www.mocky.io/v2/5aef7dbf2f00006400739bca', {
        body: this.postBody
      })
        .then(response => {})
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  mounted () {
    this.scrollToEnd()
  },
  updated () {
    this.scrollToEnd()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
