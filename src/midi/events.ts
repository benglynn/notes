type NoteOnEvent = {
  readonly type: "noteOn";
  readonly noteNumber: number;
};

type NoteOffEvent = {
  readonly type: "noteOff";
  readonly noteNumber: number;
};

export type MidiEvent = NoteOnEvent | NoteOffEvent;
