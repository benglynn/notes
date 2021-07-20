export interface SoundOptions {
  startTime: number;
  frequency: number;
}

type Sound = (options: SoundOptions) => void;

export default Sound;
