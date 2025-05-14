import { generateColorPalette } from "@utils/generatePalette";
import tinycolor from "tinycolor2";
import type { ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";

interface useTailwindColorFormProps {
  setColorName: (name: string) => void;
  colorHex: string;
  setColorHex: (hex: string) => void;
  setColorPalette: ({}) => void;
}

export const useTailwindColorForm = ({
  setColorName,
  setColorHex,
  setColorPalette,
  colorHex,
}: useTailwindColorFormProps) => {
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

  const generateColorName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://api.color.pizza/v1/?values=${colorHex.replace("#", "")}`)
      .then((res) => res.json())
      .then((data) => {
        const colorName = data.colors[0].name.toLowerCase().replace(/ /g, "-");
        setColorName(colorName);
        toast.success("Color name generated");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error generating color name");
      });
  };

  return { generatePalette, handleColorName, handleColorPicker, handleColorHex, generateColorName };
};
