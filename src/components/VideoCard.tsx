import { ReactNode } from "react";
import OptimizedVideo from "./OptimizedVideo";

interface VideoCardProps {
  src: string;
  poster?: string;
  alt?: string;
  children: ReactNode;
  className?: string;
}

export default function VideoCard({
  src,
  poster,
  alt,
  children,
  className,
}: VideoCardProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <OptimizedVideo
        src={src}
        poster={poster}
        alt={alt}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        loading="lazy"
      />
      <div className="bg-brand-dark-blue/80 absolute top-0 left-0 flex h-full w-full flex-col justify-end gap-6 p-6 text-white">
        {children}
      </div>
    </div>
  );
}
