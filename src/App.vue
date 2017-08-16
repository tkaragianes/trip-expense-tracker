<template>
  <div id="app">
    <app-shell></app-shell>
  </div>
</template>

<script>
import PouchDB from 'pouchdb';
import AppShell from './components/layout/AppShell';
import EventBus from './components/event-bus';

const db = new PouchDB('ET_transactions', { auto_compaction: true, size: 100 });
console.log(db);
console.log(EventBus);


export default {
  name: 'app',
  created() {
    this.$bus.$on('DELETE_ITEM', (id) => {
      db.get(id).then((doc) => {
        db.remove(doc);
      }).catch((err) => {
        console.log(err);
      });
    });
  },
  components: {
    AppShell,
  },
};
</script>

<style>

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
    background-color: #F4F4F4;
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

  #app {
    margin-bottom: 60px;
  }

</style>
