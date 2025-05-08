import { useColorPicker } from "@hooks/useColorPicker";
import tinycolor from "tinycolor2";

export const BlurredCircle = () => {
  const { colorPalette } = useColorPicker();
  const bgColor = tinycolor(colorPalette["300"]).toHex();
  return (
    <div
      className="absolute top-0 left-1/2 -z-10 size-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl lg:-top-24 lg:size-[500px] xl:-top-44 xl:size-[800px]"
      style={{ backgroundColor: `#${bgColor}` }}
    ></div>
  );
};
