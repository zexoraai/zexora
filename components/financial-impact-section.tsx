"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const metrics = [
  { label: "Per transaction", value: "5 min" },
  { label: "Daily (80 transactions)", value: "400 min" },
  { label: "Daily equivalent", value: "6.6 hrs" },
  { label: "Monthly equivalent", value: "132+ hrs" },
]

export function FinancialImpactSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      className="relative py-32 lg:py-40"
      style={{ backgroundColor: "#F5F5F5" }}
      ref={ref}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="mb-8 text-xs tracking-[0.3em] uppercase" style={{ color: "#666666" }}>
            Financial Impact
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl text-balance" style={{ color: "#000000" }}>
            The Hidden Cost of Operational Friction
          </h2>
        </div>

        <div
          className={`mt-16 transition-all duration-1000 delay-200 ${
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          <p className="text-base leading-relaxed md:text-lg" style={{ color: "#444444" }}>
            At 80 transactions per day:
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px md:grid-cols-4" style={{ backgroundColor: "#D4D4D4" }}>
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col gap-2 px-6 py-8"
                style={{ backgroundColor: "#F5F5F5" }}
              >
                <span className="font-serif text-2xl md:text-3xl" style={{ color: "#000000" }}>
                  {metric.value}
                </span>
                <span className="text-xs tracking-widest uppercase" style={{ color: "#666666" }}>
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#666666" }}>
                Equivalent to
              </p>
              <p className="font-serif text-2xl md:text-3xl" style={{ color: "#000000" }}>
                One full-time operational role.
              </p>
            </div>

            <div className="border-l-2 pl-6" style={{ borderColor: "#000000" }}>
              <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#666666" }}>
                Estimated annual impact
              </p>
              <p className="mt-2 font-serif text-2xl md:text-3xl" style={{ color: "#000000" }}>
                R180,000 &ndash; R300,000+
              </p>
            </div>
          </div>

          <div className="mt-14 border-t pt-10" style={{ borderColor: "#D4D4D4" }}>
            <p className="text-base leading-relaxed md:text-lg" style={{ color: "#444444" }}>
              And that is before error cost, delay cost, and opportunity cost.
            </p>
            <p className="mt-4 font-serif text-xl md:text-2xl" style={{ color: "#000000" }}>
              Operational inefficiency compounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
