import { useEffect, useRef, useState } from 'react';

// Reusable hook for scroll reveal animations.
// Returns: [ref, revealed, revealClass]
// - ref: attach to element
// - revealed: boolean whether element is in view
// - revealClass: string to append ("is-visible" / "is-hidden")
export default function useScrollReveal(options = {}) {
  const { threshold = 0.18, root = null, rootMargin = '0px', once = true } = options;
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            if (once && node) observer.unobserve(node);
          } else {
            if (!once) setRevealed(false);
          }
        });
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin, once]);

  const revealClass = revealed ? 'is-visible' : 'is-hidden';
  return [ref, revealed, revealClass];
}
