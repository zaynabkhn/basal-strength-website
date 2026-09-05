const cases = [
  {
    status: "Prioritize",
    tone: "priority",
    title: "She was landing harder on her weaker side",
    description:
      "Thirty-eight, and a decade of injuries she suspected were connected: IT band pain, bursitis, a stress fracture. She had been through physical therapy more than once. Each round treated the one spot. On her left side she had less stability and less range, and she landed nineteen percent harder on it, hundreds of times a week.",
    change:
      "One pattern instead of three separate injuries, characterized precisely enough to put the work in order.",
  },
  {
    status: "Prioritize",
    tone: "priority",
    title:
      "Nothing wrong, and the leg carrying more was the one least able to absorb it",
    description:
      "Forty-four, injury free, and he wants to still be running and lifting at seventy. His force production was well above typical for his age, which is the answer he expected. Tested alone, his right leg matched the left. Tested together, it carried more, and it was stiffer at hip and ankle and less stable to stand on. A 5K loads that leg about 2,500 times.",
    change:
      "Twelve weeks of single-leg work. The reserve he needs at seventy is being protected at forty-four.",
  },
  {
    status: "Track first",
    tone: "track",
    title: "Ninety-second percentile, and thirty percent down in one position",
    description:
      "She is in exceptional shape and the numbers said so. The assessment still characterized something that had been bothering her: one overhead position where her right side produced thirty percent less force.",
    change: "The choice to address it while it is still small.",
  },
];

export function VisualSummary() {
  return (
    <section
      id="findings"
      className="border-b border-[var(--bs-grey-200)] bg-[var(--bs-g50)]"
    >
      <div className="mx-auto max-w-[1200px] px-8 py-[86px] max-sm:px-[18px]">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--bs-grey-600)]">
          § 05 · Opportunities
        </span>

        <h2
          className="mt-[18px] max-w-[19ch] uppercase text-[clamp(30px,4vw,54px)] font-semibold leading-[0.95] tracking-[-0.01em] text-[var(--bs-ink)]"
          style={{
            fontFamily: "var(--font-antonio), Antonio, sans-serif",
          }}
        >
          Which side, in which position, by how much.
        </h2>

        <div className="mt-7 max-w-[64ch] text-[17px] leading-[1.6] text-[var(--bs-grey-800)]">
          <p>
            A finding is only useful if it is specific enough to act on. Three
            of them, anonymized. One person had been hurt on and off for a
            decade, one had nothing wrong at all, one was in the ninety-second
            percentile for strength.
          </p>
        </div>

        <div className="mt-12 flex flex-col">
          {cases.map((item) => (
            <article
              key={item.title}
              className="grid gap-7 border-t border-[var(--bs-grey-200)] py-[34px] md:grid-cols-[150px_1fr]"
            >
              <span
                className={`justify-self-start self-start px-[10px] py-[6px] font-mono text-[10px] uppercase tracking-[0.12em] ${
                  item.tone === "priority"
                    ? "bg-[var(--bs-indigo-soft)] text-[var(--bs-indigo-deep)]"
                    : "bg-[var(--bs-warn-soft)] text-[var(--bs-warn)]"
                }`}
              >
                {item.status}
              </span>

              <div>
                <h3 className="max-w-[24ch] text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--bs-ink)]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[66ch] text-[15.5px] leading-[1.6] text-[var(--bs-grey-600)]">
                  {item.description}
                </p>

                <p className="mt-3 max-w-[66ch] text-[15.5px] leading-[1.6] text-[var(--bs-ink)]">
                  <b className="mb-1 block font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--bs-grey-400)]">
                    What it changes
                  </b>

                  {item.change}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-[34px] max-w-[66ch] border-l-2 border-[var(--bs-grey-400)] pl-4 text-[15px] leading-[1.6] text-[var(--bs-grey-600)]">
          What none of these say is that the training will prevent the next
          injury. The pattern is real and the work is appropriate. The evidence
          for the leap from one to the other is thinner than the field usually
          admits, and the report says so.
        </p>

        <div className="mt-9">
          <a
            href="#contact"
            className="inline-block bg-[var(--bs-ink)] px-[22px] py-[14px] font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[var(--bs-grey-800)]"
          >
            Book an assessment
          </a>
        </div>
      </div>
    </section>
  );
}