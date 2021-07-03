<template>
  <h1>notes 🎵</h1>
  <button @click="play">Charm</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createGenerator } from "../audio/audio";
export default defineComponent({
  name: "Home",
  setup: () => {
    const play = () => createGenerator().charm();
    return { play };
  },
});
</script>

<style scoped>
button {
  padding: 1em;
}
</style>
