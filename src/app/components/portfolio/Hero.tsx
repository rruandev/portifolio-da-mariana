import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Sparkles, ArrowRight } from "lucide-react";
import profilePhoto from "../../../imports/Foto_de_perfil_profissional.jpg";

const stacks = ["Azure", "GitHub", "Strapi", "DevOps", "Next.js", "Low-Code", "Figma"];

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/20 blur-[120px] -z-10" />
      <div className="absolute top-40 right-0 w-[400px] h-[400px] rounded-full bg-fuchsia-600/10 blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[260px_1fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto md:mx-0"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-pink-500 opacity-80 blur-md" />
            <div className="relative rounded-full p-[3px] bg-gradient-to-tr from-purple-400 via-fuchsia-400 to-pink-400">
              <div className="rounded-full bg-[#0a0613] p-1">
                <ImageWithFallback
                  src={profilePhoto}
                  alt="Mariana Viana"
                  className="w-56 h-56 rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-5">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-300" />
              <span className="text-xs text-white/80">Olá! eu sou <span className="text-fuchsia-300">Mariana Viana</span></span>
            </div>

            <h1 className="text-white leading-tight tracking-tight" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 600 }}>
              Transformo a complexidade da{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-fuchsia-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  nuvem
                </span>
              </span>{" "}
              em plataformas{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic bg-gradient-to-r from-pink-300 to-fuchsia-300 bg-clip-text text-transparent">
                  produtivas
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M2 6 Q 50 2 100 6 T 198 6" stroke="url(#under)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="under">
                      <stop offset="0%" stopColor="#f0abfc" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              para desenvolvedores.
            </h1>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-purple-400/60 to-transparent max-w-[40px]" />
              <span className="text-purple-200/90 tracking-wide">Platform & DevEx Engineer</span>
            </div>

            <p className="mt-6 text-white/70 leading-relaxed max-w-2xl">
              Profissional graduada em Gestão de TI e pós-graduada em Cloud Computing. Atuo como
              Platform Engineer com foco em DevEx e Produto, criando experiências internas que
              aceleram times de engenharia.
            </p>

            <div className="mt-7">
              <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Stacks</div>
              <div className="flex flex-wrap gap-2">
                {stacks.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-sm border border-purple-400/20 bg-purple-500/5 text-purple-100 hover:bg-purple-500/15 hover:border-purple-400/40 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-400 hover:to-fuchsia-400 text-white shadow-lg shadow-purple-900/40 transition-all"
              >
                Vamos conversar
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#projects" className="text-sm text-white/60 hover:text-white transition-colors">
                Ver projetos →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
