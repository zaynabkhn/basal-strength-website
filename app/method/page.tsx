import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";

const steps = [
  {
    number: "01",
    title: "Intake & history",
    description:
      "What you want your body to still be doing, where it has hurt, what your physician, or whoever leads your care, is already managing, old injuries included. This conversation decides what the numbers mean later, so it is part of the work rather than paperwork before it.",
    when: "30 min · before",
  },
  {
    number: "02",
    title: "Measurement",
    description:
      "Range of motion at hips, shoulders, and ankles, measured with a goniometer. Grip on a dynamometer, both hands. On VALD force plates you jump, land, balance with your eyes closed, and pull against a fixed bar, so the plates record how much force each side produces and how fast. Under load, a velocity sensor reads bar speed, which gives us your lifts without a maximal attempt. A DEXA scan, booked by us before your session, gives us the muscle. A physical therapist watches all of it.",
    when: "2 hrs · testing",
  },
  {
    number: "03",
    title: "The report",
    description:
      "Where your strength stands, part by part, what is holding each part back, and what to fix first. Written so you, your physician, your physical therapist and your trainer are reading the same document.",
    when: "Written",
  },
  {
    number: "04",
    title: "Retest",
    description:
      "We compare you to you. Every measure carries a margin of error, and we only call something a change when it clears that margin.",
    when: "12 to 16 weeks",
  },
];

const reportRows = [
  {
    label: "Power",
    value: "48th percentile",
  },
  {
    label: "Force, maximal",
    value: "98th percentile",
  },
  {
    label: "Force, expressed",
    value: "below what maximal predicts",
    accent: true,
  },
  {
    label: "Muscle mass · DEXA",
    value: "63rd percentile, age & sex",
  },
  {
    label: "Limiters",
    value: (
      <>
        R hip int. rotation 22° vs 40° ref
        <br />
        19% landing difference, L vs R
      </>
    ),
  },
  {
    label: "Order of work",
    value: "Prioritize · Track first · On hold",
  },
  {
    label: "Next measurement",
    value: "12 to 16 weeks",
  },
];

export default function MethodPage() {
  return (
    <>
      <Header />

      <main>
        <section
          id="method"
          className="border-b border-[var(--bs-grey-200)] bg-[var(--bs-grey-50)]"
        >
          <div className="mx-auto max-w-[1200px] px-8 py-[86px] max-sm:px-[18px]">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--bs-grey-600)]">
              Method &amp; people · The method
            </span>

            <h1
              className="mt-[18px] max-w-[19ch] uppercase text-[clamp(30px,4vw,54px)] font-semibold leading-[0.95] tracking-[-0.01em] text-[var(--bs-ink)]"
              style={{
                fontFamily: "var(--font-antonio), Antonio, sans-serif",
              }}
            >
              Measure. Interpret. Sequence. Retest.
            </h1>

            <div className="mt-7 max-w-[64ch] text-[17px] leading-[1.6] text-[var(--bs-grey-800)]">
              <p>
                Everything gets written down, including what we could not
                measure, and every number you are compared against has a source
                we name.
              </p>
            </div>

            <div className="mt-12 grid gap-px border border-[var(--bs-grey-200)] bg-[var(--bs-grey-200)] md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="flex min-h-[280px] flex-col bg-white px-6 py-7"
                >
                  <span
                    className="text-[40px] font-semibold leading-none text-[var(--bs-grey-200)]"
                    style={{
                      fontFamily: "var(--font-antonio), Antonio, sans-serif",
                    }}
                  >
                    {step.number}
                  </span>

                  <h2 className="mt-3 text-[21px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--bs-ink)]">
                    {step.title}
                  </h2>

                  <p className="mt-3 text-[14.5px] leading-[1.6] text-[var(--bs-grey-600)]">
                    {step.description}
                  </p>

                  <span className="mt-auto pt-5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--bs-grey-400)]">
                    {step.when}
                  </span>
                </article>
              ))}
            </div>

            <p className="mt-[26px] max-w-[66ch] border-l-2 border-[var(--bs-indigo)] pl-4 text-[15px] leading-[1.6] text-[var(--bs-grey-600)]">
              We change the protocol to fit you. If a test is not safe for you,
              we do not run it, and the report says which one and why. If no
              published reference exists for someone your age and sex, we say
              the comparison was constructed, and name what it was built from.
            </p>
          </div>
        </section>

        <section
          id="report"
          className="border-b border-[var(--bs-grey-200)] bg-white"
        >
          <div className="mx-auto max-w-[1200px] px-8 py-[86px] max-sm:px-[18px]">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--bs-grey-600)]">
              Method &amp; people · The report
            </span>

            <h2
              className="mt-[18px] max-w-[19ch] uppercase text-[clamp(30px,4vw,54px)] font-semibold leading-[0.95] tracking-[-0.01em] text-[var(--bs-ink)]"
              style={{
                fontFamily: "var(--font-antonio), Antonio, sans-serif",
              }}
            >
              One picture, and everyone works from it.
            </h2>

            <div className="mt-12 grid gap-[60px] lg:grid-cols-2 lg:items-start">
              <div className="max-w-[64ch] space-y-4 text-[17px] leading-[1.6] text-[var(--bs-grey-800)]">
                <p>
                  The report comes from the person who ran the session, and the
                  raw data and every reference population are in the back.
                </p>

                <p>
                  Sometimes the answer is that something is not within reach, or
                  not yet. Sometimes it is that what you came in worried about
                  is already fine. The report says either one plainly, and says
                  what to do about the rest. You will not finish it cured, and
                  nobody will tell you the plan is conservative because they
                  have given up on what you want.
                </p>

                <p>
                  Percentiles come from named reference populations: BodySpec,
                  NHANES, VALD, and published norms. Every source is cited.
                </p>

                
              </div>

              <div className="bg-[var(--bs-ink)] px-[30px] py-[34px] text-white">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--bs-indigo)]">
                  Sample · four parts vs. reference
                </div>

                <div className="mt-5">
                  {reportRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between gap-5 border-b border-[var(--bs-grey-800)] py-[11px] last:border-b-0"
                    >
                      <span className="pt-[2px] font-mono text-[10.5px] uppercase tracking-[0.08em] text-[var(--bs-grey-600)]">
                        {row.label}
                      </span>

                      <span
                        className={`text-right font-mono text-[13px] leading-[1.45] ${
                          row.accent
                            ? "text-[var(--bs-indigo)]"
                            : "text-[var(--bs-grey-200)]"
                        }`}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="people"
          className="border-b border-[var(--bs-grey-200)] bg-[var(--bs-grey-50)]"
        >
          <div className="mx-auto max-w-[1200px] px-8 py-[86px] max-sm:px-[18px]">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--bs-grey-600)]">
              Method &amp; people · The people
            </span>

            <h2
              className="mt-[18px] max-w-[19ch] uppercase text-[clamp(30px,4vw,54px)] font-semibold leading-[0.95] tracking-[-0.01em] text-[var(--bs-ink)]"
              style={{
                fontFamily: "var(--font-antonio), Antonio, sans-serif",
              }}
            >
              The instruments are the easy half.
            </h2>

            <div className="mt-7 flex max-w-[64ch] flex-col gap-4 text-[17px] leading-[1.6] text-[var(--bs-grey-800)]">
              <p>
                Force plates are precise, and precision is not the hard part. A
                plate records one moment, and that record does not include your
                fears, your medications, or what has changed since last time.
              </p>

              <p className="text-[20px] font-medium text-[var(--bs-ink)]">
                Three people hold what the plate does not. Two are in the room
                with you. The third is a physician: the one whose practice you
                came through, or your own.
              </p>
            </div>

            <div className="mt-12 grid gap-px border border-[var(--bs-grey-200)] bg-[var(--bs-grey-200)] lg:grid-cols-3">
              <article className="flex flex-col gap-3 bg-white px-7 py-8">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--bs-indigo-deep)]">
                  Runs the session and writes the report
                </span>

                <h3
                  className="text-[30px] font-semibold uppercase leading-none text-[var(--bs-ink)]"
                  style={{
                    fontFamily: "var(--font-antonio), Antonio, sans-serif",
                  }}
                >
                  Fayaz Jaffer
                </h3>

                <span className="-mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--bs-grey-400)]">
                  Basal Strength · Founder
                </span>

                <p className="text-[14.5px] leading-[1.6] text-[var(--bs-grey-600)]">
                  I run your session, and I build your report with an AI model
                  we have trained to our reporting discipline: every claim sized
                  to the evidence, every number carrying its source. Nothing
                  reaches you that I have not reviewed line by line and stand
                  behind.
                </p>

                <p className="text-[14.5px] leading-[1.6] text-[var(--bs-grey-600)]">
                  I ask about your training and your injuries, what worries you,
                  and what you would like to still be doing in twenty years. I
                  ask while we are testing, not on a form. Without it, the
                  numbers have nothing to be measured against.
                </p>

                <p className="text-[14.5px] leading-[1.6] text-[var(--bs-grey-600)]">
                  For twenty-one years I built strategies and roadmaps for
                  companies. Yours is smaller, and it matters more: what to fix
                  first, in what sequence, and a date to check it against.
                </p>

                <div className="mt-auto border-t border-[var(--bs-grey-200)] pt-4 text-[14px] leading-[1.55] text-[var(--bs-ink)]">
                  <b className="mb-[6px] block font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--bs-grey-400)]">
                    What I do
                  </b>
                  Measure, read it against you rather than against the
                  population, write it down, and sit with you while you read it.
                </div>
              </article>

              <article className="flex flex-col gap-3 bg-white px-7 py-8">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--bs-indigo-deep)]">
                  Safety and how you move
                </span>

                <h3
                  className="text-[30px] font-semibold uppercase leading-none text-[var(--bs-ink)]"
                  style={{
                    fontFamily: "var(--font-antonio), Antonio, sans-serif",
                  }}
                >
                  A physical therapist
                </h3>

                <span className="-mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--bs-grey-400)]">
                  In the room, the whole session
                </span>

                <p className="text-[14.5px] leading-[1.6] text-[var(--bs-grey-600)]">
                  Before anything is loaded, he decides what is safe to test and
                  scales each test to your ability. Then he runs the
                  measurements with you: the joint angles, the grip trials, the
                  positions on the plate.
                </p>

                <p className="text-[14.5px] leading-[1.6] text-[var(--bs-grey-600)]">
                  While you work, he is watching your mechanics. A person
                  watching sees the side that gives out only once you are tired,
                  the form that changes as load climbs, and the compensation
                  that points to an old injury you did not think to mention.
                  Nothing gets written down until it matches what he saw.
                </p>

                <div className="mt-auto border-t border-[var(--bs-grey-200)] pt-4 text-[14px] leading-[1.55] text-[var(--bs-ink)]">
                  <b className="mb-[6px] block font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--bs-grey-400)]">
                    What he does
                  </b>
                  Takes the measurements, guards your form, holds every test
                  inside your ability, and sees what no instrument records.
                </div>
              </article>

              <article className="flex flex-col gap-3 bg-white px-7 py-8">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--bs-indigo-deep)]">
                  Everything else in your health
                </span>

                <h3
                  className="text-[30px] font-semibold uppercase leading-none text-[var(--bs-ink)]"
                  style={{
                    fontFamily: "var(--font-antonio), Antonio, sans-serif",
                  }}
                >
                  A physician
                </h3>

                <span className="-mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--bs-grey-400)]">
                  The practice you came through, or your own
                </span>

                <p className="text-[14.5px] leading-[1.6] text-[var(--bs-grey-600)]">
                  Holds what no instrument holds: your history, your
                  medications, your labs, and the reasons you came.
                </p>

                <p className="text-[14.5px] leading-[1.6] text-[var(--bs-grey-600)]">
                  When the assessment runs inside a physician&apos;s practice,
                  that physician reviews your conditions before the day, can
                  change what we test because of them, and reads the findings
                  before you do. When you book directly, the report is written
                  to be read next to their workup.
                </p>

                <div className="mt-auto border-t border-[var(--bs-grey-200)] pt-4 text-[14px] leading-[1.55] text-[var(--bs-ink)]">
                  <b className="mb-[6px] block font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--bs-grey-400)]">
                    What they do
                  </b>
                  The judgment about your life is theirs, not the
                  machine&apos;s. We supply the measurement it was missing.
                </div>
              </article>
            </div>

            <div className="mt-7 flex max-w-[64ch] flex-col gap-4 text-[17px] leading-[1.6] text-[var(--bs-grey-800)]">
              <p className="text-[20px] font-medium text-[var(--bs-ink)]">
                Precision is what the instruments give us, and it is the part
                you can buy.
              </p>

              <p>
                If you do not have a physician or a therapist, we can point you
                toward people in Austin who read these reports. We take nothing
                for the introduction.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}