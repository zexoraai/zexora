"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* Architectural grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000000_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-12">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="mb-6 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Autonomous Operational Infrastructure
          </p>
          <h1 className="font-serif text-5xl leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <span className="text-balance">Zexora</span>
          </h1>
          <p className="mt-6 font-serif text-xl tracking-wide text-muted-foreground md:text-2xl lg:text-3xl italic">
            The Exponential Intelligence Era
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <p className="mx-auto mt-12 max-w-2xl text-sm leading-relaxed tracking-wide text-muted-foreground md:text-base">
            We engineer autonomous operational infrastructure that eliminates
            manual friction, compounds efficiency, and transforms complex
            workflows into scalable systems.
          </p>
        </div>

        <div
          className={`mt-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center transition-all duration-1000 delay-400 ${
            isVisible ? "animate-fade-in-up delay-400" : "opacity-0"
          }`}
        >
          <a
            href="#consultation"
            className="group flex items-center gap-3 border border-foreground bg-foreground px-8 py-4 text-xs font-medium tracking-widest uppercase text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-foreground"
          >
            Request a Strategic Infrastructure Assessment
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#case-study"
            className="link-underline text-xs tracking-widest uppercase text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            View Deployment Case Study
          </a>
        </div>

        <p
          className={`mt-8 text-[11px] tracking-widest uppercase text-muted-foreground/40 transition-all duration-1000 delay-400 ${
            isVisible ? "animate-fade-in-up delay-400" : "opacity-0"
          }`}
        >
          Private. Confidential. Architecture-first.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="h-12 w-px animate-pulse bg-muted-foreground/30" />
      </div>
    </section>
  )
}
