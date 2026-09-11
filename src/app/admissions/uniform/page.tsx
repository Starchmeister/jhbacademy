import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Uniform — JHB Christian Academy",
  description:
    "View the uniform dress code and price list for JHB Christian Academy, Johannesburg.",
};

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
  "Blazer", "Pullovers", "Tie", "Tunics",
  "Beanies", "Sport Jerseys", "Trousers", "Skirts",
  "Tracksuits", "Summer Hats", "Winter Beanies",
];

export default function UniformPage() {
  return (
    <>
      <PageHeader
        eyebrow="Uniform"
        title="Uniform & Dress Code"
        parent={{ label: "Admissions", href: "/admissions" }}
        description="Mandatory logoed uniform. All items available at the school."
      />

      <section className="container-gutter py-20 md:py-28">
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
              Blazers must have the official JHBC Academy logo.
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
      </section>

      {/* Uniform Price List */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28">
          <span className="chip">Uniform Pricing</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6 mb-2">
            Uniform Price List
          </h2>
          <p className="text-[var(--text-dim)] text-sm mb-12 max-w-2xl">
            Supplied by <span className="font-[family-name:var(--font-sora)]">Refined Touch (T/A JHB Uniform Shop)</span>. Prices are subject to size.
          </p>

          <h3 className="font-[family-name:var(--font-sora)] font-light text-2xl mb-6">Primary School Uniform</h3>
          <div className="rounded-xl overflow-hidden border border-[var(--line)] mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--panel)] border-b border-[var(--line)]">
                  <th className="text-left px-6 py-4 font-[family-name:var(--font-sora)] font-normal text-base">Item</th>
                  <th className="text-left px-6 py-4 font-[family-name:var(--font-sora)] font-normal text-base">Sizes</th>
                  <th className="text-left px-6 py-4 font-[family-name:var(--font-sora)] font-normal text-base">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "Tracksuit", sizes: "5–6, 7–8, 9–10, 13–14, 15–16", price: "R800.00" },
                  { item: "Tracksuit", sizes: "Small, Medium, Large, X-Large", price: "R850.00" },
                  { item: "Tracksuit", sizes: "Special Size", price: "R950.00" },
                  { item: "Jersey", sizes: "24–28, 30, 34, 36, 38", price: "R400.00" },
                  { item: "Jersey", sizes: "40–50", price: "R430.00" },
                  { item: "Pullover Jersey", sizes: "24–28, 30, 34, 36, 38", price: "R330.00" },
                  { item: "Pullover Jersey", sizes: "40–50", price: "R430.00" },
                  { item: "Tunic", sizes: "5–6, 6–7, 8–9, 9–10, 11–12", price: "R400.00" },
                  { item: "Tunic", sizes: "13–14, 15–16", price: "R400.00" },
                  { item: "Tunic", sizes: "Special Size", price: "R500.00" },
                  { item: "Trouser", sizes: "5–6, 7–8, 9–10", price: "R350.00" },
                  { item: "Trouser", sizes: "11–12, 13–14, 15–16", price: "R400.00" },
                  { item: "Trouser", sizes: "Special Size", price: "R500.00" },
                  { item: "Blazer", sizes: "All sizes", price: "R850.00" },
                  { item: "Golf T-Shirt", sizes: "5–6, 7–8, 9–10, 11–12, 13–14, 15–16", price: "R200.00" },
                  { item: "Golf T-Shirt", sizes: "Small, Medium, Large, X-Large", price: "R300.00" },
                  { item: "Sport Short / Scout", sizes: "5–6, 7–8, 9–10, 13–14, 15–16", price: "R200.00" },
                  { item: "Sport Short / Scout", sizes: "30–32, 34–36, 40–44", price: "R230.00" },
                  { item: "Cap", sizes: "One size", price: "R150.00" },
                  { item: "Sunhat", sizes: "One size", price: "R150.00" },
                  { item: "Beanie", sizes: "One size", price: "R150.00" },
                  { item: "Boys Tie", sizes: "—", price: "R150.00" },
                  { item: "Girl Bowtie", sizes: "—", price: "R150.00" },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-[var(--line)] last:border-b-0 ${i % 2 === 0 ? "bg-[var(--bg)]" : "bg-[var(--panel)]"}`}>
                    <td className="px-6 py-4 font-[family-name:var(--font-sora)]">{row.item}</td>
                    <td className="px-6 py-4 text-[var(--text-dim)]">{row.sizes}</td>
                    <td className="px-6 py-4 text-[var(--text-dim)]">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-[family-name:var(--font-sora)] font-light text-2xl mb-6">High School Uniform</h3>
          <div className="rounded-xl overflow-hidden border border-[var(--line)] mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--panel)] border-b border-[var(--line)]">
                  <th className="text-left px-6 py-4 font-[family-name:var(--font-sora)] font-normal text-base">Item</th>
                  <th className="text-left px-6 py-4 font-[family-name:var(--font-sora)] font-normal text-base">Sizes</th>
                  <th className="text-left px-6 py-4 font-[family-name:var(--font-sora)] font-normal text-base">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "Jersey", sizes: "28–34, 36–38", price: "R400.00" },
                  { item: "Jersey", sizes: "40–44", price: "R450.00" },
                  { item: "Jersey", sizes: "46–50", price: "R500.00" },
                  { item: "Pullover Jersey", sizes: "28–34, 36–38", price: "R320.00" },
                  { item: "Pullover Jersey", sizes: "40–44", price: "R350.00" },
                  { item: "Pullover Jersey", sizes: "46–50", price: "R400.00" },
                  { item: "Skirt", sizes: "28–32, 34–36, 38–40", price: "R400.00" },
                  { item: "Skirt", sizes: "42–44", price: "R400.00" },
                  { item: "Skirt", sizes: "46–50", price: "R480.00" },
                  { item: "Tracksuit", sizes: "Small, Medium, Large, X-Large", price: "R1,000.00" },
                  { item: "Tracksuit", sizes: "Special Size", price: "R1,100.00" },
                  { item: "Trousers", sizes: "26–28, 30–34", price: "R400.00" },
                  { item: "Trousers", sizes: "36–38, 40–44", price: "R420.00" },
                  { item: "Trousers", sizes: "Special Size", price: "R500.00" },
                  { item: "Tie", sizes: "—", price: "R150.00" },
                  { item: "Blazer", sizes: "5–6, 7–8, 9–10, 11–12, 13–14", price: "R900.00" },
                  { item: "Blazer (Big sizes)", sizes: "3–9", price: "R1,000.00" },
                  { item: "Golf T-Shirt (Sport)", sizes: "Small, Medium, Large, X-Large", price: "R300.00" },
                  { item: "Short / Scout with Logo", sizes: "—", price: "R200.00" },
                  { item: "Cap", sizes: "One size", price: "R150.00" },
                  { item: "Sunhat", sizes: "One size", price: "R150.00" },
                  { item: "Beanie", sizes: "One size", price: "R150.00" },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-[var(--line)] last:border-b-0 ${i % 2 === 0 ? "bg-[var(--bg)]" : "bg-[var(--panel)]"}`}>
                    <td className="px-6 py-4 font-[family-name:var(--font-sora)]">{row.item}</td>
                    <td className="px-6 py-4 text-[var(--text-dim)]">{row.sizes}</td>
                    <td className="px-6 py-4 text-[var(--text-dim)]">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-[family-name:var(--font-sora)] font-light text-2xl mb-6">Grade 12 (Matric) — Compulsory</h3>
          <div className="grid gap-6 sm:grid-cols-2 mb-4">
            {[
              { label: "Boys Package", breakdown: "Jacket R1,000 / Cardigan R500 / Tie R120 / Trouser R380", total: "R2,000.00" },
              { label: "Girls Package", breakdown: "Jacket R1,000 / Skirt R380 / Tie R120 / Cardigan R500", total: "R2,100.00" },
            ].map((pkg) => (
              <div key={pkg.label} className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-6">
                <p className="mono-label text-[11px] text-[var(--text-dimmer)]">{pkg.label}</p>
                <p className="font-[family-name:var(--font-sora)] text-3xl mt-3">{pkg.total}</p>
                <p className="text-[var(--text-dim)] text-sm mt-3 leading-relaxed">{pkg.breakdown}</p>
              </div>
            ))}
          </div>
          <p className="text-[var(--text-dimmer)] mono-label text-[11px]">Prices are subject to sizes. Supplied by Refined Touch (T/A JHB Uniform Shop).</p>
        </div>
      </section>

      <section className="border-y border-[var(--line)]">
        <div className="container-gutter py-16 md:py-20">
          <p className="mono-label text-[11px] text-[var(--text-dimmer)] mb-8">Also in Admissions</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <Link href="/admissions/fees" className="group rounded-xl border border-[var(--line)] bg-[var(--panel)] p-8 hover:bg-[var(--fill-ghost)] transition-colors">
              <p className="font-[family-name:var(--font-sora)] text-xl">Fee Structure</p>
              <p className="mt-3 text-[var(--text-dim)] text-sm leading-relaxed">View monthly and annual tuition fees for all grades.</p>
              <p className="mt-6 mono-label text-[11px] text-[var(--accent)]">View Fees →</p>
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
