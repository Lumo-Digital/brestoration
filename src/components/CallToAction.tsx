import Link from "next/link";
import Button from "@/components/Button";

export default function CallToAction() {
  return (
    <section id="cta" className="relative">
      <video
        className="absolute top-0 left-0 -z-1 h-full w-full object-cover"
        preload="metadata"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>
      <div className="from-brand-dark-blue/80 to-brand-dark-blue flex w-full flex-col justify-end gap-6 bg-linear-to-b sm:items-center">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center p-6 py-25">
          <h2 className="mb-3 text-center text-4xl font-semibold text-white sm:w-3/4 sm:text-center sm:text-balance">
            Ad lorem ipsum dolor sit amet
          </h2>
          <p className="mb-4 text-center text-white sm:w-3/4 sm:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nobis
            similique odit natus, excepturi repudiandae tempore beatae corporis
            quae, cumque accusantium sapiente adipisci explicabo quos, enim
            ducimus reprehenderit perspiciatis consequatur?
          </p>
          <Link href="/" className="w-full sm:w-fit">
            <Button className="w-full">Book a free assessment</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
