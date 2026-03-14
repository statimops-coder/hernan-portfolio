import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ target, duration = 2 }: { target: number; duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => String(Math.round(v)).padStart(2, "0"));
  const [display, setDisplay] = useState("00");

  useEffect(() => {
    const controls = animate(count, target, { duration, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [target, duration, count, rounded]);

  return <>{display}</>;
};

const TypeWriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      <span className="animate-blink text-primary">▌</span>
    </span>
  );
};

const GlitchText = ({ children }: { children: string }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const glitch = () => {
      el.style.textShadow = `
        ${Math.random() * 4 - 2}px ${Math.random() * 2 - 1}px 0 hsl(25 80% 55% / 0.7),
        ${Math.random() * -4 + 2}px ${Math.random() * 2 - 1}px 0 hsl(210 60% 50% / 0.5)
      `;
      setTimeout(() => { el.style.textShadow = "none"; }, 100);
    };
    const interval = setInterval(glitch, 3000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  return <span ref={ref} className="transition-all">{children}</span>;
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="/hero-video.mp4"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/60" />
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute right-6 md:right-12 lg:right-16 bottom-0 z-10 hidden md:flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden="true"
      >
        <span className="scroll-flow-label font-mono text-[0.715rem] tracking-[0.32em] uppercase text-foreground/70 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="scroll-flow-line">
          <span className="scroll-flow-dots" />
        </span>
      </motion.div>

      <div className="relative z-10 max-w-4xl">
        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary/80">
            IT Student · Developer · Builder · Tampa, FL
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8"
        >
          <GlitchText>The whole stack.</GlitchText>
          <br />
          <span className="text-gradient glow">One person.</span>
        </motion.h1>

        {/* Description with typing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="font-mono text-sm text-secondary-foreground max-w-xl leading-relaxed mb-12 bg-card/60 backdrop-blur-md border border-border/50 rounded-lg p-4"
        >
          <span className="text-muted-foreground select-none">{">"} </span>
          <TypeWriter
            text="Websites, APIs, automation systems — from idea to production. Currently studying IT at Keiser University and shipping real software on the side."
            delay={1.5}
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex items-center gap-12"
        >
          <div>
            <span className="font-mono text-4xl font-bold text-primary">
              <Counter target={5} duration={2} />
            </span>
            <p className="font-mono text-xs tracking-wider uppercase text-muted-foreground mt-1">
              Projects Shipped
            </p>
          </div>
          <div className="h-12 w-px bg-border" />
          <motion.a
            href="#work"
            className="font-mono text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors group flex items-center gap-2"
            whileHover={{ x: 4 }}
          >
            <span className="text-primary/50">//</span> View work
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
