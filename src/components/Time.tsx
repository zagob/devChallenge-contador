import { useState } from "react";
import { Button } from "./Button";

interface TimeProps {
  onHandleCountdown: (data: string) => void;
}

export function Time({ onHandleCountdown }: TimeProps) {
  const [date, setDate] = useState("");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-green-400 text-5xl mb-4">Contagem</h2>
        <label className="text-gray-400 text-2xl">Informe uma data</label>
        <input
          className="text-white px-10 w-72 h-10 rounded-lg bg-gray-700"
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div className="w-full mt-4">
          <Button
            title="Iniciar contagem"
            onClick={() => onHandleCountdown(date)}
            disabled={date === ""}
          />
        </div>
      </div>
    </div>
  );
}
