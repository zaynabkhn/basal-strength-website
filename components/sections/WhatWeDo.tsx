const steps = [
  {
    step: "Step 01",
    title: "Intake & history",
    description:
      "What you want your body to keep doing, where it has hurt, what your physician is managing. The protocol bends to your goals, not the other way around.",
    meta: "25 min · pre-session",
  },
  {
    step: "Step 02",
    title: "Force assessment",
    description:
      "Five categories measured directly — handheld dynamometry, isometric mid-thigh pull, eccentric overload, anti-rotation. Numbers, not impressions.",
    meta: "90 min · in-gym",
  },
  {
    step: "Step 03",
    title: "Blueprint & findings",
    description:
      "A written report. Tiered findings, scorecards against your floor, and the smallest training plan that closes the highest-leverage gap.",
    meta: "within 7 days · letter format",
  },
  {
    step: "Step 04",
    title: "Retest & revise",
    description:
      "A retest date is set the day of the assessment. Trajectory is judged against your own prior numbers — never against a population mean.",
    meta: "week 12 default · earlier on request",
  },
];

export function WhatWeDo() {
  return (
    <section
      id="method"
      className="border-b border-[var(--bs-border)] bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="bs-eyebrow mb-7 text-[var(--bs-indigo)]">
              § 02 · The method
            </p>

            <h2 className="bs-display text-[clamp(4.5rem,8vw,8rem)] leading-[0.88] tracking-[-0.04em] text-[var(--bs-ink)]">
              Measure.
              <br />
              Floor.
              <br />
              <span className="text-[var(--bs-indigo)]">Plan.</span>
              <br />
              Retest.
            </h2>
          </div>

          <div className="flex items-center">
            <p className="max-w-[650px] text-[22px] leading-[1.65] text-[var(--bs-ink)]">
              The protocol takes 90 minutes in the gym and produces a written
              deliverable within seven days. Nothing about it is improvised.
              Every input is logged, every floor is sourced, and the plan that
              follows is the shortest one the data justifies.
            </p>
          </div>
        </div>

        <div className="mt-20 grid border border-[var(--bs-border)] md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <article
              key={item.step}
              className="flex min-h-[320px] flex-col border-b border-l-2 border-l-transparent border-[var(--bs-border)] p-8 transition-all duration-200 hover:border-l-[var(--bs-indigo)] hover:bg-[var(--bs-grey-50)] hover:shadow-[0_4px_18px_rgba(0,0,0,0.03)] md:border-r lg:border-b-0 lg:last:border-r-0"
            >
              <p className="bs-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--bs-indigo)]">
                {item.step}
              </p>

              <h3 className="mt-10 text-[32px] font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--bs-ink)]">
                {item.title}
              </h3>

              <p className="mt-6 text-[16px] leading-[1.7] text-[var(--bs-grey-800)]">
                {item.description}
              </p>

              <div className="mt-auto border-t border-[var(--bs-border)] pt-6">
                <p className="bs-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--bs-grey-600)]">
                  {item.meta}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}