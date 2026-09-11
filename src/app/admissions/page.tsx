import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { downloads } from "@/data/site";

export const metadata: Metadata = {
  title: "Admissions — JHB Christian Academy",
  description:
    `${(() => { const d = new Date(); return d.getMonth() >= 8 ? d.getFullYear() + 1 : d.getFullYear(); })()} admissions are now open at JHB Christian Academy, Johannesburg. Learn about the process and apply online.`,
};

const steps = [
  {
    title: "Enquire",
    description:
      "Reach out to our admissions team by phone or email to check availability for your child's grade and phase.",
  },
  {
    title: "Register",
    description:
      "Download and complete the registration form, along with the fee structure and course structure documents below.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Admissions"
        description={`${(() => { const d = new Date(); return d.getMonth() >= 8 ? d.getFullYear() + 1 : d.getFullYear(); })()} admissions are now open. Here's how to register your child at JHB Christian Academy.`}
      />

      <div className="container-gutter pt-16 pb-10">
        <a
          href="https://3852.d6plus.co.za/register/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-solid"
        >
          Apply Online Now
        </a>
      </div>

      <section className="container-gutter py-20 md:py-28 grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] md:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.title} className="bg-[var(--bg)] p-8 md:p-10 border-r border-b border-[var(--line)]">
            <span className="mono-label text-[var(--text-dimmer)] text-sm">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="font-[family-name:var(--font-sora)] text-2xl mt-4">
              {step.title}
            </h2>
            <p className="mt-4 text-[var(--text-dim)] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
        <div className="bg-[var(--bg)] p-8 md:p-10 border-r border-b border-[var(--line)]">
          <span className="mono-label text-[var(--text-dimmer)] text-sm">03</span>
          <h2 className="font-[family-name:var(--font-sora)] text-2xl mt-4">Enroll</h2>
          <p className="mt-4 text-[var(--text-dim)] leading-relaxed">
            Submit your application through our online application platform to secure your child&apos;s place at JHB Christian Academy.
          </p>
          <a
            href="https://3852.d6plus.co.za/register/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 mono-label text-[11px] text-[var(--accent)] underline underline-offset-4"
          >
            Apply Online →
          </a>
        </div>
      </section>

      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28">
          <span className="chip">School Downloads</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3.4vw,42px)] leading-tight mt-6 mb-12 max-w-2xl">
            Everything you need to register
          </h2>
          <div className="flex flex-col gap-4">
            {downloads.map((d) => (
              <a
                key={d.label}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[var(--panel)] border border-[var(--line)] rounded-xl px-6 py-4 hover:bg-[var(--fill-ghost)] transition-colors self-start"
              >
                <img
                  src="/vecteezy_adobe-acrobat-reader-icon_19016806.png"
                  alt="PDF"
                  width={28}
                  height={28}
                  className="shrink-0"
                />
                <span className="font-[family-name:var(--font-sora)] text-lg leading-snug">
                  {d.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark bg-[var(--fill-solid)] text-[#f5f4f1]">
        <div className="container-gutter py-20 md:py-28 text-center">
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(28px,4vw,52px)] leading-tight">
            Ready to Register Your Child?
          </h2>
          <p className="mt-5 text-[rgba(245,244,241,0.62)]">
            Apply online through our admissions platform.
          </p>
          <div className="mt-10">
            <a href="https://3852.d6plus.co.za/register/" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Apply Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
