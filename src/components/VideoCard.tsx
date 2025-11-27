import { ReactNode } from "react";

interface VideoCardProps {
  src: string;
  children: ReactNode;
  className?: string;
}

export default function VideoCard({
  src,
  children,
  className,
}: VideoCardProps) {
  return (
    <div className={`relative aspect-square overflow-hidden ${className}`}>
      <video
        className={`h-full w-full object-cover`}
        preload="metadata"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>
      <div className="bg-brand-dark-blue/80 absolute top-0 left-0 flex h-full w-full flex-col justify-end gap-6 p-6 text-white">
        {children}
      </div>
    </div>
  );
}
