export function Contact() {
  return (
    <section
      id="contact"
      className="border-b-0 bg-[var(--bs-grey-900)] text-white"
    >
      <div className="mx-auto max-w-[1200px] px-8 py-[86px] max-sm:px-[18px]">
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
            href="https://tally.so/r/xXZ055"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center border border-[var(--bs-indigo)] bg-[var(--bs-indigo)] px-[22px] font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--bs-ink)] transition-opacity hover:opacity-90"
          >
            I want an assessment
          </a>
        </div>

        <p className="mt-[14px] font-mono text-[13px] tracking-[0.06em] text-[var(--bs-grey-400)]">
          fayazjaffer@basalstrength.com
        </p>
      </div>
    </section>
  );
}