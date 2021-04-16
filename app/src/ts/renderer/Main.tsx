import React, { FC } from "react";

import { CountdownTimer } from "@renderer/components/countdown";

export const Main: FC = () => {
  return (
    <div className="position-relative vh-100">
      <div className="position-absolute top-50 start-50 translate-middle">
        <CountdownTimer time={1000 * 60 * 25}></CountdownTimer>
      </div>
    </div>
  );
};
