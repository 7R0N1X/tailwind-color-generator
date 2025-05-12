import { useColorPicker } from "@hooks/useColorPicker";
import type { FormEvent } from "react";

interface NewsletterCardProps {
  className?: string;
}

export const NewsletterCard = ({ className }: NewsletterCardProps) => {
  const { colorPalette } = useColorPicker();

  const variant200 = colorPalette["200"];
  const variant800 = colorPalette["800"];
  const variant900 = colorPalette["900"];
  const variant950 = colorPalette["950"];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className={`w-full rounded-lg border p-4 text-center text-gray-50 shadow-md ${className && className}`}
      style={{ backgroundColor: `${variant800}`, borderColor: `${variant950}` }}
    >
      <h3 className="mb-4 text-lg font-semibold">Subscribe to Our Newsletter</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          className="mb-4 w-full rounded-md px-4 py-2 text-sm placeholder-gray-500 focus:outline-none"
          style={{ backgroundColor: `${variant200}`, color: `${variant950}` }}
        />
        <button
          className="w-full cursor-pointer rounded-md px-4 py-2 font-semibold text-gray-50 transition hover:brightness-110"
          style={{ background: `linear-gradient(to top, ${variant950}, ${variant900})` }}
        >
          Subscribe
        </button>
      </form>
      <p className="mt-4 cursor-pointer text-sm text-gray-400 hover:underline">Privacy Policy</p>
    </div>
  );
};
