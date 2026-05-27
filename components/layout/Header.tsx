import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "./Container";

const navItems = [
  { label: "Method", href: "#method" },
  { label: "The five forces", href: "#forces" },
  { label: "Findings", href: "#findings" },
  { label: "Founder", href: "#founder" },
  { label: "Assessment", href: "#assessment" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--bs-border)] bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between gap-8">
          <a href="#" className="flex items-center gap-3" aria-label="Basal Strength home">
            <Image
              src="/basal-mark.png"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7"
              priority
            />

            <span className="text-[17px] font-semibold tracking-[-0.01em] text-[var(--bs-ink)]">
              Basal{" "}
              <span className="font-medium uppercase tracking-[0.18em] text-[var(--bs-grey-600)]">
                Strength
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 text-sm font-medium text-[var(--bs-grey-800)] lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors duration-200 hover:text-[var(--bs-indigo)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#"
              className="bs-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--bs-grey-600)] transition-colors hover:text-[var(--bs-ink)]"
            >
              Sign in
            </a>

            <Button href="#assessment" variant="accent">
              Book assessment →
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}