import { Header } from "@components/Header";
import { ColorPalette } from "@components/ColorPalette";
import { TailwindColorForm } from "@components/TailwindColorForm";
import { UiExamples } from "@components/UiExamples";
export const App = () => {
  return (
    <div className="mx-auto max-w-[1489px] space-y-[60px] pt-[96px]">
      <Header />
      <TailwindColorForm />
      <ColorPalette />
      <UiExamples />
    </div>
  );
};
