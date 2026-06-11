import { useEffect, useRef, useState } from "react";

const interactiveSelector = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "[role='button']",
  "[data-cursor='hover']",
  ".cursor-grab",
  ".cursor-pointer",
].join(",");

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const position = useRef({ x: -100, y: -100 });
  const ringPosition = useRef({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const canUseFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canUseFinePointer || prefersReducedMotion) {
      return undefined;
    }

    let rafId;

    const render = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;

      ringPosition.current.x += (position.current.x - ringPosition.current.x) * 0.18;
      ringPosition.current.y += (position.current.y - ringPosition.current.y) * 0.18;

      if (dot) {
        dot.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ring) {
        ring.style.transform = `translate3d(${ringPosition.current.x}px, ${ringPosition.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(render);
    };

    const moveCursor = (event) => {
      position.current = { x: event.clientX, y: event.clientY };
      setIsVisible(true);
      setIsHovering(Boolean(event.target.closest(interactiveSelector)));
    };

    const hideCursor = () => setIsVisible(false);
    const showPressed = () => setIsPressed(true);
    const hidePressed = () => setIsPressed(false);

    rafId = requestAnimationFrame(render);
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mousedown", showPressed);
    window.addEventListener("mouseup", hidePressed);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mousedown", showPressed);
      window.removeEventListener("mouseup", hidePressed);
    };
  }, []);

  return (
    <div
      className={[
        "custom-cursor",
        isVisible ? "custom-cursor-visible" : "",
        isHovering ? "custom-cursor-hovering" : "",
        isPressed ? "custom-cursor-pressed" : "",
      ].join(" ")}
      aria-hidden="true"
    >
      <span ref={ringRef} className="custom-cursor-ring" />
      <span ref={dotRef} className="custom-cursor-dot" />
    </div>
  );
}
