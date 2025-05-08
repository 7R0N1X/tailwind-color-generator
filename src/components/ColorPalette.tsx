import { ColorSwatch } from "@components/ColorSwatch";
import { useColorPicker } from "@hooks/useColorPicker";

export const ColorPalette = () => {
  const { colorPalette } = useColorPicker();

  return (
    <div className="mx-auto flex w-fit gap-5">
      {Object.entries(colorPalette).map(([key, value]) => (
        <ColorSwatch key={key} variant={key} bgColor={value} />
      ))}
    </div>
  );
};
