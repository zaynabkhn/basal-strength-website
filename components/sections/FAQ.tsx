const faqs = [
  {
    question: "Do you diagnose or treat?",
    answer:
      "No. We measure and report. The findings are written for the people who do the treating and the training: your physician, your physical therapist, your trainer. When something in the data needs clinical eyes, the report says so, and says why.",
  },
  {
    question: "Do you write my training program?",
    answer:
      "No, and the line is deliberate. The report gives the order of work: what to address first, what is bounded, what can wait. The programming comes from your trainer or physical therapist, built on the report.",
  },
  {
    question: "What if I need someone to treat me, or to train me?",
    answer:
      "We keep a network of physicians, physical therapists and trainers in Austin we trust, who know how to read our reports, and we will introduce you. We accept no commission or referral fee for any introduction we make, and we do not pay for clients. We are paid for the assessment and nothing else.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "No. Most people book directly. If a physician or a physical therapist sent you, tell us who, and we will build their questions into the session.",
  },
  {
    question: "What happens after the test?",
    answer:
      "We walk you through the report together and set a retest date, twelve to sixteen weeks out. At the retest we measure the areas you were working on and say whether the change clears the measure's margin of error.",
  },
  {
    question: "What if a test is not safe for me?",
    answer:
      "We do not run it. A physical therapist is in the room for the whole session, every test is scaled to your ability, and the report names anything we skipped and why.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-b border-[var(--bs-grey-200)] bg-white"
    >
      <div className="mx-auto max-w-[1200px] px-8 py-[86px] max-sm:px-[18px]">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--bs-grey-600)]">
          § 06 · FAQ
        </span>

        <h2
          className="mt-[18px] max-w-[19ch] text-[clamp(30px,4vw,54px)] uppercase leading-[0.95] tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-antonio), Antonio, sans-serif",
            fontWeight: 600,
          }}
        >
          Where we stop, and what happens after.
        </h2>

        <div className="mt-[30px] grid max-w-[820px] gap-[26px]">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="mb-2 text-[18px] font-semibold text-[var(--bs-ink)]">
                {faq.question}
              </h3>

              <p className="text-[15.5px] leading-[1.6] text-[var(--bs-grey-600)]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}