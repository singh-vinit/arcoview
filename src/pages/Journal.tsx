import Reveal from '../components/Reveal';
import { articles } from '../data/site';

export default function Journal() {
  const [lead, ...rest] = articles;
  return (
    <div className="pt-28 md:pt-40">
      <header className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.24em] uppercase text-[var(--terra)] mb-6">Journal</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[1.02] text-[var(--ink)]">
            Field Notes
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-base md:text-lg text-[var(--ink-soft)]">
            Essays, research and observations from the studio — on material, light, and the craft of
            making space.
          </p>
        </Reveal>
      </header>

      {/* Lead article */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24">
        <Reveal mask>
          <article className="group relative cursor-pointer overflow-hidden" aria-label={lead.title}>
            <img
              src={lead.image.replace('w=1200', 'w=2000')}
              alt=""
              loading="lazy"
              className="aspect-[16/9] md:aspect-[21/9] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 text-white">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-white/70">
                <span className="text-[var(--sand)]">{lead.category}</span>
                <span aria-hidden="true">·</span>
                <span>{lead.date}</span>
              </div>
              <h2 className="mt-4 max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl">{lead.title}</h2>
              <p className="mt-4 max-w-xl text-sm md:text-base text-white/75">{lead.excerpt}</p>
            </div>
          </article>
        </Reveal>
      </section>

      {/* Article grid */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 pb-24 md:pb-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 80}>
              <article className="project-card group cursor-pointer border-t border-[var(--line)] pt-6" aria-label={a.title}>
                <div className="overflow-hidden bg-[var(--cream)]">
                  <img src={a.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-[var(--ink-soft)]">
                  <span className="text-[var(--terra)]">{a.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{a.date}</span>
                </div>
                <h2 className="mt-3 font-display text-2xl leading-snug text-[var(--ink)]">{a.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{a.excerpt}</p>
                <span className="arrow-link mt-4 inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase text-[var(--ink)]">
                  <span className="relative">
                    Read Article
                    <span className="underline-line absolute -bottom-1 left-0 h-px w-full bg-[var(--ink)]" />
                  </span>
                  <svg className="arrow w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
