import { CheckIcon, X } from "lucide-react";
import { useColorPicker } from "@hooks/useColorPicker";

interface AlertProps {
  className?: string;
}

export const Alert = ({ className }: AlertProps) => {
  const { colorPalette } = useColorPicker();

  const variant100 = colorPalette["100"];
  const variant950 = colorPalette["950"];

  return (
    <div
      className={`flex h-fit items-start gap-3 rounded-lg border p-4 text-green-800 ${className && className}`}
      style={{ backgroundColor: `${variant100}`, borderColor: `${variant950}`, color: `${variant950}` }}
    >
      <CheckIcon size={20} className="mt-1" />
      <div className="flex-1">
        <h3 className="font-semibold">Success</h3>
        <p className="text-sm">Your changes have been saved successfully.</p>
      </div>
      <button className="ml-auto">
        <X size={20} />
      </button>
    </div>
  );
};
