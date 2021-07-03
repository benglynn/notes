import { Boop } from "./boop";

export default (context: AudioContext, boop: Boop) => () => {
  const now = context.currentTime;
  const gap = 0.1;
  [
    [0, 220],
    [gap, 440],
    [2 * gap, 880],
    [3 * gap, 1760],
  ].map(([timeOffset, frequency]) =>
    boop({ startTime: now + timeOffset, frequency })
  );
};
