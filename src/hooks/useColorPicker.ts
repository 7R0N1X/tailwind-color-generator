import { useContext } from "react";
import { ColorPickerContext as ColorPickerContextRaw } from "@contexts/ColorPickerContext";

export const useColorPicker = () => {
  const context = useContext(ColorPickerContextRaw);
  if (!context) {
    throw new Error("useColorPicker debe usarse dentro de un ColorPickerProvider");
  }
  return context;
};
