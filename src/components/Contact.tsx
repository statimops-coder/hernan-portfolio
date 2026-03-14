import { motion } from "framer-motion";

const Contact = () => {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
          Available for work
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let's connect<span className="text-primary">.</span>
        </h2>

        <p className="text-secondary-foreground leading-relaxed mb-10">
          Looking for IT, development, or technical support roles — remote or Tampa Bay area.
          Open to full-time, part-time, or project-based work.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="mailto:nan.dev.ops@gmail.com"
            className="inline-flex items-center gap-3 font-mono text-sm tracking-wider uppercase bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Send an Email
            <span>→</span>
          </a>
          <a
            href={`${assetBase}hernan-lopez-resume.pdf`}
            download
            className="inline-flex items-center gap-3 font-mono text-sm tracking-wider uppercase border border-border text-foreground px-6 py-3 rounded-lg hover:border-primary/50 hover:text-primary transition-colors"
          >
            Download Resume
            <span>↓</span>
          </a>
        </div>

        <div className="flex flex-wrap gap-6 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
          <a href="mailto:nan.dev.ops@gmail.com" className="hover:text-primary transition-colors">
            Email
          </a>
          <a href="https://github.com/statimops-coder" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/hernan-lopez-ab1575328" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
        </div>
      </motion.div>

      <div className="mt-24 pt-8 border-t border-border flex items-center justify-between">
        <span className="font-mono text-sm text-muted-foreground">
          HL<span className="animate-blink">_</span>
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Hernan Lopez
        </span>
      </div>
    </section>
  );
};

export default Contact;
