interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ className, children }: ButtonProps) => {
  return (
    <button className={`flex cursor-pointer items-center gap-2 rounded-lg border border-transparent bg-neutral-900 px-4 py-3 font-medium transition-all duration-300 ease-in-out hover:border-gray-800 hover:bg-neutral-800 ${className ?? className}`}>
      {children}
    </button>
  );
};
