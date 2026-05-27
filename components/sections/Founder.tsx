export function Founder() {
  return (
    <section id="founder" className="border-b border-[var(--bs-border)] bg-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
        <div>
          <p className="bs-eyebrow mb-8 text-[var(--bs-indigo)]">
            § 06 · FOUNDER
          </p>

          <div className="min-h-[520px] border border-[var(--bs-border)] bg-[var(--bs-grey-100)] p-6">
            <div className="flex h-full min-h-[460px] items-end bg-[linear-gradient(135deg,var(--bs-grey-200),var(--bs-grey-50))] p-6">
              <p className="bs-mono text-[10px] uppercase tracking-[0.18em] text-[var(--bs-grey-600)]">
                Founder portrait placeholder
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="bs-display text-[72px] leading-[0.9] tracking-[-0.04em] text-[var(--bs-ink)] md:text-[104px]">
            BUILT BY
            <br />
            THE PERSON
            <br />
            WHO READS
            <br />
            THE DATA.
          </h2>

          <div className="bs-editorial mt-10 max-w-[720px] space-y-6 text-[20px] leading-[1.75] text-[var(--bs-grey-800)]">
            <p>
              Basal Strength is led by Fayaz Jaffer, who built the assessment
              system around one practical question: what does this body need to
              keep doing the things this person cares about?
            </p>

            <p>
              The work sits between performance testing, strength planning, and
              practitioner communication. The goal is not to create more data.
              The goal is to make the next training decision clearer.
            </p>
          </div>

          <div className="mt-10 border-l-2 border-[var(--bs-indigo)] pl-6">
            <p className="bs-mono text-[12px] uppercase tracking-[0.16em] text-[var(--bs-grey-600)]">
              Founder-written reports · 1:1 assessment model · Austin, TX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}