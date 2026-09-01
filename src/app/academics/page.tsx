import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { phases } from "@/data/academics";

export const metadata: Metadata = {
  title: "Academics — JHB Christian Academy",
  description:
    "Pre-Primary, Primary and High School phases at JHB Christian Academy — from Grade R to Grade 12 in Johannesburg.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Academics"
        description="One continuous educational journey — from Pre-Primary through to matric — under a single Umalusi-accredited roof."
      />

      <section className="container-gutter py-20 md:py-28 grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] md:grid-cols-3">
        {phases.map((phase, i) => (
          <div
            key={phase.id}
            className="bg-[var(--bg)] p-8 md:p-10 flex flex-col border-r border-b border-[var(--line)]"
          >
            <span className="mono-label text-[var(--text-dimmer)] text-sm">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mono-label text-[11px] text-[var(--text-dim)] mt-3">
              {phase.grades}
            </span>
            <h2 className="font-[family-name:var(--font-sora)] font-light text-2xl mt-4">
              {phase.label}
            </h2>
            <p className="mt-4 text-[var(--text-dim)] leading-relaxed flex-1">
              {phase.summary}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {phase.highlights.map((h) => (
                <span
                  key={h}
                  className="mono-label text-[10px] text-[var(--text-dimmer)] rounded-lg border border-[var(--line)] px-3 py-2"
                >
                  {h}
                </span>
              ))}
            </div>
            <Link href={phase.href} className="btn-solid mt-8 self-start">
              Learn More
            </Link>
          </div>
        ))}
      </section>

      <section className="bg-[var(--bg-alt)] border-t border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28 text-center">
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3.4vw,42px)] leading-tight">
            Ready to enroll for the next intake?
          </h2>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/admissions" className="btn-solid">
              View Admissions
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
