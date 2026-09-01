import Image from "next/image";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Gallery — JHB Christian Academy",
  description:
    "Uniform, events, facilities and extracurricular activities at JHB Christian Academy.",
};

const categories = [
  {
    id: "school-life",
    label: "School Life",
    images: [
      { src: "/images/gallery/img-9500.webp", alt: "JHBCA learners" },
      { src: "/images/gallery/img-9507.webp", alt: "JHBCA learners" },
      { src: "/images/gallery/img-9510.webp", alt: "School activity" },
      { src: "/images/gallery/img-9532.webp", alt: "School activity" },
    ],
  },
  {
    id: "events",
    label: "Events",
    images: [
      { src: "/images/gallery/dsc-0327.webp", alt: "School event" },
      { src: "/images/gallery/dsc-0035.webp", alt: "School event" },
      { src: "/images/gallery/img-0135-2.webp", alt: "School event" },
      { src: "/images/gallery/picture-350.webp", alt: "School event" },
    ],
  },
  {
    id: "campus",
    label: "Campus",
    images: [
      { src: "/images/gallery/untitled-2.webp", alt: "JHBCA campus" },
      { src: "/images/gallery/175819334809.webp", alt: "JHBCA campus" },
      { src: "/images/about-1.webp", alt: "About JHBCA" },
      { src: "/images/about-2.webp", alt: "About JHBCA" },
      { src: "/images/about-3.webp", alt: "About JHBCA" },
      { src: "/images/about-us.webp", alt: "JHB Christian Academy" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Gallery"
        title="Our Gallery"
        description="A look at life at JHBCA — our learners, events and campus."
      />

      {categories.map((category, ci) => (
        <section
          key={category.id}
          id={category.id}
          className={`scroll-mt-24 border-b border-[var(--line)] ${
            ci % 2 === 1 ? "bg-[var(--bg-alt)]" : ""
          }`}
        >
          <div className="container-gutter py-16 md:py-20">
            <span className="chip">{category.label}</span>
            <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(24px,3vw,36px)] leading-tight mt-6 mb-10">
              {category.label}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.images.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[var(--line)]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
