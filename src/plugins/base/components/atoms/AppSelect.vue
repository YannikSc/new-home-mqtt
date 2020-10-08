<template>
  <div class="app-select">
    <label>
      <span><slot/></span>
      <select @input="updateValue" ref="input" :value="modelValue">
        <option disabled value="0">
          <trans string="app_select.value.default.name"/>
        </option>
        <option v-for="(value, key) in values" :value="key">{{ value }}</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "AppSelect",
  props: {
    values: Object,
    modelValue: [String, Number, Boolean]
  },
  methods: {
    updateValue() {
      this.$emit('update:modelValue', this.$refs.input.value);
    }
  }
};
</script>

<style scoped>
select, label {
  width: 100%;
}

select {
  font-size: 1em;
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin-bottom: 1em;
  padding: 0.5em;
}
</style>
