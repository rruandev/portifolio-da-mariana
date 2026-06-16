import { motion } from "motion/react";
import { Code2, Network, Cloud, Rocket } from "lucide-react";

const items = [
  {
    icon: Code2,
    title: "Developer Experience",
    body: "Criação e manutenção de portais internos, documentação técnica e ferramentas que reduzem fricção no dia a dia dos times de engenharia.",
  },
  {
    icon: Network,
    title: "Plataforma & Governança",
    body: "Design de plataformas internas com foco em padronização, segurança e self-service para acelerar a entrega de produtos digitais.",
  },
  {
    icon: Cloud,
    title: "Cloud Enablement em escala",
    body: "Habilito times a adotarem a nuvem com práticas de Azure, IaC, observabilidade e cultura DevOps em ambientes regulados.",
  },
  {
    icon: Rocket,
    title: "Empreendedorismo em TI",
    body: "Co-criação de iniciativas e produtos digitais que conectam tecnologia, pessoas e impacto de negócio.",
  },
];

export function Experience() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white mb-12"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 600 }}
        >
          Work <span className="bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">Experience</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/40 via-purple-500/10 to-transparent hover:from-fuchsia-400/60 transition-all"
              >
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#1a0f2e] to-[#0d0820] p-6 overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-fuchsia-500/10 blur-3xl group-hover:bg-fuchsia-500/20 transition-all" />
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/30 to-fuchsia-500/20 border border-purple-400/30 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-purple-200" />
                    </div>
                    <h3 className="text-white mb-2" style={{ fontSize: "1.05rem", fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
