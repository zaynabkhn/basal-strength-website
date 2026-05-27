import { Button } from "../ui/Button";

const inquiryTypes = [
  "Prospective client",
  "Practitioner referral",
  "Press or other",
];

export function Contact() {
  return (
    <section id="assessment" className="border-b border-[var(--bs-border)] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-20 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="bs-eyebrow mb-6 text-[var(--bs-grey-600)]">
              Contact
            </p>

            <h2 className="max-w-[560px] text-[56px] font-semibold leading-[0.95] tracking-[-0.045em] text-[var(--bs-ink)]">
              Start with an inquiry.
            </h2>

            <p className="mt-8 max-w-[520px] text-[22px] leading-[1.65] text-[var(--bs-grey-600)]">
              Tell us who you are, what you are trying to understand, and how
              Basal Strength may be useful. A founder will reply personally.
            </p>
          </div>

          <form className="border border-[var(--bs-grey-300)] bg-white p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="bs-eyebrow">Name</label>
                <input
                  className="mt-3 w-full border border-[var(--bs-grey-300)] bg-[var(--bs-grey-100)] px-5 py-4 text-[15px] text-[var(--bs-ink)] outline-none transition-colors duration-200 placeholder:text-[var(--bs-grey-500)] focus:border-[var(--bs-indigo)]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="bs-eyebrow">Email</label>
                <input
                  className="mt-3 w-full border border-[var(--bs-grey-300)] bg-[var(--bs-grey-100)] px-5 py-4 text-[15px] text-[var(--bs-ink)] outline-none transition-colors duration-200 placeholder:text-[var(--bs-grey-500)] focus:border-[var(--bs-indigo)]"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="bs-eyebrow">Inquiry type</label>

              <div className="mt-3 flex flex-wrap gap-3">
                {inquiryTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className="rounded-full border border-[var(--bs-grey-300)] px-5 py-3 text-sm font-medium transition-all duration-200 hover:border-[var(--bs-indigo)] hover:text-[var(--bs-indigo)]"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <label className="bs-eyebrow">Message</label>
              <textarea
                className="mt-3 min-h-[180px] w-full border border-[var(--bs-grey-300)] bg-[var(--bs-grey-100)] px-5 py-4 text-[15px] leading-7 text-[var(--bs-ink)] outline-none transition-colors duration-200 placeholder:text-[var(--bs-grey-500)] focus:border-[var(--bs-indigo)]"
                placeholder="What are you trying to understand?"
              />
            </div>

            <div className="mt-8 flex flex-col gap-6 border-t border-[var(--bs-grey-200)] pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[420px] text-[15px] leading-7 text-[var(--bs-grey-600)]">
                This form is a visual placeholder for now. We’ll wire it to
                email after the layout is approved.
              </p>

              <Button>Submit inquiry</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}