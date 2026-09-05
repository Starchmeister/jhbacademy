import Link from "next/link";
import { downloads, quickLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-alt)] border-t border-[var(--line)]">
      <div className="container-gutter py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img
            src="/LOGGO2.png"
            alt="JHB Christian Academy"
            width={64}
            height={63}
            className="h-12 w-auto rounded-lg mb-5"
          />
          <p className="text-[var(--text-dim)] text-sm leading-relaxed max-w-sm">
            JHB Christian Academy is a Christ-centered school in Johannesburg
            offering affordable education from Grade R to Grade 12. We combine
            academic excellence with spiritual growth and personal development,
            preparing students for success in life and a positive impact on
            their communities.
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-sm link-hover"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            Follow us on Facebook
          </a>
        </div>

        <div>
          <p className="mono-label text-xs mb-5 text-[var(--text-dimmer)]">
            School Downloads
          </p>
          <ul className="space-y-3">
            {downloads.map((d) => (
              <li key={d.label}>
                <a href={d.href} className="text-sm link-hover">
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mono-label text-xs mb-5 text-[var(--text-dimmer)]">
            Quick Links
          </p>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm link-hover">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mono-label text-xs mb-5 text-[var(--text-dimmer)]">
            Contact Us
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="link-hover"
              >
                {site.phone}
              </a>
            </li>
            <li className="text-[var(--text-dim)]">{site.fullAddress}</li>
            <li>
              <a href={`mailto:${site.email}`} className="link-hover">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`https://${site.website}`} className="link-hover">
                {site.website}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <p className="container-gutter py-5 text-center text-xs text-[var(--text-dimmer)] mono-label">
          © {new Date().getFullYear()} JHB Christian Academy — All Rights Reserved. Developed by{" "}
          <a
            href="https://bluedeed.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover"
          >
            Bluedeed
          </a>
        </p>
      </div>
    </footer>
  );
}
