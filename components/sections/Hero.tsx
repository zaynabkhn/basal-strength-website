import { Button } from "../ui/Button";

const scoreRows = [
  { label: "Grip — bilateral", value: "126", status: "good", width: "57.3%" },
  { label: "Lower body — hinge", value: "112", status: "good", width: "50.9%" },
  { label: "Eccentric absorption — knee", value: "71", status: "warn", width: "32.3%" },
  { label: "Upper body — pull", value: "104", status: "good", width: "47.3%" },
  { label: "Trunk — anti-rotation", value: "88", status: "warn", width: "40%" },
];

export function Hero() {
  return (
    <section className="overflow-hidden bg-[var(--bs-ink)] text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-16 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div>
            <div className="bs-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--bs-indigo)]">
              Strength diagnostics · Austin, TX · By appointment
            </div>

            <h1 className="bs-display mt-7 text-[clamp(4.5rem,8.5vw,7.4rem)] text-white">
              The body
              <br />
              you want
              <br />
              to <span className="text-[var(--bs-indigo)]">keep using.</span>
            </h1>

            <p className="mt-8 max-w-[620px] text-[18px] font-medium leading-[1.55] text-[var(--bs-grey-400)]">
              An assessment-driven strength practice for athletes, returning
              movers, and longevity-focused adults.{" "}
              <strong className="font-semibold text-white">
                We measure what you have, name the floor you need, and build the
                smallest training plan that closes the gap.
              </strong>
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#assessment" variant="accent">
                Book your assessment →
              </Button>

              <a
                href="#method"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-white/70 hover:bg-white/5"
              >
                See the method
              </a>
            </div>
          </div>

          <div className="border border-[var(--bs-grey-800)] bg-[var(--bs-grey-900)] p-7 transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-2 flex items-baseline justify-between">
              <div className="text-[15px] font-semibold text-white">
                Client · J.D. — 38 yo
              </div>

              <div className="bs-mono rounded bg-[var(--bs-indigo)] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Tier 1
              </div>
            </div>

            <div className="bs-mono mb-6 text-[11px] tracking-[0.04em] text-[var(--bs-grey-400)]">
              Force capacity vs. activity floor · 5 categories
            </div>

            {scoreRows.map((row) => (
              <div
                key={row.label}
                className="border-b border-[var(--bs-grey-800)] py-4 last:border-b-0 last:pb-0"
              >
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <div className="text-[13px] font-medium text-white">
                    {row.label}
                  </div>

                  <div className="bs-mono text-sm font-semibold text-white">
                    {row.value}{" "}
                    <span className="font-normal text-[var(--bs-grey-600)]">
                      ÷ 100
                    </span>
                  </div>
                </div>

                <div className="relative h-1.5 overflow-hidden rounded-full bg-[var(--bs-grey-800)]">
                  <div
                    className={`absolute left-0 top-0 h-full rounded-full transition-all duration-700 ease-out ${
                      row.status === "warn"
                        ? "bg-[var(--bs-warn)]"
                        : "bg-[var(--bs-indigo)]"
                    }`}
                    style={{ width: row.width }}
                  />

                  <div className="absolute bottom-[-3px] top-[-3px] left-[45.45%] w-px bg-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-6 border-t border-[var(--bs-grey-800)] py-5 bs-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--bs-grey-600)]">
          <div>
            <span className="text-white">1,400+</span> assessments delivered since 2019
          </div>

          <div>
            Concierge model · <span className="text-white">1:1 only</span>
          </div>

          <div>
            Founded by <span className="text-white">Fayaz Jaffer</span>
          </div>

          <div>
            Partnered with <span className="text-white">RiverRock Medical</span> &amp;{" "}
            <span className="text-white">The Michanic Shop</span>
          </div>
        </div>
      </div>
    </section>
  );
}