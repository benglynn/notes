<template>
  <h1>notes 🎵</h1>
  <button @click="charm">Charm</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import createPlayer from "../sounds/player";
export default defineComponent({
  name: "Home",
  setup: () => {
    const player = createPlayer();
    const charm = () => player.charm();
    return { charm };
  },
});
</script>

<style scoped>
button {
  padding: 1em;
}
</style>
