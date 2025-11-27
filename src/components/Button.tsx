import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`bg-brand-yellow mb-4 inline-block w-full px-12 py-3 font-semibold ${className}`}
    >
      {children}
    </button>
  );
}
