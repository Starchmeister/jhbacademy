import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PhaseNav from "@/components/PhaseNav";
import Image from "next/image";
import {
  phases,
  highSchoolOutcomes,
  highSchoolSubjectGroups,
  highSchoolCulturalActivities,
} from "@/data/academics";

const phase = phases.find((p) => p.id === "high-school")!;

export const metadata: Metadata = {
  title: "High School — JHB Christian Academy",
  description:
    "JHB Christian Academy High School — a strong academic foundation aimed at a Bachelor Pass, for Grades 8 to 12.",
};

export default function HighSchoolPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="High School"
        parent={{ label: "Academics", href: "/academics" }}
        description="Grades 8 – 12. Preparing learners for a Bachelor Pass and life beyond matric."
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
            Welcome to JHBCA High School
          </h2>
          <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-3xl">
            At JHB Christian Academy High School, our focus is on providing a strong
            academic foundation while preparing students for life beyond
            matric. We aim to equip our learners with the skills and
            knowledge necessary to achieve a Bachelor Pass, ensuring that
            they are eligible for higher education opportunities such as
            universities, technicons, and other tertiary institutions. Our
            curriculum is designed to foster critical thinking,
            problem-solving, and independent learning, while nurturing
            personal growth and self-discipline.
          </p>
          <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-3xl">
            We strive to develop well-rounded individuals who are not only
            prepared for their final exams but also for the academic and
            social challenges of higher education. Our programs encourage
            students to excel academically and actively engage in
            extracurricular activities, building leadership, teamwork, and
            communication skills.
          </p>
        </div>
        <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[var(--line)]">
          <Image src="/images/about-3.webp" alt="JHBCA High School" fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28">
          <span className="chip">Outcomes &amp; Skills Gained</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6 mb-4 max-w-2xl">
            By the time students graduate
          </h2>
          <p className="text-[var(--text-dim)] text-lg leading-relaxed max-w-2xl mb-10">
            JHBCA High School learners are expected to have:
          </p>
          <ul className="grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] md:grid-cols-2">
            {highSchoolOutcomes.map((item, i) => (
              <li key={item} className="bg-[var(--panel)] p-8 flex gap-6 border-r border-b border-[var(--line)]">
                <span className="mono-label text-[var(--text-dimmer)] text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg leading-snug">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-[var(--text-dim)] text-lg leading-relaxed max-w-2xl">
            At JHB Christian Academy, we are committed to ensuring that our
            high school graduates are not only well-prepared for their matric
            exams but also for a bright future in tertiary education and
            beyond. We empower our learners to aim higher, pursue their
            dreams, and confidently step into the world of higher learning
            and career opportunities.
          </p>
        </div>
      </section>

      {/* Subjects */}
      <section className="container-gutter py-20 md:py-28">
        <span className="chip">Curriculum</span>
        <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6 mb-10 max-w-2xl">
          Academics
        </h2>
        <div className="grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] md:grid-cols-2">
          {highSchoolSubjectGroups.map((group) => (
            <div key={group.label} className="bg-[var(--panel)] p-8 border-r border-b border-[var(--line)]">
              <p className="mono-label text-[11px] text-[var(--text-dimmer)] mb-6">
                {group.label}
              </p>
              <ul className="space-y-3 columns-1 sm:columns-2">
                {group.subjects.map((subject) => (
                  <li key={subject} className="text-[var(--text-dim)] break-inside-avoid">
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Sports & Cultural */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28 grid gap-14 md:grid-cols-2">
          <div>
            <span className="chip">Sports</span>
            <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed">
              Sport coaching in the afternoons is provided as part of the
              school&apos;s educational programme.
            </p>
          </div>
          <div>
            <span className="chip">Cultural</span>
            <ul className="mt-6 space-y-3">
              {highSchoolCulturalActivities.map((activity) => (
                <li
                  key={activity}
                  className="text-lg font-[family-name:var(--font-sora)]"
                >
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PhaseNav currentId="high-school" />

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
