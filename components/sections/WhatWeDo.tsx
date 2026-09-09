export function WhatWeDo() {
  return (
    <section
      id="whyexist"
      className="border-b border-[var(--bs-grey-200)] bg-white"
    >
      <div className="mx-auto max-w-[1200px] px-8 py-[86px] max-sm:px-[18px]">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--bs-grey-600)]">
          § 02 · Why we exist
        </span>

        <h2
          className="mt-[18px] max-w-[24ch] text-[clamp(30px,4vw,54px)] uppercase leading-[0.95] tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-antonio), Antonio, sans-serif",
            fontWeight: 600,
          }}
        >
          Strength made measurable like the rest of your health.
        </h2>

        <div className="mt-[28px] flex max-w-[64ch] flex-col gap-[16px] text-[17px] leading-[1.6] text-[var(--bs-grey-800)]">
          <p>
            Basal Strength was founded on one idea: strength is one of the best
            indicators we have of how we function and how we age, and yet it
            has been left to the gym. It is almost never measured with the rigor
            the rest of health gets.
          </p>

          <p>
            A physical covers your heart, your blood, your body composition,
            sometimes your VO2. What your body can actually do, how much force
            it produces, how quickly, and how evenly across the two sides, is
            not on the panel. Whether you will still get down on the floor with
            a grandchild and back up unaided is not on it either, and it is
            answerable decades early.
          </p>

          <p>
            We built an assessment that measures it. The instruments came out
            of elite sport, where professional athletes were measured this way
            and nobody else was. They have come down in cost and up in
            precision, and we have adapted the tests so someone who has never
            trained can be measured as reliably as an athlete: no maximal
            attempt required, the technique taken out of the number, and each
            test scaled to what you can safely do. That puts strength in the
            same conversation as your labs, a number with a source, tracked
            over time, read by your physician.
          </p>

          <p>
            A baseline also holds its value when life interrupts. After an
            injury, an illness, or a stretch away from training, it is a
            measured place to work back to.
          </p>
        </div>
      </div>
    </section>
  );
}