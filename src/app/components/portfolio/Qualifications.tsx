import { motion } from "motion/react";
import { Award, Calendar, Clock } from "lucide-react";

const certificates = [
  {
    title: "Prototipação Avançada",
    issuer: "Centro de Excelência em Experiência do Usuário",
    program: "Level UP! Experience — Design, Produto e Engenharia",
    date: "12 de maio de 2026",
    hours: "1 hora",
    facilitator: "Equipe Figma",
  },
  {
    title: "Workshop Imersivo sobre DevEx e DevRel",
    issuer: "Academia ConectaDev — Banco do Brasil",
    program: "1ª Academia ConectaDev",
    date: "05 a 08 de agosto de 2025",
    hours: "6 horas",
    facilitator: "Banco do Brasil",
  },
  {
    title: "Microsoft Certified: Conceitos básicos do Azure",
    issuer: "Microsoft",
    program: "Azure Fundamentals (AZ-900)",
    date: "25 de setembro de 2025",
    hours: "Certificação oficial",
    facilitator: "Microsoft",
  },
];

export function Qualifications() {
  return (
    <section id="qualifications" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-fuchsia-300/90 tracking-wide text-sm mb-1">Certificações</div>
          <h2 className="text-white" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 600 }}>
            Qualificações
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/40 via-purple-500/10 to-transparent hover:from-fuchsia-400/60 transition-all"
            >
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#1a0f2e] to-[#0d0820] p-6 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-fuchsia-500/10 blur-3xl group-hover:bg-fuchsia-500/25 transition-all" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/30 to-fuchsia-500/20 border border-purple-400/30 flex items-center justify-center">
                      <Award className="w-5 h-5 text-purple-200" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-purple-200/70 px-2 py-1 rounded-full border border-purple-400/30 bg-purple-500/10">
                      Certificado
                    </span>
                  </div>
                  <h3 className="text-white mb-1" style={{ fontSize: "1.15rem", fontWeight: 600 }}>
                    {c.title}
                  </h3>
                  <div className="text-purple-200/80 text-sm mb-2">{c.program}</div>
                  <div className="text-white/55 text-sm mb-4">
                    Facilitado por <span className="text-white/80">{c.facilitator}</span> · {c.issuer}
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-white/60">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-purple-300" />
                      {c.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-purple-300" />
                      Carga horária: {c.hours}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
