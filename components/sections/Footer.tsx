export function Footer() {
  return (
    <footer className="bg-[var(--bs-ink)] text-[var(--bs-grey-600)]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-baseline justify-between gap-x-11 gap-y-4 px-8 py-11 max-sm:px-[18px]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/handoff/basal-mark.svg"
              alt=""
              className="h-7 w-7"
            />

            <div
              className="text-[26px] uppercase leading-none tracking-[-0.02em]"
              style={{
                fontFamily: "var(--font-antonio), Antonio, sans-serif",
              }}
            >
              <span className="font-semibold text-white">Basal</span>{" "}
              <span className="text-[var(--bs-grey-600)]">Strength</span>
            </div>
          </div>

          <p className="mt-[10px] max-w-[44ch] text-[14px] leading-[1.55] text-[var(--bs-grey-400)]">
            Strength assessment for adults who intend to keep doing what they
            do. Austin, Texas.
          </p>
        </div>

        <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--bs-grey-600)]">
          © 2026 Basal Strength · Austin, TX · By appointment
        </span>
      </div>
    </footer>
  );
}