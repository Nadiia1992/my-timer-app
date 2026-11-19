import { useEffect, useState, type JSX } from "react";
import { TimerInput} from './TimerInput';
import { TimerButton} from './TimerButton';


export function Timer(): JSX.Element {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [inputSeconds, setInputSeconds] = useState<string>("");

  useEffect(() => {
    if (!isRunning || seconds <= 0) {
        return;
    }

    const timer = setInterval(() => {
        setSeconds((prev) => {
            if (prev <= 1) {
            setIsRunning(false);
            return 0;
        }
            return prev -1;
    });
    }, 1000);

     return () => 
      clearInterval(timer);
  }, [isRunning]);

    const start = (): void => {
      if (seconds > 0) {
      setIsRunning(true);
      return;
  };


  const num = Number(inputSeconds);
  if (num > 0) {
    setSeconds(num);
    setIsRunning(true);
  }
};

const stop = (): void => {
    setIsRunning(false);
};

  const reset = (): void => {
    setIsRunning(false);
    setSeconds(0);
    setInputSeconds('');
  };

  return (
    <div className="timer-box">
        <TimerInput
            value={inputSeconds}
            onChange={setInputSeconds}
            disabled={isRunning || seconds > 0}
            />

            <div className="display">{seconds}</div>

            <div className="buttons">
                <TimerButton label = "Start" onClick={start} />
                <TimerButton label = "Stop" onClick={stop} />
                <TimerButton label = "Reset" onClick={reset}/>
                </div>
                </div>
        );

        }
