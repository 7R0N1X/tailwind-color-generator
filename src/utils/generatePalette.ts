import tinycolor from "tinycolor2";

export const generateColorPalette = (colorHsl: string) => {
  const cleanHsl = colorHsl.replace("hsl(", "").replace(")", "");
  const [h, s, l] = cleanHsl.split(",");

  const hslValue = {
    h: Number(h),
    s: Number(s.replace("%", "")),
    l: Number(l.replace("%", "")),
  };

  const levels: Record<number, number> = {
    50: 97,
    100: 90,
    200: 80,
    300: 70,
    400: 60,
    500: hslValue.l,
    600: 40,
    700: 30,
    800: 20,
    900: 12,
    950: 6,
  };

  const shades: Record<number, string> = {};

  for (const [level, l] of Object.entries(levels)) {
    const key = Number(level);
    const hslColor = `hsl(${hslValue.h}, ${hslValue.s}%, ${l}%)`;
    const hexColor = tinycolor(hslColor).toHex();
    shades[key] = `#${hexColor}`;
  }

  return shades;
};
