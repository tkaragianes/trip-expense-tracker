<template>
  <div id='send' class="page-content">
    <h1 class='page-title'>Generate Report</h1>
    <div class="input-group control">
      <label class="label" for="trip">Trip Name</label>
      <input class="input" type="text" name="trip" value="" v-model="trip">
    </div>
    <div class="input-group control">
      <label class="label" for="trip">Gift Officer</label>
      <input class="input" type="text" name="officer" value="" v-model="officer">
    </div>
    <div class="input-group control">
      <label class="label" for="trip">Coordinator</label>
      <input class="input" type="text" name="coordinator" value="" v-model="coordinator">
    </div>
    <h2 class="label">Select Expenses</h2>
    <ul>
      <li v-for="expense in transactions">
        <SendItem :expense="expense" @select="selectItem"></SendItem>
      </li>
    </ul>
    <section>
      <button @click="generatePDF">Generate</button>
    </section>
  </div>
</template>
<script>
import PouchDB from 'pouchdb';
import Moment from 'moment';
import PDFMake from 'pdfmake/build/pdfmake';
import VFSFonts from 'pdfmake/build/vfs_fonts';
import SendItem from './elements/SendItem';

const db = PouchDB('ET_transactions');
const { vfs } = VFSFonts.pdfMake;
PDFMake.vfs = vfs;

export default {
  name: 'send-page',
  components: {
    SendItem,
  },
  data: function data() {
    return {
      transactions: [],
      selected: [],
      trip: '',
      officer: '',
      coordinator: '',
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      db.allDocs({ include_docs: true, attachments: true }).then((result) => {
        // When query returns, map result array down to just the docs and add to component state
        this.transactions = result.rows.map(data => data.doc);
        // this.link = `mailto:tkaragianes@gmail.com?body=Amount: ${this.transactions[0].amount}`;
        // this.link = `mailto:tkaragianes@gmail.com?body=<html><body><img
        // src="data:${this.transactions[0]._attachments.receipt.content_type};base64,
        // ${this.transactions[0]._attachments.receipt.data}"/></body></html>`;
      });
    },
    selectItem(action) {
      if (action.type === 'add') {
        this.selected.push(action.transaction);
      } else if (action.type === 'remove') {
        const pos = this.selected.indexOf(action.transaction);
        console.log(pos);
        this.selected.splice(pos, 1);
      }
      console.log(action);
    },
    generatePDF() {
      const docDefinition = {
        content: [
          // Header section
          {
            text: `${this.trip} Report`,
            style: 'h1',
          },
          '_______________________________',
          '\n',
          {
            text: `Gift Officer: ${this.officer}`,
            style: ['em', 'small'],
          },
          {
            text: `Coordinator: ${this.coordinator}`,
            style: ['em', 'small'],
          },
          '\n',
        ],
        styles: {
          h1: {
            fontSize: 20,
            bold: true,
          },
          h2: {
            fontSize: 16,
            bold: true,
          },
          h3: {
            fontSize: 14,
          },
          h4: {
            fontSize: 11,
            color: 'silver',
          },
          em: {
            italics: true,
          },
          small: {
            fontSize: 10,
          },
        },
      };

      for (let i = 0, len = this.selected.length; i < len; i += 1) {
        // console.log(this.selected[i]);
        const index = i;
        const expense = this.selected[index];
        console.log(expense);
        // const pagebreak = index == length ? '' : pageBreak: 'after',

        docDefinition.content.push(
          {
            text: `Expense #${i + 1}`,
            style: 'h2',
          },
          '\n',
          {
            columns: [
              [
                { text: 'Details', style: 'h3' },
                '\n',
                { text: 'Date', style: 'h4' },
                { text: `${Moment(expense.date).format('MMM DD, YYYY')}` },
                { text: '\n', fontSize: 4 },
                { text: 'Description', style: 'h4' },
                { text: `${expense.description}` },
                { text: '\n', fontSize: 4 },
                { text: 'Amount', style: 'h4' },
                { text: `$${expense.amount}` },
                { text: '\n', fontSize: 4 },
                { text: 'Alcohol', style: 'h4' },
                { text: `${expense.alcohol}` },
                { text: '\n', fontSize: 4 },
                { text: 'Donors', style: 'h4' },
                {
                  type: 'circle',
                  ul: [
                    `${expense.donors}`,
                  ],
                  margin: [20, 0, 0, 0],
                },
                { text: '\n', fontSize: 4 },
                { text: 'Colleagues', style: 'h4' },
                {
                  type: 'circle',
                  ul: [
                    `${expense.colleagues}`,
                  ],
                  margin: [20, 0, 0, 0],
                },
                { text: '\n', fontSize: 4 },
                { text: 'Notes', style: 'h4' },
                { text: `${expense.notes}` },
              ],
              {
                image: `data:${expense._attachments.receipt.content_type};base64, ${expense._attachments.receipt.data}`,
                width: 300,
              },
            ],
            pageBreak: `${index === len ? '' : 'after'}`,
          },

        );
      }

      PDFMake.createPdf(docDefinition).open();
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

  section {
    /*display: flex;*/
    width: 100%;
    margin-bottom: 10px;
  }

  .input-group {
    width: 100%;
  }

  input {
    border: 1px solid #dddddd;
    width: 100%;
    margin-bottom: 5px;
  }

  button {
    width: 100%;
    border: 2px solid #8c1515;
    background-color: #8c1515;
    color: #FFFFFF;
    font-size: 1.3rem;
    box-shadow: none;
    margin-top: 10px;
  }
</style>
