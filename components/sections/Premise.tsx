export function Premise() {
  return (
    <section id="premise" className="border-b border-[var(--bs-border)] bg-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.55fr_1fr] lg:px-12">
        <div>
          <p className="bs-eyebrow text-[var(--bs-grey-600)]">
            § 01 · The premise
          </p>
        </div>

        <div className="max-w-[760px]">
          <h2 className="bs-display text-[clamp(3.8rem,6vw,6.2rem)] leading-[0.9] text-[var(--bs-ink)]">
            Strong enough is not
            <br />
            a number you
            <br />
            <span className="text-[var(--bs-indigo)]">guess at.</span>
          </h2>

          <div className="bs-editorial mt-10 space-y-7 text-[22px] leading-[1.65] text-[var(--bs-grey-800)]">
            <p>
              Most strength advice begins with a program. We begin with a
              measurement. Every Basal Strength engagement opens the same way:{" "}
              <strong className="font-semibold text-[var(--bs-ink)]">
                five force categories assessed against the floor your life
                demands
              </strong>{" "}
              — the load your hips, grip, push, pull, and trunk need to clear
              for the sport you play and the decade you intend to keep playing
              it.
            </p>

            <p>
              The output is not a workout. It’s a{" "}
              <em className="text-[var(--bs-indigo)]">blueprint</em>: the one or
              two findings that move the most, the smallest training stimulus
              that closes them, and a retest date set before you walk out the
              door.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}