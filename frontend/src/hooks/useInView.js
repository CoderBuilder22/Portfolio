import { useEffect, useRef, useState } from 'react';

// Simple hook that returns a ref and a boolean indicating if the element is in viewport
export default function useInView(options = { threshold: 0.18, root: null, rootMargin: '0px' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (options.once) {
              observer.unobserve(node);
            }
          } else {
            if (!options.once) setInView(false);
          }
        });
      },
      { threshold: options.threshold, root: options.root, rootMargin: options.rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, options.threshold, options.root, options.rootMargin, options.once]);

  return [ref, inView];
}
