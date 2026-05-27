export function Footer() {
  return (
    <footer className="border-t border-[var(--bs-border)] bg-[var(--bs-grey-100)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        
        <div className="max-w-[540px]">
          <p className="bs-mono text-[11px] uppercase tracking-[0.22em] text-[var(--bs-grey-600)]">
            Basal Strength
          </p>

          <p className="mt-5 text-[22px] leading-[1.45] tracking-[-0.03em] text-[var(--bs-ink)]">
            Assessment-driven performance diagnostics for athletes,
            longevity-focused adults, and returning movers.
          </p>

          <p className="mt-5 text-[16px] text-[var(--bs-grey-700)]">
            Austin, Texas
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 lg:items-end">
          <p className="bs-mono text-[11px] uppercase tracking-[0.22em] text-[var(--bs-grey-600)]">
            By appointment only
          </p>

          <a
            href="#assessment"
            className="text-[15px] font-medium text-[var(--bs-ink)] transition-all duration-300 hover:text-[var(--bs-indigo)] hover:translate-x-1"
          >
            Book an assessment →
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--bs-border)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <p className="bs-mono text-[11px] uppercase tracking-[0.22em] text-[var(--bs-grey-600)]">
            © 2026 Basal Strength
          </p>

          <p className="bs-mono text-[11px] uppercase tracking-[0.22em] text-[var(--bs-grey-600)]">
            Austin, TX
          </p>
        </div>
      </div>
    </footer>
  );
}