import Image from "next/image";

const dimensions = [
  {
    number: "01",
    title: "Power",
    question: "How fast you can produce force.",
    description:
      "You jump, and you land. The plate records both: how quickly you produced force on the way up, and how well you absorbed it coming down.",
    rate: "Fastest to go · it's what catches you when you trip",
    icon: "/handoff/icons/icon-power.svg",
  },
  {
    number: "02",
    title: "Maximal force",
    question: "The most force your muscles can produce.",
    description:
      "You pull or push against something that does not move, standing on a plate that records what you produced. Each leg alone, then both together. Technique is taken out of it, so the number is the muscle and not the lift.",
    rate: "Falls faster than mass",
    icon: "/handoff/icons/icon-maximal-force.svg",
  },
  {
    number: "03",
    title: "Expressed force",
    question: "The force you can actually put into a movement.",
    description:
      "We read it from how fast the bar moves under load, so nobody has to attempt a true maximum to find out what their maximum is. If this number sits well under the one above it, you have force you are not using. That is trainable.",
    rate: "Usually goes before maximal force",
    icon: "/handoff/icons/icon-expressed-force.svg",
  },
  {
    number: "04",
    title: "Muscle mass",
    question: "How much muscle you carry.",
    description:
      "A DEXA scan, region by region, left against right. It also does a second job. If one side is weaker but carries the same muscle, the weakness is not the muscle.",
    rate: "Slowest to go · the only one you can see",
    icon: "/handoff/icons/icon-muscle-mass.svg",
  },
];

export function PartnerEcosystem() {
  return (
    <section
      id="measure"
      className="border-b border-[var(--bs-grey-200)] bg-[var(--bs-g50)]"
    >
      <div className="mx-auto max-w-[1200px] px-8 py-20 md:py-24 max-sm:px-[18px]">
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--bs-grey-600)]">
          § 03 · What we measure
        </span>

        <h2
          className="mt-6 max-w-[19ch] uppercase text-[clamp(38px,5vw,64px)] font-semibold leading-[0.98] tracking-[-0.02em] text-[var(--bs-ink)]"
          style={{
            fontFamily: "var(--font-antonio), Antonio, sans-serif",
          }}
        >
          Strength is four separate things.
        </h2>

        <div className="mt-8 max-w-[760px]">
          <p className="text-[20px] font-medium leading-[1.65] text-[var(--bs-ink)]">
            Force is two of the four. There is the force your muscles can
            produce, and the force you actually put into a movement. They are
            not the same number, and the difference is worth knowing.
          </p>
        </div>

        <div className="mt-12 border-t border-[var(--bs-ink)]">
          {dimensions.map((item) => (
            <article
              key={item.number}
              className="grid gap-6 border-b border-[var(--bs-grey-200)] py-7 lg:grid-cols-[96px_300px_1fr_220px] lg:items-start"
            >
              <div className="flex items-start gap-5 lg:flex-col lg:gap-3">
                <span
                  className="text-[34px] font-semibold leading-none text-[var(--bs-grey-400)]"
                  style={{
                    fontFamily: "var(--font-antonio), Antonio, sans-serif",
                  }}
                >
                  {item.number}
                </span>

                <Image
                  src={item.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14"
                />
              </div>

              <div>
                <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.02em] text-[var(--bs-ink)]">
                  {item.title}
                </h3>

                <p
                  className="mt-1 text-[16px] italic leading-[1.5] text-[var(--bs-grey-600)]"
                  style={{
                    fontFamily:
                      "var(--font-gelasio), Gelasio, Georgia, serif",
                  }}
                >
                  {item.question}
                </p>
              </div>

              <p className="max-w-[58ch] text-[15px] leading-[1.65] text-[var(--bs-grey-600)]">
                {item.description}
              </p>

              <span className="justify-self-start bg-[var(--bs-indigo-soft)] px-3 py-2 font-mono text-[10.5px] uppercase tracking-[0.08em] text-[var(--bs-indigo-deep)]">
                {item.rate}
              </span>
            </article>
          ))}
        </div>

        <figure className="mt-10 max-w-[850px]">
          <Image
            src="/handoff/chart-four-parts-four-rates.svg"
            alt="Illustrative chart showing power, expressed force, maximal force, and muscle mass changing with age at different rates."
            width={850}
            height={456}
            className="h-auto w-full rounded-md border border-[var(--bs-grey-200)]"
          />

          <figcaption className="mt-3 font-mono text-[11px] tracking-[0.04em] text-[var(--bs-grey-600)]">
            Illustrative. Four parts of strength against age, drawn in the
            order the cards describe. Not measured curves.
          </figcaption>
        </figure>

        <div className="mt-14 max-w-[760px]">
          <h3
            className="uppercase text-[clamp(28px,3vw,38px)] font-semibold leading-none text-[var(--bs-ink)]"
            style={{
              fontFamily: "var(--font-antonio), Antonio, sans-serif",
            }}
          >
            The limiters
          </h3>

          <div className="mt-5 space-y-5 text-[16px] leading-[1.65] text-[var(--bs-grey-800)]">
            <p>
              Behind the four numbers sit the reasons they came out where they
              did. A hip that will not rotate. An ankle that will not bend. One
              side steadier than the other. Not a fifth part of strength, but
              the explanation for the other four, and often the first thing
              worth working on.
            </p>

            <p className="font-medium text-[var(--bs-ink)]">
              Together, the four form the layer everything you love stands on.
              Medicine already has a word for it: basal. The level underneath,
              the one that has to be there before anything built on it holds.
              It is where the name comes from.
            </p>

            <p>
              None of the four is a verdict on what you can do. They are inputs.
              What they mean depends on what you are trying to do with your
              body, which is why we ask about that before the testing rather
              than after. Two of them may be where they should be and two well
              short. One side may be years ahead of the other. That is normal,
              and it is the reason the report puts them in an order rather than
              adding them up.
            </p>
          </div>
        </div>

        <div className="mt-14 max-w-[760px]">
          <h3
            className="uppercase text-[clamp(28px,3vw,38px)] font-semibold leading-none text-[var(--bs-ink)]"
            style={{
              fontFamily: "var(--font-antonio), Antonio, sans-serif",
            }}
          >
            On grip
          </h3>

          <p className="mt-5 text-[16px] leading-[1.65] text-[var(--bs-grey-800)]">
            Most longevity screening reaches for grip as a stand-in for
            whole-body strength. Grip predicts about as reliably as anything in
            medicine. But grip predicts, it does not instruct. Squeezing a
            dynamometer harder does not extend a life. So we measure grip, and
            we also measure force directly, limb by limb, because that is the
            part you can actually train.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[var(--bs-ink)] px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[var(--bs-grey-800)]"
          >
            Book an assessment
          </a>

          <a
            href="/method#report"
            className="inline-flex items-center justify-center border border-[var(--bs-ink)] px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--bs-ink)] transition-colors hover:bg-[var(--bs-grey-100)]"
          >
            See a sample report
          </a>
        </div>
      </div>
    </section>
  );
}