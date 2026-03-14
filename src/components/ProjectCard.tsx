import { motion } from "framer-motion";

interface ProjectCardProps {
  index: string;
  title: string;
  tags: string[];
  description: string;
  stats?: { label: string; value: string }[];
  link?: string;
}

const ProjectCard = ({ index, title, tags, description, stats, link }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-lg border border-border bg-card p-6 md:p-8 hover:border-primary/30 hover:border-glow transition-all duration-500"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-xs text-muted-foreground">{index}</span>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            View →
          </a>
        )}
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 rounded-sm bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-sm text-secondary-foreground leading-relaxed mb-6">{description}</p>

      {stats && stats.length > 0 && (
        <div className="flex gap-6 pt-4 border-t border-border">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="font-mono text-lg font-bold text-primary">{stat.value}</span>
              <p className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
