export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center lg:px-12">
        <span className="font-serif text-lg tracking-wide text-foreground">
          Zexora
        </span>
        <p className="text-xs tracking-widest uppercase text-muted-foreground">
          Autonomous Operational Infrastructure
        </p>
        <a
          href="https://zexora.cloud"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline mt-2 text-xs tracking-wide text-muted-foreground/60 transition-colors duration-300 hover:text-muted-foreground"
        >
          zexora.cloud
        </a>
      </div>
    </footer>
  )
}
