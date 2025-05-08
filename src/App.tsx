import { Header } from "@components/Header";
import { ColorPalette } from "@components/ColorPalette";
import { TailwindColorForm } from "@components/TailwindColorForm";
import { UiExamples } from "@components/UiExamples";
import { BlurredCircle } from "@components/BlurredCircle";
export const App = () => {
  return (
    <div className="relative mx-auto max-w-[1489px] space-y-[60px] overflow-x-hidden pt-20 sm:pt-[96px]">
      <BlurredCircle />
      <Header />
      <TailwindColorForm />
      <ColorPalette />
      <UiExamples />
    </div>
  );
};
