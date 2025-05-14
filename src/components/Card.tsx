import { useColorPicker } from "@hooks/useColorPicker";

export const Card = () => {
  const { colorPalette } = useColorPicker();
  const variant900 = colorPalette["900"];

  return (
    <div className="relative h-[436px] w-auto overflow-hidden rounded-xl border border-gray-50/10">
      <img
        src="/images/VzJjPuk53sk.avif"
        alt="Person writing code on a laptop"
        className="h-full w-full object-cover"
      />
      <div
        className="z-10t absolute inset-0 -z-0"
        style={{ backgroundImage: `linear-gradient(to top, ${variant900}, transparent)` }}
      ></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-end gap-2 p-6 text-gray-50">
        <span>{new Date().toDateString()}</span>
        <h3 className="relative z-20 text-4xl leading-[44px] font-semibold">Modern Web Development</h3>
      </div>
    </div>
  );
};
