import { useCodeBlock } from "@hooks/useCodeBlock";
import { Clipboard } from "lucide-react";
import CopyToClipboard from "react-copy-to-clipboard";

export const CodeBlock = () => {
  const { cssCode, notify } = useCodeBlock();

  return (
    <div className="flex flex-col gap-3 overflow-x-auto rounded-lg border border-gray-50/10 bg-neutral-900 p-4">
      <CopyToClipboard text={cssCode}>
        <button
          className="flex w-fit cursor-pointer items-center gap-1 self-end rounded-md border border-gray-50/10 bg-neutral-900 px-2 py-1 text-sm transition-all duration-300 ease-in-out hover:brightness-120"
          onClick={notify}
        >
          <Clipboard size={16} /> Copy code
        </button>
      </CopyToClipboard>
      <pre>
        <code>{cssCode}</code>
      </pre>
    </div>
  );
};
