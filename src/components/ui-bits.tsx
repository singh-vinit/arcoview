import { Link } from 'react-router';
import Reveal from './Reveal';

/** Text link with animated arrow and underline reveal */
export function ArrowLink({ to, children, dark = false }: { to: string; children: string; dark?: boolean }) {
  return (
    <Link
      to={to}
      className={`arrow-link group/link inline-flex items-center gap-3 text-[13px] tracking-[0.16em] uppercase ${
        dark ? 'text-[var(--ivory)]' : 'text-[var(--ink)]'
      }`}
    >
      <span className="relative">
        {children}
        <span
          className={`underline-line absolute -bottom-1.5 left-0 h-px w-full ${dark ? 'bg-[var(--ivory)]' : 'bg-[var(--ink)]'}`}
        />
      </span>
      <svg className="arrow w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    </Link>
  );
}

/** Editorial section header: small label + rule, then display heading */
export function SectionHeader({
  label,
  title,
  className = '',
}: {
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs tracking-[0.24em] uppercase text-[var(--terra)]">{label}</span>
          <span className="h-px flex-1 bg-[var(--line)]" aria-hidden="true" />
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-[var(--ink)] max-w-3xl">{title}</h2>
      </Reveal>
    </div>
  );
}
