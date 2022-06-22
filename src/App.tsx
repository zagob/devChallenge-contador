import { useEffect, useState } from "react";
import { intervalToDuration, Duration, getDaysInMonth } from "date-fns";
import { Time } from "./components/Time";
import { Countdown } from "./components/Countdown";

let c: number;
function App() {
  const [date, setDate] = useState(new Date());
  const [stop, setStop] = useState(true);
  const [objectDateTime, setObjectDateTime] = useState<Duration>();

  useEffect(() => {
    if (stop === false) {
      c = setTimeout(() => {
        const d = intervalToDuration({
          start: new Date(date),
          end: new Date(),
        });
        setObjectDateTime(d);
      }, 1000);
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
    setDate(stringToDate);
    setStop(false);
  }

  function handleStopCountdown() {
    setStop(true);
    setObjectDateTime({});
  }

  return (
    <>
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
