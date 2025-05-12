import { useColorPicker } from "@hooks/useColorPicker";
import { BellIcon } from "@assets/icons/BellIcon";

export const MessageNotification = () => {
  const { colorPalette } = useColorPicker();

  const variant700 = colorPalette["700"];
  const variant900 = colorPalette["900"];
  const variant950 = colorPalette["950"];

  return (
    <div
      className="flex h-fit flex-col gap-2 space-y-4 overflow-hidden rounded-lg border p-4 text-gray-50"
      style={{
        backgroundImage: `linear-gradient(to top, ${variant900}, ${variant700})`,
        borderColor: `${variant950}`,
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="flex size-8 items-center justify-center rounded-full"
          style={{ backgroundColor: `${variant950}` }}
        >
          <BellIcon className="size-4" />
        </div>
        <p className="font-semibold">New Feature Available!</p>
      </div>

      <p>
        We’ve just launched a new tool to help you track your expenses more efficiently. Check it out now and take
        control of your finances!
      </p>

      <div className="space-y-3.5">
        <a
          href="#"
          className="flex items-center justify-center rounded-lg px-5 py-3 text-sm transition-all duration-300 ease-in-out hover:brightness-125"
          style={{ backgroundColor: `${variant950}` }}
        >
          Take a Look
        </a>
        <a
          href="#"
          className="flex items-center justify-center rounded-lg px-5 py-3 text-sm transition-all duration-300 ease-in-out hover:brightness-125"
          style={{ backgroundColor: `${variant700}` }}
        >
          Mark as Read
        </a>
      </div>
    </div>
  );
};
