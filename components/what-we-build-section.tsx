"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const capabilities = [
  "Orchestrate workflows automatically",
  "Synchronize fragmented data across systems",
  "Trigger intelligent notifications",
  "Replace repetitive administrative roles",
  "Provide real-time operational visibility",
]

export function WhatWeBuildSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative overflow-hidden bg-card py-32 lg:py-40" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/data-center.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-12">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="mb-8 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            What We Build
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Autonomous Operational Infrastructure
          </h2>
        </div>

        <div
          className={`mt-16 transition-all duration-1000 delay-200 ${
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Zexora designs event-driven systems that:
          </p>

          <div className="mt-10 space-y-0">
            {capabilities.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-6 border-b border-border/50 py-5 first:border-t"
              >
                <span className="mt-0.5 font-mono text-xs text-muted-foreground/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed tracking-wide text-foreground/80 md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-16 transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <p className="text-base text-muted-foreground">
            This is not task automation.
          </p>
          <p className="mt-3 font-serif text-xl text-foreground md:text-2xl">
            This is infrastructure engineering.
          </p>
        </div>
      </div>
    </section>
  )
}
