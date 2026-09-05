export function Hero() {
  return (
    <header className="overflow-hidden bg-[var(--bs-ink)] text-white">
      <div className="mx-auto max-w-[1200px] px-8 pb-16 pt-[84px] max-sm:px-[18px]">
        <div
          className="flex items-center gap-5 uppercase text-[clamp(34px,4.6vw,60px)] font-bold leading-none tracking-[0.02em] text-white"
          style={{
            fontFamily: "var(--font-antonio), Antonio, sans-serif",
          }}
        >
          <svg
            viewBox="0 0 253 294.5"
            aria-hidden="true"
            className="h-[clamp(44px,5.4vw,72px)] w-auto shrink-0"
          >
            <g fill="#7B7BFF">
              <path d="M126.5 0 L253 87 L253 117.5 L126 205 L126 159.5 L209.1 102.5 L126.5 45.4 L0 132 L0 87 Z" />
              <path d="M126.5 294.5 L0 207.5 L0 177 L127 89.5 L127 135 L43.9 192 L126.5 249.1 L253 162.5 L253 207.5 Z" />
            </g>
          </svg>

          <span>
            Basal{" "}
            <span className="font-normal text-[var(--bs-grey-400)]">
              Strength
            </span>
          </span>
        </div>

        <span className="mt-4 block font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--bs-indigo)]">
          Strength assessment · Austin, Texas
        </span>

        <h1
          className="mt-[18px] max-w-[18ch] uppercase text-[clamp(38px,5.2vw,72px)] font-semibold leading-[0.95] tracking-[-0.01em] text-white"
          style={{
            fontFamily: "var(--font-antonio), Antonio, sans-serif",
          }}
        >
          Will my body keep up with the life I want to live?
        </h1>

        <div className="mt-[34px] flex max-w-[64ch] flex-col gap-[14px] text-[17px] leading-[1.6] text-[var(--bs-grey-200)]">
          <p>
            We measure how strong you are, define how strong you need to be for
            the life you want, and hand you the roadmap to get to where you want
            to be. The answer is not one score but three things: where you
            stand, what is in the way, and what to work on before anything else.
          </p>

          <p>
            Sometimes there is no gap. Then the answer is validation: you are
            where you need to be, and what to hold to stay there. That is worth
            measuring rather than assuming.
          </p>

          <p>Then we set a date and measure again.</p>
        </div>

        <div className="mt-[34px]">
          <a
            href="#contact"
            className="inline-block border border-[var(--bs-indigo)] bg-[var(--bs-indigo)] px-[22px] py-[14px] font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-[var(--bs-ink)] transition-colors hover:bg-[#8f8fff]"
          >
            Book an assessment
          </a>
        </div>

        <div className="mt-[52px] flex flex-wrap gap-x-[30px] gap-y-2 border-t border-[var(--bs-grey-800)] pt-[22px] font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--bs-grey-600)]">
          <span>
            VALD force plates · velocity-based lifting · DEXA · dynamometry
          </span>

          <span>
            Developed with a longevity physician · in use in his Austin practice
          </span>
        </div>
      </div>
    </header>
  );
}