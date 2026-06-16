import { motion } from "motion/react";
import { BookOpen, Github, ExternalLink } from "lucide-react";

const tags = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"];

export function Project() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-fuchsia-300/90 tracking-wide text-sm mb-1">Project</div>
          <h2 className="text-white" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 600 }}>
            Guia Prático para Iniciantes em TI
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-center rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/50 to-transparent"
        >
          <div className="rounded-3xl bg-gradient-to-br from-[#1a0f2e] to-[#0d0820] p-8 h-full">
            <p className="text-white/75 leading-relaxed mb-6">
              Projeto criado para pessoas que estão começando na área de tecnologia, transformando
              experiências reais em um conteúdo direto e estratégico. Da escolha da primeira stack
              até o entendimento do mercado.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md text-xs bg-purple-500/10 border border-purple-400/20 text-purple-100/90">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/90 transition-colors" href="#">
                <BookOpen className="w-4 h-4" /> Ler guia
              </a>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/90 transition-colors" href="#">
                <Github className="w-4 h-4" /> Repo
              </a>
              <a className="inline-flex items-center gap-2 text-sm text-purple-200 hover:text-white transition-colors" href="#">
                Visitar <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-black aspect-[16/10] border border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.18),transparent_60%)]" />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute inset-0 flex flex-col">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <div className="ml-3 px-3 py-0.5 rounded-md bg-white/5 text-xs text-white/50">basetech.dev</div>
              </div>
              <div className="flex-1 px-6 py-6 flex flex-col items-center justify-center text-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs">
                  <span className="text-sky-400 font-mono">{"</>"}</span>
                  <span className="text-white">Base</span>
                  <span className="text-sky-400">Tech</span>
                </div>
                <div className="text-white leading-tight" style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.35rem)", fontWeight: 700 }}>
                  O mercado de TI não precisa<br />de mais curiosos.
                </div>
                <div
                  className="leading-tight text-sky-400"
                  style={{
                    fontSize: "clamp(0.95rem, 1.6vw, 1.35rem)",
                    fontWeight: 700,
                    textShadow: "0 0 24px rgba(56,189,248,0.5)",
                  }}
                >
                  Ele precisa de profissionais<br />direcionados.
                </div>
                <div className="text-white/55 text-[11px] max-w-md leading-relaxed">
                  Descubra os erros que 90% dos iniciantes cometem e aprenda a estratégia certa
                  para se destacar no mercado de tecnologia.
                </div>
                <div className="mt-1 text-sky-400/70 text-lg">↓</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
