import Image from "next/image";
import Link from "next/link";

const dimensions = [
  {
    number: "01",
    title: "Power",
    question: "How fast you can produce force.",
    description:
      "How fast your body can deliver the force it has. An analogy: two phone cables carry the same charge, and the Lightning cable fills the phone in an hour while the one you bought at the airport takes all night. Power is the charging speed, and your strength is the charge. In life, the step that gets you to the ball and the hand that finds the rail when you trip. We measure it from a jump and a landing on the force plate.",
    rate: "Fastest to go · it's what catches you when you trip",
    icon: "/handoff/icons/icon-power.svg",
  },
  {
    number: "02",
    title: "Maximal force",
    question: "The most force your muscles can produce.",
    description:
      "The most force a muscle group can produce in one position, with nothing moving. Steadying a ladder while someone climbs it, holding a door against the wind. A pull against a bar that does not give, each leg alone and then both.",
    rate: "Falls faster than mass",
    icon: "/handoff/icons/icon-maximal-force.svg",
  },
  {
    number: "03",
    title: "Expressed force",
    question: "The force you can actually put into a movement.",
    description:
      "The force that arrives when several muscle groups work together and move. The suitcase into the overhead bin, the toddler up the stairs, the deadlift you are no longer sure you should attempt. We read it from bar speed under load, so nobody attempts a true maximum.",
    rate: "Usually goes before maximal force",
    icon: "/handoff/icons/icon-expressed-force.svg",
  },
  {
    number: "04",
    title: "Muscle mass",
    question: "How much muscle you carry.",
    description:
      "How much muscle you carry, and the only one of the four you can see. The one in the mirror, and the first to go in a stretch of weight loss or a month off training. A DEXA scan, region by region, left against right.",
    rate: "Slowest to go · the only one you can see",
    icon: "/handoff/icons/icon-muscle-mass.svg",
  },
];

export function PartnerEcosystem() {
  return (
    <section
      id="measure"
      className="border-b border-[var(--bs-grey-200)] bg-[var(--bs-grey-50)]"
    >
      <div className="mx-auto max-w-[1200px] px-8 py-[86px] max-sm:px-[18px]">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--bs-grey-600)]">
          § 03 · What we measure
        </span>

        <h2
          className="mt-[18px] max-w-[19ch] text-[clamp(30px,4vw,54px)] uppercase leading-[0.95] tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-antonio), Antonio, sans-serif",
            fontWeight: 600,
          }}
        >
          We measure strength as four separate things.
        </h2>

        <div className="mt-[28px] max-w-[64ch]">
          <p className="text-[20px] font-medium leading-[1.6] text-[var(--bs-ink)]">
            Force is two of the four: what your muscles can produce, and what
            you actually put into a movement.
          </p>
        </div>

        {/* Four dimensions */}
        <div className="mt-12 border-t border-[var(--bs-ink)]">
          {dimensions.map((dimension) => (
            <div
              key={dimension.number}
              className="grid grid-cols-[96px_300px_1fr_220px] items-baseline gap-6 border-b border-[var(--bs-grey-200)] py-[26px] max-[1000px]:grid-cols-[56px_1fr]"
            >
              {/* number + icon */}
              <div className="flex flex-col items-start gap-[10px]">
                <span
                  className="text-[34px] font-semibold leading-none text-[var(--bs-grey-400)]"
                  style={{
                    fontFamily: "var(--font-antonio), Antonio, sans-serif",
                  }}
                >
                  {dimension.number}
                </span>

                <Image
                  src={dimension.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14"
                />
              </div>

              {/* title */}
              <div>
                <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-[var(--bs-ink)]">
                  {dimension.title}
                </h3>

                <span
                  className="mt-1 block text-[16px] italic text-[var(--bs-grey-600)]"
                  style={{
                    fontFamily:
                      "var(--font-gelasio), Gelasio, Georgia, serif",
                  }}
                >
                  {dimension.question}
                </span>
              </div>

              {/* description */}
              <p className="max-w-[58ch] text-[15px] leading-[1.6] text-[var(--bs-grey-600)] max-[1000px]:col-start-2">
                {dimension.description}
              </p>

              {/* rate */}
              <span className="justify-self-start bg-[var(--bs-indigo-soft)] px-[10px] py-[6px] font-mono text-[10.5px] uppercase tracking-[0.1em] text-[var(--bs-indigo-deep)] max-[1000px]:col-start-2">
                {dimension.rate}
              </span>
            </div>
          ))}
        </div>

        {/* Four-rates chart */}
        <figure className="mt-[38px] w-full max-w-[820px]">
          <Image
            src="/handoff/chart-four-parts-four-rates.svg"
            alt="Illustrative chart showing power, expressed force, maximal force and muscle mass declining at different rates with age"
            width={820}
            height={440}
            className="h-auto w-full rounded-md border border-[var(--bs-grey-200)]"
          />

          <figcaption className="mt-[10px] font-mono text-[11px] tracking-[0.06em] text-[var(--bs-grey-600)]">
            Illustrative. Four parts of strength against age, drawn in the
            order the cards describe. Not measured curves.
          </figcaption>
        </figure>

        {/* Limiters */}
        <h3
          className="mt-14 text-[clamp(24px,3vw,34px)] font-semibold uppercase"
          style={{
            fontFamily: "var(--font-antonio), Antonio, sans-serif",
          }}
        >
          The limiters
        </h3>

        <p className="mt-4 max-w-[64ch] text-[16px] leading-[1.6] text-[var(--bs-grey-800)]">
          Behind the strength numbers are key reasons that potentially limit
          those numbers. A restricted hip, a stiff ankle, a steadier right side
          than the left. They all provide an explanation for those numbers and
          often are the things that need addressing first.
        </p>

        <p className="mt-4 max-w-[64ch] text-[16px] font-medium leading-[1.6] text-[var(--bs-ink)]">
          Together, the four form the layer everything you love stands on.
          Medicine already has a word for it: basal. The level underneath, the
          one that has to be there before anything built on it holds. It is
          where the name comes from.
        </p>

        <p className="mt-4 max-w-[64ch] text-[16px] leading-[1.6] text-[var(--bs-grey-800)]">
          None of the four is a verdict. Two may be where they should be and
          two well short, one side years ahead of the other, and what any of it
          means depends on what you are trying to do with your body. The report
          says what to work on, and in what order, for the goals you came in
          with.
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="#contact"
            className="inline-flex min-h-[52px] items-center border border-[var(--bs-ink)] bg-[var(--bs-ink)] px-[22px] font-mono text-[12px] uppercase tracking-[0.1em] text-white transition-colors hover:bg-[var(--bs-grey-800)]"
          >
            Book an assessment
          </Link>

          <Link
            href="/method#report"
            className="inline-flex min-h-[52px] items-center border border-[var(--bs-ink)] px-[22px] font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--bs-ink)] transition-colors hover:bg-[var(--bs-grey-100)]"
          >
            See a sample report
          </Link>
        </div>
      </div>
    </section>
  );
}