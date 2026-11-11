import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import testimonialsBg from "../assets/testimonials-bg.svg";

const testimonials = [
  {
    text: "Awesome projects! Professional approach to the client. Very creative team and above all people with passion and timing!",
    name: "Daniel McKenlly",
    role: "Individual client",
  },
  {
    text: "My old website got a new life thanks to the Urho Agency. It is really amazing what my project went through, I'm very impressed with what the Urho team has done. I recommend this agency.",
    name: "Elizabeth Smiths",
    role: "ThemeForest",
  },
  {
    text: "I highly recommend agency services. It is a professional and creative company that takes its customers and their expectations very seriously.",
    name: "Adam Tylor",
    role: "Envato Team",
  },
  // Placeholders so the loop has enough slides, replace with real ones
  {
    text: "Fast, creative and reliable. The team delivered exactly what we needed, on time and on budget.",
    name: "Sarah Collins",
    role: "Startup founder",
  },
];

function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snaps, setSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    onInit();
    emblaApi.on("select", onSelect).on("reInit", onInit);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onInit);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="relative overflow-hidden bg-[#3D5AFE] py-16 md:py-24 md:pb-15 mt-20">
      {/* Slow float + rotate keyframes (scoped here so no config changes needed) */}
      <style>{`
        @keyframes testimonialsBgFloat {
          0%   { transform: translate3d(0, 0, 0) rotate(0deg); }
          50%  { transform: translate3d(0, -24px, 0) rotate(3deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }
        .testimonials-bg-anim {
          position: absolute;
          /* oversize the layer so rotating never reveals the edges */
          inset: -15%;
          background-image: var(--testimonials-bg);
          background-repeat: repeat;
          background-position: center;
          /* mobile: one image per row, tiles downward */
          background-size: 100% auto;
          animation: testimonialsBgFloat 28s ease-in-out infinite;
          will-change: transform;
        }
        /* tablet/desktop: 2 images side by side, tiles downward */
        @media (min-width: 768px) {
          .testimonials-bg-anim { background-size: 50% auto; }
        }
        @media (prefers-reduced-motion: reduce) {
          .testimonials-bg-anim { animation: none; }
        }
      `}</style>

      {/* Background: full section width, behind content, slowly floating/rotating */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="testimonials-bg-anim"
          style={{ "--testimonials-bg": `url(${testimonialsBg})` }}
        />
      </div>

      {/* Content sits above the background */}
      <div className="relative z-10">
        <div className="text-center px-5">
          <p className="text-white links text-xs md:text-sm tracking-wide">
            TESTIMONIALS
          </p>
          <h2 className="text-white hero-title font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
            Customer Words
          </h2>
        </div>

        {/* Embla viewport (py gives the shadow room so it isn't clipped) */}
        <div
          className="overflow-hidden mx-5 sm:mx-10 lg:mx-20 mt-6 md:mt-3 py-6"
          ref={emblaRef}
        >
          {/* Mobile/tablet: equal-height cards. Desktop: fixed track, centered cards */}
          <div className="flex items-stretch lg:items-center lg:h-[360px]">
            {testimonials.map((item, index) => {
              const isActive = index === selectedIndex;
              return (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-2 sm:px-3"
                >
                  <div
                    className={`bg-white w-full h-full lg:h-[340px] flex flex-col items-center justify-center text-center gap-4 p-6 sm:p-8
              transition-all duration-500 ease-out origin-center
              ${
                isActive
                  ? "lg:scale-100 lg:opacity-100"
                  : "lg:scale-[0.85] lg:opacity-90"
              }`}
                  >
                    <p className="text-[#616161] links text-sm leading-relaxed">
                      {item.text}
                    </p>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[#212121] hero-title font-semibold text-base">
                        {item.name}
                      </h3>
                      <span className="text-[#3D5AFE] links text-xs">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots: fixed-size slots, only transform animates */}
        <div className="flex justify-center items-center mt-5">
          {snaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className="w-5 h-5 flex items-center justify-center cursor-pointer"
            >
              <span
                className={`block w-2 h-2 rounded-full transition-all duration-300 ease-out ${
                  index === selectedIndex
                    ? "scale-150 bg-white"
                    : "scale-100 bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;