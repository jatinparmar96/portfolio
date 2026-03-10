import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function FeatureStory() {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".feature-card");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 48,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="bg-neutral-950 px-6 py-32 text-white h-full w-full"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {["Precision", "Performance", "Elegance"].map((title) => (
          <div
            key={title}
            className="feature-card rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-4 text-white/70">
              Thoughtful animation and layout decisions create a more premium,
              memorable experience.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
