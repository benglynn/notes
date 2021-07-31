import { dispatch } from "./bus";

const onMidiMessage: (e: WebMidi.MIDIMessageEvent) => void = (e) => {
  const [command, noteNumber, velocity] = e.data;
  switch (command) {
    case 144:
      dispatch({ type: "noteOn", noteNumber });
      break;
    case 128:
      dispatch({ type: "noteOff", noteNumber });
      break;
  }
};

export default onMidiMessage;
