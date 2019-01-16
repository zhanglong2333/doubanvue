<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  margin: 0 auto;
  max-width: 10rem /* 750/75 */;
}
html,body{
  margin: 0;
  padding: 0;
}
ul{
list-style:none;
  margin: 0;
  padding: 0;
}
li{
  margin: 0;
  padding: 0;
  /* float: left; */
  font-size:.213333rem /* 16/75 */;
}
.clearfix{
  clear: both;
  content: '';
}
</style>
