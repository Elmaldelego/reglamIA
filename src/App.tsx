/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  Mail, 
  Search, 
  Scale,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScLYs71_RK8q8i0aEXeGs_0lhtO1wiRLSvqB9iWlLlVRhIIqg/viewform?usp=header";
  const DEMO_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd4Bn3bNpGjuU6uL6xrxAsNSMj0Na-urcdF0YqcEXx4GE1lPg/viewform?usp=header";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Reglamia Logo" 
              className="h-12 w-auto" 
              referrerPolicy="no-referrer" 
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#como-funciona" className="text-sm font-medium text-slate-600 hover:text-indigo-900 transition-colors">Cómo funciona</a>
            <a href="#membresia" className="text-sm font-medium text-slate-600 hover:text-indigo-900 transition-colors">Membresía</a>
            <a href="#confianza" className="text-sm font-medium text-slate-600 hover:text-indigo-900 transition-colors">Confianza</a>
            <a 
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-indigo-900 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-800 transition-all hover:shadow-lg active:scale-95"
            >
              Empezar ahora
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full border-b border-slate-100 bg-white p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <a href="#como-funciona" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">Cómo funciona</a>
              <a href="#membresia" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">Membresía</a>
              <a href="#confianza" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">Confianza</a>
              <a 
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-indigo-900 py-4 text-center font-semibold text-white"
              >
                Generar Matriz Gratis
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-50/50 blur-3xl"></div>
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                <ShieldCheck size={16} />
                Cumplimiento garantizado en todo el país
              </span>
              <h1 className="mt-8 text-4xl font-bold tracking-tight text-indigo-950 sm:text-6xl lg:text-7xl">
                ¿Tu negocio cumple con <br className="hidden lg:block" />
                <span className="text-emerald-600 italic">todas las normas</span> hoy?
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Nuestra IA analiza las leyes vigentes del DOF, leyes estatales y reglamentos municipales específicas para tu giro.
              </p>
              
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {/* BOTÓN PRINCIPAL - Cambia el enlace aquí */}
                <a
                  id="cta-button-hero"
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-indigo-900 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-indigo-800 hover:shadow-indigo-900/20 active:scale-95"
                >
                  Generar mi Matriz Gratis
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </a>
                
                <a
                  id="demo-button-hero"
                  href={DEMO_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-indigo-900 bg-transparent px-8 py-4 text-lg font-bold text-indigo-900 transition-all hover:bg-indigo-50 active:scale-95"
                >
                  Solicitar Demo
                </a>
              </div>
              <p className="mt-6 text-sm text-slate-500">Sin tarjetas de crédito. 100% legal y confidencial.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membresia" className="py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative rounded-[3rem] bg-indigo-900 px-8 py-16 lg:px-20 lg:py-24 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"></div>

            <div className="relative flex flex-col items-center gap-16 lg:flex-row">
              <div className="lg:w-1/2">
                <span className="inline-block rounded-full bg-indigo-500/20 px-4 py-1 text-sm font-semibold text-indigo-200 ring-1 ring-inset ring-indigo-500/30">
                  Servicio Premium
                </span>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Tu departamento legal, <br />
                  <span className="text-emerald-400">potenciado por IA.</span>
                </h2>
                <p className="mt-6 text-lg text-indigo-100 leading-relaxed">
                  Con nuestra membresía, accedes a una plataforma interactiva donde puedes consultar cualquier norma o reglamento que aplique a tu negocio en tiempo real.
                </p>
                
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      title: "Consultas 24/7",
                      desc: "Pregunta a nuestra IA sobre cualquier ley federal, estatal o municipal.",
                      icon: <Search size={20} className="text-emerald-400" />
                    },
                    {
                      title: "Gestión Documental",
                      desc: "Ayuda para elaborar procedimientos y documentos de cumplimiento.",
                      icon: <FileText size={20} className="text-emerald-400" />
                    },
                    {
                      title: "Revisión de Formatos",
                      desc: "Sube tus formatos actuales y recibe sugerencias de mejora legal.",
                      icon: <CheckCircle size={20} className="text-emerald-400" />
                    },
                    {
                      title: "Privacidad Total",
                      desc: "Tus datos están protegidos bajo los más altos estándares de confidencialidad.",
                      icon: <ShieldCheck size={20} className="text-emerald-400" />
                    }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">{feature.icon}</div>
                      <div>
                        <h4 className="font-bold text-white">{feature.title}</h4>
                        <p className="mt-1 text-sm text-indigo-200">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <a
                    href={DEMO_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-indigo-900 shadow-xl transition-all hover:bg-indigo-50 active:scale-95"
                  >
                    Solicitar Demo de la Plataforma
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="relative rounded-2xl bg-white/5 p-4 backdrop-blur-sm ring-1 ring-white/10 shadow-2xl">
                  <div className="rounded-xl bg-white p-6 shadow-inner">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                        <Scale size={16} />
                      </div>
                      <div className="text-sm font-bold text-slate-800">Asistente Reglamia IA</div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-end">
                        <div className="rounded-2xl bg-indigo-50 px-4 py-2 text-sm text-indigo-900 max-w-[80%]">
                          ¿Qué necesito para cumplir con la NOM-251 en mi establecimiento?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="rounded-2xl bg-slate-100 px-4 py-2 text-sm text-slate-700 max-w-[80%]">
                          Para cumplir con la NOM-251-SSA1-2009, debes implementar controles de temperatura, higiene del personal y un programa de control de plagas. ¿Te ayudo a redactar el manual de procedimientos?
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="rounded-2xl bg-indigo-50 px-4 py-2 text-sm text-indigo-900 max-w-[80%]">
                          Sí, por favor. Ayúdame con el formato de control de temperaturas.
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                      <div className="h-10 flex-grow rounded-full bg-slate-50 border border-slate-200 px-4 flex items-center text-slate-400 text-xs italic">
                        Escribe tu consulta legal aquí...
                      </div>
                      <div className="h-10 w-10 rounded-full bg-indigo-900 flex items-center justify-center text-white">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative floating elements */}
                <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-2xl bg-emerald-500 shadow-lg flex items-center justify-center text-white transform -rotate-12">
                  <ShieldCheck size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-indigo-950 sm:text-4xl">Cómo funciona Reglamia</h2>
            <p className="mt-4 text-lg text-slate-600">Tu tranquilidad legal en solo tres pasos.</p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Llena tus datos",
                desc: "Haz clic en el botón y completa tus datos básicos en nuestro formulario de Google.",
                icon: <FileText className="text-indigo-900" size={32} />
              },
              {
                step: "02",
                title: "Análisis con IA",
                desc: "Nuestra IA analiza las leyes vigentes del DOF, leyes estatales y reglamentos municipales específicas para tu giro.",
                icon: <Search className="text-indigo-900" size={32} />
              },
              {
                step: "03",
                title: "Recibe tu Matriz",
                desc: "Recibe en tu correo una matriz personalizada con tus obligaciones legales y fechas clave.",
                icon: <Mail className="text-indigo-900" size={32} />
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
                  {item.icon}
                </div>
                <span className="text-5xl font-black text-slate-100 absolute top-8 right-8">{item.step}</span>
                <h3 className="text-xl font-bold text-indigo-950">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="confianza" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight text-indigo-950 sm:text-4xl">Vigilancia legal 24/7</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                No te preocupes por los cambios en la ley. Nuestro sistema monitorea diariamente las fuentes oficiales para que tú solo te enfoques en tu negocio.
              </p>
              
              <ul className="mt-10 space-y-4">
                {[
                  "Diario Oficial de la Federación (DOF)",
                  "Periódicos Oficiales Estatales",
                  "Gacetas y Reglamentos Municipales"
                ].map((source, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle size={20} className="text-emerald-500" />
                    <span className="font-medium">{source}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl bg-indigo-900 p-8 text-white shadow-2xl lg:p-12">
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl"></div>
                <blockquote className="relative">
                  <p className="text-xl font-medium italic leading-relaxed">
                    "Desde que usamos Reglamia, las inspecciones ya no nos quitan el sueño. Sabemos exactamente qué tener en orden y cómo cumplir con cada autoridad."
                  </p>
                  <footer className="mt-8">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-indigo-800 flex items-center justify-center font-bold text-indigo-300">
                        EN
                      </div>
                      <div>
                        <div className="font-bold">Empresa Nacional</div>
                        <div className="text-sm text-indigo-300">Cumplimiento Corporativo</div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-950 py-24 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Listo para blindar tu negocio?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-indigo-200">
            Únete a los negocios que ya operan con total cumplimiento legal en todo el país.
          </p>
          <div className="mt-10">
            <a
              id="cta-button-footer"
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-emerald-400 hover:shadow-emerald-500/20 active:scale-95"
            >
              Generar mi Matriz Gratis
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/logo.png" 
              alt="Reglamia Logo" 
              className="h-10 w-auto" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Reglamia. Todos los derechos reservados.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Inteligencia Artificial aplicada al cumplimiento legal.
          </p>
        </div>
      </footer>
    </div>
  );
}
