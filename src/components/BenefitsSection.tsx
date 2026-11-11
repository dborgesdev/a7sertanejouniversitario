import { motion } from "framer-motion";
import { Radio, Headphones, Globe, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: Radio,
    title: "100% Ao Vivo",
    description: "Transmissão em tempo real, sem intervalos genéricos.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Headphones,
    title: "Áudio HD",
    description: "Alta qualidade e fidelidade sonora para seus ouvidos.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Globe,
    title: "Alcance Global",
    description: "O som do interior do Brasil rompendo fronteiras.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Smartphone,
    title: "Multiplataforma",
    description: "Ouça no carro, no celular ou no seu computador.",
    color: "from-primary/20 to-primary/5",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background to-muted/30" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl font-black text-foreground md:text-5xl tracking-tight">
            Por Que Ouvir a <span className="text-gradient-red">Texas Brasil FM</span>?
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-3d group rounded-3xl bg-card p-8 text-center shadow-lg border border-border/50"
              >
                <div
                  className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${b.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-7 w-7 text-secondary" strokeWidth={2} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
