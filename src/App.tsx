import { useEffect, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import { intervalToDuration, Duration, isPast } from "date-fns";
import { Time } from "./components/Time";
import { Countdown } from "./components/Countdown";

let c: number;
function App() {
  const { height, width } = useWindowSize();
  const [date, setDate] = useState(new Date());
  const [stop, setStop] = useState(true);
  const [objectDateTime, setObjectDateTime] = useState<Duration>();

  const [t, setT] = useState(false);

  useEffect(() => {
    if (stop === false) {
      c = setTimeout(() => {
        const d = intervalToDuration({
          start: new Date(date),
          end: new Date(),
        });

        setObjectDateTime(d);
      }, 1000);
      if (
        objectDateTime?.days === 0 &&
        objectDateTime?.hours === 0 &&
        objectDateTime?.minutes === 0 &&
        objectDateTime?.seconds === 0
      ) {
        clearTimeout(c);
        setT(true);
        return;
      }
    }
    if (stop) {
      clearTimeout(c);
    }
  }, [stop, objectDateTime]);

  function handleCountdown(data: string) {
    if (data === "") {
      return alert("data invalida");
    }

    const stringToDate = new Date(data);
    if (isPast(stringToDate)) {
      return alert("Data inválida!");
    }
    setDate(stringToDate);
    setStop(false);
  }

  function handleStopCountdown() {
    setT(false);
    setStop(true);
    setObjectDateTime(undefined);
  }

  return (
    <>
      {t && <Confetti width={width} height={height} />}

      {stop ? (
        <Time onHandleCountdown={handleCountdown} />
      ) : (
        <>
          {objectDateTime ? (
            <Countdown
              onStopCountdown={handleStopCountdown}
              valueTime={objectDateTime}
            />
          ) : (
            <div className="h-screen flex justify-center items-center">
              <span>carregando...</span>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
