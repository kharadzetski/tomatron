import { now } from "@renderer/utils/now";
import { Subject, Subscription } from "rxjs";

const timeSpendSubject = new Subject<number>();
const timerFihishedSubject = new Subject<void>();

export const timerStore = {
  timeStart: 0,
  duration: 0,
  intervalId: 0,
  subscribeTimeSpend: (setState: Consumer<number>): Subscription =>
    timeSpendSubject.subscribe({ next: (value) => setState(value) }),
  subscribeFinished: (setState: Runnable): Subscription =>
    timerFihishedSubject.subscribe({ next: () => setState() }),
  start(duration: number): void {
    timerStore.clearInterval();
    timerStore.timeStart = now();
    timerStore.duration = duration;
    timerStore.tick();
    timerStore.intervalId = window.setInterval(timerStore.tick, 950);
  },
  tick(): void {
    const timeSpend = now() - timerStore.timeStart;
    if (timerStore.duration < timeSpend) {
      timerStore.clearInterval();
      timerFihishedSubject.next();
      timeSpendSubject.next(0);
    } else {
      timeSpendSubject.next(timeSpend);
    }
  },
  clearInterval(): void {
    timerStore.timeStart = 0;
    timerStore.duration = 0;
    if (timerStore.intervalId) {
      clearInterval(timerStore.intervalId);
    }
  },
};
