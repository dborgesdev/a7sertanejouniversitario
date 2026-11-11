import { motion } from "framer-motion";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function InstagramSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-muted/30 to-background" />

      <div className="mx-auto max-w-3xl px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-secondary/20 to-secondary/5">
            <InstagramIcon className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="font-display text-3xl font-black text-foreground md:text-4xl tracking-tight">
            Siga a <span className="text-gradient-red">Texas Brasil FM</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">Conecte-se com a gente!.</p>

          <a
            href="https://www.instagram.com/radiotexasbrasilfm"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-linear-to-r from-secondary to-secondary/80 px-8 py-4 font-display text-sm font-bold tracking-wider text-secondary-foreground shadow-xl shadow-secondary/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/30"
          >
            <InstagramIcon className="h-5 w-5" />
            @radiotexasbrasilfm
          </a>
        </motion.div>
      </div>
    </section>
  );
}
