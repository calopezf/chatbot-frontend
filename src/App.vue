<template>
  <div id="app" >
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.nombreChat{
  width: 15px; /*or your image's width*/
  height: 150px; /*or your image's height*/
  color: blue;
  margin: 0;
  padding: 0;
  position: relative;
}
::-webkit-scrollbar {
  width: 0px;  /* remove scrollbar space */
  background: transparent;  /* optional: just make scrollbar invisible */
}
/* optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: #FF0000;
}

ul{
  padding: 0;
  list-style-type: none;
}

</style>
