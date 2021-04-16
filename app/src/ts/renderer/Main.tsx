import React, { FC } from "react";

import { CountdownByStep } from "@renderer/components/step";

export const Main: FC = () => {
  return (
    <div className="position-relative vh-100">
      <div className="position-absolute top-50 start-50 translate-middle">
        <CountdownByStep />
      </div>
    </div>
  );
};
