import { useColorPicker } from "@hooks/useColorPicker";
import { DownloadButton } from "./DownloadButton";
import { GooglePlayIcon } from "@assets/icons/GooglePlayIcon";
import { IosIcon } from "@assets/icons/IosIcon";

export const AppDownloadCard = () => {
  const { colorPalette } = useColorPicker();
  const baseColor = colorPalette["700"];
  const gradientColor = colorPalette["900"];
  const textColor = colorPalette["50"];
  const borderColor = colorPalette["950"];

  return (
    <div
      className="flex h-fit flex-col gap-2 overflow-hidden rounded-lg border p-5"
      style={{
        backgroundImage: `linear-gradient(to top, ${gradientColor}, ${baseColor})`,
        borderColor: `${borderColor}`,
      }}
    >
      <span className="text-sm font-semibold" style={{ color: `${textColor}` }}>
        Download Now!
      </span>
      <h3 className="text-xl font-bold text-gray-50">Get our mobile app</h3>
      <p className="text-sm text-gray-50/95">
        Download the Lorem mobile banking app for iOS and Android to manage your money easily and securely.
      </p>
      <div className="mt-3 flex gap-2">
        <DownloadButton store="Google Play" storeIcon={GooglePlayIcon} />
        <DownloadButton store="App Store" storeIcon={IosIcon} />
      </div>
    </div>
  );
};
