<template>
  <section :class="{'collapsed': this.collapsed}" @click="clickHandler">
    <div class="first-row">
      <div class="column">
        <h6>Date</h6>
        <p>{{formattedDate}}</p>
      </div>
      <div class="column">
        <h6>Description</h6>
        <p>{{expense.description}}</p>
      </div>
      <div class="column">
        <h6>Amount</h6>
        <p>{{expense.amount}}</p>
      </div>
    </div>
    <div class="hidden-row">
      <div class="details">
        <div class="values">
          <h6>Donors</h6>
          <p>{{expense.donors}}</p>
          <h6>Colleagues</h6>
          <p>{{expense.colleagues}}</p>
          <h6>Alcohol</h6>
          <p>{{expense.alcohol}}</p>
          <h6>Notes</h6>
          <p>{{expense.notes}}</p>
        </div>
        <div class="receipt">
          <h6>Receipt</h6>
          <img :src="imageURL" alt="">
        </div>
      </div>
      <div class="edit">
        <span>Edit</span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: '',
  props: ['expense'],
  data: function data() {
    return {
      collapsed: true,
      toggled: false,
    };
  },
  computed: {
    formattedDate() {
      return new Date(this.expense.date).toDateString();
    },
    imageURL() {
      console.log(this.expense);
      if (this.expense._attachments.receipt.data && this.toggled) {
        return `data:img/jpeg;base64, ${this.expense._attachments.receipt.data}`;
      }
      return 0;
    },
  },
  methods: {
    clickHandler() {
      this.collapsed = !this.collapsed;
      this.toggled = true;
    },
  },
};
</script>
<style scoped>

  section {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #000000;
    height: 100%;
    transition: all 0.3s;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3)
  }

  .first-row {
    display: flex;
    justify-content: space-between;
    z-index: 2;
    background-color: #ffffff;
    border-bottom: 1px solid #dddddd;
    padding-bottom: 5px;
    /*box-shadow: 0 10px 6px -6px #777;*/
  }

  .collapsed .first-row {
    border: none;
    padding: 0;
  }

  .column {
    max-width: 60%;
    min-width: 20%;
    overflow: hidden;
  }

  .details {
    /*display: block;
    opacity: 1;
    height: auto;
    transform: translateY(0px);
    transition: all 0.1s;*/
    display: flex;
    flex-direction: row;
    padding: 5px 0px;
  }

  .hidden-row {
    display: flex;
    /*padding: 5px 0px 0px 0px;*/
    flex-direction: column;
  }

  .collapsed .hidden-row {
    display: none;
    /*height: 0;
    opacity: 0;
    transform: translateY(-20px);*/
  }

  .values, .receipt {
    width: 50%;
  }

  .edit {
    border-top: 1px solid #dddddd;
  }

  img {
    width: 100%;
  }

  h6 {
    margin: 0;
    color: #aaaaaa;
    /*text-transform: uppercase;*/
    font-weight: 300;
    letter-spacing: 0.1rem;
  }

  p {
    margin: 0
  }
</style>
