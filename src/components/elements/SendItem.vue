<template>
  <section @click="select" class="box list-item">
    <div class="first-row">
      <div class="column column-40">
        <h6>Date</h6>
        <p>{{formattedDate}}</p>
      </div>
      <div class="column column-40">
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
import Moment from 'moment';

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
      return Moment(this.expense.date).format('MMM DD, YYYY');
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

  svg {
    width: 30px;
  }

  .first-row {
    border-bottom: none;
  }

</style>
