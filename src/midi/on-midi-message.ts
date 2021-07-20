const onMidiMessage: (e: WebMidi.MIDIMessageEvent) => void = (e) => {
  const [command, note, velocity] = e.data;
  switch (command) {
    case 144:
      console.log("noteOn", note);
      break;
    case 128:
      console.log("noteOff", note);
      break;
  }
};

export default onMidiMessage;
