const forceRows = [
  {
    number: "01",
    title: "Grip — bilateral isometric",
    description:
      "The strongest single predictor of all-cause mortality risk after age 50. Measured both hands, dominant deficit flagged at >10%.",
    meta: "Tool · Handheld dynamometer · Floor · Dodds 2014",
    retest: "Retest · Week 12",
    badge: "Above floor",
    tone: "good",
  },
  {
    number: "02",
    title: "Lower body — hip hinge force",
    description:
      "Isometric mid-thigh pull, ratio to body weight. The single largest lever for hip- and knee-driven sport.",
    meta: "Tool · IMTP plate · Floor · 2.5× BW recreational",
    retest: "Retest · Week 12",
    badge: "Above floor",
    tone: "good",
  },
  {
    number: "03",
    title: "Eccentric absorption — knee",
    description:
      "The capacity to brake load on a single leg. Quality deficit here is the convergent finding in nearly every returning athlete we see.",
    meta: "Tool · Nordic + decline ISO · Floor · Sport-matched",
    retest: "Retest · Week 8",
    badge: "Develop",
    tone: "warn",
  },
  {
    number: "04",
    title: "Upper body — push & pull",
    description:
      "Horizontal and vertical, both directions. Pull bias is the longevity gate; push capacity tracks tightly with throwing and grappling sports.",
    meta: "Tool · 1RM proxy · Floor · 1.0–1.5× BW",
    retest: "Retest · Week 12",
    badge: "Above floor",
    tone: "good",
  },
  {
    number: "05",
    title: "Trunk — anti-rotation & anti-extension",
    description:
      "The quiet ceiling on everything overhead and everything reactive. We measure it isometrically, with the breath under load.",
    meta: "Tool · Pallof + dead-bug ISO · Floor · Sport-matched",
    retest: "Retest · Week 8",
    badge: "Monitor",
    tone: "neutral",
  },
];

export function PartnerEcosystem() {
  return (
    <section
      id="forces"
      className="border-b border-[var(--bs-border)] bg-[var(--bs-grey-50)]"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.72fr_1.28fr] lg:px-12">
        <div>
          <p className="bs-eyebrow mb-7 text-[var(--bs-indigo)]">
            § 03 · The five forces
          </p>

          <h2 className="bs-display text-[clamp(3.2rem,5.8vw,5.8rem)] leading-[0.9] tracking-[-0.045em] text-[var(--bs-ink)]">
            Five
            <br />
            categories.
            <br />
            one{" "}
            <span className="text-[var(--bs-indigo)]">floor.</span>
          </h2>

          <p className="mt-8 max-w-[420px] text-[16px] leading-[1.75] text-[var(--bs-grey-800)]">
            Every assessment scores five force categories against the floor your
            activities demand. The floor is sourced — bodyweight multiples for
            lifts, sport-specific norms for athletes, longevity floors for the
            rest.
          </p>

          <p className="mt-6 max-w-[420px] text-[15px] leading-[1.7] text-[var(--bs-grey-800)]">
            <strong className="text-[var(--bs-ink)]">Above floor</strong> is a
            green light. <strong className="text-[var(--bs-ink)]">Develop</strong>{" "}
            means the gap is mechanical and trainable.{" "}
            <strong className="text-[var(--bs-ink)]">Monitor</strong> means the
            number is close to threshold and we want to retest it.
          </p>

          <div className="mt-8 max-w-[360px] border-l-2 border-[var(--bs-indigo)] bg-white p-6">
            <p className="bs-mono text-[13px] font-semibold text-[var(--bs-ink)]">
              score = measured ÷ floor × 100
            </p>

            <p className="bs-mono mt-4 text-[13px] text-[var(--bs-grey-600)]">
              floor sourced per activity &amp; per decade
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--bs-border)]">
          {forceRows.map((row) => (
            <article
              key={row.number}
              className="grid gap-4 border-b border-[var(--bs-border)] border-l-2 border-l-transparent py-6 transition-all duration-200 hover:border-l-[var(--bs-indigo)] hover:bg-white hover:shadow-[0_4px_18px_rgba(0,0,0,0.03)] md:grid-cols-[42px_1fr_118px]"
            >
              <div className="bs-mono text-[12px] text-[var(--bs-grey-500)]">
                {row.number}
              </div>

              <div>
                <h3 className="text-[20px] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--bs-ink)]">
                  {row.title}
                </h3>

                <p className="mt-2 max-w-[520px] text-[13px] leading-[1.65] text-[var(--bs-grey-700)]">
                  {row.description}
                </p>

                <p className="bs-mono mt-5 text-[11px] uppercase tracking-[0.12em] text-[var(--bs-grey-600)]">
                  {row.meta}
                </p>

                <p className="bs-mono mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--bs-grey-600)]">
                  {row.retest}
                </p>
              </div>

              <div className="md:justify-self-end">
                <span
                  className={`inline-flex whitespace-nowrap px-4 py-2 bs-mono text-[10px] font-bold uppercase tracking-[0.18em] ${
                    row.tone === "warn"
                      ? "bg-[var(--bs-warn-soft)] text-[var(--bs-warn)]"
                      : row.tone === "neutral"
                      ? "bg-[var(--bs-grey-100)] text-[var(--bs-grey-600)]"
                      : "bg-[var(--bs-indigo-soft)] text-[var(--bs-indigo-deep)]"
                  }`}
                >
                  {row.badge}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}