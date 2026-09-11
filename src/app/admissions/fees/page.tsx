import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Fee Structure — JHB Christian Academy",
  description:
    "View the tuition fee structure for JHB Christian Academy, Johannesburg.",
};

const tuitionFees = [
  { grade: "Preschool", monthly: "R 1,333.00", annually: "R 11,000.00" },
  { grade: "Grade 1, 2 & 3", monthly: "R 1,467.00", annually: "R 12,100.00" },
  { grade: "Grade 4, 5 & 6", monthly: "R 1,600.00", annually: "R 13,200.00" },
  { grade: "Grade 7, 8 & 9", monthly: "R 1,867.00", annually: "R 15,400.00" },
  { grade: "Grade 10, 11 & 12", monthly: "R 2,000.00", annually: "R 16,500.00" },
];

export default function FeesPage() {
  const year = new Date().getFullYear();

  return (
    <>
      <PageHeader
        eyebrow="Fees"
        title="Fee Structure"
        parent={{ label: "Admissions", href: "/admissions" }}
        description={`Tuition fee structure for ${year}.`}
      />

      <section className="container-gutter py-20 md:py-28">
        <span className="chip">Tuition Fees</span>
        <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6 mb-4">
          Fee Structure for {year}
        </h2>
        <p className="text-[var(--text-dim)] leading-relaxed mb-12 max-w-2xl">
          Tuition fee only — does not include excursions, stationery, or textbooks.
        </p>

        <div className="rounded-xl overflow-hidden border border-[var(--line)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--panel)] border-b border-[var(--line)]">
                <th className="text-left px-6 py-4 font-[family-name:var(--font-sora)] font-normal text-base">Grade</th>
                <th className="text-left px-6 py-4 font-[family-name:var(--font-sora)] font-normal text-base">Monthly</th>
                <th className="text-left px-6 py-4 font-[family-name:var(--font-sora)] font-normal text-base">Annually (Discounted)</th>
              </tr>
            </thead>
            <tbody>
              {tuitionFees.map((row, i) => (
                <tr
                  key={row.grade}
                  className={`border-b border-[var(--line)] last:border-b-0 ${i % 2 === 0 ? "bg-[var(--bg)]" : "bg-[var(--panel)]"}`}
                >
                  <td className="px-6 py-4 font-[family-name:var(--font-sora)]">{row.grade}</td>
                  <td className="px-6 py-4 text-[var(--text-dim)]">{row.monthly}</td>
                  <td className="px-6 py-4 text-[var(--text-dim)]">{row.annually}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:c6af0f2a-914e-474d-a2ae-8bbf4fc3f0b6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--panel)] px-6 py-4 text-sm link-hover"
          >
            <img src="/vecteezy_adobe-acrobat-reader-icon_19016806.png" alt="PDF" className="h-6 w-6 object-contain" />
            <span className="font-[family-name:var(--font-sora)]">Download Fee Structure</span>
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Registration Fee", value: "R 500.00", note: "Non-refundable" },
            { label: "Re-registration Fee", value: "R 300.00", note: "Yearly, Non-refundable — returning students" },
            { label: "Non-SA Student Advance", value: "R 1,100.00", note: "Advance payment required" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-6">
              <p className="mono-label text-[11px] text-[var(--text-dimmer)]">{item.label}</p>
              <p className="font-[family-name:var(--font-sora)] text-2xl mt-3">{item.value}</p>
              <p className="text-[var(--text-dim)] text-sm mt-2 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-16 md:py-20">
          <p className="mono-label text-[11px] text-[var(--text-dimmer)] mb-8">Also in Admissions</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <Link href="/admissions/uniform" className="group rounded-xl border border-[var(--line)] bg-[var(--panel)] p-8 hover:bg-[var(--fill-ghost)] transition-colors">
              <p className="font-[family-name:var(--font-sora)] text-xl">Uniform &amp; Dress Code</p>
              <p className="mt-3 text-[var(--text-dim)] text-sm leading-relaxed">View the uniform dress code and full price list from the school uniform shop.</p>
              <p className="mt-6 mono-label text-[11px] text-[var(--accent)]">View Uniform →</p>
            </Link>
            <Link href="/admissions/payments" className="group rounded-xl border border-[var(--line)] bg-[var(--panel)] p-8 hover:bg-[var(--fill-ghost)] transition-colors">
              <p className="font-[family-name:var(--font-sora)] text-xl">Payments</p>
              <p className="mt-3 text-[var(--text-dim)] text-sm leading-relaxed">View bank details and payment instructions for school fees.</p>
              <p className="mt-6 mono-label text-[11px] text-[var(--accent)]">View Payments →</p>
            </Link>
          </div>
        </div>
      </section>

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
