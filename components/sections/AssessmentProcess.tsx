const reasons = [
  {
    quote: '"I want to still be doing all of this at 70."',
    answer:
      "How fast the ceiling is dropping, and how much of the descent is still yours to reverse.",
  },
  {
    quote: '"I keep getting hurt and I don\'t know why."',
    answer: "Which side, in which position, by how much.",
  },
  {
    quote:
      '"I stopped for a few years, or never really started. Either way, I want in."',
    answer:
      "Which part of your strength is furthest behind, because that is where the first twelve weeks go.",
  },
  {
    quote:
      '"I want to keep up with them now, and get off the floor on my own later."',
    answer:
      "Balance and control rather than force. Those track what you are actually worried about.",
  },
  {
    quote: '"I have a number in mind, and a date on it."',
    answer:
      "The gap between the force you can produce and the force that shows up in the lift.",
  },
  {
    quote: '"I need to know which limits to respect and which to attack."',
    answer: "Which limits are structural and which are trainable.",
  },
  {
    quote: '"I am losing weight. I do not want to lose strength with it."',
    answer:
      "Whether the strength that muscle produces is holding, which is a different measurement from how much muscle is left.",
  },
  {
    quote: '"I want to know how much is actually enough."',
    answer:
      "Sometimes the finding is that you are already there, and the report says so.",
  },
];

export function AssessmentProcess() {
  return (
    <section
      id="whofor"
      className="border-b border-[var(--bs-grey-200)] bg-white"
    >
      <div className="mx-auto max-w-[1200px] px-8 py-[86px] max-sm:px-[18px]">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--bs-grey-600)]">
          § 04 · Who this is for
        </span>

        <h2
          className="mt-[18px] max-w-[19ch] uppercase text-[clamp(30px,4vw,54px)] font-semibold leading-[0.95] tracking-[-0.01em] text-[var(--bs-ink)]"
          style={{
            fontFamily: "var(--font-antonio), Antonio, sans-serif",
          }}
        >
          Different reasons. One question.
        </h2>

        <ul className="mt-[26px] grid max-w-[900px] list-none grid-cols-1 gap-x-10 gap-y-[14px] p-0 md:grid-cols-2">
          {reasons.map((item) => (
            <li
              key={item.quote}
              className="border-l-2 border-[var(--bs-indigo)] pl-[14px]"
            >
              <p
                className="text-[19px] italic leading-[1.35] text-[var(--bs-ink)]"
                style={{
                  fontFamily:
                    "var(--font-gelasio), Gelasio, Georgia, serif",
                }}
              >
                {item.quote}
              </p>

              <span className="mt-[6px] block text-[14px] not-italic leading-[1.5] text-[var(--bs-grey-600)]">
                {item.answer}
              </span>
            </li>
          ))}
        </ul>

        <h3
          className="mt-[38px] max-w-[22ch] uppercase text-[clamp(24px,3vw,40px)] font-semibold leading-[0.95] tracking-[-0.01em] text-[var(--bs-ink)]"
          style={{
            fontFamily: "var(--font-antonio), Antonio, sans-serif",
          }}
        >
          How strong do I need to be to do the things I love, and for how long?
        </h3>

        <p className="mt-[18px] max-w-[64ch] text-[17px] leading-[1.6] text-[var(--bs-grey-800)]">
          That is the question this company was started on, and it can be
          measured. The assessment is the same for all eight. What changes is
          what the measurement is for.
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