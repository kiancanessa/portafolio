import { useEffect, useRef, type ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Escribe el transform directamente en el nodo: con estado de React esto
  // re-renderizaría todo el subárbol en cada mousemove.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let wasActive = false;

    function apply(e: MouseEvent) {
      frame = 0;
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const distX = Math.abs(e.clientX - cx) - rect.width / 2;
      const distY = Math.abs(e.clientY - cy) - rect.height / 2;
      const isActive = distX < padding && distY < padding;

      if (isActive) {
        if (!wasActive) node.style.transition = activeTransition;
        node.style.transform = `translate3d(${(e.clientX - cx) / strength}px, ${
          (e.clientY - cy) / strength
        }px, 0px)`;
      } else if (wasActive) {
        node.style.transition = inactiveTransition;
        node.style.transform = "translate3d(0px, 0px, 0px)";
      }
      wasActive = isActive;
    }

    function handleMouseMove(e: MouseEvent) {
      if (frame) return;
      frame = requestAnimationFrame(() => apply(e));
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transition: inactiveTransition, willChange: "transform" }}
    >
      {children}
    </div>
  );
}
