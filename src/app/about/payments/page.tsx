import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Payments — JHB Christian Academy",
  description:
    "School fees payment instructions and bank details for JHB Christian Academy, Johannesburg.",
};

export default function PaymentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Payments"
        title="Payments"
        parent={{ label: "About Us", href: "/about" }}
        description="School fees payment instructions and bank details."
      />

      <div className="container-gutter py-5 border-b border-[var(--line)] flex items-center gap-6">
        <span className="font-[family-name:var(--font-sora)] text-sm text-[var(--text-dim)]">In this section:</span>
        <Link href="/about" className="mono-label text-[13px] link-hover">About Us</Link>
        <Link href="/about/fees-and-uniform" className="mono-label text-[13px] link-hover">Fees &amp; Uniform</Link>
        <Link href="/about/payments" className="mono-label text-[13px] text-[var(--accent)] underline underline-offset-4">Payments</Link>
      </div>

      <section className="container-gutter py-20 md:py-28">
        <span className="chip">Bank Details</span>
        <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6 mb-4">
          School Fees Payment Instructions
        </h2>
        <p className="text-[var(--text-dim)] leading-relaxed mb-12 max-w-2xl">
          Parents, you can pay using the bank details below.
        </p>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] items-start">
          <div className="rounded-xl overflow-hidden border border-[var(--line)]">
            <div className="bg-[var(--panel)] px-6 py-4 border-b border-[var(--line)]">
              <p className="mono-label text-[11px] text-[var(--text-dimmer)]">Bank Details</p>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: "Account Name", value: "JHB CHRISTIAN ACADEMY" },
                  { label: "Bank", value: "FNB (First National Bank)" },
                  { label: "Account Number", value: "62919912239" },
                  { label: "Branch", value: "WOODBRIDGE" },
                  { label: "Payment Reference", value: "CHILD'S NAME, SURNAME & GRADE" },
                ].map((row, i) => (
                  <tr key={row.label} className={`border-b border-[var(--line)] last:border-b-0 ${i % 2 === 0 ? "bg-[var(--bg)]" : "bg-[var(--panel)]"}`}>
                    <td className="px-6 py-4 mono-label text-[11px] text-[var(--text-dimmer)] w-[40%]">{row.label}</td>
                    <td className="px-6 py-4 font-[family-name:var(--font-sora)]">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-5 bg-[var(--panel)] border-t border-[var(--line)]">
              <p className="mono-label text-[11px] text-[var(--text-dimmer)] mb-1">Example Reference</p>
              <p className="font-[family-name:var(--font-sora)] text-lg">THANDO MULAUDZI GRADE 4</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { num: "01", text: "Make an EFT to the account above and keep your proof of payment." },
              { num: "02", text: "Use the Payment Reference exactly as shown so we can allocate fees correctly." },
              { num: "03", text: "Email proof of payment to accounts@jhbcacademy.org (if applicable)." },
            ].map((step) => (
              <div key={step.num} className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-6 flex gap-5 items-start">
                <span className="mono-label text-[var(--text-dimmer)] text-sm shrink-0">{step.num}</span>
                <p className="text-[var(--text-dim)] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-gutter py-8 flex items-center justify-between border-b border-[var(--line)]">
        <Link href="/about/fees-and-uniform" className="nav-link">
          ← Fees &amp; Uniform
        </Link>
        <Link href="/admissions" className="nav-link">
          Admissions →
        </Link>
      </div>

      <section className="section-dark bg-[var(--fill-solid)] text-[#f5f4f1]">
        <div className="container-gutter py-20 md:py-28 text-center">
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(28px,4vw,52px)] leading-tight">
            Ready to Register Your Child?
          </h2>
          <div className="mt-10">
            <Link href="/admissions" className="btn-ghost">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
