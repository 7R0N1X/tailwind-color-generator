interface CardProps {
  bgColor: string;
}

export const Card = ({ bgColor }: CardProps) => {
  return (
    <div className="relative flex h-full w-full items-end overflow-hidden rounded-xl p-6">
      <img src="/images/VzJjPuk53sk.avif" alt="Person writing code on a laptop" className="absolute inset-0 z-0 h-full w-full object-cover" />
      <div className="z-10t absolute inset-0" style={{ backgroundImage: `linear-gradient(to top, ${bgColor}, transparent)` }}></div>
      <h2 className="relative z-20 text-4xl leading-[44px] font-semibold text-gray-50">
        Modern Web Development
      </h2>
    </div>
  );
};
