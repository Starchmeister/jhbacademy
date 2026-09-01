"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks, site } from "@/data/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!desktopDropdown) return;
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setDesktopDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [desktopDropdown]);

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="hidden md:flex items-center justify-between container-gutter py-2.5 border-b border-[var(--line)] text-[var(--text-dim)]">
        <p className="mono-label text-[11px]">{site.address}</p>
        <div className="flex items-center gap-8">
          <a
            href={`mailto:${site.email}`}
            className="mono-label text-[11px] link-hover"
          >
            {site.email}
          </a>
          <a
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="mono-label text-[11px] link-hover"
          >
            {site.phone}
          </a>
          <a href="#" aria-label="Facebook" className="mono-label text-[11px] link-hover">
            Facebook
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between container-gutter py-5">
        <Link href="/" className="shrink-0">
          <img
            src="/LOGGO2.png"
            alt="JHB Christian Academy"
            width={64}
            height={63}
            className="h-11 w-auto md:h-14 rounded-lg"
          />
        </Link>

        <nav ref={navRef} className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.href} className="relative flex items-center gap-1.5">
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>
              {link.children && (
                <>
                  <button
                    type="button"
                    aria-expanded={desktopDropdown === link.href}
                    aria-label={`${link.label} submenu`}
                    onClick={() =>
                      setDesktopDropdown((v) =>
                        v === link.href ? null : link.href
                      )
                    }
                    className="nav-dropdown-toggle"
                  >
                    <span className="bar-h" />
                    <span className="bar-v" />
                  </button>
                  {desktopDropdown === link.href && (
                    <div className="absolute left-0 top-full mt-4 w-56 bg-[var(--bg)] border border-[var(--line)] rounded-xl overflow-hidden z-10 shadow-sm">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setDesktopDropdown(null)}
                          className="block px-5 py-4 mono-label text-[13px] border-b border-[var(--line)] last:border-b-0 hover:bg-[var(--fill-ghost)] hover:text-[var(--accent)] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>

        <Link
          href="/contact"
          className="btn-ghost hidden lg:inline-flex"
        >
          Get in Touch
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobileMenu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative w-11 h-11 flex items-center justify-center"
        >
          <span
            className="absolute block h-px w-6 bg-[var(--text)] transition-transform duration-300"
            style={{
              transform: open
                ? "translateY(0) rotate(45deg)"
                : "translateY(-6px)",
            }}
          />
          <span
            className="absolute block h-px w-6 bg-[var(--text)] transition-opacity duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="absolute block h-px w-6 bg-[var(--text)] transition-transform duration-300"
            style={{
              transform: open
                ? "translateY(0) rotate(-45deg)"
                : "translateY(6px)",
            }}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobileMenu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="lg:hidden flex flex-col items-start gap-1 container-gutter pb-6 border-t border-[var(--line)] bg-[var(--bg)]"
        >
          {navLinks.map((link) => (
            <div key={link.href} className="w-full">
              <div className="flex items-center justify-between w-full">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="nav-link py-3 flex-1"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <button
                    type="button"
                    aria-expanded={mobileExpanded === link.href}
                    aria-label={`${link.label} submenu`}
                    onClick={() =>
                      setMobileExpanded((v) =>
                        v === link.href ? null : link.href
                      )
                    }
                    className="nav-dropdown-toggle"
                  >
                    <span className="bar-h" />
                    <span className="bar-v" />
                  </button>
                )}
              </div>
              {link.children && mobileExpanded === link.href && (
                <div className="flex flex-col items-start pl-4 pb-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="mono-label text-[13px] text-[var(--text-dim)] link-hover py-2.5"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-ghost mt-3"
          >
            Get in Touch
          </Link>
        </nav>
      )}

      <div className="bg-[var(--accent)] text-[#f5f4f1]">
        <p className="container-gutter py-2.5 text-center mono-label text-[13px]">
          {new Date().getFullYear()} Admissions are now open —{" "}
          <Link href="/admissions" className="underline underline-offset-4">
            Apply Now
          </Link>
        </p>
      </div>
    </header>
  );
}
