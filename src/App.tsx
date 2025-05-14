import { BlurredCircle } from "@components/BlurredCircle";
import { ColorPalette } from "@components/ColorPalette";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { TailwindColorForm } from "@components/TailwindColorForm";
import { ToastContainer } from "react-toastify";
import { UiExamples } from "@components/UiExamples";
import { BuyMeACoffe } from "@assets/icons/BuyMeACoffee";

export const App = () => {
  return (
    <div className="relative mx-auto max-w-[1489px] space-y-[60px] overflow-x-hidden">
      <ToastContainer position="bottom-right" />
      <BlurredCircle />
      <Header />
      <TailwindColorForm />
      <ColorPalette />
      <UiExamples />

      <a
        href="https://buymeacoffee.com/tronix_dev"
        target="_blank"
        rel="noopener noreferrer"
        title="Support this project at Buy Me a Coffee"
        className="fixed right-4 bottom-0 z-50 inline-flex size-12 items-center justify-center rounded-full border border-gray-800/20 bg-gray-50 sm:right-6 sm:bottom-0 xl:right-8 xl:-bottom-7"
      >
        <BuyMeACoffe className="size-7" />
      </a>

      <Footer />
    </div>
  );
};
