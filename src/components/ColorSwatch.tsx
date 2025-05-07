interface ColorSwatchProps {
  bgColor?: string;
  variant?: number;
}

export const ColorSwatch = ({ bgColor, variant }: ColorSwatchProps) => {
  return (
    <div className="w-fit space-y-2">
      <div className="size-[117px] rounded-lg bg-amber-400"></div>
      <div className="text-gray-50 text-xs">
        <p className="mx-auto w-fit variant">50</p>
        <p className="mx-auto w-fit uppercase hex-display">#f8f6f6</p>
      </div>
    </div>
  );
};
