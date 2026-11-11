import clubeLogo from "@/assets/cluberadios.webp";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="h-1 w-full bg-linear-to-r from-transparent via-secondary to-transparent" />

      <div className="bg-linear-to-b from-texas-dark to-texas-dark/95 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center gap-8 text-center">
            <img
              src="/images/logo-texas-brasil.png"
              alt="Texas Brasil FM"
              style={{
                filter:
                  "drop-shadow(0 0 5px rgba(255, 255, 255, 1)) drop-shadow(0 0 30px rgba(255, 255, 255, 1))",
              }}
              className="h-16 w-auto"
            />
            <p className="font-display text-lg font-bold text-primary-foreground/80 tracking-wide">
              Aqui o modão não para!
            </p>
            <p className="text-lg text-primary-foreground/40">On-line do Brasil para o Mundo!</p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/radiotexasbrasilfm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-primary-foreground/70 transition-all duration-300 hover:text-secondary hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://wa.me/5543998461977"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-primary-foreground/70 transition-all duration-300 hover:text-green-400 hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>

            <div
              className="w-full my-8 pt-6 border-t border-current/10 text-center"
              aria-label="Parceiros"
            >
              <h3 className="mb-5 text-base font-semibold">Parceiros</h3>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                <a
                  key="myTuner Radio"
                  href="https://mytuner-radio.com/pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="myTuner Radio"
                  className="inline-flex items-center justify-center min-w-[105px] min-h-14 transition-transform hover:scale-105"
                >
                  <img
                    src={"/mytuner.webp"}
                    alt="myTuner Radio"
                    loading="lazy"
                    className="h-10 sm:h-12 w-auto max-w-[130px] object-contain brightness-0 invert"
                  />
                </a>
                <a
                  key="Clube de Rádios"
                  href="https://www.cluberadios.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Clube de Rádios"
                  className="inline-flex items-center justify-center min-w-[105px] min-h-14 transition-transform hover:scale-105"
                >
                  <img
                    src={clubeLogo}
                    alt="Clube de Rádios"
                    loading="lazy"
                    className="h-10 sm:h-12 w-auto max-w-[130px] object-contain"
                  />
                </a>
                <a
                  key="Online Radio Box"
                  href="https://onlineradiobox.com/br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Online Radio Box"
                  className="inline-flex items-center justify-center min-w-[105px] min-h-14 transition-transform hover:scale-105"
                >
                  <img
                    src={"/radiobox.webp"}
                    alt="Online Radio Box"
                    loading="lazy"
                    className="h-10 sm:h-12 w-auto max-w-[130px] object-contain"
                  />
                </a>
                <a
                  key="RádiosNet"
                  href="https://www.radios.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="RádiosNet"
                  className="inline-flex items-center justify-center min-w-[105px] min-h-14 transition-transform hover:scale-105"
                >
                  <img
                    src={"/radiosnet.webp"}
                    alt="RádiosNet"
                    loading="lazy"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </a>
                <a
                  key="Streema"
                  href="https://streema.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Streema"
                  className="inline-flex items-center justify-center min-w-[105px] min-h-14 transition-transform hover:scale-105"
                >
                  <img
                    src={"/streema.webp"}
                    alt="Streema"
                    loading="lazy"
                    className="h-10 sm:h-12 w-auto max-w-[130px] object-contain"
                  />
                </a>
              </div>
            </div>
            <div className="w-full border-t border-primary-foreground/10 pt-8 mt-4">
              <p className="text-xs text-primary-foreground/30">
                © 2026 Radio Texas Brasil FM. Todos os direitos reservados.
              </p>
              <p className="mt-2 text-xs text-primary-foreground/20">
                Desenvolvido por{" "}
                <a
                  href="https://smartlocal.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/40 hover:text-secondary transition-colors"
                >
                  Douglas Borges - Smart Local
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
