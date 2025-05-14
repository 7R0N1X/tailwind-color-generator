import { useColorPicker } from "@hooks/useColorPicker";
import { useEffect } from "react";
import { InputText } from "@components/InputText";
import { useTailwindColorForm } from "@hooks/useTailwindColorForm";

export const TailwindColorForm = () => {
  const { colorName, setColorName, colorHex, setColorHex, setColorPalette } = useColorPicker();

  const { generatePalette, handleColorHex, handleColorName, handleColorPicker, generateColorName } =
    useTailwindColorForm({
      setColorName,
      colorHex,
      setColorHex,
      setColorPalette,
    });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const colorNameFromURL = params.get("color-name");
    const hexFromURL = params.get("color-hex");
    if (colorNameFromURL) setColorName(colorNameFromURL);
    if (hexFromURL) setColorHex(hexFromURL);
    setColorPalette(generatePalette(hexFromURL || colorHex));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (colorName) params.set("color-name", colorName);
    if (colorHex) params.set("color-hex", colorHex);
    const newURL = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newURL);
  }, [colorName, colorHex]);

  useEffect(() => {
    setColorPalette(generatePalette(colorHex));
  }, [colorHex]);

  return (
    <form onSubmit={generateColorName} className="mx-auto w-full px-4 text-gray-50 sm:w-fit sm:px-6 2xl:px-0">
      <div className="flex w-full items-center gap-5 max-sm:flex-col">
        <div className="inline-flex w-full flex-col gap-2">
          <label htmlFor="color-name" className="w-fit">
            Color name
          </label>
          <div className="flex gap-2.5">
            <InputText id="color-name" value={colorName} eventHandler={handleColorName} />
            <button
              type="submit"
              className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-50/10 bg-neutral-900 px-4 py-2 text-nowrap transition-all duration-300 ease-in-out hover:brightness-150"
            >
              Generate name
            </button>
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="color-hex">Color (HEX)</label>
          <div className="mt-2 flex gap-2.5">
            <div className="h-[50px] w-[60px] rounded-lg border border-gray-50/10 bg-neutral-900 p-1.5">
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
