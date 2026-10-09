import Reveal from '../components/Reveal';
import { ArrowLink } from '../components/ui-bits';
import { stats, team, timeline, heroImages } from '../data/site';

export default function About() {
  return (
    <div>
      {/* Hero statement */}
      <header className="mx-auto max-w-[1440px] px-5 md:px-10 pt-36 md:pt-52 pb-20 md:pb-32">
        <Reveal>
          <p className="text-xs tracking-[0.24em] uppercase text-[var(--terra)] mb-8">About ARCO</p>
        </Reveal>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.6rem] leading-[1.12] text-[var(--ink)] max-w-5xl">
          <Reveal as="span" className="block">We don’t simply design buildings.</Reveal>
          <Reveal as="span" delay={140} className="block text-[var(--ink-soft)]">
            We design how people experience them.
          </Reveal>
        </h1>
      </header>

      {/* Studio story — asymmetric */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 pb-24 md:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="aspect-[3/4] overflow-hidden bg-[var(--cream)]">
                <img
                  src={heroImages.about}
                  alt="ARCO studio — architectural detail"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-24">
            <Reveal>
              <h2 className="text-xs tracking-[0.24em] uppercase text-[var(--terra)] mb-6">Our Story</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lg md:text-xl leading-relaxed text-[var(--ink)]">
                ARCO began in 2014 in a two-room studio in Shahpur Jat, New Delhi — three people, one
                drawing table, and a conviction that Indian architecture deserved spaces as considered
                as its centuries-old courtyards and havelis.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--ink-soft)]">
                Twelve years on, the studio has grown into a fourteen-person practice working across
                residences, workplaces, hospitality and landscape — but the conviction hasn’t changed.
                Every project still begins the same way: with the site, the sun, and the people who
                will call the space theirs.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <h2 className="mt-14 text-xs tracking-[0.24em] uppercase text-[var(--terra)] mb-6">
                Design Philosophy
              </h2>
              <ul className="space-y-5 max-w-lg">
                {[
                  'Light before form — we map the sun before we draw a wall.',
                  'Material honesty — surfaces that age with dignity, not disguise.',
                  'Restraint as richness — fewer elements, each carrying more meaning.',
                  'Context over novelty — buildings that belong to their place.',
                ].map((item) => (
                  <li key={item} className="flex gap-4 text-base md:text-lg text-[var(--ink-soft)]">
                    <span className="mt-2.5 h-px w-6 shrink-0 bg-[var(--terra)]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[var(--line)]" aria-label="Studio statistics">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className={`px-5 md:px-10 py-12 md:py-16 ${i > 0 ? 'border-l border-[var(--line)]' : ''} ${
                i === 2 ? 'max-lg:border-l-0 max-lg:border-t' : ''
              } ${i === 3 ? 'max-lg:border-t' : ''} border-[var(--line)]`}
            >
              <p className="font-display text-5xl md:text-7xl text-[var(--ink)]">{s.value}</p>
              <p className="mt-3 text-xs tracking-[0.2em] uppercase text-[var(--ink-soft)]">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-20 md:py-32">
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs tracking-[0.24em] uppercase text-[var(--terra)]">The Team</span>
            <span className="h-px flex-1 bg-[var(--line)]" aria-hidden="true" />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-6xl text-[var(--ink)] max-w-2xl mb-14 md:mb-20">
            A small studio, by choice.
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80} className={i % 2 === 1 ? 'lg:pt-12' : ''}>
              <div className="project-card group">
                <div className="overflow-hidden bg-[var(--cream)]">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl text-[var(--ink)]">{m.name}</h3>
                <p className="mt-1 text-xs tracking-[0.18em] uppercase text-[var(--ink-soft)]">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[var(--cream)]">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="text-xs tracking-[0.24em] uppercase text-[var(--terra)] mb-6">Timeline</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display text-4xl md:text-5xl text-[var(--ink)]">Twelve years in practice.</h2>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-10">
                  <ArrowLink to="/contact">Work With Us</ArrowLink>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 60}>
                  <div className="grid grid-cols-[70px_1fr] md:grid-cols-[110px_1fr] gap-4 md:gap-8 border-t border-[var(--line)] py-6 md:py-8 last:border-b">
                    <span className="font-display text-xl md:text-2xl text-[var(--terra)]">{t.year}</span>
                    <p className="text-base md:text-lg text-[var(--ink-soft)]">{t.event}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
