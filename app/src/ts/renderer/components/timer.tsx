import React, { memo } from "react";

interface TimerProps {
  hours?: number;
  minutes?: number;
  seconds: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const padStart = (digit: number) => {
  return digit.toString().padStart(2, "0");
};

function Timer({
  hours,
  minutes = 0,
  seconds,
  onClick,
}: TimerProps): JSX.Element {
  let time = `${padStart(minutes)}:${padStart(seconds)}`;
  if (hours) {
    time = `${padStart(hours)}:${time}`;
  }
  return <div onClick={onClick}>{time}</div>;
}

export default memo(Timer);
