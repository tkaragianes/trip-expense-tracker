<template>
  <div id='add-page' class="page-content">
    <h1 class="page-title">Add Transaction</h1>
    <form class="add-transaction-form" action="" method="">
      <section>
        <label for="description">Description</label>
        <input type="text" name="description" v-model="description">
      </section>
      <section class="half-width">
        <label for="date">Date</label>
        <input type="date" name="date" v-model="date">
      </section>
      <section class="half-width">
        <label for="amount">Amount</label>
        <input type="number" name="amount" v-model="amount">
      </section>
      <section>
        <label for="donors">Donor Attendance</label>
        <input type="text" name="donors" v-model="donors">
      </section>
      <section>
        <label for="colleagues">Colleague Attendance</label>
        <input type="text" name="colleagues" v-model="colleagues">
      </section>
      <section>
        <p>Alcohol?</p>
        <label for="radio-a">Yes</label>
        <input type="radio" id="radio-a" name="type" value="alcohol purchased" v-model="alcohol">
        <label for="radio-b">No</label>
        <input type="radio" id="radio-b" name="type" value="no alcohol" v-model="alcohol">
      </section>
      <!-- <section>
        <p>Transaction Type</p>
        <label for="radio-a">Business</label>
        <input type="radio" id="radio-a" name="type" value="business">
        <label for="radio-b">Travel</label>
        <input type="radio" id="radio-b" name="type" value="travel">
      </section> -->
      <section class="camera-input">
        <camera-input @capture="captureHandler"></camera-input>
      </section>
      <section>
        <button type="button" name="button" class="submit-button" @click="submitHandler">Submit</button>
      </section>
    </form>
  </div>
</template>
<script>
import CameraInput from './elements/CameraInput';

export default {
  name: 'add-age',
  components: {
    CameraInput,
  },
  data: function data() {
    return {
      description: '',
      date: '',
      amount: '',
      donors: '',
      colleagues: '',
      alcohol: '',
      receipt: '',
    };
  },
  methods: {
    submitHandler() {
      const doc = {
        _id: Date.now(),
        description: this.description,
        date: this.date,
        amount: this.amount,
        donors: this.donors,
        colleagues: this.colleagues,
        alcohol: this.alcohol,
        receipt: this.receipt,
      };

      console.log(doc);
    },
    captureHandler(file) {
      this.receipt = file;
    },
  },
};
</script>
<style>
  .add-transaction-form {
    margin-bottom: 50px;
  }

  input[type="text"], input[type="number"], input[type="date"] {
    border: 1px solid #dddddd;
    width: 100%;
    font-size: 1.25rem;
    /*min-height: 1.75rem;*/
  }

  .half-width {
    width: calc(50% - 5px);
    display: inline-block;
  }

  .half-width:last-of-type {
    margin-left: 15px;
    background-color:blue;
  }

  label {
    margin-bottom: 3px;
  }

  section {
    padding-bottom: 10px;
  }

  .camera-input {
    /*display: flex;
    justify-content: center;
    align-items: center;*/
    height: 100px;
    margin: 20px 0px;
  }

  .submit-button {
    width: 100%;
    border: 2px solid #cccccc;
    background-color: #ffffff;;
    font-size: 1.3rem;
    box-shadow: none;
  }
</style>
