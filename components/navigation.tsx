"use client"

import { useState, useEffect } from "react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <span className="font-serif text-xl tracking-wide text-foreground">
          Zexora
        </span>
        <a
          href="#consultation"
          className="link-underline text-sm tracking-widest uppercase text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
