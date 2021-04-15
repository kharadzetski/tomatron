import React, { FC, useCallback, useEffect, useMemo, useState } from "react";

import { Timer } from "@renderer/components/timer";
import { now } from "@renderer/utils/now";
import { timeToHHMMSS } from "@renderer/utils/timeToHHMMSS";

interface CountdownTimerProps {
  time: number;
}

export const CountdownTimer: FC<CountdownTimerProps> = ({ time }) => {
  const [startTime, setStartTime] = useState(0);
  const [timeSpend, setTimeSpend] = useState(0);

  useEffect(() => {
    if (startTime) {
      const intervalId = setInterval(() => {
        setTimeSpend(now() - startTime);
      }, 1000);
      return () => {
        clearInterval(intervalId);
        setTimeSpend(0);
      };
    }
  }, [startTime]);

  const startCountdown = useCallback(() => {
    setStartTime(now());
  }, [setStartTime]);

  const stopCountdown = useCallback(() => {
    setStartTime(0);
    setTimeSpend(0);
  }, [setStartTime]);

  const { HH, MM, SS } = timeToHHMMSS(time - timeSpend);

  return (
    <div>
      <Timer
        onClick={startCountdown}
        seconds={SS}
        minutes={MM}
        hours={HH}
      ></Timer>
      <span onClick={stopCountdown}>STOP</span>
    </div>
  );
};
