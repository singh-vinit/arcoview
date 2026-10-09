import { useState, type FormEvent } from 'react';
import Reveal from '../components/Reveal';

const projectTypes = ['Residential', 'Commercial', 'Interior', 'Hospitality', 'Other'];
const budgets = ['Under ₹10L', '₹10L–₹25L', '₹25L–₹50L', '₹50L+'];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto max-w-[1440px] px-5 md:px-10 pt-36 md:pt-52 pb-24 md:pb-36">
      <header className="max-w-4xl">
        <Reveal>
          <p className="text-xs tracking-[0.24em] uppercase text-[var(--terra)] mb-8">Contact</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.08] text-[var(--ink)]">
            Let’s create something meaningful.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-xl text-base md:text-lg text-[var(--ink-soft)]">
            Tell us about your space, your site, or simply the feeling you’re after. We reply to every
            enquiry within two working days.
          </p>
        </Reveal>
      </header>

      <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
        {/* Form */}
        <div className="lg:col-span-7">
          {sent ? (
            <Reveal className="border border-[var(--line)] bg-[var(--cream)]/50 p-10 md:p-14 text-center">
              <p className="font-display text-3xl text-[var(--ink)]">Thank you.</p>
              <p className="mt-4 text-[var(--ink-soft)]">
                Your message has been noted. We’ll be in touch within two working days.
              </p>
            </Reveal>
          ) : (
            <Reveal delay={120}>
              <form onSubmit={onSubmit} className="space-y-9" aria-label="Project enquiry">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-9">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs tracking-[0.2em] uppercase text-[var(--ink-soft)]">Name</label>
                    <input id="name" name="name" type="text" required autoComplete="name" className="field" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs tracking-[0.2em] uppercase text-[var(--ink-soft)]">Email</label>
                    <input id="email" name="email" type="email" required autoComplete="email" className="field" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-xs tracking-[0.2em] uppercase text-[var(--ink-soft)]">Phone</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" className="field" placeholder="+91" />
                  </div>
                  <div>
                    <label htmlFor="type" className="mb-2 block text-xs tracking-[0.2em] uppercase text-[var(--ink-soft)]">Project Type</label>
                    <select id="type" name="type" required defaultValue="" className="field">
                      <option value="" disabled>Select a type</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="budget" className="mb-2 block text-xs tracking-[0.2em] uppercase text-[var(--ink-soft)]">Estimated Budget</label>
                    <select id="budget" name="budget" required defaultValue="" className="field">
                      <option value="" disabled>Select a range</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-2 block text-xs tracking-[0.2em] uppercase text-[var(--ink-soft)]">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="field resize-none"
                      placeholder="Tell us about the space you have in mind…"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="arrow-link inline-flex items-center gap-4 bg-[var(--ink)] px-10 py-5 text-[13px] tracking-[0.18em] uppercase text-[var(--ivory)] transition-colors duration-300 hover:bg-[var(--terra)]"
                >
                  Start a Conversation
                  <svg className="arrow w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </button>
              </form>
            </Reveal>
          )}
        </div>

        {/* Studio info */}
        <aside className="lg:col-span-4 lg:col-start-9">
          <Reveal delay={180}>
            <div className="border-t border-[var(--ink)] pt-8">
              <h2 className="text-xs tracking-[0.24em] uppercase text-[var(--terra)] mb-6">Studios</h2>
              <div className="space-y-6">
                <div>
                  <p className="font-display text-2xl text-[var(--ink)]">New Delhi</p>
                  <p className="mt-1 text-sm text-[var(--ink-soft)]">Shahpur Jat, South Delhi</p>
                </div>
                <div>
                  <p className="font-display text-2xl text-[var(--ink)]">Gurugram</p>
                  <p className="mt-1 text-sm text-[var(--ink-soft)]">Galleria District, DLF Phase IV</p>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-[var(--ink)] pt-8">
              <h2 className="text-xs tracking-[0.24em] uppercase text-[var(--terra)] mb-6">Enquiries</h2>
              <p className="text-base text-[var(--ink)]">
                <a href="mailto:hello@arco.studio" className="hover:text-[var(--terra)] transition-colors">hello@arco.studio</a>
              </p>
              <p className="mt-3 text-base text-[var(--ink)]">
                <a href="tel:+910000000000" className="hover:text-[var(--terra)] transition-colors">+91 00000 00000</a>
              </p>
              <p className="mt-6 text-sm leading-relaxed text-[var(--ink-soft)]">
                For careers and internships, write with a portfolio of no more than 10 MB.
              </p>
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
