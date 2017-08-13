<template>
  <section @click="select">
    <div class="first-row">
      <div class="column">
        <h6>Date</h6>
        <p>{{formattedDate}}</p>
      </div>
      <div class="column">
        <h6>Description</h6>
        <p>{{expense.description}}</p>
      </div>
      <div class="column" style="display: flex; justify-content: flex-end; align-items: center;">
        <svg x="0px" y="0px" viewBox="0 0 24 24" v-if="picked">
          <path d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M12,22C6.477,22,2,17.522,2,12S6.477,2,12,2
          s10,4.478,10,10S17.523,22,12,22z"/>
          <path d="M16.814,7.33c-0.439-0.439-1.15-0.439-1.59,0l-5.033,5.033L8.158,10.33c-0.439-0.439-1.152-0.439-1.592,0L5.33,11.567
          c-0.439,0.439-0.439,1.152,0,1.591l4.861,4.861l7.861-7.861c0.439-0.438,0.439-1.151,0-1.591L16.814,7.33z M10.191,16.605
          l-4.242-4.242l1.414-1.414l2.828,2.828l5.828-5.828l1.414,1.414L10.191,16.605z"/>
        </svg>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: '',
  props: ['expense', 'selected'],
  data: function data() {
    return {
      picked: false,

    };
  },
  computed: {
    formattedDate() {
      return new Date(this.expense.date).toDateString();
    },
    // imageURL() {
    //   console.log(this.expense);
    //   if (this.expense._attachments.receipt.data && this.toggled) {
    //     return `data:img/jpeg;base64, ${this.expense._attachments.receipt.data}`;
    //   }
    //   return 0;
    // },
  },
  methods: {
    select() {
      this.picked = !this.picked;
      if (this.picked) {
        this.$emit('select', { transaction: this.expense, type: 'add' });
      } else {
        this.$emit('select', { transaction: this.expense, type: 'remove' });
      }
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
    /*padding-bottom: 5px;*/
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

  svg {
    width: 30px;
  }
</style>
