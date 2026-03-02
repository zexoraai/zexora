"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

export function CloseSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="consultation"
      className="relative bg-background py-32 lg:py-44"
      ref={ref}
    >
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            The Next Decade Belongs to Autonomous Organizations.
          </h2>
        </div>

        <div
          className={`mt-14 space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            The question is not whether automation will define your industry.
          </p>
          <p className="text-base leading-relaxed text-foreground md:text-lg">
            The question is whether you implement infrastructure before your
            competitors do.
          </p>
        </div>

        <div
          className={`mt-12 transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <p className="font-serif text-xl tracking-wide text-foreground">
            Zexora
          </p>
          <p className="mt-2 text-xs tracking-[0.3em] uppercase text-muted-foreground/60 italic">
            Engineering the Exponential Intelligence Era.
          </p>
        </div>

        <div
          className={`mt-14 flex flex-col items-center gap-4 transition-all duration-1000 delay-400 ${
            isVisible ? "animate-fade-in-up delay-400" : "opacity-0"
          }`}
        >
          <a
            href="mailto:hello@zexora.cloud"
            className="group inline-flex items-center gap-3 border border-foreground bg-foreground px-10 py-5 text-xs font-medium tracking-widest uppercase text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-foreground"
          >
            Request a Strategic Infrastructure Assessment
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="text-[11px] tracking-widest uppercase text-muted-foreground/40">
            Private consultation. No obligation.
          </p>
        </div>
      </div>
    </section>
  )
}
