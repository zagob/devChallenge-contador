import { Button } from "./Button";

interface CountdownProps {
  onStopCountdown: () => void;
  valueTime: Duration | undefined;
}

export function Countdown({ onStopCountdown, valueTime }: CountdownProps) {
  const totalDays = valueTime?.months && valueTime.months * 30;

  return (
    <div className="pt-6 max-w-5xl m-auto justify-between items-center">
      <header className="h-[60px] flex justify-between items-center">
        <span className="text-4xl text-green-400">contador</span>
        <div className="w-[130px]">
          <Button title="Reiniciar" onClick={onStopCountdown} />
        </div>
      </header>

      <main className="flex flex-col justify-center h-[calc(100vh-84px)] items-center">
        <strong className="text-gray-800 text-7xl">Faltam</strong>
        <div className="flex gap-12">
          <div className="text-center">
            <span className="text-8xl">
              {totalDays && totalDays > 0 ? totalDays : valueTime?.days}
            </span>
            <p className="text-green-400 text-3xl">Dias</p>
          </div>
          <div className="text-center">
            <span className="text-8xl">{valueTime?.hours}</span>
            <p className="text-green-400 text-3xl">Horas</p>
          </div>
          <div className="text-center">
            <span className="text-8xl">{valueTime?.minutes}</span>
            <p className="text-green-400 text-3xl">Minutos</p>
          </div>
          <div className="text-center">
            <span className="text-8xl">{valueTime?.seconds}</span>
            <p className="text-green-400 text-3xl">Segundos</p>
          </div>
        </div>
      </main>
    </div>
  );
}
