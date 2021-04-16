import { now } from "@renderer/utils/now";
import { Subject } from "rxjs";

const subject = new Subject<number>();

export const timerStore = {
  timeStart: 0,
  duration: 0,
  intervalId: 0,
  subscribe: (setState: (val: number) => void): (() => void) =>
    subject.subscribe({ next: (value) => setState(value) }).unsubscribe,
  start: (duration: number): void => {
    timerStore.clearInterval();
    timerStore.timeStart = now();
    timerStore.duration = duration;
    timerStore.tick();
    timerStore.intervalId = window.setInterval(timerStore.tick, 950);
  },
  tick: (): void => {
    const timeSpend = now() - timerStore.timeStart;
    if (timerStore.duration < timeSpend) {
      timerStore.clearInterval();
    } else {
      subject.next(timeSpend);
    }
  },
  clearInterval: (): void => {
    timerStore.timeStart = 0;
    if (timerStore.intervalId) {
      clearInterval(timerStore.intervalId);
    }
  },
};
