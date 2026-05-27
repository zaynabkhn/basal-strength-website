const metrics = [
  { label: "Single-Leg Force", sub: "IMTP both legs ÷ floor", value: "233", tone: "high", width: "100%" },
  { label: "Upper Body", sub: "Bench 1RM ÷ floor", value: "186", tone: "high", width: "84%" },
  { label: "Peak Lower Bilateral", sub: "ISO squat ÷ floor · 3.34× BW", value: "163", tone: "high", width: "74%" },
  { label: "Power", sub: "CMJ height ÷ floor", value: "96", tone: "below", width: "44%" },
  { label: "Deceleration", sub: "Ecc:Con 0.54 / ≥ 0.80 target", value: "86", tone: "below", width: "39%" },
  { label: "Mobility · R Hip IR", sub: "22° / 40° norm", value: "55", tone: "below", width: "25%" },
];

const findingCards = [
  { tier: "Tier 1 · Priority 1", title: "Right hip internal rotation", value: "22° vs. 40° norm" },
  { tier: "Tier 1 · Priority 2", title: "Eccentric absorption gap", value: "0.54 ecc:con / ≥ 0.80" },
  { tier: "Tier 1 · Priority 3", title: "Left shoulder overhead", value: "−26 to −29% Y/I positions" },
];

const sportRows = [
  { status: "Returning", sport: "Brazilian Jiu-Jitsu", rating: "79", note: "aerobic-limited" },
  { status: "Active", sport: "Soccer", rating: "84", note: "braking-limited" },
  { status: "Seasonal", sport: "Snowboarding", rating: "81", note: "R hip-limited" },
];

export function VisualSummary() {
  return (
    <section
      id="summary"
      className="border-b border-[var(--bs-border)] bg-[var(--bs-grey-100)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="mb-12 max-w-[760px]">
          <p className="bs-eyebrow mb-5 text-[var(--bs-grey-600)]">
            § 05 · Sample report output
          </p>

          <h2 className="bs-display text-[clamp(4rem,7vw,6rem)] text-[var(--bs-ink)]">
            The
            <br />
            dossier.
          </h2>

          <p className="bs-editorial mt-6 max-w-[720px] text-[20px] leading-[1.65] text-[var(--bs-grey-800)]">
            A Basal report turns raw assessment data into a readable profile:
            force floors, sport-specific constraints, tiered findings, and the
            small number of training decisions that matter next.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
          <aside className="relative flex min-h-[520px] flex-col overflow-hidden rounded-[var(--bs-radius-xl)] bg-[var(--bs-ink)] p-6 text-white transition-transform duration-300 hover:-translate-y-1">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_110%,rgba(123,123,255,0.25),transparent_48%),linear-gradient(135deg,rgba(123,123,255,0.18),transparent_40%)]" />

            <div className="relative flex items-start gap-5">
              <div>
                <div className="bs-display text-[76px] leading-[0.85] text-white">
                  83
                </div>

                <div className="bs-mono mt-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--bs-indigo)]">
                  BS-I
                </div>

                <div className="bs-mono mt-1 text-[9px] uppercase tracking-[0.18em] text-[var(--bs-grey-400)]">
                  Basal Index
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {["44 · Male", "Austin, TX", "Ex-CrossFit · 9mo layoff", "BJJ · Soccer · Snow"].map(
                  (item) => (
                    <div
                      key={item}
                      className="bs-mono flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-[var(--bs-grey-400)]"
                    >
                      <span className="h-1 w-1 rounded-full bg-[var(--bs-indigo)]" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="relative mt-8 flex flex-1 items-center justify-center opacity-70">
              <svg viewBox="0 0 280 280" className="h-[260px] w-[260px]" fill="none">
                <rect x="40" y="40" width="200" height="200" stroke="rgba(123,123,255,0.7)" strokeWidth="1.2" />
                <circle cx="140" cy="148" r="116" stroke="rgba(123,123,255,0.7)" strokeWidth="1.2" />
                <line x1="140" y1="40" x2="140" y2="240" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
                <line x1="40" y1="148" x2="240" y2="148" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
                <circle cx="140" cy="62" r="14" stroke="white" strokeWidth="1.1" />
                <path d="M140 76 L140 170" stroke="white" strokeWidth="1.1" />
                <path d="M140 92 L60 148 M140 92 L220 148" stroke="white" strokeWidth="1.1" />
                <path d="M140 92 L84 70 M140 92 L196 70" stroke="rgba(123,123,255,0.35)" strokeDasharray="3 3" />
                <path d="M140 170 L116 240 M140 170 L164 240" stroke="white" strokeWidth="1.1" />
                <path d="M140 170 L86 232 M140 170 L194 232" stroke="rgba(123,123,255,0.35)" strokeDasharray="3 3" />
                <circle cx="140" cy="92" r="2" fill="#7B7BFF" />
                <circle cx="140" cy="170" r="2" fill="#7B7BFF" />
              </svg>
            </div>

            <div className="relative">
              <h3 className="bs-display text-[40px] leading-[0.95] text-white">
                John Doe
              </h3>

              <p className="bs-mono mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--bs-indigo)]">
                Case file · JD-3 · 2026.04.13
              </p>
            </div>
          </aside>

          <div className="rounded-[var(--bs-radius-xl)] border border-[var(--bs-border)] bg-white p-8">
            <div className="flex flex-col gap-6 border-b border-[var(--bs-border)] pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="bs-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--bs-indigo)]">
                  Force profile · vs. activity floor (= 100)
                </p>

                <h3 className="bs-display mt-2 text-[44px] leading-[1] text-[var(--bs-ink)]">
                  John Doe / 44
                </h3>
              </div>

              <div className="bs-mono text-left text-[11px] leading-6 text-[var(--bs-grey-600)] md:text-right">
                <strong className="text-[var(--bs-ink)]">BS-I 83</strong> · returning athlete
                <br />
                13 Apr 2026 · Austin, TX
                <br />
                9-month layoff · ex-CrossFitter
              </div>
            </div>

            <div className="mt-6 grid gap-x-10 gap-y-5 md:grid-cols-2">
              <div className="bs-mono col-span-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--bs-grey-600)]">
                <span className="inline-block h-3 w-0.5 bg-[var(--bs-ink)]" />
                Activity floor · 100
              </div>

              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col gap-2 transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <div className="text-[14px] font-semibold text-[var(--bs-ink)]">
                        {metric.label}
                      </div>

                      <div className="bs-mono text-[10px] italic text-[var(--bs-grey-600)]">
                        {metric.sub}
                      </div>
                    </div>

                    <div
                      className={`bs-mono text-[18px] font-bold ${
                        metric.tone === "below"
                          ? "text-[var(--bs-warn)]"
                          : "text-[var(--bs-ink)]"
                      }`}
                    >
                      {metric.value}
                    </div>
                  </div>

                  <div className="relative h-2 overflow-visible rounded-full bg-[var(--bs-grey-100)]">
                    <div
                      className={`absolute left-0 top-0 h-full rounded-full transition-all duration-700 ease-out ${
                        metric.tone === "below"
                          ? "bg-[var(--bs-warn)]"
                          : "bg-[var(--bs-indigo)]"
                      }`}
                      style={{ width: metric.width }}
                    />
                    <div className="absolute bottom-[-3px] top-[-3px] left-[45%] w-0.5 bg-[var(--bs-ink)]" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 border-t border-[var(--bs-border)] pt-6 md:grid-cols-3">
              {findingCards.map((finding) => (
                <div
                  key={finding.title}
                  className="border border-[var(--bs-border)] border-l-[3px] border-l-[var(--bs-alert)] p-4 transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="bs-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--bs-alert)]">
                    {finding.tier}
                  </div>

                  <div className="mt-2 text-[14px] font-semibold leading-[1.3] text-[var(--bs-ink)]">
                    {finding.title}
                  </div>

                  <div className="bs-mono mt-2 text-[12px] font-medium text-[var(--bs-grey-800)]">
                    {finding.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-2 md:grid-cols-3">
              {sportRows.map((row) => (
                <div
                  key={row.sport}
                  className="border border-[var(--bs-border)] bg-[var(--bs-grey-50)] p-4 transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="bs-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--bs-indigo)]">
                    {row.status}
                  </div>

                  <div className="mt-1 text-[16px] font-semibold text-[var(--bs-ink)]">
                    {row.sport}
                  </div>

                  <div className="bs-mono mt-1 text-[13px] font-bold text-[var(--bs-grey-800)]">
                    {row.rating}{" "}
                    <span className="font-normal italic text-[var(--bs-grey-600)]">
                      / {row.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}