import Link from "next/link";
import Image from "next/image";
import { phases } from "@/data/academics";
import SuccessStoriesCarousel from "@/components/SuccessStoriesCarousel";

const whyStudy = [
  "Christ-centered education ethos",
  "Over 100% pass rate for 2025 Matric results",
  "5 different streams available in FET phase",
  "Strong focus on academics, sports and personal development",
];

const galleryPreview = [
  { label: "Uniform", href: "/gallery#uniform" },
  { label: "Events", href: "/gallery#events" },
  { label: "Our Facilities", href: "/gallery#facilities" },
  { label: "Extracurricular Activities", href: "/gallery#extracurricular" },
];

const admissionSteps = [
  { title: "Enquire", description: "Reach out to our admissions team to check availability." },
  { title: "Register", description: "Complete the registration form and fee structure documents." },
  { title: "Enroll", description: "Submit your application online to secure your child's place." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-gutter py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] items-center">

          {/* Left — text */}
          <div>
            <span className="chip">Est. 2019</span>
            <h1 className="font-[family-name:var(--font-sora)] font-light text-[clamp(38px,6vw,72px)] leading-[1.05] mt-8">
              JHB Christian
              <br />
              Academy
            </h1>
            <p className="mt-8 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
              JHB Christian Academy is a Christ-centered school in Johannesburg
              that offers affordable education from Grade R to Grade 12.
            </p>
            <p className="mt-4 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
              We combine academic excellence with spiritual growth and personal
              development, preparing students for success in life and a positive
              impact on their communities.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/about" className="btn-solid">More About Us</Link>
              <Link href="/admissions" className="btn-ghost">Enroll Now</Link>
            </div>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--line)] rounded-xl overflow-hidden border border-[var(--line)]">
              {[
                { value: "2019", label: "Founded" },
                { value: "100%+", label: "2025 Pass Rate" },
                { value: "5", label: "FET Streams" },
                { value: "Gr R–12", label: "Grades Offered" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[var(--bg)] px-5 py-4">
                  <p className="font-[family-name:var(--font-sora)] font-light text-2xl">{stat.value}</p>
                  <p className="mono-label text-[10px] text-[var(--text-dimmer)] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — video panel */}
          <div className="relative rounded-2xl overflow-hidden border border-[var(--line)] aspect-[9/10] lg:aspect-[4/5]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/images/home_page_1.webm" type="video/webm" />
            </video>
          </div>

        </div>
      </section>

      {/* Why study */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28 grid gap-14 lg:grid-cols-2">
          <div>
            <span className="chip">Why JHBCA</span>
            <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(30px,3.6vw,46px)] leading-tight mt-6">
              Why Study at JHB Christian Academy?
            </h2>
            <p className="mt-6 text-[var(--text-dim)] leading-relaxed max-w-lg">
              We pride ourselves in a Christian-based education ethos. We
              spread the word of positivity, honesty, and hard work, while
              working smart to achieve remarkable outcomes from our pupils.
              If you are looking for the best schools in Johannesburg, JHB
              Christian Academy is the place for you.
            </p>
            <div className="mt-10">
              <Link href="/admissions" className="btn-solid">
                Enroll Now
              </Link>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="relative aspect-square mt-8 rounded-xl overflow-hidden border border-[var(--line)]">
                <Image src="/images/gallery/img-9500.webp" alt="JHBCA learners" fill className="object-cover" sizes="20vw" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-[var(--line)]">
                <Image src="/images/gallery/dsc-0327.webp" alt="JHBCA event" fill className="object-cover" sizes="20vw" />
              </div>
            </div>
            <ul>
              {whyStudy.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-6 py-6 border-t border-[var(--line)] last:border-b"
                >
                  <span className="mono-label text-[var(--text-dimmer)] text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Academic phases */}
      <section className="container-gutter py-20 md:py-28">
        <span className="chip">Academics</span>
        <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(30px,3.6vw,46px)] leading-tight mt-6 mb-14 max-w-2xl">
          From Grade R to Grade 12
        </h2>

        <div className="grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] md:grid-cols-3">
          {phases.map((phase, i) => (
            <div
              key={phase.id}
              className="bg-[var(--panel)] p-8 flex flex-col border-r border-b border-[var(--line)]"
            >
              <span className="mono-label text-[var(--text-dimmer)] text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mono-label text-[11px] text-[var(--text-dim)] mt-3">
                {phase.grades}
              </span>
              <h3 className="font-[family-name:var(--font-sora)] font-light text-2xl mt-4">
                {phase.label}
              </h3>
              <p className="mt-4 text-[var(--text-dim)] leading-relaxed flex-1">
                {phase.summary}
              </p>
              <Link href={phase.href} className="nav-link mt-6">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Success stories */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28">
        <span className="chip">Success Stories</span>
        <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(30px,3.6vw,46px)] leading-tight mt-6 mb-14 max-w-2xl">
          Top Achievers
        </h2>

        <SuccessStoriesCarousel />

        <div className="mt-10">
          <Link href="/success-stories" className="nav-link">
            View All Success Stories →
          </Link>
        </div>
        </div>
      </section>

      {/* Vision teaser */}
      <section className="container-gutter py-20 md:py-28 text-center">
        <span className="chip">Our Vision</span>
        <p className="font-[family-name:var(--font-sora)] font-light text-[clamp(24px,3.2vw,40px)] leading-snug mt-8 max-w-3xl mx-auto">
          &ldquo;To prepare our learners for their future lives in the modern
          world, we aim to nurture a love of learning and the pursuit of
          academic excellence. JHB Christian Academy learners are encouraged
          to develop independence, adaptability, determination and
          confidence.&rdquo;
        </p>
        <Link href="/about" className="nav-link inline-block mt-8">
          Read Our Full Story →
        </Link>
      </section>

      {/* Gallery preview */}
      <section className="container-gutter py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="chip">Our Gallery</span>
            <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(30px,3.6vw,46px)] leading-tight mt-6">
              Life at JHBCA
            </h2>
          </div>
          <Link href="/gallery" className="nav-link">
            View Full Gallery →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { src: '/images/gallery/img-9500.webp', label: 'Learners', href: '/gallery' },
            { src: '/images/gallery/dsc-0327.webp', label: 'Events', href: '/gallery' },
            { src: '/images/gallery/img-9532.webp', label: 'Activities', href: '/gallery' },
            { src: '/images/gallery/dsc-0035.webp', label: 'Campus', href: '/gallery' },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="block relative aspect-square rounded-xl overflow-hidden border border-[var(--line)]">
              <Image src={item.src} alt={item.label} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 25vw, 50vw" />
            </Link>
          ))}
        </div>
      </section>

      {/* Admissions steps */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28">
          <span className="chip">Admissions</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(30px,3.6vw,46px)] leading-tight mt-6 mb-14 max-w-2xl">
            How to Enroll
          </h2>
          <div className="grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] md:grid-cols-3">
            {admissionSteps.map((step, i) => (
              <div key={step.title} className="bg-[var(--panel)] p-8 border-r border-b border-[var(--line)]">
                <span className="mono-label text-[var(--text-dimmer)] text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[family-name:var(--font-sora)] text-2xl mt-4">
                  {step.title}
                </h3>
                <p className="mt-4 text-[var(--text-dim)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/admissions" className="btn-solid">
              View Admissions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark bg-[var(--fill-solid)] text-[#f5f4f1]">
        <div className="container-gutter py-20 md:py-28 grid items-center gap-10 lg:grid-cols-[1fr_1.4fr_1fr]">
          <div className="hidden lg:relative lg:flex aspect-[4/5] rounded-xl overflow-hidden border border-[rgba(245,244,241,0.16)]">
            <Image src="/images/alumni.webp" alt="JHBCA alumni" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(28px,4vw,52px)] leading-tight">
              Ready to Join JHB Christian Academy?
            </h2>
            <p className="mt-5 text-[rgba(245,244,241,0.62)]">
              Affordable education from Grade R to Grade 12 in Johannesburg.
            </p>
            <div className="mt-10">
              <Link href="/admissions" className="btn-ghost">
                Enroll Now
              </Link>
            </div>
          </div>
          <div className="hidden lg:relative lg:flex aspect-[4/5] rounded-xl overflow-hidden border border-[rgba(245,244,241,0.16)]">
            <Image src="/images/team.webp" alt="JHBCA team" fill className="object-cover" sizes="25vw" />
          </div>
        </div>
      </section>
    </>
  );
}
