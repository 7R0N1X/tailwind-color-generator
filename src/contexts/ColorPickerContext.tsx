import { createContext, useState } from "react";

export interface ColorPickerContext {
  colorName: string;
  setColorName: (name: string) => void;
  colorHex: string;
  setColorHex: (hex: string) => void;
  colorPalette: {};
  setColorPalette: ({}) => void;
}

export const ColorPickerContext = createContext<ColorPickerContext | undefined>(undefined);

interface ColorPickerProviderProps {
  children: React.ReactNode;
}

export const ColorPickerProvider = ({ children }: ColorPickerProviderProps) => {
  const [colorName, setColorName] = useState("red");
  const [colorHex, setColorHex] = useState("#FF000D");
  const [colorPalette, setColorPalette] = useState({});

  return (
    <ColorPickerContext.Provider
      value={{
        colorName,
        setColorName,
        colorHex,
        setColorHex,
        colorPalette,
        setColorPalette,
      }}
    >
      {children}
    </ColorPickerContext.Provider>
  );
};
