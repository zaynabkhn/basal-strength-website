import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-[var(--bs-ink)] text-white">
      <div className="mx-auto max-w-[1200px] px-8 pb-[72px] pt-[86px] max-sm:px-[18px]">
        {/* Basal mark only */}
        <Image
          src="/handoff/basal-mark.svg"
          alt="Basal Strength"
          width={84}
          height={84}
          priority
          className="h-[84px] w-[84px]"
        />

        <div className="mt-[22px] font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--bs-indigo)]">
          Strength assessment · Austin, Texas
        </div>

        <h1
          className="mt-[26px] max-w-[18ch] text-[clamp(38px,5.2vw,72px)] uppercase leading-[0.95] tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-antonio), Antonio, sans-serif",
          }}
        >
          Will my body keep up with the life I want to live?
        </h1>

        <div className="mt-[30px] max-w-[690px] space-y-[16px] text-[17px] leading-[1.6] text-[var(--bs-grey-200)]">
          <p>
            We measure how strong you are and compare it with what you want your
            body to keep doing. The answer is three things: where you stand,
            what is in the way, and what to work on before anything else.
          </p>

          <p>
            Sometimes there is no gap. Then the answer is validation: you are
            where you need to be, and what to hold to stay there.
          </p>

          <p>Then we set a date and measure again.</p>
        </div>

        <Link
          href="#contact"
          className="mt-[30px] inline-flex min-h-[54px] items-center justify-center bg-[var(--bs-indigo)] px-[28px] font-mono text-[12px] uppercase tracking-[0.12em] text-[var(--bs-ink)] transition-opacity hover:opacity-90"
        >
          Book an assessment
        </Link>

        <div className="mt-[56px] border-t border-[var(--bs-grey-800)] pt-[20px]">
          <div className="flex flex-wrap gap-x-[42px] gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--bs-grey-600)]">
            <span>
              VALD force plates · Velocity-based lifting · DEXA · Dynamometry
            </span>

            <span>
              Developed with a longevity physician · In use in his Austin
              practice
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}