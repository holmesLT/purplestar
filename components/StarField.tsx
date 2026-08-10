'use client';

import { useEffect, useRef } from 'react';

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars: { x: number; y: number; r: number; v: number; o: number }[] = [];
    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        v: Math.random() * 0.05 + 0.02,
        o: Math.random() * 0.7 + 0.3,
      });
    }

    function onResize() {
      w = canvas!.width = window.innerWidth;
      h = canvas!.height = window.innerHeight;
    }
    window.addEventListener('resize', onResize);

    let raf = 0;
    function draw() {
      ctx!.clearRect(0, 0, w, h);
      stars.forEach(s => {
        s.y -= s.v;
        if (s.y < 0) {
          s.y = h;
          s.x = Math.random() * w;
        }
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        // 紫微主题：金色 + 紫色微光
        ctx!.fillStyle = `rgba(232, 200, 112, ${s.o})`;
        ctx!.shadowBlur = 6;
        ctx!.shadowColor = '#D4AF37';
        ctx!.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
