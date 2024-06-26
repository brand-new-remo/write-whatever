<template>
  <h1>{{ name }}</h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const name = "Vue 3";
    return { name };
  },
});
</script>

<style lang="less" scoped>
h1 {
  color: red;
}
</style>
