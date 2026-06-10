"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

// --- Embla Carousel (lightweight, no shadcn wrapper) ---
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

type CarouselApi = EmblaCarouselType;

/* ─── Service Card ─── */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.setProperty("--rotate-x", `${y * -8}deg`);
    cardRef.current.style.setProperty("--rotate-y", `${x * 8}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--rotate-x", "0deg");
    cardRef.current.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: "1000px" }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex h-[420px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br p-8 transition-transform duration-300 ease-out cursor-default"
        style={{
          transform: "rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))",
          transformStyle: "preserve-3d",
          background: `linear-gradient(135deg, color-mix(in oklch, var(--color-brand) 12%, transparent), transparent 60%)`,
        }}
      >
        {/* Number label */}
        <span className="absolute top-6 right-6 text-[0.7rem] font-mono tracking-widest text-foreground/20">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Icon */}
        <div
          className="z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-foreground/10"
          style={{ transform: "translateZ(24px)", background: "color-mix(in oklch, var(--color-brand) 15%, transparent)" }}
        >
          <Icon size={26} className="text-brand" />
        </div>

        {/* Content */}
        <div className="z-10" style={{ transform: "translateZ(16px)" }}>
          <h3 className="mb-2 text-xl font-semibold tracking-tight text-foreground">
            {service.title}
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2.5">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-xs text-muted-foreground/70"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Subtle glow overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      </div>
    </motion.div>
  );
}

/* ─── Carousel Navigation ─── */
function CarouselNav({
  api,
  canScrollPrev,
  canScrollNext,
}: {
  api: CarouselApi;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}) {
  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      <button
        onClick={() => api?.scrollPrev()}
        disabled={!canScrollPrev}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground/60 transition-all hover:border-brand/40 hover:text-brand disabled:opacity-20 disabled:cursor-not-allowed"
        aria-label="Anterior"
      >
        <ArrowRight size={16} className="rotate-180" />
      </button>
      <button
        onClick={() => api?.scrollNext()}
        disabled={!canScrollNext}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground/60 transition-all hover:border-brand/40 hover:text-brand disabled:opacity-20 disabled:cursor-not-allowed"
        aria-label="Siguiente"
      >
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

/* ─── Main Export ─── */
export function ServiceCarousel({ services }: { services: Service[] }) {
  const [carouselRef, api] = useEmblaCarousel({
    align: "start",
    loop: false,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((a: CarouselApi) => {
    if (!a) return;
    setCanScrollPrev(a.canScrollPrev());
    setCanScrollNext(a.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!api) return;

    // Defer initial sync — embla is already at the right slide, just need to reflect it
    const initTimer = setTimeout(() => {
      onSelect(api);
    }, 0);

    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      clearTimeout(initTimer);
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <div ref={sectionRef} className="w-full">
      <div className="overflow-hidden" ref={carouselRef}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
            hidden: {},
          }}
          className="-ml-4 flex"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </motion.div>
      </div>

      <CarouselNav api={api!} canScrollPrev={canScrollPrev} canScrollNext={canScrollNext} />
    </div>
  );
}
