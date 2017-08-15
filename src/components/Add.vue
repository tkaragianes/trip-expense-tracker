<template>
  <div id='add-page' class="page-content">
    <h1 class="page-title">Add Transaction</h1>
    <form class="add-transaction-form" action="" method="">
      <section class="control">
        <label class="label" for="description">Description</label>
        <input class="input" type="text" name="description" v-model="description">
      </section>
      <section class="half-width control" style="width: calc(66% - 5px);">
        <label class="label" for="date">Date</label>
        <input class="input" type="date" name="date" v-model="date">
      </section>
      <section class="half-width control" style="width: calc(33% - 5px);">
        <label class="label" for="amount">Amount</label>
        <input class="input" type="number" name="amount" v-model="amount">
      </section>
      <section class="control">
        <label class="label" for="donors">Donor Attendance</label>
        <input class="input" type="text" name="donors" v-model="donors">
      </section>
      <section class="control">
        <label class="label" for="colleagues">Colleague Attendance</label>
        <input class="input" type="text" name="colleagues" v-model="colleagues">
      </section>
      <section class="control" style="width: calc(33% - 5px); display: inline-block;">
        <label for="" class="label">Alcohol?</label>
        <toggle-switch @toggle="(value) => {this.alcohol = value;}"
        true-value="Alcohol present" false-value="No alcohol"></toggle-switch>
      </section>
      <section class="camera-input" style="width: calc(66% - 5px); display: inline-block;">
        <camera-input @capture="captureHandler"></camera-input>
      </section>
      <section class="control">
        <label class="label" for="notes">Notes</label>
        <textarea class="textarea" name="notes" v-model="notes"></textarea>
      </section>
      <section>
        <button type="button" name="button" class="submit-button" @click="submitHandler">Submit</button>
      </section>
    </form>
  </div>
</template>
<script>
import PouchDB from 'pouchdb';
// import { EventBus } from './event-bus';
import CameraInput from './elements/CameraInput';
import ToggleSwitch from './elements/ToggleSwitch';


const db = PouchDB('ET_transactions');

export default {
  name: 'add-page',
  components: {
    CameraInput,
    ToggleSwitch,
  },
  data: function data() {
    return {
      description: '',
      date: '',
      amount: '',
      donors: [],
      colleagues: [],
      alcohol: '',
      receipt: '',
      notes: '',
      sentTo: [],
    };
  },
  methods: {
    submitHandler() {
      const doc = {
        _id: Date.now().toString(),
        description: this.description,
        date: new Date(this.date.replace(/-/g, '//').replace(/T.+/, '')),
        amount: this.amount,
        donors: this.donors,
        colleagues: this.colleagues,
        alcohol: this.alcohol,
        notes: this.notes,
        _attachments: {
          receipt: {
            content_type: this.receipt.type,
            data: this.receipt,
          },
        },
        // receipt: this.receipt,
      };

      db.put(doc).then((response) => {
        // handle response
        this.$bus.$emit('ADD_ITEM_SUCCESS', response.id);
        console.log(response);
        // Reset Form
        this.$bus.$emit('FORM_RESET');

        this.description = '';
        this.date = '';
        this.amount = '';
        this.donors = [];
        this.colleagues = [];
        this.alcohol = '';
        this.receipt = '';
        this.notes = '';
        this.sentTo = [];
      }).catch((err) => {
        console.log(err);
      });

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

  input[type="text"], input[type="number"], input[type="date"], textarea {
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
    border: 2px solid #8c1515;
    background-color: #8c1515;
    color: #FFFFFF;
    font-size: 1.3rem;
    box-shadow: none;
  }
</style>
