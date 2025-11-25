'use client';

import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children, delay = 0 }: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect(); //　← 一度アニメ発火したら監視を終了
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`fade-element ${show ? "fade-active" : ""}`}
    >
      {children}
    </div>
  );
}
