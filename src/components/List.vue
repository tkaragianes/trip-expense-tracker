<template>
  <div id='list' class="page-content">
    <h1 class='page-title'>List Transactions</h1>
    <ul>
      <li v-for="expense in transactions">
        <ListItem :expense="expense"></ListItem>
      </li>
    </ul>
  </div>
</template>
<script>
import PouchDB from 'pouchdb';
import ListItem from './elements/ListItem';

const db = PouchDB('ET_transactions');

export default {
  name: 'list',
  components: {
    ListItem,
  },
  data: function data() {
    return {
      transactions: [],
    };
  },
  created: function created() {
    this.fetchData();

    this.$bus.$on('DELETE_ITEM', (id) => {
      const pos = this.transactions.map(el => el.id).indexOf(id);
      this.transactions.splice(pos, 1);
    });
  },
  methods: {
    fetchData() {
      db.allDocs({ include_docs: true, attachments: true }).then((result) => {
        // When query returns, map result array down to just the docs and add to component state
        this.transactions = result.rows.map(data => data.doc);
      });
    },
  },
};
</script>
<style scoped>
  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
    margin-bottom: 15px;
  }
</style>
