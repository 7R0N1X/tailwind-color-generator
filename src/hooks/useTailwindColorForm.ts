import { generateColorPalette } from "@utils/generatePalette";
import tinycolor from "tinycolor2";
import type { ChangeEvent } from "react";

interface useTailwindColorFormProps {
  setColorName: (name: string) => void;
  setColorHex: (hex: string) => void;
  setColorPalette: ({}) => void;
}

export const useTailwindColorForm = ({ setColorName, setColorHex, setColorPalette }: useTailwindColorFormProps) => {
  const generatePalette = (colorHex: string) => {
    const hex = tinycolor(colorHex);
    const colorHsl = hex.toHslString();
    return generateColorPalette(colorHsl);
  };

  const handleColorName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setColorName(value);
  };

  const handleColorPicker = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setColorHex(value);
    setColorPalette(generatePalette(value));
  };

  const handleColorHex = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setColorHex(value);
    setColorPalette(generatePalette(value));
  };

  return { generatePalette, handleColorName, handleColorPicker, handleColorHex };
};
