import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us — JHB Christian Academy",
  description:
    "JHB Christian Academy is a Christ-centered school in Johannesburg offering affordable education from Grade R to Grade 12, combining academic excellence with spiritual growth.",
};

const alumniFields = ["Medicine", "Law", "Engineering", "Business & Commerce"];

const missionObjectives = [
  "To provide or direct the effort of staff, parents and learners.",
  "To provide a measure by which the school can evaluate its progress.",
  "To provide a safe and conducive environment suitable for teaching and learning to take place.",
  "To create and develop responsible citizens by providing a supportive and hope giving environment.",
  "To provide proper healthy communication channels to enhance the culture of learning and teaching.",
  "To create the culture of participation in co-curricular activities in supporting and learning.",
  "To eradicate poverty in our surrounding area by reaching out to our community.",
];

const whyStudy = [
  "Umalusi Accreditation",
  "Excellent academic standard",
  "Strong encouragement for sports",
  "Strong encouragement for extra curricular (eg. chess, choir)",
];

const enrollFeatures = [
  "Accredited Institution",
  "Safe & Secure Environment",
  "Certificate of Excellence",
  "Career Oriented",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="About Us"
        description="A Christ-centered school nurturing learners from Grade R to Grade 12 in the heart of Johannesburg."
      />

      <div className="container-gutter py-5 border-b border-[var(--line)] flex items-center gap-6">
        <span className="font-[family-name:var(--font-sora)] text-sm text-[var(--text-dim)]">In this section:</span>
        <Link href="/about" className="mono-label text-[13px] text-[var(--accent)] underline underline-offset-4">About Us</Link>
      </div>

      {/* Welcome */}
      <section className="container-gutter py-20 md:py-28 grid gap-14 lg:grid-cols-[1.3fr_1fr] items-start">
        <div>
          <span className="chip">Welcome</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6">
            Welcome to JHB Christian Academy
          </h2>
          <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
            JHB Christian Academy is a Christ-centered school in Johannesburg
            that offers affordable education from Grade R to Grade 12. We
            combine academic excellence with spiritual growth and personal
            development, preparing students for success in life and a
            positive impact on their communities.
          </p>
          <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
            We pride ourselves in a Christian-based education ethos. We
            spread the word of positivity, honesty, and hard work, while
            working smart to achieve remarkable outcomes from our pupils.
            If you are looking for the best schools in Johannesburg, JHB
            Christian Academy is the place for you.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-solid">
              Contact Us
            </Link>
          </div>
        </div>

        <div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[var(--line)] mb-6">
          <Image src="/images/about-us.webp" alt="JHB Christian Academy" fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
        </div>
        <div className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-8 md:p-10">
          <p className="mono-label text-[11px] text-[var(--text-dimmer)]">
            Our Graduates Are Now Studying
          </p>
          <ul className="mt-6 space-y-5">
            {alumniFields.map((field, i) => (
              <li key={field} className="flex items-baseline gap-4">
                <span className="mono-label text-[var(--text-dimmer)] text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-[family-name:var(--font-sora)] text-xl">
                  {field}
                </span>
              </li>
            ))}
          </ul>
          <div className="h-px bg-[var(--line)] my-8" />
          <p className="text-[var(--text-dim)] leading-relaxed text-sm">
            Our graduates are making their mark at universities across South Africa, pursuing careers that will shape their futures. See our{" "}
            <Link
              href="/success-stories"
              className="underline underline-offset-4 link-hover"
            >
              Success Stories
            </Link>{" "}
            to learn more.
          </p>
        </div>
        </div>
      </section>

      {/* Historical background */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28 grid gap-14 lg:grid-cols-[1.3fr_1fr] items-start">
          <div>
            <span className="chip">Our History</span>
            <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6">
              Historical Background
            </h2>
            <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
              Founded in 2019, JHB Christian Academy was established with a
              vision to provide affordable, Christ-centered education in
              Johannesburg. The school is situated at 69 Turf Club Road,
              Turffontein, and serves learners from Grade R through to
              Grade 12.
            </p>
            <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
              The academy has grown to offer five different streams in the
              FET phase and achieved an outstanding 100%+ pass rate in the
              2025 Matric examinations, cementing its reputation as one of
              Johannesburg&apos;s leading independent schools.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--line)] bg-[var(--panel)] overflow-hidden">
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/principal.webp"
                alt="Dr Govender — Principal"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="mono-label text-[11px] text-[var(--text-dimmer)]">
                Principal
              </p>
              <p className="font-[family-name:var(--font-sora)] text-2xl mt-4">
                Dr Sureshnee Govender
              </p>
              <p className="mono-label text-[11px] text-[var(--text-dimmer)] mt-1">
                PhD — Education Leadership
              </p>
              <div className="h-px bg-[var(--line)] my-6" />
              <p className="text-[var(--text-dim)] leading-relaxed text-sm">
                Dr Sureshnee Govender is an education leadership expert from the University of Johannesburg, holding a PhD and extensive qualifications in public management and school governance. She has a strong academic focus on gender equality in education, and serves as a consultant, motivational speaker, and School Governing Body trainer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision statement */}
      <section className="container-gutter py-20 md:py-28 grid gap-14 lg:grid-cols-[1fr_1.3fr] items-start">
        <div>
          <span className="chip">Our Vision</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6">
            Vision Statement
          </h2>
        </div>
        <p className="text-[var(--text-dim)] text-lg leading-relaxed max-w-2xl">
          To prepare our learners for their future lives in the modern
          world, we aim to nurture a love of learning and the pursuit of
          academic excellence. JHB Christian Academy learners are
          encouraged to develop independence, adaptability, determination
          and confidence. We combine academic excellence with spiritual
          growth and personal development, preparing students for success
          in life and a positive impact on their communities.
        </p>
      </section>

      {/* Mission statement */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28">
          <span className="chip">Our Mission</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(28px,3.4vw,44px)] leading-tight mt-6 mb-12 max-w-2xl">
            Mission Statement
          </h2>
          <ul className="grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] md:grid-cols-2">
            {missionObjectives.map((item, i) => (
              <li key={item} className="bg-[var(--panel)] p-8 flex gap-6 border-r border-b border-[var(--line)]">
                <span className="mono-label text-[var(--text-dimmer)] text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why JHBCA */}
      <section className="container-gutter py-20 md:py-28">
        <span className="chip">Why JHBCA</span>
        <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(28px,3.4vw,44px)] leading-tight mt-6 mb-12 max-w-2xl">
          What sets JHBCA apart
        </h2>
        <ul className="grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] sm:grid-cols-2">
          {whyStudy.map((item, i) => (
            <li key={item} className="bg-[var(--panel)] p-8 flex gap-6 border-r border-b border-[var(--line)]">
              <span className="mono-label text-[var(--text-dimmer)] text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Accreditations */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28">
          <span className="chip">Accreditations</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(28px,3.4vw,44px)] leading-tight mt-6 mb-12 max-w-2xl">
            Officially Recognised &amp; Accredited
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 max-w-3xl">
            <div className="bg-[var(--panel)] rounded-xl border border-[var(--line)] p-8 flex flex-col gap-6">
              <div className="relative h-20 w-full">
                <Image src="/accreditations/umalusu.png" alt="Umalusi" fill className="object-contain object-left" sizes="300px" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-sora)] text-lg">Umalusi</p>
                <p className="mt-2 text-[var(--text-dim)] text-sm leading-relaxed">
                  South Africa&apos;s official Council for Quality Assurance in General and Further Education and Training.
                </p>
              </div>
            </div>
            <div className="bg-[var(--panel)] rounded-xl border border-[var(--line)] p-8 flex flex-col gap-6">
              <div className="relative h-20 w-full">
                <Image src="/accreditations/gauteng.png" alt="Gauteng Department of Education" fill className="object-contain object-left" sizes="300px" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-sora)] text-lg">Gauteng Department of Education</p>
                <p className="mt-2 text-[var(--text-dim)] text-sm leading-relaxed">
                  Registered and recognised by the Gauteng Department of Education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark bg-[var(--fill-solid)] text-[#f5f4f1]">
        <div className="container-gutter py-20 md:py-28 text-center">
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(28px,4vw,52px)] leading-tight">
            Enroll at JHB Christian Academy Today!
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {enrollFeatures.map((feature) => (
              <span
                key={feature}
                className="mono-label text-[11px] border border-[rgba(245,244,241,0.3)] px-5 py-3 text-[rgba(245,244,241,0.75)]"
              >
                {feature}
              </span>
            ))}
          </div>

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
