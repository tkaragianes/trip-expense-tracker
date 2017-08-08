<template>
  <div id="app">
    <app-shell></app-shell>
  </div>
</template>

<script>
import AppShell from './components/layout/AppShell';

export default {
  name: 'app',
  components: {
    AppShell,
  },
};
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

  * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    outline-color: inherit;
  }

  html {
    font-size: 16px;
  }

  .page-content {
    margin: 30px 10px 10px 10px;
  }

  .page-title {
    /*'Helvetica Neue', 'Montserrat';*/
    font-weight: 900;
    font-size: 2rem;
    color: #000000;
    margin: 10px 0px 20px 0px;
    position: relative;
  }

  .page-title::after {
    content: '';
    background-color: #000000;
    width: 80px;
    height: 3px;
    position: absolute;
    bottom: -5px; left: 0px;
  }

</style>
