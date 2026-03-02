"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: "01",
    title: "Operational Audit",
    description:
      "We identify friction points, bottlenecks, and structural inefficiencies across your operations.",
  },
  {
    number: "02",
    title: "Architecture Design",
    description:
      "We design event-driven system frameworks tailored to your operational topology.",
  },
  {
    number: "03",
    title: "Controlled Deployment",
    description:
      "Secure, staged system implementation with zero disruption to existing operations.",
  },
  {
    number: "04",
    title: "Monitoring & Optimization",
    description:
      "Continuous performance refinement and infrastructure evolution.",
  },
]

export function EngagementSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative bg-background py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="mb-8 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Engagement Model
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            How We Engineer Infrastructure
          </h2>
        </div>

        <div
          className={`mt-16 grid gap-0 md:grid-cols-2 transition-all duration-1000 delay-200 ${
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col gap-4 border-border p-8 lg:p-10 ${
                index < 2 ? "border-b" : ""
              } ${index % 2 === 0 ? "md:border-r" : ""}`}
            >
              <span className="font-mono text-xs text-muted-foreground/40">
                {step.number}
              </span>
              <h3 className="font-serif text-xl text-foreground md:text-2xl">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
