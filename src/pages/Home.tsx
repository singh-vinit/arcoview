import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import { ArrowLink, SectionHeader } from '../components/ui-bits';
import { projects, articles, services, stats, heroImages } from '../data/site';

function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        if (imgRef.current) {
          imgRef.current.style.transform = `translateY(${window.scrollY * 0.22}px)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[560px] overflow-hidden" aria-label="Hero">
      <div ref={imgRef} className="absolute inset-0 -bottom-24 will-change-transform">
        <img
          src={heroImages.home}
          alt="Contemporary villa designed by ARCO"
          className="hero-image-in h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/25" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-end px-5 pb-20 md:px-10 md:pb-16">
        <div className="grid w-full items-end gap-10 md:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] md:gap-16">
          <div>
            <p className="hero-line mb-5 text-xs tracking-[0.3em] uppercase text-white/70">
              <span style={{ '--line-delay': '150ms' } as never}>Architecture · Interiors · Spaces</span>
            </p>
            <h1 className="font-display text-[15vw] leading-[0.95] tracking-[-0.03em] text-white sm:text-[11vw] lg:text-[7.5rem]">
              <span className="hero-line"><span style={{ '--line-delay': '250ms' } as never}>Architecture</span></span>
              <span className="hero-line"><span style={{ '--line-delay': '380ms' } as never}>that feels</span></span>
              <span className="hero-line"><span style={{ '--line-delay': '510ms' } as never}>different.</span></span>
            </h1>
          </div>

          <div className="hero-line max-w-sm md:mb-1">
            <span style={{ '--line-delay': '680ms' } as never}>
              <p className="max-w-xs text-base leading-relaxed text-white/80 md:text-lg">
                Thoughtful spaces, shaped by light, material and human experience.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center bg-white px-7 py-3.5 text-[13px] tracking-[0.16em] uppercase text-[var(--ink)] transition-colors duration-300 hover:bg-[var(--terra)] hover:text-white"
                >
                  Explore Projects
                </Link>
                <Link
                  to="/contact"
                  className="arrow-link inline-flex items-center gap-2 text-[13px] tracking-[0.16em] uppercase text-white"
                >
                  Start a Project
                  <span className="arrow text-base" aria-hidden="true">↗</span>
                </Link>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-5 z-10 flex items-center gap-3 text-white/70 md:right-10">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="scroll-indicator-line block h-10 w-px bg-white/70" aria-hidden="true" />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-24 md:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs tracking-[0.24em] uppercase text-[var(--terra)] mb-8">The Studio</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-[3.6rem] leading-[1.15] text-[var(--ink)]">
              We believe the best spaces don’t simply look beautiful.{' '}
              <span className="text-[var(--ink-soft)]">They change how you feel.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-lg text-base md:text-lg leading-relaxed text-[var(--ink-soft)]">
              ARCO is a contemporary architecture and interior design studio creating thoughtful
              residential, commercial and hospitality spaces. For twelve years we have designed homes,
              workplaces and retreats across India — each one shaped by its site, its light, and the
              people who will live within it.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-10">
              <ArrowLink to="/about">About the Studio</ArrowLink>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5 lg:pl-8">
          <Reveal mask>
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
                alt="Sunlit interior with natural materials"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 text-xs tracking-[0.18em] uppercase text-[var(--ink-soft)]">
              Casa Verde, Goa — courtyard at first light
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SelectedProjects() {
  const featured = projects.slice(0, 4);
  return (
    <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-20 md:py-32">
      <SectionHeader label="Selected Work" title="Spaces shaped by context, material and light." />
      <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
        <div className="space-y-16 md:space-y-24">
          <ProjectCard project={featured[0]} tall />
          <ProjectCard project={featured[2]} delay={100} />
        </div>
        <div className="space-y-16 md:space-y-24 md:pt-32">
          <ProjectCard project={featured[1]} delay={60} />
          <ProjectCard project={featured[3]} delay={140} tall />
        </div>
      </div>
      <Reveal className="mt-16 md:mt-24 text-center">
        <ArrowLink to="/projects">View All Projects</ArrowLink>
      </Reveal>
    </section>
  );
}

function Stats() {
  return (
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
  );
}

function ServicesPreview() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 md:px-10 pt-10 pb-20 md:pt-16 md:pb-32">
      <SectionHeader label="What We Do" title="Five disciplines, one sensibility." />
      <div className="mt-12 md:mt-16">
        {services.map((s, i) => (
          <Reveal key={s.index} delay={i * 60}>
            <Link
              to="/services"
              className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_1fr_auto] items-center gap-5 md:gap-8 border-t border-[var(--line)] py-7 md:py-9 transition-colors duration-300 last:border-b hover:bg-[var(--cream)]/60"
            >
              <span className="text-xs tracking-[0.2em] text-[var(--ink-soft)]">{s.index}</span>
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl text-[var(--ink)] transition-transform duration-500 group-hover:translate-x-3">
                {s.title}
              </span>
              <span className="hidden md:block w-[300px] lg:w-[380px] overflow-hidden opacity-0 transition-all duration-500 group-hover:opacity-100">
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </span>
              <svg className="w-5 h-5 text-[var(--ink)] transition-transform duration-500 group-hover:translate-x-2 md:hidden" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeaturedProject() {
  const p = projects.find((x) => x.slug === 'the-courtyard') ?? projects[0];

  if (!p) return null;

  return (
    <section className="relative" aria-label="Featured project">
      <Reveal className="relative h-[70vh] min-h-[520px] overflow-hidden bg-[var(--ink)] md:h-[85vh]">
        <img src={p.hero} alt="The Courtyard residence" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1440px] px-5 md:px-10 pb-14 md:pb-20 text-white">
          <p className="mb-4 text-xs tracking-[0.24em] uppercase text-white/70">Featured Project</p>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl">{p.title}</h2>
          <p className="mt-4 max-w-md text-base md:text-lg text-white/80">
            A contemporary residence shaped around light, landscape and privacy.
          </p>
          <div className="mt-8">
            <ArrowLink to={`/projects/${p.slug}`} dark>
              View Project
            </ArrowLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function JournalPreview() {
  const picks = articles.slice(0, 3);
  return (
    <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-20 md:py-32">
      <SectionHeader label="Journal" title="Notes on space, light and material." />
      <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {picks.map((a, i) => (
          <Reveal key={a.slug} delay={i * 90}>
            <Link to="/journal" className="project-card group block">
              <div className="overflow-hidden bg-[var(--cream)]">
                <img src={a.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-[var(--ink-soft)]">
                <span className="text-[var(--terra)]">{a.category}</span>
                <span aria-hidden="true">·</span>
                <span>{a.date}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl leading-snug text-[var(--ink)]">{a.title}</h3>
              <div className="mt-4">
                <ArrowLink to="/journal">Read Article</ArrowLink>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="bg-[var(--cream)]" aria-label="Testimonial">
      <div className="mx-auto max-w-4xl px-5 md:px-10 py-24 md:py-36 text-center">
        <Reveal>
          <svg className="mx-auto mb-10 w-8 h-8 text-[var(--terra)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M10 8c-3 1-5 3.5-5 7v1h5v-6H8c.5-1 1.2-1.6 2-2V8zm9 0c-3 1-5 3.5-5 7v1h5v-6h-2c.5-1 1.2-1.6 2-2V8z" />
          </svg>
        </Reveal>
        <Reveal delay={100}>
          <blockquote className="font-display text-2xl sm:text-3xl md:text-[2.5rem] leading-[1.35] text-[var(--ink)]">
            “ARCO understood not only what we wanted our home to look like, but how we wanted it to feel.”
          </blockquote>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-10 text-sm tracking-[0.18em] uppercase text-[var(--ink)]">— Ananya Mehta</p>
          <p className="mt-2 text-xs tracking-[0.18em] uppercase text-[var(--ink-soft)]">
            Private Residence, New Delhi
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-[var(--ink)] text-[var(--ivory)]" aria-label="Start a project">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-24 md:py-40 text-center">
        <Reveal>
          <h2 className="font-display text-[11vw] sm:text-6xl lg:text-8xl leading-[1.05]">Have a space in mind?</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-lg md:text-xl text-white/60">Let’s build something worth experiencing.</p>
        </Reveal>
        <Reveal delay={220}>
          <Link
            to="/contact"
            className="arrow-link mt-12 inline-flex items-center gap-4 border border-white/40 px-10 py-5 text-[13px] tracking-[0.18em] uppercase transition-colors duration-300 hover:bg-[var(--ivory)] hover:text-[var(--ink)] hover:border-[var(--ivory)]"
          >
            Start a Conversation
            <svg className="arrow w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <SelectedProjects />
      <Stats />
      <ServicesPreview />
      <FeaturedProject />
      <JournalPreview />
      <Testimonial />
      <FinalCTA />
    </>
  );
}
