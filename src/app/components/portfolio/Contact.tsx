import { motion } from "motion/react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white/80 leading-relaxed max-w-2xl mx-auto"
          style={{ fontSize: "1.1rem" }}
        >
          Busco construir soluções que tornem a tecnologia mais acessível, produtiva e escalável.
          Se quiser trocar ideias sobre cloud, carreira ou projetos,{" "}
          <a href="#" className="bg-gradient-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent underline decoration-purple-400/40 underline-offset-4">
            vamos conversar
          </a>
          .
        </motion.p>

        <div className="mt-6 flex justify-center gap-3">
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/in/marianavianaferreira/" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-purple-500/20 hover:border-purple-400/40 flex items-center justify-center transition-all"
            >
              <Icon className="w-4 h-4 text-white/80" />
            </a>
          ))}
        </div>

        <div className="mt-20 grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Contact</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Sempre aberta a discutir arquiteturas em nuvem, estratégias de TI e novas oportunidades.
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 space-y-2">
            <a href="mailto:marianamaia@email.com" className="flex items-center gap-3 text-white/80 hover:text-white text-sm transition-colors">
              <Mail className="w-4 h-4 text-purple-300" /> marianaviana121@gmail.com
            </a>
            <a href="tel:+5500000000000" className="flex items-center gap-3 text-white/80 hover:text-white text-sm transition-colors">
              <Phone className="w-4 h-4 text-purple-300" /> (61) 9 992271063
            </a>
          </div>
        </div>

        {/* orbiting logo */}
        <div className="relative mt-20 mx-auto w-80 h-80">
          <div className="absolute inset-0 rounded-full border border-purple-400/20" />
          <div className="absolute inset-6 rounded-full border border-purple-400/10" />
          <div className="absolute inset-12 rounded-full border border-purple-400/5" />
          <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-3xl" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-fuchsia-300 shadow-[0_0_12px_4px_rgba(232,121,249,0.6)]" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute inset-6"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-300 shadow-[0_0_8px_2px_rgba(192,132,252,0.6)]" />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/40 to-fuchsia-500/30 border border-purple-400/40 backdrop-blur-sm flex items-center justify-center">
              <Logo size={48} />
            </div>
          </div>
        </div>

        <div className="mt-12 text-white/30 text-xs">
          © {new Date().getFullYear()} Mariana Viana · Platform & DevEx Engineer
        </div>
      </div>
    </section>
  );
}
