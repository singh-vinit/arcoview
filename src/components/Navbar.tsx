import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';

const links = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/journal', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
];

function NavItem({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) {
  return (
    <NavLink to={to} onClick={onClick} className="nav-link text-[13px] tracking-[0.14em] uppercase">
      <span>{label}</span>
      <span aria-hidden="true">{label}</span>
    </NavLink>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const hasDarkHero = location.pathname === '/' || /^\/projects\/[^/]+$/.test(location.pathname);
  const lightHeader = hasDarkHero && !scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !open
            ? 'bg-[var(--ivory)]/95 backdrop-blur-sm border-b border-[var(--line)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className={`font-display text-xl md:text-2xl tracking-[0.28em] transition-colors duration-500 ${
              lightHeader ? 'text-white' : 'text-[var(--ink)]'
            }`}
            aria-label="ARCO — home"
          >
            ARCO
          </Link>

          <nav
            className={`hidden lg:flex items-center gap-9 transition-colors duration-500 ${
              lightHeader ? 'text-white' : 'text-[var(--ink)]'
            }`}
            aria-label="Primary"
          >
            {links.map((l) => (
              <NavItem key={l.to} to={l.to} label={l.label} />
            ))}
            <Link
              to="/contact"
              className={`ml-3 text-[13px] tracking-[0.14em] uppercase border px-5 py-2.5 transition-all duration-300 ${
                lightHeader
                  ? 'border-white/70 text-white hover:bg-white hover:text-[var(--ink)]'
                  : 'border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--ivory)]'
              }`}
            >
              Start a Project
            </Link>
          </nav>

          <button
            className="lg:hidden relative z-[60] flex flex-col justify-center items-center w-11 h-11 -mr-2"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-6 h-px transition-all duration-500 ${
                open ? 'rotate-45 translate-y-[3px] bg-[var(--ink)]' : lightHeader ? 'bg-white' : 'bg-[var(--ink)]'
              }`}
            />
            <span
              className={`block w-6 h-px mt-1.5 transition-all duration-500 ${
                open ? '-rotate-45 -translate-y-[3px] bg-[var(--ink)]' : lightHeader ? 'bg-white' : 'bg-[var(--ink)]'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`mobile-menu fixed inset-0 z-40 bg-[var(--ivory)] flex flex-col justify-between px-6 pt-28 pb-10 ${open ? 'open' : ''}`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          <Link to="/" onClick={() => setOpen(false)} className="menu-item font-display text-4xl py-3 text-[var(--ink)]" style={{ '--i': 0 } as never}>
            Home
          </Link>
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="menu-item font-display text-4xl py-3 text-[var(--ink)]"
              style={{ '--i': i + 1 } as never}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="menu-item space-y-3" style={{ '--i': 6 } as never}>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-center border border-[var(--ink)] text-[var(--ink)] uppercase tracking-[0.14em] text-sm py-4"
          >
            Start a Project
          </Link>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--ink-soft)] text-center">
            Architecture · Interiors · Spaces
          </p>
        </div>
      </div>
    </>
  );
}
