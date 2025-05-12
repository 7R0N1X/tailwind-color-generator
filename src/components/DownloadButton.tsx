import { useColorPicker } from "@hooks/useColorPicker";

interface DownloadButtonProps {
  store: string;
  storeIcon: React.ComponentType<{ className?: string }>;
}

export const DownloadButton = ({ store, storeIcon: StoreIcon }: DownloadButtonProps) => {
  const { colorPalette } = useColorPicker();
  const bgColor = colorPalette["950"];

  return (
    <a
      href="#"
      className="inline-flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-300 ease-in-out hover:brightness-125"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <StoreIcon className="h-5 w-auto text-gray-50" />
      <div>
        <p className="text-xs font-semibold text-gray-50/90">Get it on</p>
        <p className="text-xs font-extrabold text-gray-50">{store}</p>
      </div>
    </a>
  );
};
