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
      { src: "/images/gallery/classes/dsc-0171.webp", alt: "Class in session" },
      { src: "/images/gallery/classes/dsc-0173.webp", alt: "Class in session" },
      { src: "/images/gallery/classes/dsc-0175.webp", alt: "Class in session" },
      { src: "/images/gallery/classes/img-20240917-wa0003.webp", alt: "Class activity" },
    ],
  },
  {
    id: "assembly",
    label: "Assembly",
    images: [
      { src: "/images/gallery/assembly/dsc-0069.webp", alt: "School assembly" },
      { src: "/images/gallery/assembly/img-1884.webp", alt: "School assembly" },
      { src: "/images/gallery/assembly/img-1885.webp", alt: "School assembly" },
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
      { src: "/images/gallery/events/picture-223.webp", alt: "Gala Dinner" },
      { src: "/images/gallery/events/picture-239.webp", alt: "Gala Dinner" },
      { src: "/images/gallery/events/picture-272.webp", alt: "Gala Dinner" },
      { src: "/images/gallery/events/picture-292.webp", alt: "Gala Dinner" },
      { src: "/images/gallery/events/picture-327.webp", alt: "Gala Dinner" },
      { src: "/images/gallery/events/picture-349.webp", alt: "Gala Dinner" },
      { src: "/images/gallery/events/picture-350.webp", alt: "Gala Dinner" },
      { src: "/images/gallery/events/dsc-0620.webp", alt: "Spelling Bee" },
      { src: "/images/gallery/events/dsc-0621.webp", alt: "Spelling Bee" },
      { src: "/images/gallery/events/dsc-0622.webp", alt: "Spelling Bee" },
      { src: "/images/gallery/events/dsc-0623.webp", alt: "Spelling Bee" },
      { src: "/images/gallery/events/dsc-0624.webp", alt: "Spelling Bee" },
      { src: "/images/gallery/events/dsc-0636.webp", alt: "Spelling Bee" },
      { src: "/images/gallery/events/dsc-0639.webp", alt: "Spelling Bee" },
      { src: "/images/gallery/events/20250305-105517.webp", alt: "St Mary's Children Home" },
      { src: "/images/gallery/events/20250305-105521.webp", alt: "St Mary's Children Home" },
      { src: "/images/gallery/events/20250305-105541.webp", alt: "St Mary's Children Home" },
      { src: "/images/gallery/events/20250305-105543.webp", alt: "St Mary's Children Home" },
      { src: "/images/gallery/events/img-1126.webp", alt: "Beauty Contest" },
      { src: "/images/gallery/events/img-1148.webp", alt: "Beauty Contest" },
      { src: "/images/gallery/events/img-1163.webp", alt: "Beauty Contest" },
    ],
  },
  {
    id: "extracurricular",
    label: "Extracurricular",
    images: [
      { src: "/images/gallery/extracurricular/img-9499.webp", alt: "Computer Studies" },
      { src: "/images/gallery/extracurricular/img-9500.webp", alt: "Computer Studies" },
      { src: "/images/gallery/extracurricular/img-9501.webp", alt: "Computer Studies" },
      { src: "/images/gallery/extracurricular/img-9503.webp", alt: "Computer Studies" },
      { src: "/images/gallery/extracurricular/img-1396.webp", alt: "Football" },
      { src: "/images/gallery/extracurricular/img-1404.webp", alt: "Football" },
      { src: "/images/gallery/extracurricular/1000001425.webp", alt: "Music Class" },
      { src: "/images/gallery/extracurricular/1000001426.webp", alt: "Music Class" },
      { src: "/images/gallery/extracurricular/1000001427.webp", alt: "Music Class" },
      { src: "/images/gallery/extracurricular/dsc-0327.webp", alt: "Netball" },
      { src: "/images/gallery/extracurricular/img-2050.webp", alt: "Netball" },
      { src: "/images/gallery/extracurricular/img-2051.webp", alt: "Netball" },
      { src: "/images/gallery/extracurricular/img-2119.webp", alt: "Netball" },
      { src: "/images/gallery/extracurricular/img-1749.webp", alt: "Spelling Bee" },
      { src: "/images/gallery/extracurricular/img-1750.webp", alt: "Spelling Bee" },
      { src: "/images/gallery/extracurricular/img-2291.webp", alt: "Volleyball" },
      { src: "/images/gallery/extracurricular/img-2292.webp", alt: "Volleyball" },
      { src: "/images/gallery/extracurricular/img-0949.webp", alt: "Athletics" },
      { src: "/images/gallery/extracurricular/img-0952.webp", alt: "Athletics" },
      { src: "/images/gallery/extracurricular/img-1482.webp", alt: "Athletics" },
      { src: "/images/gallery/extracurricular/09.webp", alt: "Chess" },
    ],
  },
  {
    id: "facilities",
    label: "Our Facilities",
    images: [
      { src: "/images/gallery/untitled-2.webp", alt: "JHBCA campus" },
      { src: "/images/gallery/175819334809.webp", alt: "JHBCA campus" },
      { src: "/images/gallery/facilities/img-9539.webp", alt: "School building" },
      { src: "/images/gallery/facilities/img-9551.webp", alt: "School building" },
      { src: "/images/gallery/facilities/img-9554.webp", alt: "School building" },
      { src: "/images/gallery/facilities/img-9558.webp", alt: "School building" },
      { src: "/images/gallery/facilities/img-9522.webp", alt: "Science lab" },
      { src: "/images/gallery/facilities/img-9523.webp", alt: "Science lab" },
      { src: "/images/gallery/facilities/img-9524.webp", alt: "Science lab" },
      { src: "/images/gallery/facilities/img-9526.webp", alt: "Science lab" },
      { src: "/images/gallery/facilities/img-9531.webp", alt: "Science lab" },
      { src: "/images/gallery/facilities/img-9532.webp", alt: "Science lab" },
      { src: "/images/gallery/facilities/img-9184.webp", alt: "Classroom" },
      { src: "/images/gallery/facilities/img-20240925-wa0033.webp", alt: "Classroom" },
      { src: "/images/gallery/facilities/img-9510.webp", alt: "Book shop" },
      { src: "/images/gallery/facilities/img-9513---copy.webp", alt: "Book shop" },
      { src: "/images/gallery/facilities/img-9507.webp", alt: "Sick room" },
      { src: "/images/gallery/facilities/img-9508.webp", alt: "Sick room" },
      { src: "/images/gallery/facilities/img-9143.webp", alt: "Tuck shop" },
      { src: "/images/gallery/facilities/img-9148.webp", alt: "Tuck shop" },
      { src: "/images/gallery/facilities/dsc-0022.webp", alt: "Uniform shop" },
      { src: "/images/gallery/facilities/dsc-0035.webp", alt: "Uniform shop" },
      { src: "/images/gallery/facilities/img-0017.webp", alt: "Uniform shop" },
    ],
  },
  {
    id: "achievements",
    label: "Achievements",
    images: [
      { src: "/images/gallery/achievements/img-0135-2.webp", alt: "Top achiever" },
      { src: "/images/gallery/achievements/img-0143-2-2.webp", alt: "Top achiever" },
      { src: "/images/gallery/achievements/img-0301.webp", alt: "Top achiever" },
      { src: "/images/gallery/achievements/img-0320.webp", alt: "Top achiever" },
      { src: "/images/gallery/achievements/img-1094.webp", alt: "Top achiever" },
    ],
  },
  {
    id: "campus",
    label: "Campus",
    images: [
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
