import { Link } from 'react-router';

const nav = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/journal', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
];

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--ivory)]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 pt-16 md:pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 pb-14 md:pb-20 border-b border-white/10">
          <div className="md:col-span-5">
            <Link to="/" className="font-display text-3xl tracking-[0.28em]">ARCO</Link>
            <p className="mt-4 text-sm tracking-[0.18em] uppercase text-white/50">
              Architecture · Interiors · Spaces
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-5">Studio</p>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-sm text-white/80 hover:text-white transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-5">Follow</p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="text-sm text-white/80 hover:text-white transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="mailto:hello@arco.studio" className="hover:text-white transition-colors">hello@arco.studio</a></li>
              <li><a href="tel:+910000000000" className="hover:text-white transition-colors">+91 00000 00000</a></li>
              <li>New Delhi · Gurugram</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 text-xs text-white/40">
          <p>© 2026 ARCO Studio</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-white/70 transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-white/70 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
