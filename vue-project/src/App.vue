<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const componentKey = ref(0);
const forceRerender = () => {
  componentKey.value += 1;
};
</script>

<template>
  <HelloWorld />
</template>
