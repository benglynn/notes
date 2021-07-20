import { getContext } from "./context";
import Sound from "./sound";

const boop: Sound = ({ startTime, frequency }) => {
  const context = getContext();
  const duration = 1;
  const attack = 0.001;

  const gain = context.createGain();
  gain.connect(context.destination);
  const osc = context.createOscillator();
  osc.connect(gain);
  osc.onended = () => gain.disconnect();

  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(0.5, startTime + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc.type = "sine";
  osc.frequency.value = frequency;
  osc.start(startTime);
  osc.stop(startTime + duration);
};

export default boop;
