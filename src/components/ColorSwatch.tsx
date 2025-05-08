import tinycolor from "tinycolor2";

interface ColorSwatchProps {
  bgColor: string | any;
  variant: string;
}

export const ColorSwatch = ({ bgColor, variant }: ColorSwatchProps) => {
  const hex = "#" + tinycolor(bgColor).toHex();
  return (
    <div className="h-full w-full space-y-2">
      <div className="h-[117px] w-full rounded-lg border border-gray-50/10" style={{ backgroundColor: `${hex}` }}></div>
      <div className="text-xs text-gray-50">
        <p className="variant mx-auto w-fit">{variant}</p>
        <p className="hex-display mx-auto w-fit uppercase">{hex}</p>
      </div>
    </div>
  );
};
