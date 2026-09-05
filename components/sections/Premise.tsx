export function Premise() {
  return (
    <section
      id="quiet"
      className="border-b border-[var(--bs-grey-200)] bg-[var(--bs-g50)]"
    >
      <div className="mx-auto max-w-[1200px] px-8 py-[86px] max-sm:px-[18px]">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--bs-grey-600)]">
          § 01 · The quiet change
        </span>

        <h2
          className="mt-[18px] max-w-[19ch] uppercase text-[clamp(30px,4vw,54px)] font-semibold leading-[0.95] tracking-[-0.01em] text-[var(--bs-ink)]"
          style={{
            fontFamily: "var(--font-antonio), Antonio, sans-serif",
          }}
        >
          Your strength can change without you noticing.
        </h2>

        <div className="mt-7 flex max-w-[64ch] flex-col gap-4 text-[17px] leading-[1.6] text-[var(--bs-grey-800)]">
          <p>
            Strength is not one thing. That is what surprises almost everyone
            we measure. It has parts, the parts decline at different rates, and
            you can be holding your own in one while losing ground in another,
            with nothing to feel and nothing to see.
          </p>

          <p>
            The curve starts in your forties. It does not hurt, and it does not
            show in the mirror. The first sign is usually speed. A step slower
            catching your kid, late getting to the ball, a jump you land heavier
            than you used to. Stairs come later, and then the downhill half of a
            hike.
          </p>

          <p>
            After sixty it steepens, to about 3% a year by your seventies. How
            much you have then is built, or lost, in the twenty years before.
          </p>

          <p>
            All of it responds to training at any age. The earlier you can see
            the curve, the more room you have to work with.
          </p>
        </div>
      </div>
    </section>
  );
}