import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Fees & Uniform — JHB Christian Academy",
  description:
    "View the fee structure and uniform dress code for JHB Christian Academy, Johannesburg.",
};

const tuitionFees = [
  { grade: "Preschool", quarterly: "R 4,000.00", annually: "R 11,000.00" },
  { grade: "Grade 1, 2 & 3", quarterly: "R 4,400.00", annually: "R 12,100.00" },
  { grade: "Grade 4, 5 & 6", quarterly: "R 4,800.00", annually: "R 13,200.00" },
  { grade: "Grade 7, 8 & 9", quarterly: "R 5,600.00", annually: "R 15,400.00" },
  { grade: "Grade 10, 11 & 12", quarterly: "R 6,000.00", annually: "R 16,500.00" },
];

const uniformRows = [
  {
    days: "Mon – Thurs",
    boys: "Long Trouser, White Shirt, Tie, Black Jersey/Blazer, Black Socks, Black Shoes",
    girls: "Skirt (24–25 cm below knee), White Shirt, Bowtie/Tie, Black Jersey/Pullover, White Socks, Black Shoes",
    hair: "Boys: Brush, no style\nGirls: Freehand straight lines (no hairpiece)",
  },
  {
    days: "Friday",
    boys: "Golf T-shirt, Shorts, Black Sport Shoes, White Socks",
    girls: "Golf T-shirt, Skirt/Shorts, Black Sport Shoes, White Socks",
    hair: "—",
  },
  {
    days: "Winter",
    boys: "Tracksuit, Black Sport Shoes, Black/White Socks",
    girls: "Tracksuit, Black Sport Shoes, Black/White Socks",
    hair: "—",
  },
];

const uniformItems = [
  "Blazer", "Pullovers", "Tie", "Tunics", "Dry-Mac",
  "Beanies", "Sport Jerseys", "Trousers", "Skirts",
  "Tracksuits", "Summer Hats", "Winter Beanies",
];

export default function FeesAndUniformPage() {
  const year = new Date().getFullYear();

  return (
    <>
      <PageHeader
        eyebrow="Fees & Uniform"
        title="Fees & Uniform"
        parent={{ label: "About Us", href: "/about" }}
        description={`Fee structure and uniform dress code for ${year}.`}
      />

      <div className="container-gutter py-5 border-b border-[var(--line)] flex items-center gap-6">
        <span className="font-[family-name:var(--font-sora)] text-sm text-[var(--text-dim)]">In this section:</span>
        <Link href="/about" className="mono-label text-[13px] link-hover">About Us</Link>
        <Link href="/about/fees-and-uniform" className="mono-label text-[13px] text-[var(--accent)] underline underline-offset-4">Fees &amp; Uniform</Link>
        <Link href="/about/payments" className="mono-label text-[13px] link-hover">Payments</Link>
      </div>

      {/* Fees */}
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
                <th className="text-left px-6 py-4 font-[family-name:var(--font-sora)] font-normal text-base">Quarterly</th>
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
                  <td className="px-6 py-4 text-[var(--text-dim)]">{row.quarterly}</td>
                  <td className="px-6 py-4 text-[var(--text-dim)]">{row.annually}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

      {/* Uniform */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28">
          <span className="chip">Dress Code</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6 mb-4">
            Uniform & Dress Code
          </h2>
          <p className="text-[var(--text-dim)] leading-relaxed mb-12 max-w-2xl">
            Mandatory logoed uniform. All uniform items are available at the school.
          </p>

          <div className="rounded-xl overflow-hidden border border-[var(--line)]">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="bg-[var(--panel)] border-b border-[var(--line)]">
                    <th className="text-left px-6 py-4 font-[family-name:var(--font-sora)] font-normal text-base">Days</th>
                    <th className="text-left px-6 py-4 font-[family-name:var(--font-sora)] font-normal text-base">Boys</th>
                    <th className="text-left px-6 py-4 font-[family-name:var(--font-sora)] font-normal text-base">Girls</th>
                    <th className="text-left px-6 py-4 font-[family-name:var(--font-sora)] font-normal text-base">Hair</th>
                  </tr>
                </thead>
                <tbody>
                  {uniformRows.map((row, i) => (
                    <tr
                      key={row.days}
                      className={`border-b border-[var(--line)] last:border-b-0 ${i % 2 === 0 ? "bg-[var(--bg)]" : "bg-[var(--panel)]"}`}
                    >
                      <td className="px-6 py-5 font-[family-name:var(--font-sora)] align-top whitespace-nowrap">{row.days}</td>
                      <td className="px-6 py-5 text-[var(--text-dim)] leading-relaxed align-top">{row.boys}</td>
                      <td className="px-6 py-5 text-[var(--text-dim)] leading-relaxed align-top">{row.girls}</td>
                      <td className="px-6 py-5 text-[var(--text-dim)] leading-relaxed align-top whitespace-pre-line">{row.hair}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-[var(--line)] bg-[var(--panel)] p-8">
            <p className="mono-label text-[11px] text-[var(--text-dimmer)] mb-6">Additional Rules</p>
            <ul className="space-y-3 text-[var(--text-dim)] leading-relaxed">
              <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--text-dimmer)]">
                Blazers and drymacs must have the official JHBC Academy logo.
              </li>
              <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--text-dimmer)]">
                Socks must be solid black or white and worn under pants.
              </li>
              <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--text-dimmer)]">
                Students must ensure uniforms are neat, both at school and on excursions.
              </li>
            </ul>
            <div className="h-px bg-[var(--line)] my-8" />
            <p className="mono-label text-[11px] text-[var(--text-dimmer)] mb-6">Uniform Items Available at School</p>
            <div className="flex flex-wrap gap-2">
              {uniformItems.map((item) => (
                <span
                  key={item}
                  className="mono-label text-[11px] border border-[var(--line)] px-4 py-2 rounded-lg text-[var(--text-dim)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back nav */}
      <div className="container-gutter py-8 flex items-center justify-between border-b border-[var(--line)]">
        <Link href="/about" className="nav-link">
          ← About Us
        </Link>
        <Link href="/about/payments" className="nav-link">
          Payments →
        </Link>
      </div>

      {/* CTA */}
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
