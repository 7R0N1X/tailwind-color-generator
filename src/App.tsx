import { Header } from "@components/Header";
import { ColorPalette } from "@components/ColorPalette";
import { TailwindColorForm } from "@components/TailwindColorForm";
export const App = () => {
  return (
    <div className="mx-auto max-w-screen-2xl space-y-[60px] pt-[96px]">
      <Header />
      <TailwindColorForm />
      <ColorPalette />
    </div>
  );
};
