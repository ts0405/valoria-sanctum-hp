// hooks/useInView.ts
import { useEffect, useState, RefObject } from 'react';

export function useInView(ref: RefObject<HTMLElement>, rootMargin = '0px') {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, rootMargin]);

  return isInView;
}
