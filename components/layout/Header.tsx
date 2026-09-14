"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--bs-grey-200)] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-8 max-sm:px-[18px]">
        <Link
          href="/"
          aria-label="Basal Strength home"
          className="flex items-center gap-[10px]"
          onClick={closeMenu}
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
            className="uppercase text-[24px] font-bold leading-none tracking-[0.02em] text-[var(--bs-ink)] max-sm:text-[21px]"
            style={{
              fontFamily: "var(--font-antonio), Antonio, sans-serif",
            }}
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

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="border border-[var(--bs-grey-200)] px-[12px] py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--bs-ink)] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            Menu
          </button>

          <Link
            href="/#contact"
            className="border border-[var(--bs-ink)] bg-[var(--bs-ink)] px-[14px] py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-[var(--bs-grey-800)]"
            onClick={closeMenu}
          >
            Book
          </Link>
        </nav>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--bs-grey-200)] bg-white lg:hidden"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col px-[18px] py-3">
            <Link
              href="/"
              onClick={closeMenu}
              className={`border-b border-[var(--bs-grey-200)] py-3 font-mono text-[11px] uppercase tracking-[0.1em] ${
                isActive("/")
                  ? "text-[var(--bs-indigo)]"
                  : "text-[var(--bs-grey-600)]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/method"
              onClick={closeMenu}
              className={`border-b border-[var(--bs-grey-200)] py-3 font-mono text-[11px] uppercase tracking-[0.1em] ${
                isActive("/method")
                  ? "text-[var(--bs-indigo)]"
                  : "text-[var(--bs-grey-600)]"
              }`}
            >
              Method &amp; people
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className={`py-3 font-mono text-[11px] uppercase tracking-[0.1em] ${
                isActive("/about")
                  ? "text-[var(--bs-indigo)]"
                  : "text-[var(--bs-grey-600)]"
              }`}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}