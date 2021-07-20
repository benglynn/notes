export const getAccess = async (): Promise<WebMidi.MIDIAccess> =>
  navigator.requestMIDIAccess
    ? navigator.requestMIDIAccess()
    : Promise.reject(new Error("Web MIDI not supported"));

export const webMidiSupported = navigator.requestMIDIAccess !== undefined;
