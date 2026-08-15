import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="
          rotate-180
          absolute
          left-0
          top-[-300px]
          md:top-[-340px]
          w-full
          h-[80%]
          md:h-full
          object-cover
          -z-20
          opacity-45
          md:opacity-100
        "
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#030014]/20 via-[#030014]/30 to-[#030014]" />

      <HeroContent />
    </div>
  );
};
