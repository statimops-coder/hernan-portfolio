import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <a href="#" className="font-mono text-lg font-bold text-primary">
        HL<span className="animate-blink">_</span>
      </a>
      <div className="flex gap-8">
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className="relative font-mono text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {link.label}
            {hoveredIndex === i && (
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
              />
            )}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
