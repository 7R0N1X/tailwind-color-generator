import { toast } from "react-toastify";
import { useColorPicker } from "@hooks/useColorPicker";
import { useEffect } from "react";

export const useCodeBlock = () => {
  const { colorPalette, colorName } = useColorPicker();

  const variants = () => {
    return Object.entries(colorPalette)
      .map(([key, value]) => `  --color-${colorName}-${key}: ${value.concat(";")}`)
      .join("\n");
  };

  const notify = () => toast.success("Code copied");

  useEffect(() => {
    variants();
  }, [colorPalette]);

  const cssCode = `@import "tailwindcss";

@theme {
${variants()}
}
`;

  return { cssCode, notify };
};
