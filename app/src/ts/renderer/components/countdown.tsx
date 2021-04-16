import React, { useCallback, useEffect, useState } from "react";

import Timer from "@renderer/components/timer";
import { timeToHMS } from "@renderer/utils/timeToHMS";
import { timerStore } from "@renderer/store/timerStore";

interface CountdownTimerProps {
  time: number;
}

export function CountdownTimer({ time }: CountdownTimerProps): JSX.Element {
  const [timeSpend, setTimeSpend] = useState(0);
  useEffect(() => timerStore.subscribe(setTimeSpend), []);

  const startCountdown = useCallback(() => {
    timerStore.start(time);
  }, [time]);

  const stopCountdown = useCallback(() => {
    timerStore.clearInterval();
  }, []);

  const { H, M, S } = timeToHMS(time - timeSpend);

  return (
    <div>
      <Timer onClick={startCountdown} seconds={S} minutes={M} hours={H} />
      <span onClick={stopCountdown}>STOP</span>
    </div>
  );
}
