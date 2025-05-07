import { Copy } from "lucide-react";
import { Button } from "@components/Button";

export const TailwindColorForm = () => {
  return (
    <form action="" className="mx-auto w-fit text-gray-50">
      <div className="flex items-center gap-5">
        <div className="inline-flex flex-col gap-2">
          <label htmlFor="color-name" className="w-fit">
            Color name
          </label>
          <input
            type="text"
            name="color-name"
            id="color-name"
            className="rounded-lg bg-neutral-900 px-4 py-3"
          />
        </div>

        <div>
          <label htmlFor="color-hex">Color (HEX)</label>
          <div className="mt-2 flex gap-2.5">
            <div className="h-12 w-[60px] rounded-lg bg-neutral-900 p-1.5">
              <input
                type="color"
                name="color-hex"
                id="color-hex"
                className="h-full w-full cursor-pointer appearance-none border-none p-0"
              />
            </div>
            <input
              type="text"
              name="hex-display"
              id="hex-display"
              className="rounded-lg bg-neutral-900 px-4 py-3"
            />
          </div>
        </div>

        <Button className="self-end">
          <Copy size={16} /> Copy Tailwind Config
        </Button>
      </div>
    </form>
  );
};
