import { ButtonHTMLAttributes } from "react";

interface ButtonsParams extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...rest }: ButtonsParams) {
  return (
    <button
      {...rest}
      className="bg-green-400 text-black rounded-2xl py-2 w-full text-2xl font-semibold hover:bg-green-500 duration-200 cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-green-400"
    >
      {title}
    </button>
  );
}
