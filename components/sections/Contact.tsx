export function Contact() {
  return (
    <section
      id="contact"
      className="border-b-0 bg-[var(--bs-grey-900)] text-white"
    >
      <div className="mx-auto max-w-[1200px] px-8 py-[64px] max-sm:px-[18px]">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--bs-indigo)]">
          Contact
        </span>

        <h2
          className="mt-[18px] max-w-[26ch] text-[clamp(24px,3.2vw,38px)] font-medium italic leading-[1.2] tracking-normal text-white"
          style={{
            fontFamily: "var(--font-gelasio), Gelasio, Georgia, serif",
          }}
        >
          If there is something you love doing and you are not sure your body
          will keep letting you, I would like to talk.
        </h2>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="mailto:fayazjaffer@basalstrength.com?subject=Basal%20Strength%20assessment"
            className="inline-flex items-center justify-center bg-[var(--bs-indigo)] px-[22px] py-[14px] font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-[var(--bs-ink)]"
          >
            I want an assessment
          </a>

          <a
            href="mailto:fayazjaffer@basalstrength.com?subject=Basal%20Strength%20physician%20or%20practitioner"
            className="inline-flex items-center justify-center border border-white/80 px-[22px] py-[14px] font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-white"
          >
            I am a physician or practitioner
          </a>
        </div>

        <p className="mt-3 max-w-[64ch] text-[14px] leading-[1.55] text-[var(--bs-grey-400)]">
          Two fields, not a questionnaire: what you want your body to keep
          doing, and where it is not cooperating.
          <br />
          Referred by someone? Say who sent you and skip the rest.
        </p>

        <a
          href="mailto:fayazjaffer@basalstrength.com"
          className="mt-4 inline-block font-mono text-[14px] tracking-[0.04em] text-[var(--bs-grey-400)]"
        >
          fayazjaffer@basalstrength.com
        </a>
      </div>
    </section>
  );
}