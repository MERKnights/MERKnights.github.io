"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * EqualHeightImageRow
 * Renders images in a single row that:
 * - fill the container width
 * - share the same height
 * - keep their aspect ratios (no cropping)
 *
 * Contract:
 * - props.images: Array<{ src: string; alt: string; width: number; height: number }>
 *   width/height describe the intrinsic aspect ratio for proportional sizing.
 */
export default function EqualHeightImageRow({ images, className }) {
  const containerRef = useRef(null);
  const [targetHeight, setTargetHeight] = useState(null);
  const [ratios, setRatios] = useState(() =>
    images.map((img) => (img.width && img.height ? img.width / img.height : null))
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const compute = () => {
      const el = containerRef.current;
      if (!el) return;

      // Get available width minus horizontal gaps
      const styles = getComputedStyle(el);
      const colGapStr = styles.columnGap || styles.gap || "0";
      const gap = parseFloat(colGapStr) || 0; // px
      const n = images.length;
      const available = el.clientWidth - gap * (n - 1);
      const effectiveRatios = ratios.map((r, i) => {
        if (r && isFinite(r)) return r;
        const img = images[i];
        if (img.width && img.height) return img.width / img.height;
        return 1; // fallback until loaded
      });
      const sumRatios = effectiveRatios.reduce((acc, r) => acc + r, 0);
      if (available > 0 && sumRatios > 0) {
        const h = available / sumRatios;
        setTargetHeight(h);
      }
    };

    compute();

    const ro = new ResizeObserver(() => compute());
    ro.observe(containerRef.current);
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("resize", compute);
      ro.disconnect();
    };
  }, [images, ratios]);

  return (
    <div ref={containerRef} className={`flex gap-4 ${className || ""}`}>
      {images.map((img, i) => {
        const ratio = ratios[i]
          ?? (img.width && img.height ? img.width / img.height : 1);
        const h = Math.max(0, targetHeight || 0);
        const w = h * ratio;
        return (
          <div
            key={img.src}
            className="relative rounded-lg overflow-hidden bg-transparent"
            style={{ width: w ? `${w}px` : undefined, height: h ? `${h}px` : undefined }}
          >
            {/* Use fill so the image occupies the wrapper; objectFit contain avoids cropping. */}
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
              onLoad={(e) => {
                const el = e.currentTarget;
                if (!el?.naturalWidth || !el?.naturalHeight) return;
                const r = el.naturalWidth / el.naturalHeight;
                setRatios((prev) => {
                  if (prev[i] === r) return prev;
                  const next = [...prev];
                  next[i] = r;
                  return next;
                });
              }}
              priority={false}
            />
          </div>
        );
      })}
    </div>
  );
}
