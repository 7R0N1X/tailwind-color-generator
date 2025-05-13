import { ColorSwatch } from "@components/ColorSwatch";
import { useColorPicker } from "@hooks/useColorPicker";

export const ColorPalette = () => {
  const { colorPalette } = useColorPicker();

  return (
    <div className="grid grid-cols-3 gap-4 px-4 sm:grid-cols-5 sm:gap-5 sm:px-6 lg:grid-cols-7 xl:grid-cols-10 2xl:grid-cols-11 2xl:px-0">
      {Object.entries(colorPalette).map(([variant, colorHex]) => (
        <ColorSwatch key={variant} variant={variant} color={colorHex} />
      ))}
    </div>
  );
};
