import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use | Zexora",
}

export default function TermsOfUse() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 lg:px-12 lg:py-32">
      <p className="mb-4 text-xs tracking-[0.3em] uppercase text-muted-foreground">Legal</p>
      <h1 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">Terms of Use</h1>
      <p className="mt-4 text-xs text-muted-foreground">Last updated: June 2025</p>

      <div className="mt-12 space-y-10 text-sm leading-relaxed text-foreground/70">
        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">1. Acceptance of Terms</h2>
          <p>By accessing or using the Zexora website and services, you agree to be bound by these Terms of Use. If you do not agree, please do not use our services.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">2. Use of Services</h2>
          <p>You agree to use Zexora services only for lawful purposes and in accordance with these terms. You may not use our services in any way that could damage, disable, or impair our infrastructure or interfere with any other party's use.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">3. Intellectual Property</h2>
          <p>All content, systems, and infrastructure designs produced by Zexora remain the intellectual property of Zexora unless explicitly transferred in a written agreement.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">4. Limitation of Liability</h2>
          <p>Zexora shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid by you in the three months preceding the claim.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">5. Modifications</h2>
          <p>We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the revised terms.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">6. Governing Law</h2>
          <p>These terms are governed by the laws of South Africa. Any disputes shall be subject to the exclusive jurisdiction of South African courts.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">7. Contact</h2>
          <p>For any questions regarding these terms, contact us at <a href="mailto:hello@zexora.cloud" className="underline underline-offset-2">hello@zexora.cloud</a>.</p>
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
