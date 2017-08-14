<template>
  <label class="toggle-switch">
    <input type="checkbox" @change="clickHandler" :checked="selected"/>
    <div class="checkbox"></div>
  </label>
</template>

<script>
// import

export default {
  name: 'toggle-switch',
  props: ['trueValue', 'falseValue'],
  data: function data() {
    return {
      selected: false,
      value: this.falseValue,
    };
  },
  created() {
    this.$bus.$on('FORM_RESET', () => {
      this.selected = false;
      this.value = this.falseValue;
    });
  },
  methods: {
    clickHandler(event) {
      const value = event.target.checked ? this.trueValue : this.falseValue;
      this.selected = !this.selected;
      this.value = value;
      this.$emit('toggle', value);
    },
  },
};
</script>

<style scoped>

.toggle-switch {
  border-radius: 32px;
  cursor: pointer;
  display: inline-block;
  height: 32px;
  position: relative;
  width: 52px;
}

.toggle-switch input[type="checkbox"] {
  display: none;
}

.checkbox {
  background: #eeeeee;
  border: 0;
  border-radius: 32px;
  cursor: pointer;
  height: 32px;
  margin: 0;
  padding: 0;
  position: relative;
  transition: all 0.3s ease;
  width: 52px;
  z-index: 0;
}

.checkbox::before {
  position: absolute;
  top: 2px;
  right: 0;
  bottom: 0;
  left: 2px;
  background: rgba(255,255,255,1.0);
  border-radius: 32px;
  content: "";
  height: 28px;
  transform: scale(1);
  transition: all 0.3s ease;
  width: 48px;
  z-index: 1;
}

.checkbox::after {
  position: absolute;
  top: 2px;
  right: 0;
  bottom: 0;
  left: 2px;
  height: 28px;
  width: 28px;
  background: rgba(255,255,255,1.0);
  border-radius: 28px;
  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  content: "NO";
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  z-index: 2;
  font-size: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="checkbox"]:checked {}

input[type="checkbox"]:checked + .checkbox {
  background: #8c1515;
}

input[type="checkbox"]:checked + .checkbox::before {
  transform: scale(0);
}

input[type="checkbox"]:checked + .checkbox::after {
  left: calc(52px - 28px - 2px);
  content: "YES";
}

</style>
