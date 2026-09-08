"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

export default function LazyMount({
  children,
  minHeight = 400,
  rootMargin = "200px",
}: {
  children: ReactNode;
  minHeight?: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin]);

  const wrapperStyle: CSSProperties | undefined = !visible
    ? { minHeight: `${minHeight}px` }
    : undefined;

  return (
    <div ref={ref} style={wrapperStyle}>
      {visible ? children : null}
    </div>
  );
}