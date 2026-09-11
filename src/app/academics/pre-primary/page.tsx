import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PhaseNav from "@/components/PhaseNav";
import Image from "next/image";
import { phases, prePrimaryCoreSkills } from "@/data/academics";

const phase = phases.find((p) => p.id === "pre-primary")!;

export const metadata: Metadata = {
  title: "Pre-Primary — JHB Christian Academy",
  description:
    "JHB Christian Academy Pre-Primary — a nurturing environment for children aged 4 to 6, with one-on-one sessions and individual attention.",
};

export default function PrePrimaryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Pre-Primary"
        parent={{ label: "Academics", href: "/academics" }}
        description="Ages 4 – 6. A nurturing, stimulating environment where every child gets individual attention."
      />

      <section className="container-gutter py-14 flex flex-wrap gap-3 border-b border-[var(--line)]">
        <span className="chip">{phase.grades}</span>
        {phase.highlights.map((h) => (
          <span
            key={h}
            className="mono-label text-[11px] text-[var(--text-dim)] rounded-lg border border-[var(--line)] px-4 py-3"
          >
            {h}
          </span>
        ))}
      </section>

      {/* Welcome */}
      <section className="container-gutter py-20 md:py-28 grid gap-14 lg:grid-cols-[1.3fr_1fr] items-start">
        <div>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight max-w-3xl">
            Welcome to JHBCA Pre-Primary
          </h2>
          <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-3xl">
            At JHB Christian Academy, we are deeply committed to creating a nurturing,
            stimulating environment where children aged 4 to 6 can thrive. We
            recognize that these early years are crucial for a child&apos;s
            overall development, and our pre-primary curriculum is
            thoughtfully designed to provide a strong foundation that
            supports cognitive, emotional, social, and physical growth. By
            fostering a love for learning and curiosity, we help children
            develop essential skills that prepare them not only for the next
            stages of their academic journey but also for life.
          </p>
          <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-3xl">
            Our well-rounded approach ensures that every child receives the
            individualized attention and opportunities they need to flourish
            in a supportive, encouraging setting, laying the groundwork for
            future success in both school and beyond.
          </p>
        </div>
        <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[var(--line)]">
          <Image src="/images/about-1.webp" alt="JHBCA Pre-Primary" fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
        </div>
      </section>

      {/* Core skills */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28">
          <span className="chip">Academics</span>
          <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-3xl">
            In pre-primary, children are expected to develop basic
            problem-solving, and critical thinking skills through playful,
            interactive learning.
          </p>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-10 mb-10">
            Core Skills
          </h2>

          <div className="grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
            {prePrimaryCoreSkills.map((skill) => (
              <div key={skill.category} className="bg-[var(--panel)] p-8 border-r border-b border-[var(--line)]">
                <h3 className="font-[family-name:var(--font-sora)] text-xl mb-5">
                  {skill.category}
                </h3>
                <ul className="space-y-3">
                  {skill.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-[var(--text-dim)] leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--text-dimmer)]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      <PhaseNav currentId="pre-primary" />

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
