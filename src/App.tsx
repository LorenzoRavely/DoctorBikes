/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { TypingEffect } from "./components/ui/typing-effect";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  Bike, Instagram, MessageCircle, Wrench, ShieldCheck,
  Activity, Award, Settings, Mountain, Disc, Link,
  Zap, Quote, ChevronDown, MapPin, Phone, Clock
} from "lucide-react";

import "./index.css";

const whatsappUrl = "https://wa.me/5511976527640";
const instagramUrl = "https://www.instagram.com/doctorbikes81/";

const NAV_LINKS = [
  { href: '#home', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function App() {
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = React.useState('home');

  // Subtle hero fade on scroll
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.5]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.98]);

  React.useEffect(() => {
    const sections = ['home', 'servicos', 'avaliacoes', 'contato'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-[#000] text-white selection:bg-white selection:text-black relative">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />


      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full flex items-center gap-1"
      >
        {NAV_LINKS.map(({ href, label }) => {
          const sectionId = href.replace('#', '');
          const isActive = activeSection === sectionId;
          return (
            <a
              key={href}
              href={href}
              className="relative px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 z-10 hover:scale-105"
              style={{
                color: isActive ? '#000' : 'rgba(255,255,255,0.6)',
              }}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-brand-yellow rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              {label}
            </a>
          );
        })}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[90vh]">
        {/* Two-column layout */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">

          {/* LEFT COLUMN — Text Content */}
          <div className="flex flex-col items-start text-left max-w-xl z-10">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-8 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full"
            >
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest font-semibold text-white/60">
                Aberto para Revisões & Reparos
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              style={{ opacity: heroOpacity, scale: heroScale }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[60px] md:text-[100px] lg:text-[130px] font-bold leading-[0.85] tracking-tighter mb-8"
            >
              <span className="block text-white min-h-[1em]">
                <TypingEffect
                  texts={["DOCTOR", "MASTER", "EXPERT", "PRECISÃO"]}
                  className="text-white text-left justify-start"
                  rotationInterval={2500}
                />
              </span>
              <span className="flex items-center text-brand-yellow relative" style={{ marginLeft: '0' }}>
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="w-[0.9em] h-[0.9em] mr-[0.1em] rounded-full border border-white/10 p-1 flex-shrink-0"
                >
                  <img src="/images/logo-circle.png" alt="" className="w-full h-full object-contain" />
                </motion.div>
                BIKES
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              style={{ opacity: heroOpacity }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/50 text-lg mb-12 font-light leading-relaxed max-w-md"
            >
              Diagnóstico avançado e manutenção especializada. Tratamos cada peça com o rigor de uma cirurgia e a paixão de quem pedala.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              style={{ opacity: heroOpacity }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-brand-yellow hover:scale-105 transition-all transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:glow-yellow cursor-pointer">
                  Agendar Revisão
                </button>
              </a>
              <a href="#servicos">
                <button className="px-10 py-5 border border-white/20 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all active:scale-95 flex items-center gap-2 group cursor-pointer text-white">
                  Nossos Serviços
                </button>
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Workshop Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0 w-full lg:w-[460px] h-[520px]"
          >
            {/* Gradient overlay — apenas bordas para fundir suavemente */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10 rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 rounded-2xl" />
            <img
              src="/images/faixada.png"
              alt="Workshop Doctor Bikes"
              className="w-full h-full object-cover rounded-2xl opacity-70"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <span className="text-[8px] uppercase tracking-[0.4em] text-white font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-yellow to-transparent" />
        </div>
      </section>

      {/* Separator Line */}
      <div className="w-full max-w-7xl mx-auto h-px bg-white/5" />

      {/* Services Section */}
      <section id="servicos" className="relative py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-yellow mb-4 block">O Que Fazemos</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.8]">
              Nossos Serviços
            </h2>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 border border-white/20 bg-white/5 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all group cursor-pointer">
              Solicitar orçamento <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Wrench className="w-6 h-6" />}
            title="Revisão Completa"
            desc="Checagem de todos os componentes da sua bike com diagnóstico detalhado. Ajuste de freios, câmbios, pedivela, mesa, selime muito mais."
            price="A partir de R$ 120,00"
            large
          />
          <ServiceCard
            icon={<Settings className="w-6 h-6" />}
            title="Rolamentos"
            desc="Troca de rolamentos cerâmicos e convencionais para bikes nacionais e importadas."
            price="Consultar"
          />
          <ServiceCard
            icon={<Mountain className="w-6 h-6" />}
            title="Suspensão"
            desc="Manutenção e regulagem de garfos e amortecedores ProShock e similares."
            price="A partir de R$ 80,00"
          />
          <ServiceCard
            icon={<Disc className="w-6 h-6" />}
            title="Rodas Tubeless"
            desc="Conversão e manutenção de rodas tubeless para melhor performance no trail."
            price="A partir de R$ 60,00"
          />
          <ServiceCard
            icon={<Link className="w-6 h-6" />}
            title="Transmissão"
            desc="Substituição de correntes, cassetes, coroas e ajuste fino do sistema de câmbio."
            price="A partir de R$ 50,00"
          />
          <ServiceCard
            icon={<Zap className="w-6 h-6" />}
            title="E-Bikes"
            desc="Manutenção especializada em bikes elétricas: motor, bateria e sistema eletrônico."
            price="Consultar"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="avaliacoes" className="relative py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-yellow mb-4">O Que Dizem Nossas Máquinas</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-none">
            Arquitetando o Futuro de <br /> <span className="text-white/40 italic">Cada Pedalada.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TestimonialCard name="Rafael Souza" text="Daniel, excelente profissional, atendimento rápido e eficiente, honesto e prestativo. Indicação feita por outro cliente que passou ótimas referências constatadas durante todas as fases do atendimento, muito recomendo." />
          <TestimonialCard name="Camila Ferreira" text="Serviço top! Daniel cuidou de todos os detalhes me deixando segura e confiante para pedalar. Se ajustou com meus horários e datas também, o que me ajuda dmais na correria q vivemos.  Sucessoooo, recomendo mil!" />
          <TestimonialCard name="Marcos Antônio" text="Daniel fez um ótimo trabalho na minha bike, revisão e algumas melhorias, sem falar que
Muito gente boa !" />
          <div className="lg:col-span-2">
            <TestimonialCard name="Guilherme Alves" text="Excelente atendimento,  trabalho realizado com muita qualidade,  me forneceu várias dicas de como manter a bike em ordem. Muito satisfeito" />
          </div>
          <TestimonialCard name="Beatriz Silva" text="Como é satisfatório ver a dedicação do Doctor!!! Produtos de qualidade e estrutura TOP. Daniel é muito atencioso, poder ir sem medo!!!" />
        </div>

        <div className="mt-12 flex justify-center">
          <a href="https://www.google.com.br/maps/place/%F0%9F%9A%B2Doctor+Bikes/@-23.1983879,-46.8874618,17z/data=!4m8!3m7!1s0x94cf270005216ca1:0xcea6db7c575beb11!8m2!3d-23.1983879!4d-46.8848869!9m1!1b1!16s%2Fg%2F11xcwpn7p4?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <button className="px-10 py-4 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:scale-105 hover:glow-white transition-all active:scale-95 cursor-pointer">
              Ver mais avaliações
            </button>
          </a>
        </div>
      </section>

      {/* FAQ & Contact Section */}
      <section id="contato" className="relative py-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 border-t border-white/5">
        <div className="flex-1">
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-tight mb-12">
            Perguntas & <br /> Respostas
          </h2>
          <div className="flex flex-col divide-y divide-white/10">
            <AccordionItem title="Vocês atendem todas as marcas de bike?" />
            <AccordionItem title="Preciso agendar ou posso chegar sem hora?" />
            <AccordionItem title="Vocês oferecem garantia nos serviços?" />
          </div>
        </div>

        <div className="lg:w-[450px]">
          <div className="p-10 bg-neutral-950 rounded-2xl border border-white/5 relative overflow-hidden">
            <h3 className="text-3xl font-bold tracking-tighter mb-4">Entre em Contato</h3>
            <div className="flex flex-col gap-6 mb-10">
              <ContactInfoItem icon={<MapPin className="w-4 h-4 text-brand-yellow" />} label="Endereço" value="Rua Silvia Jardim, 469 / Vianelo — Jundiaí, SP" />
              <ContactInfoItem icon={<Phone className="w-4 h-4 text-brand-yellow" />} label="WhatsApp" value="(11) 97652-7640" />
              <ContactInfoItem icon={<Instagram className="w-4 h-4 text-brand-yellow" />} label="Instagram" value="@doctorbikes81" />
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="w-full py-4 bg-brand-yellow text-black font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-white hover:scale-105 hover:glow-yellow active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer">
                <MessageCircle className="w-5 h-5 fill-black" />
                Chamar no WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative bg-[#000] py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-12 text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
            <div className="col-span-2 lg:col-span-2 text-left">
              <div className="flex items-center gap-2 mb-6">
                <Bike className="w-5 h-5 text-brand-yellow" />
                <span className="text-lg font-bold tracking-widest uppercase text-white">DoctorBikes</span>
              </div>
              <p className="text-white/40 font-normal normal-case tracking-normal max-w-xs leading-relaxed">
                Referência em manutenção técnica e diagnósticos avançados.
              </p>
            </div>

            <div className="flex flex-col gap-6 text-left">
              <h4 className="text-white font-bold">Empresa</h4>
              <ul className="flex flex-col gap-3 font-medium text-white/50">
                <li><a href="#servicos" className="hover:text-brand-yellow transition-colors">Serviços</a></li>
                <li><a href="#avaliacoes" className="hover:text-brand-yellow transition-colors">Avaliações</a></li>
                <li><a href="#contato" className="hover:text-brand-yellow transition-colors">Contato</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-6 text-left">
              <h4 className="text-white font-bold">Suporte</h4>
              <ul className="flex flex-col gap-3 font-medium text-white/50">
                <li><a href="#" className="hover:text-brand-yellow transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-brand-yellow transition-colors">Termos</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-2 items-end">
              <div className="flex items-center gap-4">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-brand-yellow hover:text-black hover:scale-110 active:scale-90 transition-all group">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-brand-yellow hover:text-black hover:scale-110 active:scale-90 transition-all group">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
              © 2026 DoctorBikes. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
              Precision Crafted Workshop.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc, price, large }: { icon: React.ReactNode, title: string, desc: string, price: string, large?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-10 bg-neutral-900/40 rounded-2xl border border-white/5 flex flex-col gap-8 hover:border-brand-yellow/30 transition-all group ${large ? 'md:col-span-2' : ''}`}
    >
      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-black transition-all">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold tracking-tighter uppercase italic text-white">{title}</h3>
        <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-[0.2em]">{price}</span>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <button className="text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-brand-yellow transition-all cursor-pointer">Saber Mais</button>
        </a>
      </div>
    </motion.div>
  );
}

function TestimonialCard({ name, role, text }: { name: string, role: string, text: string }) {
  return (
    <div className="p-10 rounded-2xl border border-white/5 bg-neutral-900/40 flex flex-col gap-6">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => <span key={i} className="text-brand-yellow text-[10px]">★</span>)}
      </div>
      <p className="text-white/80 text-sm leading-relaxed font-medium">“{text}”</p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"><Quote className="w-4 h-4 text-white/20" /></div>
        <div className="flex flex-col text-left">
          <p className="text-sm font-bold uppercase italic text-white">{name}</p>
          <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold">{role}</p>
        </div>
      </div>
    </div>
  );
}

function AccordionItem({ title }: { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex justify-between items-center text-left hover:text-brand-yellow transition-all">
        <span className="font-bold tracking-tighter text-lg uppercase text-white">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-all ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-6 text-white/40 text-sm">
            Garantimos o cuidado necessário para máxima longevidade e performance da sua bike.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactInfoItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">{icon}</div>
      <div className="flex flex-col text-left">
        <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">{label}</span>
        <span className="text-sm font-medium text-white">{value}</span>
      </div>
    </div>
  );
}
