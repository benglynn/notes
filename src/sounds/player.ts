import createCharm from "./charm";
import createBoop from "./boop";

declare global {
  interface Window {
    webkitAudioContext: typeof window.AudioContext;
  }
}

export default () => {
  if (!window.AudioContext && !window.webkitAudioContext)
    throw new Error("Web audio not supported");
  const context = new (window.AudioContext || window.webkitAudioContext)();

  return { charm: createCharm(context, createBoop(context)) };
};
