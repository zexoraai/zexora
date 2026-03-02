import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Zexora",
}

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 lg:px-12 lg:py-32">
      <p className="mb-4 text-xs tracking-[0.3em] uppercase text-muted-foreground">Legal</p>
      <h1 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">Privacy Policy</h1>
      <p className="mt-4 text-xs text-muted-foreground">Last updated: June 2025</p>

      <div className="mt-12 space-y-10 text-sm leading-relaxed text-foreground/70">
        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as your name and email address when you submit a consultation request. We do not collect data beyond what is necessary to respond to your inquiry.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">2. How We Use Your Information</h2>
          <p>Information collected is used solely to respond to your inquiry, provide our services, and communicate relevant updates. We do not sell or share your personal data with third parties.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">3. Data Retention</h2>
          <p>We retain your information only as long as necessary to fulfil the purpose for which it was collected, or as required by law.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">4. Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">5. Your Rights</h2>
          <p>You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights, contact us at <a href="mailto:hello@zexora.cloud" className="underline underline-offset-2">hello@zexora.cloud</a>.</p>
        </section>

        <section>
          <h2 className="mb-3 text-xs tracking-[0.2em] uppercase text-foreground">6. Contact</h2>
          <p>For any privacy-related questions, contact us at <a href="mailto:hello@zexora.cloud" className="underline underline-offset-2">hello@zexora.cloud</a>.</p>
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
