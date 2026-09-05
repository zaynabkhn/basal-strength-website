"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--bs-grey-200)] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-8 max-sm:px-[18px]">
        <Link
          href="/"
          aria-label="Basal Strength home"
          className="flex items-center gap-[10px]"
        >
          <svg
            viewBox="0 0 253 294.5"
            aria-hidden="true"
            className="h-[26px] w-auto shrink-0"
          >
            <g fill="#7B7BFF">
              <path d="M126.5 0 L253 87 L253 117.5 L126 205 L126 159.5 L209.1 102.5 L126.5 45.4 L0 132 L0 87 Z" />
              <path d="M126.5 294.5 L0 207.5 L0 177 L127 89.5 L127 135 L43.9 192 L126.5 249.1 L253 162.5 L253 207.5 Z" />
            </g>
          </svg>

          <span
            className="uppercase text-[24px] font-bold leading-none tracking-[0.02em] text-[var(--bs-ink)]"
            style={{ fontFamily: "var(--font-antonio), Antonio, sans-serif" }}
          >
            Basal{" "}
            <span className="font-normal text-[var(--bs-grey-600)]">
              Strength
            </span>
          </span>
        </Link>

        <nav
          className="flex items-center gap-[26px]"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className={`hidden font-mono text-[11px] uppercase tracking-[0.1em] transition-colors duration-200 lg:block ${
              isActive("/")
                ? "text-[var(--bs-indigo)]"
                : "text-[var(--bs-grey-600)] hover:text-[var(--bs-ink)]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/method"
            className={`hidden font-mono text-[11px] uppercase tracking-[0.1em] transition-colors duration-200 lg:block ${
              isActive("/method")
                ? "text-[var(--bs-indigo)]"
                : "text-[var(--bs-grey-600)] hover:text-[var(--bs-ink)]"
            }`}
          >
            Method &amp; people
          </Link>

          <Link
            href="/about"
            className={`hidden font-mono text-[11px] uppercase tracking-[0.1em] transition-colors duration-200 lg:block ${
              isActive("/about")
                ? "text-[var(--bs-indigo)]"
                : "text-[var(--bs-grey-600)] hover:text-[var(--bs-ink)]"
            }`}
          >
            About
          </Link>

          <Link
            href="/#contact"
            className="border border-[var(--bs-ink)] bg-[var(--bs-ink)] px-[14px] py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-[var(--bs-grey-800)]"
          >
            Book
          </Link>
        </nav>
      </div>
    </header>
  );
}