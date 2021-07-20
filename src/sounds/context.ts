declare global {
  interface Window {
    webkitAudioContext: typeof window.AudioContext;
  }
}

const context = window.AudioContext
  ? new window.AudioContext()
  : window.webkitAudioContext
  ? new window.webkitAudioContext()
  : null;

export const webAudioSupported = context !== null;

export const getContext = (): AudioContext => {
  if (context === null) {
    throw new Error("Web audio not supported");
  }
  return context;
};
