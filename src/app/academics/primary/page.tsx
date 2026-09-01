import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PhaseNav from "@/components/PhaseNav";
import Image from "next/image";
import { phases, primaryOutcomes, primarySubjectGroups } from "@/data/academics";

const phase = phases.find((p) => p.id === "primary")!;

export const metadata: Metadata = {
  title: "Primary School — JHB Christian Academy",
  description:
    "JHB Christian Academy Primary School — academics, sport, extra-mural activities and field trips for Grades 1 to 6.",
};

export default function PrimaryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Primary School"
        parent={{ label: "Academics", href: "/academics" }}
        description="Grades 1 – 6. Academics, sport, extra-murals and field trips for well-rounded development."
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
            Welcome to JHBCA Primary School
          </h2>
          <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-3xl">
            At JHB Christian Academy Primary School, we offer a comprehensive education
            that focuses on academics, sports, extra-mural activities, and
            field trips to foster well-rounded development in our learners.
            Our core academic curriculum covers subjects like mathematics,
            science, English, and social studies, with an emphasis on
            building critical thinking, problem-solving, and creativity.
          </p>
          <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-3xl">
            Students are encouraged to participate in a variety of sports,
            including soccer and netball, promoting fitness and teamwork,
            while extra-mural activities such as music, drama, and art allow
            them to explore their personal interests and talents.
            Additionally, field trips provide hands-on learning experiences
            that extend classroom knowledge into real-world applications,
            enriching their understanding of various subjects.
          </p>
        </div>
        <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[var(--line)]">
          <Image src="/images/about-2.webp" alt="JHBCA Primary School" fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28">
          <span className="chip">Academic Outcomes</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6 mb-4 max-w-2xl">
            By the end of primary school
          </h2>
          <p className="text-[var(--text-dim)] text-lg leading-relaxed max-w-2xl mb-10">
            JHBCA learners are expected to have developed:
          </p>
          <ul className="grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] md:grid-cols-2">
            {primaryOutcomes.map((item, i) => (
              <li key={item} className="bg-[var(--panel)] p-8 flex gap-6 border-r border-b border-[var(--line)]">
                <span className="mono-label text-[var(--text-dimmer)] text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg leading-snug">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-[var(--text-dim)] text-lg leading-relaxed max-w-2xl">
            Our goal is to ensure that students leave JHBCA Primary School
            equipped with the knowledge, skills, and confidence to
            succeed in secondary school and beyond.
          </p>
        </div>
      </section>

      {/* Subjects */}
      <section className="container-gutter py-20 md:py-28">
        <span className="chip">Curriculum</span>
        <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6 mb-10 max-w-2xl">
          Subjects &amp; Development Programmes
        </h2>
        <div className="grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] md:grid-cols-3">
          {primarySubjectGroups.map((group) => (
            <div key={group.label} className="bg-[var(--panel)] p-8 border-r border-b border-[var(--line)]">
              <p className="mono-label text-[11px] text-[var(--text-dimmer)] mb-6">
                {group.label}
              </p>
              <ul className="space-y-3">
                {group.subjects.map((subject) => (
                  <li key={subject} className="text-[var(--text-dim)]">
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <PhaseNav currentId="primary" />

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
