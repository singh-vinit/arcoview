import Reveal from '../components/Reveal';
import { ArrowLink } from '../components/ui-bits';
import { services } from '../data/site';

export default function Services() {
  return (
    <div>
      <header className="mx-auto max-w-[1440px] px-5 md:px-10 pt-36 md:pt-52 pb-16 md:pb-24">
        <Reveal>
          <p className="text-xs tracking-[0.24em] uppercase text-[var(--terra)] mb-8">Services</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[1.02] text-[var(--ink)] max-w-4xl">
            From first sketch to final detail.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-xl text-base md:text-lg text-[var(--ink-soft)]">
            Five disciplines, practiced together — so architecture, interiors and landscape arrive as
            one coherent idea rather than three separate decisions.
          </p>
        </Reveal>
      </header>

      <section className="mx-auto max-w-[1440px] px-5 md:px-10 pb-24 md:pb-36">
        {services.map((s, i) => (
          <div
            key={s.index}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-[var(--line)] py-14 md:py-20 last:border-b items-start"
          >
            <div className="lg:col-span-5">
              <Reveal>
                <span className="font-display text-6xl md:text-8xl text-[var(--sand)]">{s.index}</span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--ink)]">{s.title}</h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed text-[var(--ink-soft)]">
                  {s.description}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <ul className="mt-8 space-y-3">
                  {s.capabilities.map((c) => (
                    <li key={c} className="flex items-baseline gap-4 text-sm md:text-base text-[var(--ink)]">
                      <span className="h-px w-5 shrink-0 translate-y-[-4px] bg-[var(--terra)]" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-first' : ''}`}>
              <Reveal mask delay={100}>
                <div className="overflow-hidden bg-[var(--cream)]">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        ))}

        <Reveal className="mt-20 text-center">
          <ArrowLink to="/contact">Discuss Your Project</ArrowLink>
        </Reveal>
      </section>
    </div>
  );
}
