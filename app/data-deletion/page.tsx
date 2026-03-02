import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Deletion | Zexora",
}

export default function DataDeletion() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 lg:px-12 lg:py-32">
      <p className="mb-4 text-xs tracking-[0.3em] uppercase text-muted-foreground">Legal</p>
      <h1 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">Data Deletion</h1>
      <p className="mt-4 text-xs text-muted-foreground">Last updated: June 2025</p>

      <div className="mt-12 space-y-10 text-sm leading-relaxed text-foreground/70">
        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">Your Right to Deletion</h2>
          <p>You have the right to request the deletion of any personal data we hold about you. This includes your name, email address, and any other information submitted through our consultation or contact forms.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">How to Request Deletion</h2>
          <p>To request deletion of your data, send an email to <a href="mailto:hello@zexora.cloud" className="underline underline-offset-2">hello@zexora.cloud</a> with the subject line <strong className="text-foreground font-medium">Data Deletion Request</strong> and include the email address associated with your inquiry.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">Processing Time</h2>
          <p>We will process your deletion request within 30 days of receipt and confirm once your data has been removed from our systems.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">Exceptions</h2>
          <p>In certain cases, we may be required to retain specific data to comply with legal obligations or resolve disputes. Where this applies, we will inform you of the reason and the expected retention period.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">Contact</h2>
          <p>For any questions about data deletion, contact us at <a href="mailto:hello@zexora.cloud" className="underline underline-offset-2">hello@zexora.cloud</a>.</p>
        </section>
      </div>

      <div className="mt-16 border-t border-border pt-8">
        <a href="/" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
          ← Back to Zexora
        </a>
      </div>
    </main>
  )
}
