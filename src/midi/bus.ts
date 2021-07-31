import { MidiEvent } from "./events";

type Subscriber = (e: MidiEvent) => void;

const subscribers = new Set<Subscriber>();

export const subscribe = (subscriber: Subscriber) =>
  subscribers.add(subscriber);

export const unsubscribe = (subscriber: Subscriber) =>
  subscribers.delete(subscriber);

export const dispatch = (e: MidiEvent) => {
  subscribers.forEach((subscriber) => subscriber(e));
};
