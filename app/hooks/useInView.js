// app/hooks/useInView.js
'use client';
import { useEffect, useState, useRef } from 'react';

export function useInView(options) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // 1回だけ
        }
      },
      options
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isInView];
}
