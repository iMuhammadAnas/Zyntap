import { useEffect, useRef} from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { useMotionValue } from "framer-motion";
import Services from "./Services";
import Work from "./Work";
import Process from "./Process";
import About from "./About";
import CTA from "./CTA";
import Footer from "./Footer";

export default function ZyntapLanding() {
  const containerRef = useRef(null);

  // Mouse reactive values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = (
      e.currentTarget as HTMLElement
    ).getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    // Smooth scroll for in-page anchors
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = "smooth";
    return () => {
      root.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full antialiased bg-slate-50 text-slate-900 dark:bg-[#0b0f17] dark:text-slate-100"
    >
      <Navbar />
      <Hero mouseX={mouseX} mouseY={mouseY} handleMouseMove={handleMouseMove} />
      <Services />
      <Work />
      <Process />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}
