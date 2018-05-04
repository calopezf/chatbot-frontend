<template>
  <div id="app">
    <div class="banner">
      <img src="./assets/logodiners.png" class="bannerIco">
    </div>
    <div class="containerGeneral">
      <ul>
        <li v-for= "ch in chats" style="list-style:none" >
          <app-conversation-user v-bind:mensaje="ch.mensaje" v-bind:tipoContenedor="ch.tipoComponente" v-bind:tipoIcono="ch.tipoIcono"></app-conversation-user>
        </li>
      </ul>
    </div>
    <div class="containerGeneralInput">
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
    addChat: function () {
      var newChat = {
        mensaje: this.userInput,
        tipoComponente: 'containerCliente',
        tipo: 'cliente',
        tipoIcono: 'iconChatUser'
      }
      this.chats.push(newChat)
      this.userInput = ''
    },
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
  border: 0px solid #dedede;
  background-color: #fff;
  border-radius: 2px;
  padding-left: 10px;
  width: 530px;
  height: 430px;
  overflow:scroll;
}

.containerGeneralInput{
  border: 0px solid #dedede;
  background-color: #fff;
  border-radius: 2px;
  width: 530px;
  height: 100px;
}

.input{
  border: 1px solid #dedede;
  background-color: #fff;
  border-radius: 2px;
  margin: 10px 0;
  width: 90%;
  height: 50%;
  float: left;
}
.containerCliente {
  border: 1px solid #dedede;
  background-color: #f1f1f1;
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
  width: 88%;
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
  margin-top: 12px;
  margin-left: 5px;
  width: 40px;
  height: 40px;
  }



</style>
