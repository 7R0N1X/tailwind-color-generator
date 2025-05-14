import { useColorPicker } from "@hooks/useColorPicker";

export const Banner = () => {
  const { colorPalette } = useColorPicker();
  const variant50 = colorPalette["50"];
  const variant500 = colorPalette["500"];
  const variant600 = colorPalette["600"];

  return (
    <div
      className="flex items-center justify-between rounded-lg px-4 py-3"
      style={{ backgroundColor: `${variant500}`, color: `${variant50}` }}
    >
      <p className="py-2 font-medium">Discover what’s new.</p>
      <a
        className="cursor-pointer rounded-lg px-3 py-2 text-center font-medium transition-all duration-300 ease-in-out hover:brightness-90 sm:text-sm"
        style={{ backgroundColor: `${variant50}`, color: `${variant600}` }}
      >
        Learn more
      </a>
    </div>
  );
};
