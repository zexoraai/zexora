"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const before = [
  "Manual order ingestion",
  "Status reconciliation delays",
  "Human-dependent coordination",
  "WhatsApp overload",
  "Operational bottleneck",
]

const after = [
  "Automated order ingestion",
  "Real-time status synchronization",
  "AI-powered WhatsApp order retrieval",
  "Centralized operations dashboard",
  "Zero increase in headcount",
]

export function CaseStudySection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="case-study"
      className="relative py-32 lg:py-40"
      style={{ backgroundColor: "#F5F5F5" }}
      ref={ref}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="mb-8 text-xs tracking-[0.3em] uppercase" style={{ color: "#666666" }}>
            Deployment Example
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl text-balance" style={{ color: "#000000" }}>
            Autonomous Order & Delivery Infrastructure
          </h2>
        </div>

        <div
          className={`mt-12 transition-all duration-1000 delay-100 ${
            isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          <div className="border-l-2 pl-6" style={{ borderColor: "#000000" }}>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#666666" }}>
              Context
            </p>
            <p className="mt-3 text-base leading-relaxed md:text-lg" style={{ color: "#444444" }}>
              A South African e-commerce brand processing 80+ orders daily
              required operational scalability.
            </p>
          </div>
        </div>

        <div
          className={`mt-16 grid gap-px md:grid-cols-2 transition-all duration-1000 delay-200 ${
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
          style={{ backgroundColor: "#D4D4D4" }}
        >
          {/* Before column */}
          <div className="p-8 lg:p-10" style={{ backgroundColor: "#EBEBEB" }}>
            <p className="mb-6 text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#999999" }}>
              Before Zexora
            </p>
            <div className="space-y-4">
              {before.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0" style={{ backgroundColor: "#999999" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* After column */}
          <div className="p-8 lg:p-10" style={{ backgroundColor: "#F5F5F5" }}>
            <p className="mb-6 text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#000000" }}>
              After Zexora
            </p>
            <div className="space-y-4">
              {after.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0" style={{ backgroundColor: "#000000" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "#222222" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact metrics */}
        <div
          className={`mt-16 grid gap-px md:grid-cols-3 transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
          style={{ backgroundColor: "#D4D4D4" }}
        >
          <div className="flex flex-col gap-2 p-8" style={{ backgroundColor: "#F5F5F5" }}>
            <span className="font-serif text-3xl md:text-4xl" style={{ color: "#000000" }}>
              2,400+
            </span>
            <span className="text-xs tracking-widest uppercase" style={{ color: "#666666" }}>
              Transactions/month automated
            </span>
          </div>
          <div className="flex flex-col gap-2 p-8" style={{ backgroundColor: "#F5F5F5" }}>
            <span className="font-serif text-3xl md:text-4xl" style={{ color: "#000000" }}>
              0
            </span>
            <span className="text-xs tracking-widest uppercase" style={{ color: "#666666" }}>
              Additional operational hires
            </span>
          </div>
          <div className="flex flex-col gap-2 p-8" style={{ backgroundColor: "#F5F5F5" }}>
            <span className="font-serif text-3xl md:text-4xl" style={{ color: "#000000" }}>
              R200,000+
            </span>
            <span className="text-xs tracking-widest uppercase" style={{ color: "#666666" }}>
              Projected annual efficiency impact
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
