import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SuccessStoriesCarousel from "@/components/SuccessStoriesCarousel";

export const metadata: Metadata = {
  title: "Success Stories — JHB Christian Academy",
  description:
    "JHBCA alumni who went on to become lawyers, entrepreneurs, analysts and mentors.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Success Stories"
        title="Top Achievers"
        description="Learners who have passed through JHB Christian Academy and are putting that foundation to work."
      />

      <section className="container-gutter py-20 md:py-28">
        <SuccessStoriesCarousel />
      </section>

      <section className="bg-[var(--bg-alt)] border-t border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28 text-center">
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3.4vw,42px)] leading-tight">
            Give your child that same foundation
          </h2>
          <div className="mt-10">
            <Link href="/admissions" className="btn-solid">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
