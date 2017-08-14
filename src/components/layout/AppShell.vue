<template>
  <div id='app-shell'>
    <nav>
      <router-link to='/list'>
        <button type="button" name="button" class="list-button">List</button>
      </router-link>
      <router-link to='/add'>
        <button type="button" name="button" class="add-button">Add</button>
      </router-link>
      <router-link to='/send'>
        <button type="button" name="button" class="send-button">Send</button>
      </router-link>
    </nav>
    <router-view></router-view>
    <toast></toast>
  </div>
</template>
<script>
import Toast from './Toast';

export default {
  name: 'app-shell',
  components: {
    Toast,
  },
  data: function data() {
    return {

    };
  },
};
</script>
<style>
  body {
    margin: 0;
  }

  nav {
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    width: 100vw;
    /*background-color: #4366ee;*/
    border-top: 1px solid #dddddd;
    z-index: 5;
  }

  nav button {
    width: 33vw;
    border: none;
    outline: none;
    cursor: pointer;
    height: 50px;
    background-color: #ffffff;
    font-size: 1rem;
  }

  nav button a {
    text-decoration: none;
    color: #000000;
  }

  .add-button {
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
  }

</style>
