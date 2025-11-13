import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/scrollAnimations.css';


export default function AnimateOnScroll({ children, animation = 'fade-up', className = '', once = true, threshold }) {
  const [ref, inView, revealClass] = useScrollReveal({ threshold: threshold ?? 0.18, once });

  const rootClass = `animate-on-scroll ${animation} ${revealClass} ${className}`.trim();

  return (
    <div ref={ref} className={rootClass}>
      {children}
    </div>
  );
}
