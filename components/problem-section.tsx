"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative bg-background py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="mb-8 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            The Structural Problem
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Manual Systems Don&#39;t Scale.
          </h2>
        </div>

        <div
          className={`mt-16 transition-all duration-1000 delay-200 ${
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Most organizations operate on human-dependent coordination.
          </p>

          <div className="mt-10 space-y-4 border-l border-border pl-8">
            {[
              "Orders require tracking.",
              "Approvals require reminders.",
              "Deliveries require confirmation.",
              "Data requires reconciliation.",
            ].map((item) => (
              <p
                key={item}
                className="text-sm leading-relaxed tracking-wide text-foreground/70"
              >
                {item}
              </p>
            ))}
          </div>

          <div className="mt-14 space-y-5">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              At scale, friction compounds.
            </p>
            <p className="text-base leading-relaxed text-foreground md:text-lg">
              This is not a productivity issue.
            </p>
            <p className="font-serif text-xl text-foreground md:text-2xl">
              It is an architectural flaw.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
