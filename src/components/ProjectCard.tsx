import { Link } from 'react-router';
import type { Project } from '../data/site';
import Reveal from './Reveal';

export default function ProjectCard({
  project,
  delay = 0,
  tall = false,
}: {
  project: Project;
  delay?: number;
  tall?: boolean;
}) {
  return (
    <Reveal delay={delay}>
      <Link
        to={`/projects/${project.slug}`}
        className="project-card group block"
        aria-label={`${project.title} — ${project.location}, ${project.category}, ${project.year}`}
      >
        <div className={`relative overflow-hidden bg-[var(--cream)] ${tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
          <img
            src={project.thumb}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--ink)]/0 transition-colors duration-500 group-hover:bg-[var(--ink)]/20" />
          <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ivory)] text-[var(--ink)] opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl md:text-[1.7rem] text-[var(--ink)]">{project.title}</h3>
          <span className="text-xs tracking-[0.18em] uppercase text-[var(--ink-soft)] shrink-0">{project.year}</span>
        </div>
        <p className="mt-1.5 text-sm text-[var(--ink-soft)]">
          {project.location} · {project.category}
        </p>
      </Link>
    </Reveal>
  );
}
