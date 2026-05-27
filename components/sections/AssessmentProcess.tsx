const findings = [
  {
    tier: "Tier 1",
    title: "Right hip internal rotation deficit",
    description:
      "22° internal rotation on the right side against a 40° expected floor. Convergent with the athlete’s braking asymmetry and stance shift under load.",
    implication:
      "Primary leverage point for reducing knee compensation and restoring rotational output.",
    status: "Priority 1",
    tone: "alert",
  },
  {
    tier: "Tier 1",
    title: "Eccentric absorption gap",
    description:
      "Single-leg deceleration output below sport demand. Athlete unable to maintain force acceptance under repeated loading.",
    implication:
      "Largest limiter for soccer and downhill activity tolerance.",
    status: "Develop",
    tone: "warn",
  },
  {
    tier: "Tier 2",
    title: "Left shoulder overhead asymmetry",
    description:
      "Y and I positions remain 26–29% below contralateral side despite otherwise acceptable pulling strength.",
    implication:
      "Monitor progression before increasing overhead volume.",
    status: "Monitor",
    tone: "neutral",
  },
];

export function AssessmentProcess() {
  return (
    <section id="findings" className="border-b border-[var(--bs-border)] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="bs-eyebrow text-[var(--bs-grey-600)]">
              § 04 · Findings
            </div>

            <h2 className="bs-display mt-7 text-[clamp(4rem,7vw,6.7rem)] text-[var(--bs-ink)]">
              What the
              <br />
              body is
              <br />
              <span className="text-[var(--bs-indigo)]">saying.</span>
            </h2>
          </div>

          <div className="self-end">
            <p className="max-w-[640px] text-[22px] leading-[1.65] text-[var(--bs-grey-800)]">
              Findings are grouped by leverage. Tier 1 findings are the
              highest-probability constraints on the client’s stated goals.
              Tier 2 findings are relevant but secondary. Tier 3 findings are
              logged and monitored longitudinally.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="border border-[var(--bs-border)] bg-[var(--bs-alert-soft)] p-5 transition-transform duration-200 hover:-translate-y-1">
                <div className="bs-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--bs-alert)]">
                  Tier 1
                </div>
                <p className="mt-3 text-[15px] leading-7 text-[var(--bs-grey-800)]">
                  Highest leverage findings requiring direct intervention.
                </p>
              </div>

              <div className="border border-[var(--bs-border)] bg-[var(--bs-warn-soft)] p-5 transition-transform duration-200 hover:-translate-y-1">
                <div className="bs-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--bs-warn)]">
                  Tier 2
                </div>
                <p className="mt-3 text-[15px] leading-7 text-[var(--bs-grey-800)]">
                  Secondary contributors that shape planning decisions.
                </p>
              </div>

              <div className="border border-[var(--bs-border)] bg-[var(--bs-grey-100)] p-5 transition-transform duration-200 hover:-translate-y-1">
                <div className="bs-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--bs-grey-600)]">
                  Tier 3
                </div>
                <p className="mt-3 text-[15px] leading-7 text-[var(--bs-grey-800)]">
                  Logged and tracked over time but not currently limiting.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-y border-[var(--bs-border)]">
          {findings.map((finding) => (
            <article
              key={finding.title}
              className="grid gap-10 border-b border-[var(--bs-border)] py-10 transition-colors duration-200 hover:bg-[var(--bs-grey-50)] last:border-b-0 lg:grid-cols-[180px_1fr_240px]"
            >
              <div>
                <span
                  className={`inline-flex px-3 py-2 bs-mono text-[10px] font-bold uppercase tracking-[0.18em] ${
                    finding.tone === "alert"
                      ? "bg-[var(--bs-alert-soft)] text-[var(--bs-alert)]"
                      : finding.tone === "warn"
                        ? "bg-[var(--bs-warn-soft)] text-[var(--bs-warn)]"
                        : "bg-[var(--bs-grey-100)] text-[var(--bs-grey-600)]"
                  }`}
                >
                  {finding.tier}
                </span>
              </div>

              <div>
                <h3 className="max-w-[760px] text-[clamp(2rem,3vw,3.3rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[var(--bs-ink)]">
                  {finding.title}
                </h3>

                <p className="mt-6 max-w-[760px] text-[18px] leading-[1.75] text-[var(--bs-grey-800)]">
                  {finding.description}
                </p>

                <div className="mt-7 border-l-2 border-[var(--bs-indigo)] pl-5">
                  <div className="bs-mono text-[12px] uppercase tracking-[0.12em] text-[var(--bs-grey-600)]">
                    Clinical implication
                  </div>

                  <p className="mt-3 max-w-[620px] text-[16px] leading-7 text-[var(--bs-grey-800)]">
                    {finding.implication}
                  </p>
                </div>
              </div>

              <div className="flex items-start lg:justify-end">
                <div className="border border-[var(--bs-border)] bg-[var(--bs-grey-50)] px-5 py-4 transition-transform duration-200 hover:-translate-y-1">
                  <div className="bs-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--bs-indigo)]">
                    Status
                  </div>

                  <div className="mt-2 text-[16px] font-semibold tracking-[-0.01em] text-[var(--bs-ink)]">
                    {finding.status}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}