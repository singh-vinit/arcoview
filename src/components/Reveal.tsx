import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Use mask reveal (for image wrappers) instead of fade-up */
  mask?: boolean;
  as?: 'div' | 'section' | 'figure' | 'span';
}

export default function Reveal({ children, className = '', delay = 0, mask = false, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as 'div';
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;

  return (
    <Tag ref={ref as never} style={style} className={`${mask ? 'mask-reveal' : 'reveal'} ${className}`}>
      {children}
    </Tag>
  );
}
