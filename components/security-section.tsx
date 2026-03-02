"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  "Cloud-native infrastructure",
  "Secure database environments",
  "Controlled access layers",
  "API-integrated orchestration",
  "Enterprise-grade deployment models",
]

export function SecuritySection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative bg-card py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
          <div
            className={`lg:w-1/2 transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <p className="mb-6 text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Security & Architecture
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl text-balance">
              Built on Secure, Scalable Architecture
            </h2>
            <p className="mt-8 font-serif text-lg text-foreground/80 italic">
              Operational resilience is not optional.
            </p>
          </div>

          <div
            className={`lg:w-1/2 space-y-0 transition-all duration-1000 delay-200 ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            {features.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-border/50 py-5 first:border-t"
              >
                <span className="font-mono text-xs text-muted-foreground/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed tracking-wide text-foreground/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
