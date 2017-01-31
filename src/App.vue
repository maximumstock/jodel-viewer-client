<template>
  <div id="app">
    <jodel-list sort="popular"></jodel-list>
    <jodel-list sort="discussed"></jodel-list>
    <jodel-list sort="recent" :refreshDuration="10"></jodel-list>
  </div>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import JodelList from './components/JodelList'

export default {
  name: 'app',
  components: {
    JodelList
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
  width: 95%;
  margin: auto;
}
</style>
