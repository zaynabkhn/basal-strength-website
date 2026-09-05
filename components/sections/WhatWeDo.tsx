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
          className="mt-[18px] max-w-[24ch] uppercase text-[clamp(30px,4vw,54px)] font-semibold leading-[0.95] tracking-[-0.01em] text-[var(--bs-ink)]"
          style={{
            fontFamily: "var(--font-antonio), Antonio, sans-serif",
          }}
        >
          Strength made measurable like the rest of your health.
        </h2>

        <div className="mt-7 flex max-w-[64ch] flex-col gap-4 text-[17px] leading-[1.6] text-[var(--bs-grey-800)]">
          <p>
            Basal Strength was founded on one idea: strength is one of the best
            indicators we have of how we function and how we age, and it is
            almost never measured with the rigor the rest of health gets.
          </p>

          <p>
            A physical covers your heart, your blood, your body composition,
            sometimes your VO2. What your body can actually do, how much force
            it produces, how fast, how evenly across sides, is not on the panel.
          </p>

          <p>
            It can be now. The instruments that measure force directly used to
            live in elite sport. They have come down in cost and up in
            precision, and that puts strength in the same conversation as your
            labs: a number with a source, tracked over time, read by your
            physician next to everything else they know about you.
          </p>

          <p>
            A baseline also holds its value when life interrupts. After an
            injury, an illness, or a stretch away from training, it is a
            measured place to work back to rather than a guess.
          </p>

          <p>
            Whether you will still get down on the floor with a grandchild and
            back up unaided is not on any age chart, and it is answerable
            decades early.
          </p>
        </div>
      </div>
    </section>
  );
}