<template>
  <div id="toast">
    <transition name="slide-in">
      <div class="notification is-success" v-if="success">
        Successfully added transaction!
      </div>
    </transition>
    <transition name="slide-in">
      <div class="notification is-danger" v-if="target">
        <p>Are you sure you want to delete this item?</p>
        <div class="controls">
          <button @click="acceptDelete">Yes</button>
          <button @click="cancelDelete">No</button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'toast',
  created() {
    this.$bus.$on('DELETE_ITEM_REQ', (id) => {
      this.target = id;
    });
    this.$bus.$on('ADD_ITEM_SUCCESS', (id) => {
      this.success = id;
      window.setTimeout(() => {
        this.success = '';
      }, 2500);
    });
  },
  data: function data() {
    return {
      target: '',
      success: '',
    };
  },
  methods: {
    cancelDelete() {
      this.target = '';
    },
    acceptDelete() {
      this.$bus.$emit('DELETE_ITEM', this.target);
      this.target = '';
    },
  },
};
</script>
<style scoped>

  #toast {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 10;
  }

  /*.notification::after {
    content: '';
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.3);
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    z-index: 5;
  }*/

  .controls {
    margin-top: 10px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  button {
    width: 100%;
    /*background-color: #FFFFFF;*/
    background-color: transparent;
    margin: 0px 10px;
    border: 2px solid #FFFFFF;
    color: #FFFFFF;
    font-size:1.2rem;
  }

  .is-danger {
    background-color: #8c1515;
  }

  .slide-in-enter-active, .slide-in-leave-active {
    transition: all .3s ease;
  }

  .slide-in-enter, .slide-in-leave-to {
    transform: translateY(-110%);
  }

  .slide-in-enter-to, .slide-in-leave {
    transform: translateY(0);
  }
</style>
