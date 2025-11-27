import { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
}

export default function Eyebrow({ children }: EyebrowProps) {
  return (
    <div className="mb-6 flex justify-center">
      <div className="bg-brand-light-blue mx-auto inline-flex -rotate-6 justify-center px-1">
        <span className="bg-brand-dark-blue text-brand-yellow relative z-10 inline-block rotate-5 px-3 py-1 text-lg font-extrabold">
          {children}
        </span>
      </div>
    </div>
  );
}
