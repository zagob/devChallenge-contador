import { Button } from "./Button";

interface CountdownProps {
  onStopCountdown: () => void;
  valueTime: Duration | undefined;
}

export function Countdown({ onStopCountdown, valueTime }: CountdownProps) {
  const totalDays = valueTime?.months && valueTime.months * 30;

  const days = valueTime?.days;
  const hours = valueTime?.hours;
  const minutes = valueTime?.minutes;
  const seconds = valueTime?.seconds;

  const countdownZero =
    days === 0 && hours === 0 && minutes === 0 && seconds === 0;
  return (
    <div className="pt-6 max-w-5xl m-auto justify-between items-center px-4">
      <header className="h-[60px] flex justify-between items-center">
        <span className="text-4xl text-green-400">contador</span>
        <div className="w-[130px]">
          <Button title="Reiniciar" onClick={onStopCountdown} />
        </div>
      </header>

      <main className="flex flex-col justify-center h-[calc(100vh-84px)] items-center">
        {!countdownZero && (
          <strong className="text-gray-800 text-5xl  md:text-7xl">
            Faltam
          </strong>
        )}

        <div
          className={`flex flex-col md:flex-row gap-12 ${
            countdownZero && "opacity-10"
          }`}
        >
          <div className="text-center">
            <span className="text-6xl md:text-8xl">
              {totalDays && totalDays > 0 ? totalDays : days}
            </span>
            <p className="text-green-400 text-2xl md:text-3xl">Dias</p>
          </div>
          <div className="text-center">
            <span className="text-6xl md:text-8xl">
              {hours?.toString().padStart(2, "0")}
            </span>
            <p className="text-green-400 text-2xl md:text-3xl">Horas</p>
          </div>
          <div className="text-center">
            <span className="text-6xl md:text-8xl">
              {minutes?.toString().padStart(2, "0")}
            </span>
            <p className="text-green-400 text-2xl md:text-3xl">Minutos</p>
          </div>
          <div className="text-center">
            <span className="text-6xl md:text-8xl">
              {seconds?.toString().padStart(2, "0")}
            </span>
            <p className="text-green-400 text-2xl md:text-3xl">Segundos</p>
          </div>
        </div>
      </main>
    </div>
  );
}
