export const createGenerator = (
  context: AudioContext = new window.AudioContext()
) => {
  const boop = (startTime = context.currentTime, frequency = 440) => {
    const duration = 1;
    const attack = 0.001;

    const gain = context.createGain();
    gain.connect(context.destination);
    const osc = context.createOscillator();
    osc.connect(gain);
    osc.onended = () => gain.disconnect();

    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.7, startTime + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.type = "sine";
    osc.frequency.value = frequency;
    osc.start(startTime);
    osc.stop(startTime + duration);
  };

  const charm = () => {
    const now = context.currentTime;
    const gap = 0.1;
    [
      [0, 220],
      [gap, 440],
      [2 * gap, 880],
      [3 * gap, 1760],
    ].map(([startTime, frequency]) => boop(startTime, frequency));
  };

  return { boop, charm };
};
