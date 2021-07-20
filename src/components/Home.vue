<template>
  <h1>notes 🎵</h1>
  <div v-show="webAudioSupported">
    <button @click="playCharm">Play charm</button>
    <hr />
  </div>
  <div v-show="webMidiSupported">
    <button @click="updateMidiIn">Listen to MIDI input</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { webMidiSupported } from "../midi/access";
import { webAudioSupported } from "../sounds/context";
import listen from "../midi/listen";
import createPlayer from "../sounds/player";

export default defineComponent({
  name: "Home",
  setup: () => {
    const updateMidiIn = () => listen();
    const player = createPlayer();
    const playCharm = () => player.charm();
    return {
      webMidiSupported,
      webAudioSupported,
      playCharm,
      updateMidiIn,
    };
  },
});
</script>

<style scoped>
button {
  padding: 1em;
}
</style>
