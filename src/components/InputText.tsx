import type { ChangeEvent } from "react";

interface InputTextProps {
  id: string;
  eventHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const InputText = ({ id, value, eventHandler }: InputTextProps) => {
  return (
    <input
      type="text"
      name={id}
      id={id}
      className="rounded-lg border border-gray-50/10 bg-neutral-900 px-4 py-3"
      value={value}
      onChange={eventHandler}
    />
  );
};
