<template>
  <div class="card">
    <div class="card--icon">
      <slot name="icon">
        <IconDefault/>
      </slot>
    </div>

    <div class="card--name">
      <p class="card--text">
        <slot name="name"/>
      </p>
    </div>
  </div>
</template>

<script>
import { ImageBroken as IconDefault } from 'mdue';

export default {
  name: "AppCard",
  components: { IconDefault }
};
</script>

<style scoped>
.card {
  align-items: center;
  box-sizing: border-box;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  max-width: 7em;
  padding: 1em 0.5em;
}

.card:hover {
  background-color: hsla(0, 0%, 0%, 0.1);
}

.card--icon {
  align-items: center;
  display: flex;
  height: 5em;
  justify-content: center;
  margin-bottom: .5em;
  overflow: hidden;
}

.card--name {
  max-width: 100%;
}

.card--text {
  margin: 0;
  text-align: center;
  max-width: 100%;
  word-break: break-all;
}
</style>
