interface BadgeProps {
  title: string;
  bgColor: string;
}

export const Badge = ({ title, bgColor }: BadgeProps) => {
  return (
    <div
      className="rounded-full px-2 py-0.5 text-xs leading-4 font-semibold text-gray-50"
      style={{ backgroundColor: `${bgColor}` }}
    >
      {title}
    </div>
  );
};
