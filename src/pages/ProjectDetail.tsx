import { Navigate, useParams, Link } from 'react-router';
import Reveal from '../components/Reveal';
import { projects } from '../data/site';

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/projects" replace />;
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      {/* Hero */}
      <header className="relative h-[70vh] md:h-[88vh] overflow-hidden">
        <img
          src={p.hero}
          alt={p.title}
          className="hero-image-in h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1440px] px-5 md:px-10 pb-12 md:pb-16 text-white">
          <p className="hero-line mb-4 text-xs tracking-[0.24em] uppercase text-white/70">
            <span style={{ '--line-delay': '200ms' } as never}>
              {p.location} · {p.category} · {p.year}
            </span>
          </p>
          <h1 className="font-display text-[12vw] sm:text-7xl lg:text-8xl leading-[1.02]">
            <span className="hero-line"><span style={{ '--line-delay': '350ms' } as never}>{p.title}</span></span>
          </h1>
        </div>
      </header>

      {/* Overview + info */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs tracking-[0.24em] uppercase text-[var(--terra)] mb-6">Overview</p>
            </Reveal>
            <Reveal delay={80}>
              <p className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.35] text-[var(--ink)]">
                {p.description}
              </p>
            </Reveal>
            <Reveal delay={160}>
              <h2 className="mt-14 text-xs tracking-[0.24em] uppercase text-[var(--terra)] mb-6">Design Approach</h2>
              <p className="max-w-xl text-base md:text-lg leading-relaxed text-[var(--ink-soft)]">{p.approach}</p>
            </Reveal>
            <Reveal delay={220}>
              <h2 className="mt-14 text-xs tracking-[0.24em] uppercase text-[var(--terra)] mb-6">Materials</h2>
              <ul className="flex flex-wrap gap-3">
                {p.materials.map((m) => (
                  <li key={m} className="border border-[var(--line)] px-4 py-2 text-sm text-[var(--ink)]">
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={120}>
              <dl className="border-t border-[var(--ink)]">
                {[
                  ['Area', p.area],
                  ['Year', p.year],
                  ['Location', p.location],
                  ['Type', p.category],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between border-b border-[var(--line)] py-5">
                    <dt className="text-xs tracking-[0.2em] uppercase text-[var(--ink-soft)]">{k}</dt>
                    <dd className="font-display text-xl text-[var(--ink)]">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 pb-20 md:pb-32" aria-label="Gallery">
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs tracking-[0.24em] uppercase text-[var(--terra)]">Gallery</span>
            <span className="h-px flex-1 bg-[var(--line)]" aria-hidden="true" />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {p.gallery.map((g, i) => (
            <Reveal
              key={g}
              mask
              delay={(i % 2) * 100}
              className={
                i === 0
                  ? 'md:col-span-12'
                  : i % 2 === 1
                    ? 'md:col-span-7'
                    : 'md:col-span-5'
              }
            >
              <div className="overflow-hidden bg-[var(--cream)]">
                <img
                  src={g}
                  alt={`${p.title} — view ${i + 1}`}
                  loading="lazy"
                  className={`w-full object-cover ${i === 0 ? 'aspect-[16/9]' : i % 2 === 1 ? 'aspect-[4/3]' : 'aspect-[3/4] md:aspect-[4/5]'}`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Next project */}
      <Link to={`/projects/${next.slug}`} className="group block bg-[var(--ink)] text-[var(--ivory)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10 py-14 md:py-20">
          <div>
            <p className="text-xs tracking-[0.24em] uppercase text-white/50 mb-3">Next Project</p>
            <p className="font-display text-3xl sm:text-5xl lg:text-6xl transition-transform duration-500 group-hover:translate-x-3">
              {next.title}
            </p>
          </div>
          <svg
            className="w-8 h-8 md:w-12 md:h-12 shrink-0 transition-transform duration-500 group-hover:translate-x-3"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </Link>
    </article>
  );
}
