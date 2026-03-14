import { motion } from "framer-motion";
import type { CSSProperties } from "react";

const techs = [
  "Python", "JavaScript", "HTML/CSS", "Linux/Bash", "Go", "SQL",
  "Git", "AI Agents", "Node.js", "PostgreSQL", "Networking", "REST APIs",
];

const filledIndices = new Set([0, 2, 4, 7, 9, 11]);
const rows = [
  {
    items: techs.slice(0, 5),
    style: {
      "--tech-row-columns": "repeat(5, minmax(145px, 165px))",
      "--tech-row-width": "889px",
    } as CSSProperties,
  },
  {
    items: techs.slice(5, 9),
    style: {
      "--tech-row-columns": "repeat(4, minmax(175px, 195px))",
      "--tech-row-width": "828px",
    } as CSSProperties,
  },
  {
    items: techs.slice(9, 12),
    style: {
      "--tech-row-columns": "repeat(3, minmax(220px, 240px))",
      "--tech-row-width": "752px",
    } as CSSProperties,
  },
];

const TechStack = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-border">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
          Tech Stack
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="tech-pyramid">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="tech-row" style={row.style}>
            {row.items.map((tech) => {
              const i = techs.indexOf(tech);
              return (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className={`tech-tile ${filledIndices.has(i) ? "tech-tile-filled" : ""} tech-pyramid-tile flex items-center justify-center py-4 px-3 rounded-lg border font-mono text-sm transition-colors cursor-default`}
                >
                  {tech}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
