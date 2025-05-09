interface BadgeProps {
  title: string;
  bgColor: string;
}

export const Badge = ({ title, bgColor }: BadgeProps) => {
  return (
    <div
      className="flex items-center rounded-full px-2 py-0.5 text-xs leading-4 font-semibold text-neutral-950"
      style={{ backgroundColor: `${bgColor}` }}
    >
      {title}
    </div>
  );
};
