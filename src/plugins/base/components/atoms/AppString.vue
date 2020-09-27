<template>
  <span>{{content()}}</span>
</template>

<script>
export default {
  name: "AppString",
  props: {
    string: { type: String, required: true },
    language: { type: String, required: false },
  },
  inject: ['translation'],
  methods: {
    content() {
      return this.translation.getString(this.string, this.language);
    }
  }
};
</script>
