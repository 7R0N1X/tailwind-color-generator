import { useColorPicker } from "@hooks/useColorPicker";
import tinycolor from "tinycolor2";

export const Card = () => {
  const { colorPalette } = useColorPicker();
  const gradientColor = tinycolor(colorPalette["800"]).toHex();
  const textColor = tinycolor(colorPalette["50"]).toHex();

  return (
    <div className="relative flex h-full w-full items-end overflow-hidden rounded-xl border border-gray-50/10 p-6">
      <img src="/images/VzJjPuk53sk.avif" alt="Person writing code on a laptop" className="absolute inset-0 z-0 h-full w-full object-cover" />
      <div className="z-10t absolute inset-0" style={{ backgroundImage: `linear-gradient(to top, #${gradientColor}, transparent)` }}></div>
      <h2 className="relative z-20 text-4xl leading-[44px] font-semibold" style={{ color: `#${textColor}` }}>Modern Web Development</h2>
    </div>
  );
};
