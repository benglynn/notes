import { getContext } from "./context";
import Sound from "./sound";

export default (sound: Sound) => () => {
  const now = getContext().currentTime;
  const gap = 0.07;
  const frequency = 220;
  [
    [0, frequency],
    [gap, 2 * frequency],
    [2 * gap, 4 * frequency],
    [3 * gap, 8 * frequency],
  ].map(([timeOffset, frequency]) =>
    sound({ startTime: now + timeOffset, frequency })
  );
};
