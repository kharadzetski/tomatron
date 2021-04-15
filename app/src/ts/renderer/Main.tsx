import React, { FC, useCallback, useState } from "react";

import { increment } from "@renderer/utils/increment";
import { Timer } from "@renderer/components/timer";
import { CountdownTimer } from "@renderer/components/countdown";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Main: FC<HelloProps> = (props) => {
  const [counter, setCounter] = useState(0);
  const btnClick = useCallback(
    () => setCounter((counter) => increment(counter)),
    [setCounter]
  );
  return (
    <div className="position-relative vh-100">
      <div
        onClick={btnClick}
        className="position-absolute top-50 start-50 translate-middle"
      >
        <CountdownTimer time={1000 * 60 * 25}></CountdownTimer>
      </div>
    </div>
  );
};
