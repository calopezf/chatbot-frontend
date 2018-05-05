<template>
  <div id="app" class="bootstrap-wrapper">
    <div class="col-sm-8 col-md-8 col-xl-8 banner">
      <img src="./assets/logodiners.png" class="bannerIco">
      <div class="linkDiv">
      <a href="https://www.w3schools.com">PayClub </a>
      <span style="color: white">|</span>
      <a href="https://www.w3schools.com"> AppMovil</a>
      </div>
    </div>
    <div class="col-sm-8 col-md-8 col-xl-8 containerGeneral">
      <ul>
        <li v-for= "ch in chats" style="list-style:none" >
          <app-conversation-user v-bind:nombreCliente="ch.nombreCliente" v-bind:mensaje="ch.mensaje" v-bind:tipoContenedor="ch.tipoComponente" v-bind:tipoIcono="ch.tipoIcono"></app-conversation-user>
        </li>
      </ul>
    </div>
    <div class="col-sm-8 col-md-8 col-xl-8 containerGeneralInput">
      <input type="text" class="input" v-on:keyup.enter="addChat" v-model="userInput">
      <button v-on:click="addChat"  class="iconSend" style="border: 0; background: transparent"><img src="./assets/send.png" style="width: 30px; height: 30px;" ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      userInput: '',
      chats: []
    }
  },
  methods: {
    // función que añade un chat del usuario a la conversación
    addChat: function () {
      if (this.userInput === '') {
        return
      }
      var newChat = {
        mensaje: this.userInput,
        tipoComponente: 'col-sm-8 col-md-8 col-xl-8 containerCliente',
        tipo: 'cliente',
        nombreCliente: 'Cristian López',
        fechaHora: '',
        tipoIcono: 'iconChatUser'
      }
      this.chats.push(newChat)
      this.userInput = ''
    },
    // función que pone el scroll al final para ver el último mensaje
    scrollToEnd: function () {
      var container = document.querySelector('.containerGeneral')
      var scrollHeight = container.scrollHeight
      container.scrollTop = scrollHeight
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  margin-left: 30%;
}

.banner{
  background-color: #006699;
  width: 540px;
  height: 70px;
  position: relative;
  text-align: left;
}
.bannerIco{
  padding-top: 10px;
  position: absolute;
  float:left;
}

.containerGeneral{
  background-image:  url("./assets/background.png");
  border: 1px solid #dedede;
  background-color: #fff;
  border-radius: 2px;
  padding-left: 10px;
  width: 530px;
  height: 430px;
  overflow:scroll;
}

.containerGeneralInput{
  border: 0px solid #dedede;
  background-color: #F1F2D5;
  border-radius: 2px;
  width: 530px;
  height: 85px;
}

.input{
  border: 1px solid #dedede;
  background-color: #fff;
  border-radius: 2px;
  margin: 18px 0;
  width: 83%;
  height: 50%;
  float: left;
}
.containerCliente {
  border: 1px solid #dedede;
  background-color: #F1F2D5;
  border-radius: 30px;
  padding: 10px;
  margin-right: 5px;
  margin-top: 5px;
  width: 80%;
  text-align: left;
  float: right;
  display: -webkit-box;
  font-size: 12px;
  }

.containerAndrea{
  border: 1px solid #dedede;
  background-color: #fff;
  border-radius: 30px;
  padding: 10px;
  margin-right: 5px;
  margin-top: 5px;
  width: 80%;
  text-align: left;
  float: left;
  display: -webkit-box;
  font-size: 12px;
}

.textClienteAndrea{
  margin: 5px;
  margin-top: 20px;
  width: 88%;
  max-width: 88%;
  word-wrap: break-word;
}
.textClienteAndreaHeader{
  font-size: 12px;
  font-weight: bold;
  color: #006699;
  width: 300px;
  height: 15px;
  position:absolute;
}

.iconChatDiners{
  background-image:  url("./assets/DINERS.png");
  background-repeat: no-repeat;
  width: 40px; /*or your image's width*/
  height: 40px; /*or your image's height*/
  margin: 0;
  padding: 0;
  }
.iconChatUser{
  background-image:  url("./assets/USER.png");
  background-repeat: no-repeat;
  width: 40px; /*or your image's width*/
  height: 40px; /*or your image's height*/
  margin: 0;
  padding: 0;
}

.nombreChat{
  width: 15px; /*or your image's width*/
  height: 150px; /*or your image's height*/
  color: blue;
  margin: 0;
  padding: 0;
  position: relative;
}

.iconSend{
  margin-top: 18px;
  margin-left: 5px;
  width: 40px;
  height: 40px;
  }

.linkDiv{
  float: right;
  padding:25px;
  font-size: 16px;
  }

a {
  text-decoration:none;
  color: white;
}

::-webkit-scrollbar {
  width: 0px;  /* remove scrollbar space */
  background: transparent;  /* optional: just make scrollbar invisible */
}
/* optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: #FF0000;
}

</style>
