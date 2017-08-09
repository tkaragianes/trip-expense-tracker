<template>
  <!-- <div id=''> -->
  <div>
    <label for="receipt">
      <img :src="thumbnail" alt="" v-if="receipt">
      <svg viewBox="0 0 32 32" v-else="receipt">
        <path fill="#1C1C1C" d="M16,12c-3.314,0-6,2.686-6,6s2.686,6,6,6s6-2.686,6-6S19.314,12,16,12z M16,23c-2.761,0-5-2.239-5-5
        s2.239-5,5-5s5,2.239,5,5S18.761,23,16,23z"/>
        <path fill="#1C1C1C" d="M28,9c-1.105,0-2,0.895-2,2c0,1.105,0.895,2,2,2s2-0.895,2-2C30,9.895,29.105,9,28,9z M28,12
        c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C29,11.552,28.552,12,28,12z"/>
        <path fill="#1C1C1C" d="M16,9c-4.971,0-9,4.029-9,9c0,4.971,4.029,9,9,9s9-4.029,9-9C25,13.029,20.971,9,16,9z M16,26
        c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S20.418,26,16,26z"/>
        <path fill="#1C1C1C" d="M30,7h-7V5c0-1.105-0.895-2-2-2H11C9.895,3,9,3.895,9,5v2H2C0.895,7,0,7.895,0,9v18c0,1.105,0.895,2,2,2h28
        c1.105,0,2-0.895,2-2V9C32,7.895,31.105,7,30,7z M31,26c0,1.105-0.895,2-2,2H3c-1.105,0-2-0.895-2-2V10c0-1.105,0.895-2,2-2h7V7V6
        c0-1.105,0.895-2,2-2h8c1.105,0,2,0.895,2,2v1v1h7c1.105,0,2,0.895,2,2V26z"/>
      </svg>
    </label>
    <input id="receipt" type="file" accept="image/*" @change="imageHandler" />
    <p>Receipt</p>
  </div>
  <!-- </div> -->
</template>
<script>

export default {
  name: '',
  data: function data() {
    return {
      receipt: '',
    };
  },
  computed: {
    thumbnail() {
      return window.URL.createObjectURL(this.receipt);
    },
  },
  methods: {
    shutter() {
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then((stream) => {
        console.log(stream);
        // video.srcObject = stream;
        // video.play();
      })
      .catch((err) => {
        console.log(`An error occured! ${err}`);
      });
    },
    imageHandler(event) {
      const file = event.target.files[0];
      this.receipt = file;
      console.log(this.receipt);
      this.$emit('capture', file);
    },
  },
};
</script>
<style scoped>
  div {
    width: 100%;
    height: 100%;
    border: 1px solid #dddddd;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

   svg, img {
    /*width: 100%;*/
    height: 90%;
    padding: 5%;
    min-width: 100%;
    min-height: 100%;
    width: 50px;
    height: 50px;
  }

  div > input {
    visibility:hidden;
    width:0;
    height:0
  }

  label {
    /*height: 90%;*/
  }

  p {
    font-size: 0.75rem;
    margin: 0;
  }
</style>
