import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us — JHB Christian Academy",
  description:
    "Get in touch with JHB Christian Academy in Turffontein, Johannesburg — phone, email and address.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Have a question about admissions, fees or our academic programme? Reach out."
      />

      {/* About blurb */}
      <section className="bg-[var(--bg-alt)] border-b border-[var(--line)]">
        <div className="container-gutter py-16 md:py-20 grid gap-10 lg:grid-cols-2">
          <div>
            <span className="chip">Christian Schools in Johannesburg</span>
            <p className="mt-6 text-[var(--text-dim)] leading-relaxed">
              JHB Christian Academy is one of the best reliable and affordable Christian Schools
              Johannesburg has that also offers a Grade R–12 CAPS syllabus in a calm and helpful
              teaching and learning home. Additionally, it is a bold, non-unit, non-racial
              co-educational school run on Christian truth and values. JHB Christian Academy
              caters to Grade R–12. The school has registered with the Department of Education.
              Our registration number is <strong>700134031</strong>. Furthermore, we have a lot
              of outside activities — we even include sports. Above all, we have a perfect
              staff-to-learner relationship in big classrooms and we vow to parents a safe,
              helpful teaching and learning environment.
            </p>
          </div>
          <div>
            <span className="chip">Our Community</span>
            <p className="mt-6 text-[var(--text-dim)] leading-relaxed">
              Johannesburg Christian Academy is a Christian learning community — the most trusted
              Christian school in Johannesburg. We are in a never-ending union with home. We
              guide our learners to find and grow their future through the blessing of God. Our
              end goal is to assist each person in finding God&apos;s plan for their life and
              destiny, while applying all the skills to produce better performing graduates.
            </p>
            <p className="mt-4 text-[var(--text-dim)] leading-relaxed">
              Our school is a child-friendly and safe space. Every learner is important to us —
              we attend to them individually to assist where there is a lack. We have an
              open-door policy so learners can share ideas and vent freely. We are open to
              suggestions from parents and from the team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact details + map */}
      <section className="container-gutter py-20 md:py-28 grid gap-14 lg:grid-cols-[1fr_1.4fr]">

        {/* Contact details */}
        <div className="space-y-10">
          <div>
            <p className="mono-label text-[11px] text-[var(--text-dimmer)]">Call Us</p>
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="block font-[family-name:var(--font-sora)] text-xl mt-3 leading-snug"
            >
              {site.phone}
            </a>
            <p className="text-[var(--text-dim)] mt-1">
              078 112 3137 / 065 512 4003 / 081 583 7908
            </p>
          </div>

          <div>
            <p className="mono-label text-[11px] text-[var(--text-dimmer)]">Email Us</p>
            <a
              href={`mailto:${site.email}`}
              className="block font-[family-name:var(--font-sora)] text-xl mt-3 break-all"
            >
              {site.email}
            </a>
          </div>

          <div>
            <p className="mono-label text-[11px] text-[var(--text-dimmer)]">Physical Address</p>
            <p className="font-[family-name:var(--font-sora)] text-xl mt-3 leading-snug">
              69 Turf Club Road, Turffontein
              <br />
              Johannesburg, 2130
            </p>
          </div>

          <div>
            <p className="mono-label text-[11px] text-[var(--text-dimmer)]">Postal Address</p>
            <p className="font-[family-name:var(--font-sora)] text-xl mt-3 leading-snug">
              JHB Christian Academy
              <br />
              P.O. BOX 1223, Southdale
              <br />
              Johannesburg, 2135
            </p>
          </div>

          <div>
            <p className="mono-label text-[11px] text-[var(--text-dimmer)]">School Fees</p>
            <Link
              href="/about/payments"
              className="block font-[family-name:var(--font-sora)] text-xl mt-3 underline underline-offset-4 link-hover"
            >
              Make a Payment →
            </Link>
            <p className="text-[var(--text-dim)] mt-1 text-sm">View bank details and payment instructions</p>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-xl border border-[var(--line)] overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
          <iframe
            title="JHB Christian Academy location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(site.fullAddress)}&output=embed`}
            className="w-full h-full grayscale-[40%] contrast-[1.05]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </section>
    </>
  );
}
