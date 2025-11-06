import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
    const hoverTargets = document.querySelectorAll("a, button, input, textarea");
    const addGrow = () => cursor.classList.add("grow");
    const removeGrow = () => cursor.classList.remove("grow");

    hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", addGrow);
    el.addEventListener("mouseleave", removeGrow);
    });

  return <div className="cursor"></div>;
}
