import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const backendProjects = [
  {
    index: "01",
    title: "Statim HQ",
    tags: ["Python", "Node.js", "AI Agents", "Automation"],
    description:
      "24/7 autonomous AI platform running on bare metal. 17+ scheduled agents handle lead scouting, geopolitics monitoring, finance alerts, and morning briefings — no human input required.",
    stats: [
      { label: "Scheduled Jobs", value: "17+" },
      { label: "Runtime", value: "24/7" },
      { label: "Agent Channels", value: "10" },
    ],
  },
  {
    index: "02",
    title: "Schedule API",
    tags: ["Go", "PostgreSQL", "REST API"],
    description:
      "Block-based weekly schedule API with optimistic locking, revision control, and timezone support. Built from scratch in Go with a PostgreSQL backend.",
  },
];

const frontendProjects = [
  {
    index: "01",
    title: "Copperleaf Lawn & Landscape",
    tags: ["HTML/CSS", "Responsive", "SEO"],
    description:
      "The original was a 2018 Wix template — no mobile layout, no trust signals. Rebuilt from scratch with real photos, a before/after gallery, and a clear contact path.",
    link: "https://statimops-coder.github.io/copperleaf-demo/",
  },
  {
    index: "02",
    title: "Rosenthal Chiropractic",
    tags: ["Healthcare", "JavaScript"],
    description:
      "Existing site felt clinical and impersonal. Rebuilt with warm visuals, clear trust signals, and a streamlined contact flow.",
    link: "https://statimops-coder.github.io/rosenthal-demo/",
  },
  {
    index: "03",
    title: "Every Rose Psychiatry",
    tags: ["Accessibility", "Mobile-First"],
    description:
      "A psychiatric practice with an anxiety-inducing website. Rebuilt mobile-first with calm typography, soft palette, and a single clear CTA.",
    link: "https://statimops-coder.github.io/every-rose-demo/",
  },
];

const Projects = () => {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-24 py-24">
      {/* Backend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
            Backend & Automation
          </h2>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted-foreground">02 Projects</span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {backendProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </motion.div>

      {/* Frontend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
            Frontend & Design
          </h2>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted-foreground">03 Projects</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {frontendProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
