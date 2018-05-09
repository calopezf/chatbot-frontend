<template>
  <div style="height: auto">
    <div class="banner">
      <img src="../assets/titanium.png" class="contenedorlogo">
    </div>
    <div class="container">
      <div class="fechaActual">
        <span>{{ new Date() | moment("dddd, D MMMM  YYYY") }}</span>
      </div>
      <ul style="list-style: none;">
        <li v-for="ch in chats"
            :key="ch.id"
            style="list-style:none">
          <app-conversation-user v-bind:nombreCliente="ch.nombreCliente" v-bind:fechaHora="ch.fechaHora" v-bind:mensaje="ch.mensaje" v-bind:tipoContenedor="ch.tipoComponente" v-bind:tipoIcono="ch.tipoIcono"></app-conversation-user>
        </li>
      </ul>
    </div>
    <div class="pie" >
      <b-field style="background: transparent" position="is-centered">
        <input class="inputMensaje" placeholder="Escribir mensaje" v-on:keyup.enter="addChat" v-model="userInput">
        <p>
          <button class="button redondodc" v-on:click="addChat"><b-icon icon="send"></b-icon></button>
        </p>
      </b-field>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import Buefy from 'buefy'
  import 'buefy/lib/buefy.css'

  Vue.use(Buefy)

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
          tipoComponente: 'burbuja-der',
          tipo: 'cliente',
          nombreCliente: 'Cristian',
          fechaHora: date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
          tipoIcono: 'iconChatUser'
        }
        this.chats.push(newChat)
        this.userInput = ''
        this.created()
      },
      // función que pone el scroll al final para ver el último mensaje
      // scrollToEnd: function () {
      //   var container = document.querySelector('.container')
      //   var scrollHeight = container.scrollHeight
      //   console.log(scrollHeight)
      //   container.scrollTop = scrollHeight
      // },
      // Llamada a servicio sin datos
      created: function () {
        axios.get('http://www.mocky.io/v2/5af34e183400004f00770498')
          .then(response => {
            // JSON responses are automatically parsed.
            this.respuesta = response.data
            var newChatResponse = {
              mensaje: response.data.mensaje,
              tipoComponente: 'burbuja-iz',
              tipo: 'Andrea',
              nombreCliente: 'Andrea',
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
<style>
  .banner{
    background-color: #FBFBFB;
    width: 100%;
    height: 60px;
    position: fixed;
    text-align: center;
    z-index: 1;
    margin-top: -40px;
    padding: 6px;
    box-shadow:
      0 4px 8px 0 rgba(0,0,0,0.12),
      0 2px 4px 0 rgba(0,0,0,0.08);
  }
  .contenedorlogo{
    width: 220px;
    margin-top: 8px;
  }
  .container{
    margin-top:40px;
    overflow:scroll;
    height: 90%;
    padding-bottom: 1%;
  }
  .pie{
    padding-top: 16px;
    background: white;
    position:fixed;
    left:0px;
    bottom:0px;
    height:70px;
    width:100%;
    z-index: 1;
  }
  .inputMensaje{
    padding-left: 15px;
    padding-right: 15px;
    width: 80%;
    border-radius: 20px 20px 20px 20px;
  }
  .redondodc{
    border-radius: 20px 20px 20px 20px;
    background-color: #111A31;
    color:white;
    margin-left: 5px;
  }
  .notification{
    background: transparent;
  }
  .textochat{
    font-size: 11px;
    margin: 14px;
    word-wrap: break-word;
  }
  .nombrecliente{
    font-size: 12px;
    font-weight: bold;
    color: white;
    width: 300px;
    height: 15px;
    padding-left: 5px !important;
    position:absolute !important;
  }
  .fechaActual{
    margin-top: 40px;
    margin-left: 0px;
    border-radius: 0px 10px 10px 0px;
    padding-top: 4px;
    padding-left: 5px;
    padding-right: 5px;
    border: 1px solid darkgrey;
    border-left: none;
    width:fit-content;
    height: 25px;
    font-size: 10px;
  }
  .burbuja-der {
    background-color: #163269;
    margin-top: 10px;
    margin-bottom: 20px;
    border-radius: 25px 0px 25px 25px;
    position: relative;
    width:fit-content;
    max-width: 90%;
    min-width: 60%;
    text-align: left;
    float: right;
    color: white;
    margin-right: 3%;
    box-shadow:
      0 4px 8px 0 rgba(0,0,0,0.12),
      0 2px 4px 0 rgba(0,0,0,0.08);
  }
  .burbuja-iz {
    background-color: #F8F8F8;
    border: 0px solid grey;
    margin-top: 10px;
    margin-bottom: 20px;
    border-radius: 0px 25px 25px 25px;
    position: relative;
    width:fit-content;
    max-width: 90%;
    min-width: 60%;
    text-align: left;
    float: left;
    color: 	#303030;
    margin-left: 3%;
    box-shadow:
      0 4px 8px 0 rgba(0,0,0,0.12),
      0 2px 4px 0 rgba(0,0,0,0.08);
  }
</style>
