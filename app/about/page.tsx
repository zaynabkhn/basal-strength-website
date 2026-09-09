import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-[var(--bs-grey-900)] text-[var(--bs-grey-200)]">
          <div className="mx-auto max-w-[1200px] px-8 py-[86px] max-sm:px-[18px]">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--bs-indigo)]">
              About · The founder
            </span>

            <h1
              className="mt-[18px] max-w-[20ch] text-[clamp(26px,3.4vw,42px)] font-medium italic leading-[1.12] tracking-normal text-white"
              style={{
                fontFamily: "var(--font-gelasio), Gelasio, Georgia, serif",
              }}
            >
              I want to be strong enough to be in the game with my kids, not on
              the sidelines.
            </h1>

            <div className="mt-[26px] grid items-start gap-10 md:grid-cols-[minmax(220px,300px)_minmax(0,1fr)]">
              <figure>
                <Image
                  src="/handoff/founder-london-aug-2026.jpg"
                  alt="Fayaz Jaffer with his daughter on his shoulders in London"
                  width={900}
                  height={1200}
                  className="h-auto w-full rounded-md"
                  priority
                />

                <figcaption className="mt-[10px] font-mono text-[11px] tracking-[0.06em] text-[var(--bs-grey-600)]">
                  London, August 2026.
                </figcaption>
              </figure>

              <div className="flex max-w-[64ch] flex-col gap-4 text-[17px] leading-[1.6] text-[var(--bs-grey-400)]">
                <p className="text-[20px] font-medium text-white">
                  I am 46, and an older dad. That is my reason. Everyone has
                  one.
                </p>

                <p>
                  The first client was me. At forty my back hurt all the time
                  and a twice-repaired knee kept breaking down. Staying active
                  was central to who I was, and I was on my way out of it. The
                  imaging showed some abnormalities and nothing concrete. I
                  started with a personal trainer and kept injuring myself.
                </p>

                <p>
                  What finally worked wasn&apos;t a new exercise or another
                  program. It was measurement. And people who knew what to do
                  with it. A trainer who noticed I kept getting hurt sent me to
                  a physical therapist who would treat the whole chain instead
                  of the one spot. He produced the numbers that finally
                  explained it: a thirty percent strength asymmetry between my
                  legs behind the knee issues, a torn labrum from guarding that
                  knee by braking with my hip instead, and back pain from an SI
                  joint absorbing the imbalance. Force plates, dynamometers and
                  DEXA measured whether any of it was working.
                </p>

                <p>
                  In December 2024 I sat on a surfboard in Santa Teresa. Four
                  years of work, to understand how to fix the asymmetries, learn
                  the right movements and gain the strength to do a thing I
                  loved. I said a silent prayer of thanks for the opportunity to
                  be the Dad on the wave, with my son and daughter looking on.
                </p>
              </div>
            </div>

            <figure className="mt-[34px] max-w-[820px]">
              <Image
                src="/handoff/surf-santa-teresa-dec-2024.jpg"
                alt="Riding a wave at Santa Teresa, December 2024"
                width={1600}
                height={900}
                className="h-auto w-full rounded-md"
              />

              <figcaption className="mt-[10px] font-mono text-[11px] tracking-[0.06em] text-[var(--bs-grey-600)]">
                One of the waves from that day. Santa Teresa, December 2024.
              </figcaption>
            </figure>

            <div className="mt-7 flex max-w-[64ch] flex-col gap-4 text-[17px] leading-[1.6] text-[var(--bs-grey-400)]">
              <p className="text-[20px] font-medium text-white">
                My motivation is to be on that surfboard, with them in the
                water, as long as I possibly can.
              </p>

              <p>
                Life is rarely linear. After being the strongest I have ever
                been, I tore my ACL in January 2026, skiing. The same system is
                helping me build back, because I knew how strong I was and I
                know how strong I need to be. That is what motivates me, and it
                is how I measure whether I am getting there.
              </p>
            </div>

            <figure className="mt-[34px] max-w-[700px]">
              <Image
                src="/handoff/chart-about-muscle-vs-force.svg"
                alt="Two line charts comparing changes in muscle mass and force in each leg from November 2025 to August 2026"
                width={820}
                height={840}
                className="h-auto w-full rounded-md border border-[var(--bs-grey-800)]"
              />

              <figcaption className="mt-[10px] font-mono text-[11px] tracking-[0.06em] text-[var(--bs-grey-600)]">
                Percent change from November 2025. Muscle: leg lean mass, DEXA,
                four dates. Force: peak force, dynamometer, five dates. Right
                leg not tested in August.
              </figcaption>
            </figure>

            <div className="mt-7 flex max-w-[64ch] flex-col gap-4 text-[17px] leading-[1.6] text-[var(--bs-grey-400)]">
              <p>
                The chart is my own legs, November to August. On both legs the
                muscle went down, 8% on the left and 3% on the right. On both
                legs the force went up, 3% on the left and 24% on the right.
                The left is the leg with the rebuilt ACL. Muscle and force are
                not the same number, and here they moved in opposite directions
                on the same dates. That is why we measure them separately.
              </p>
            </div>

            <div className="mt-7 flex max-w-[64ch] flex-col gap-4 text-[17px] leading-[1.6] text-[var(--bs-grey-400)]">
              <p className="text-[20px] font-medium text-white">
                That system took a great deal of luck, curiosity and grit to
                assemble. Basal Strength exists so it does not have to be built
                one person at a time.
              </p>

              <p>
                I spent twenty-one years at EY and left as a partner. Basal
                Strength came after, but the work behind it started at forty, on
                my own body. I am not a clinician. That is why a physical
                therapist is in the room for every session, and why the report
                is built to give your physician what they need.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}