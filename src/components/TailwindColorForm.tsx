import { useColorPicker } from "@hooks/useColorPicker";
import { useEffect } from "react";
import { InputText } from "@components/InputText";
import { useTailwindColorForm } from "@hooks/useTailwindColorForm";

export const TailwindColorForm = () => {
  const { colorName, setColorName, colorHex, setColorHex, setColorPalette } = useColorPicker();

  const { generatePalette, handleColorHex, handleColorName, handleColorPicker } = useTailwindColorForm({
    setColorName,
    setColorHex,
    setColorPalette,
  });

  useEffect(() => {
    setColorPalette(generatePalette(colorHex));
  }, []);

  return (
    <form className="mx-auto w-fit text-gray-50">
      <div className="flex items-center gap-5">
        <div className="inline-flex flex-col gap-2">
          <label htmlFor="color-name" className="w-fit">
            Color name
          </label>
          <InputText id="color-name" value={colorName} eventHandler={handleColorName} />
        </div>

        <div>
          <label htmlFor="color-hex">Color (HEX)</label>
          <div className="mt-2 flex gap-2.5">
            <div className="h-12 w-[60px] rounded-lg bg-neutral-900 p-1.5">
              <input
                type="color"
                name="color-hex"
                id="color-hex"
                className="h-full w-full cursor-pointer appearance-none border-none p-0"
                onChange={handleColorPicker}
                value={colorHex}
              />
            </div>
            <InputText id="hex-display" value={colorHex} eventHandler={handleColorHex} />
          </div>
        </div>
      </div>
    </form>
  );
};
