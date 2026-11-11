import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero01 from "@/assets/hero_01.webp";
import hero02 from "@/assets/hero_02.webp";
import hero03 from "@/assets/hero_03.webp";
import hero04 from "@/assets/hero_04.webp";
import hero05 from "@/assets/hero_05.webp";
import hero06 from "@/assets/hero_06.webp";

const images = [hero01, hero02, hero03, hero04, hero05, hero06];
const playerIframeUrl = "https://player.svrdedicado.org/player-topo-html5/7228/000000";

export function StreamingPlayer() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="player"
      className="relative py-20 overflow-hidden bg-linear-to-b from-background via-muted/50 to-background"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 rounded-full gradient-red-glow opacity-30" />

      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Rádio ao vivo
          </span>
          <h2 className="font-display text-3xl font-black text-foreground md:text-5xl tracking-tight">
            Rádio <span className="text-gradient-red">Texas Brasil FM</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base">
            Música sem interrupções. 24h de pura emoção.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-texas-dark/30"
        >
          {/* Slideshow background */}
          <div className="relative h-64 sm:h-80 overflow-hidden">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                width={1920}
                height={1080}
              />
            ))}
            <div className="absolute inset-0 bg-linear-to-t from-texas-dark via-texas-dark/10 to-transparent" />

            {/* Equalizer bars */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-end gap-1">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 rounded-full bg-secondary/80"
                  animate={{
                    height: [8, Math.random() * 30 + 10, 8],
                  }}
                  transition={{
                    duration: 0.8 + Math.random() * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.05,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Player oficial hospedado pelo provedor */}
          <div className="relative bg-texas-dark">
            <iframe
              src={playerIframeUrl}
              title="Texas Brasil FM - Player ao vivo"
              className="h-20 w-full border-0"
              allow="autoplay"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
