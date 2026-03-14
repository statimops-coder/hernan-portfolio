import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24 border-t border-border">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
            About
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Learn by building.
            <br />
            <span className="text-secondary">Ship by default.</span>
          </h2>

          <div className="space-y-4 text-secondary-foreground leading-relaxed">
            <p>
              I'm Hernan Lopez — an IT student at Keiser University in Clearwater, FL. I spend most
              of my time building real software: full-stack web apps, REST APIs, and AI automation
              systems. Bilingual in English and Spanish. Self-taught in most of my stack.
            </p>
            <p>
              I don't study concepts in isolation — I build something with them. Every project on
              this page started as a problem I wanted to solve, and ended as working software.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-border">
            <div>
              <span className="font-mono text-2xl font-bold text-primary">05</span>
              <p className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground mt-1">
                Products Built
              </p>
            </div>
            <div>
              <span className="font-mono text-2xl font-bold text-foreground">IT</span>
              <p className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground mt-1">
                Student at Keiser
              </p>
            </div>
            <div>
              <span className="font-mono text-2xl font-bold text-foreground">FL</span>
              <p className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground mt-1">
                Tampa Bay
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
