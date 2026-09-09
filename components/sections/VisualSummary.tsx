import Link from "next/link";

const cases = [
  {
    tone: "prioritize",
    label: "Prioritize",
    title: "She was landing harder on her weaker side",
    body:
      "Thirty-eight, and a decade of injuries she suspected were connected: IT band pain, bursitis, a stress fracture. She had been through physical therapy more than once. Each round treated the one spot. On her left side she had less stability and less range, and she landed nineteen percent harder on it, hundreds of times a week.",
    change:
      "One pattern instead of three separate injuries, characterized precisely enough to put the work in order.",
  },
  {
    tone: "prioritize",
    label: "Prioritize",
    title:
      "Nothing wrong, and the leg carrying more was the one least able to absorb it",
    body:
      "Forty-four, injury free, and he wants to still be running and lifting at seventy. His force production was above the age reference, which is the answer he expected. Tested alone, his right leg matched the left. Tested together, in the two-legged jumps and lifts, the right leg produced more of the force than the left, so it was doing more than half the work on every landing. It was also the stiffer leg at hip and ankle, and the less stable one to stand on. A 5K loads that leg about 2,500 times.",
    change:
      "Twelve weeks of single-leg work on the right leg, starting at forty-four.",
  },
  {
    tone: "track",
    label: "Track first",
    title: "Ninety-second percentile, and thirty percent down in one position",
    body:
      "She is in exceptional shape and the numbers said so. The assessment still characterized two problems she had been living with. One overhead position where her right side produced thirty percent less force. And a left hamstring that was always sore: the left leg tested weaker, and it was also the leg taking more of the load on every landing. Weaker and busier at once is a pattern that fits the soreness.",
    change: "The choice to address both while they are still small.",
  },
];

export function VisualSummary() {
  return (
    <section
      id="findings"
      className="border-b border-[var(--bs-grey-200)] bg-[var(--bs-grey-50)]"
    >
      <div className="mx-auto max-w-[1200px] px-8 py-[86px] max-sm:px-[18px]">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--bs-grey-600)]">
          § 05 · Opportunities
        </span>

        <h2
          className="mt-[18px] max-w-[19ch] text-[clamp(30px,4vw,54px)] uppercase leading-[0.95] tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-antonio), Antonio, sans-serif",
            fontWeight: 600,
          }}
        >
          Which side, in which position, by how much.
        </h2>

        <div className="mt-[28px] max-w-[64ch]">
          <p className="text-[17px] leading-[1.6] text-[var(--bs-grey-800)]">
            A finding is only useful if it is specific enough to act on. Three
            of them, anonymized.
          </p>
        </div>

        <div className="mt-12 flex flex-col">
          {cases.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-[150px_1fr] gap-7 border-t border-[var(--bs-grey-200)] py-[34px] max-[760px]:grid-cols-1"
            >
              <span
                className={[
                      "self-start justify-self-start px-[10px] py-[6px] font-mono text-[10px] uppercase tracking-[0.12em]",
                  item.tone === "track"
                    ? "bg-[var(--bs-warn-soft)] text-[var(--bs-warn)]"
                    : "bg-[var(--bs-indigo-soft)] text-[var(--bs-indigo-deep)]",
                ].join(" ")}
              >
                {item.label}
              </span>

              <div>
                <h3 className="max-w-[24ch] text-[24px] font-semibold leading-[1.25] tracking-[-0.02em] text-[var(--bs-ink)]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[66ch] text-[15.5px] leading-[1.6] text-[var(--bs-grey-600)]">
                  {item.body}
                </p>

                <div className="mt-3 max-w-[66ch] text-[15.5px] leading-[1.6] text-[var(--bs-ink)]">
                  <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--bs-grey-400)]">
                    What it changes
                  </span>

                  {item.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-[34px] max-w-[66ch] border-l-2 border-[var(--bs-grey-400)] pl-4 text-[15px] leading-[1.6] text-[var(--bs-grey-600)]">
          What none of these say is that the training will prevent the next
          injury. The pattern is real and the work is appropriate. The evidence
          for the leap from one to the other is thinner than the field usually
          admits, and the report says so.
        </p>

        <div className="mt-9">
          <Link
            href="#contact"
            className="inline-flex min-h-[52px] items-center border border-[var(--bs-ink)] bg-[var(--bs-ink)] px-[22px] font-mono text-[12px] uppercase tracking-[0.1em] text-white transition-colors hover:bg-[var(--bs-grey-800)]"
          >
            Book an assessment
          </Link>
        </div>
      </div>
    </section>
  );
}