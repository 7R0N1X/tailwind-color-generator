import { Copy } from "lucide-react";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";

interface ColorSwatchProps {
  color: string;
  variant: string;
}

export const ColorSwatch = ({ color, variant }: ColorSwatchProps) => {
  const notify = () =>
    toast.success("Color copied", {
      position: "bottom-right",
    });

  return (
    <CopyToClipboard text={color}>
      <div className="h-full w-full space-y-2">
        <div
          className="group flex h-[117px] w-full cursor-pointer items-center justify-center rounded-lg border border-gray-50/10"
          role="button"
          title="Copy"
          onClick={notify}
          style={{ backgroundColor: `${color}` }}
        >
          <Copy className="text-neutral-950 opacity-0 mix-blend-hard-light transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
        </div>
        <div className="text-xs text-gray-50">
          <p className="variant mx-auto w-fit">{variant}</p>
          <p className="hex-display mx-auto w-fit uppercase">{color}</p>
        </div>
      </div>
    </CopyToClipboard>
  );
};
