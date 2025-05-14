import { BlurredCircle } from "@components/BlurredCircle";
import { ColorPalette } from "@components/ColorPalette";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { TailwindColorForm } from "@components/TailwindColorForm";
import { ToastContainer } from "react-toastify";
import { UiExamples } from "@components/UiExamples";
export const App = () => {
  return (
    <div className="relative mx-auto max-w-[1489px] space-y-[60px] overflow-x-hidden">
      <ToastContainer position="bottom-right" />
      <BlurredCircle />
      <Header />
      <TailwindColorForm />
      <ColorPalette />
      <UiExamples />
      <Footer />
    </div>
  );
};
