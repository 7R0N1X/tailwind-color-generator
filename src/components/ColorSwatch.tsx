import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";

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
      <div className="h-full w-full cursor-pointer space-y-2" role="button" onClick={notify}>
        <div
          className="h-[117px] w-full rounded-lg border border-gray-50/10"
          style={{ backgroundColor: `${color}` }}
        ></div>
        <div className="text-xs text-gray-50">
          <p className="variant mx-auto w-fit">{variant}</p>
          <p className="hex-display mx-auto w-fit uppercase">{color}</p>
        </div>
      </div>
    </CopyToClipboard>
  );
};
