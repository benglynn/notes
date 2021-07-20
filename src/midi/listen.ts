import onMidiMessage from "./on-midi-message";
import { getAccess } from "./access";

const listen = () => {
  getAccess().then((access) => {
    for (const input of access.inputs.values()) {
      input.onmidimessage = onMidiMessage;
    }
  });
};

export default listen;
