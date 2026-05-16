import React, { useEffect, useRef } from "react";

/**
 * Lightweight canvas waveform — GPU-friendly, decorative only.
 * Draws layered sine waves with soft cyan/blue/purple glow.
 */
export default function Waveform({ className = "", height = 280, density = 3, speed = 0.012 }) {
  const ref = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let t = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = [
      "rgba(6, 182, 212, 0.55)",   // cyan
      "rgba(59, 130, 246, 0.45)",  // blue
      "rgba(139, 92, 246, 0.35)",  // purple
    ];

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // soft vignette
      const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) / 1.4);
      grad.addColorStop(0, "rgba(10,10,10,0)");
      grad.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      for (let l = 0; l < density; l++) {
        ctx.beginPath();
        const amp = (h / 6) * (1 - l * 0.18);
        const freq = 0.008 + l * 0.004;
        const phase = t * (1 + l * 0.5);
        for (let x = 0; x <= w; x += 4) {
          const y =
            h / 2 +
            Math.sin(x * freq + phase) * amp +
            Math.sin(x * freq * 0.5 + phase * 1.3) * amp * 0.4;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = colors[l % colors.length];
        ctx.shadowColor = colors[l % colors.length];
        ctx.shadowBlur = 14;
        ctx.stroke();
      }
      ctx.shadowBlur = 0;
      t += speed;
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [density, speed]);

  return (
    <canvas
      ref={ref}
      className={className}
      style={{ width: "100%", height }}
      aria-hidden="true"
    />
  );
}
