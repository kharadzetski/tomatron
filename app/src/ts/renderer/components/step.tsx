import { CountdownTimer } from "@renderer/components/countdown";
import { timerStore } from "@renderer/store/timerStore";
import { MINUTES_15, MINUTES_25, MINUTES_5 } from "@renderer/utils/constants";
import React, { useEffect, useState } from "react";

interface CountdownByStepProps {
  maxSteps?: number;
}

const timeByStep = (step: number, maxSteps: number) => {
  if (step % 2 === 0) {
    return MINUTES_25;
  }
  if (step % 2 === 1) {
    if (step === maxSteps) {
      return MINUTES_15;
    }
    return MINUTES_5;
  }
};

export function CountdownByStep({
  maxSteps = 3,
}: CountdownByStepProps): JSX.Element {
  const [currentStep, setCurrentStep] = useState(0);
  useEffect(
    () =>
      timerStore.subscribeFinished(() => {
        const myNotification = new Notification("Title", {
          body: "Notification from the Renderer process",
        });
        myNotification.onclick = () => console.log("clicked");
        setCurrentStep((step) => {
          if (step >= maxSteps) {
            return 0;
          }
          return step + 1;
        });
      }).unsubscribe,
    [maxSteps]
  );
  return (
    <div>
      <CountdownTimer time={timeByStep(currentStep, maxSteps)} />
      {`${Math.floor((currentStep + 1) / 2)}/${(maxSteps + 1) / 2}`}
    </div>
  );
}
