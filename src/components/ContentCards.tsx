import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import content01 from "@/assets/content_01.webp";
import content02 from "@/assets/content_02.webp";
import content03 from "@/assets/content_03.webp";
import content04 from "@/assets/content_04.webp";
import content05 from "@/assets/content_05.webp";
import content06 from "@/assets/content_06.webp";

const cards = [
  {
    title: "A Essência do Modão",
    summary: "A história por trás das letras que marcaram gerações.",
    full: "O modão não é apenas música, é o retrato da vida no campo, das histórias de amor e da resiliência do povo brasileiro com um toque da influência texana.",
    image: content01,
  },
  {
    title: "Cultura Texas-Brasil",
    summary: "A conexão entre o Nashville sound e o sertanejo raiz.",
    full: "Explore como a instrumentação do country americano se fundiu com a alma brasileira para criar um som único e potente que você ouve aqui.",
    image: content02,
  },
  {
    title: "O Estilo Country",
    summary: "Rodeio, bota, chapéu e muita tradição.",
    full: "Ser country é um estado de espírito. Levamos até você a energia das arenas e a sofisticação dos grandes festivais mundiais.",
    image: content03,
  },
  {
    title: "Viola & Raízes",
    summary: "O som autêntico que vem do coração do Brasil.",
    full: "A viola caipira é instrumento de alma. Cada acorde carrega séculos de tradição, fé e amor pela terra. Na Texas Brasil FM, esse som ecoa sem parar.",
    image: content04,
  },
  {
    title: "Clássicos Eternos",
    summary: "As músicas que nunca saem do coração do povo.",
    full: "De Tião Carreiro a Chitãozinho & Xororó, os clássicos do sertanejo são patrimônio cultural. Aqui você ouve tudo isso e muito mais, 24h por dia.",
    image: content05,
  },
  {
    title: "Festivais & Shows",
    summary: "A energia dos maiores palcos do country e sertanejo.",
    full: "Os maiores festivais do mundo reúnem milhões de fãs. A Texas Brasil FM traz essa energia para o seu dia a dia, onde quer que você esteja.",
    image: content06,
  },
];

export function ContentCards() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="content" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-20 right-0 w-125 h-125 rounded-full gradient-red-glow opacity-20" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl font-black text-foreground md:text-5xl tracking-tight">
            A Experiência Sonora <span className="text-gradient-red">Definitiva</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Do primeiro acorde à última nota. Um universo de histórias e emoções.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="card-3d group relative h-72 cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-texas-dark via-texas-dark/10 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="font-display text-xl font-bold text-primary-foreground">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-primary-foreground/70 line-clamp-2">
                  {card.summary}
                </p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t from-secondary/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-texas-dark/80 backdrop-blur-md p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-card shadow-2xl"
            >
              <img
                src={cards[selected].image}
                alt={cards[selected].title}
                className="h-56 w-full object-cover"
              />
              <div className="absolute top-0 left-0 right-0 h-56 bg-linear-to-t from-card to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full glass text-primary-foreground hover:bg-secondary transition-colors"
              >
                <X size={20} />
              </button>
              <div className="p-8 -mt-12 relative z-10">
                <h3 className="font-display text-2xl font-black text-foreground">
                  {cards[selected].title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{cards[selected].full}</p>
                <a
                  href="#player"
                  onClick={() => setSelected(null)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold uppercase tracking-wider text-secondary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-secondary/30"
                >
                  ▶ Ouça Agora
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
