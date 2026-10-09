import { useState } from 'react';
import { Link } from 'react-router';
import Reveal from '../components/Reveal';
import { projects, type Project } from '../data/site';

const filters = ['All', 'Residential', 'Commercial', 'Interiors', 'Hospitality'] as const;

function matches(p: Project, f: (typeof filters)[number]) {
  if (f === 'All') return true;
  if (f === 'Interiors') return p.category === 'Interior';
  return p.category === f;
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const visible = projects.filter((p) => matches(p, filter));

  return (
    <div className="pt-28 md:pt-40">
      <header className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.24em] uppercase text-[var(--terra)] mb-6">Portfolio</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[1.02] text-[var(--ink)]">
            Selected Work
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-base md:text-lg text-[var(--ink-soft)]">
            A collection of spaces shaped by context, material and human experience.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-b border-[var(--line)]" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`relative pb-4 text-[13px] tracking-[0.16em] uppercase transition-colors duration-300 min-h-[44px] ${
                  filter === f ? 'text-[var(--ink)]' : 'text-[var(--ink-soft)]/70 hover:text-[var(--ink)]'
                }`}
              >
                {f}
                <span
                  className={`absolute bottom-0 left-0 h-px w-full bg-[var(--ink)] transition-transform duration-500 origin-left ${
                    filter === f ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </Reveal>
      </header>

      <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24" aria-live="polite">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 90} className={i % 2 === 1 ? 'md:pt-24' : ''}>
              <Link to={`/projects/${p.slug}`} className="project-card group block">
                <div className={`relative overflow-hidden bg-[var(--cream)] ${i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                  <img
                    src={p.thumb}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[var(--ink)]/0 transition-colors duration-500 group-hover:bg-[var(--ink)]/15" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-block bg-[var(--ivory)] px-4 py-2 text-xs tracking-[0.18em] uppercase text-[var(--ink)]">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-2xl md:text-3xl text-[var(--ink)]">{p.title}</h2>
                  <span className="text-xs tracking-[0.18em] uppercase text-[var(--ink-soft)] shrink-0">{p.year}</span>
                </div>
                <p className="mt-1.5 text-sm text-[var(--ink-soft)]">
                  {p.location} · {p.category}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
