import { createContext, useState } from "react";

export interface ColorPickerContext {
  colorName: string;
  setColorName: (name: string) => void;
  colorHex: string;
  setColorHex: (hex: string) => void;
  colorPalette: { [key: string]: string };
  setColorPalette: ({}) => void;
}

export const ColorPickerContext = createContext<ColorPickerContext | undefined>(undefined);

interface ColorPickerProviderProps {
  children: React.ReactNode;
}

export const ColorPickerProvider = ({ children }: ColorPickerProviderProps) => {
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : undefined;
  const colorNameFromURL = params?.get("color-name") || "";
  const colorHexFromURL = params?.get("color-hex") || "";

  const [colorName, setColorName] = useState(colorNameFromURL || "gray");
  const [colorHex, setColorHex] = useState(colorHexFromURL || "#1E2939");
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
