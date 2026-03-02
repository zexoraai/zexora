"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const reasons = [
  "Headcount inflation is increasing",
  "Operational complexity is compounding",
  "Manual systems increase risk exposure",
  "Competitors will implement automation first",
]

export function WhyNowSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      className="relative py-32 lg:py-40"
      style={{ backgroundColor: "#F5F5F5" }}
      ref={ref}
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="mb-8 text-xs tracking-[0.3em] uppercase" style={{ color: "#666666" }}>
            Urgency
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl text-balance" style={{ color: "#000000" }}>
            Why Infrastructure Cannot Wait
          </h2>
        </div>

        <div
          className={`mt-16 space-y-0 transition-all duration-1000 delay-200 ${
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          {reasons.map((reason, index) => (
            <div
              key={reason}
              className="flex items-start gap-6 py-5"
              style={{ borderBottom: "1px solid #D4D4D4" }}
            >
              <span className="mt-0.5 font-mono text-xs" style={{ color: "#999999" }}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed md:text-lg" style={{ color: "#222222" }}>
                {reason}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-14 transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <p className="font-serif text-xl leading-snug md:text-2xl" style={{ color: "#000000" }}>
            The organizations that build infrastructure today will define their
            markets tomorrow.
          </p>
        </div>
      </div>
    </section>
  )
}
