import { useState } from "react";
import { cvData } from "./data/cvData.js";
import { Mail, Phone, Linkedin, MessageCircle, Menu, X } from "lucide-react";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "perfil", label: "Perfil profesional" },
  { id: "formacion", label: "Formación" },
  { id: "experiencia", label: "Experiencia" },
  { id: "habilidades", label: "Habilidades" },
  { id: "software", label: "Software" },
  { id: "contacto", label: "Contacto" },
];

const softwareGroups = [
  {
    category: "AUTODESK COLLECTION",
    items: [
      {
        name: "Revit",
        logo: `${import.meta.env.BASE_URL}images/software/revit.svg`,
      },
      {
        name: "AutoCAD",
        logo: `${import.meta.env.BASE_URL}images/software/autocad.svg`,
      },
      {
        name: "Navisworks",
        logo: `${import.meta.env.BASE_URL}images/software/navisworks.svg`,
      },
      {
        name: "Civil 3D",
        logo: `${import.meta.env.BASE_URL}images/software/civil3d.svg`,
      },
      {
        name: "BIM 360",
        logo: `${import.meta.env.BASE_URL}images/software/bim360.svg`,
      },
    ],
  },
  {
    category: "DISEÑO",
    items: [
      {
        name: "SAP2000",
        logo: `${import.meta.env.BASE_URL}images/software/sap2000.svg`,
      },
      {
        name: "ETABS",
        logo: `${import.meta.env.BASE_URL}images/software/etabs.svg`,
      },
      {
        name: "MIDAS Civil",
        logo: `${import.meta.env.BASE_URL}images/software/midas-civil.svg`,
      },
      {
        name: "MIDAS Gen",
        logo: `${import.meta.env.BASE_URL}images/software/midas-gen.svg`,
      },
    ],
  },
  {
    category: "PAQUETE OFFICE",
    items: [
      {
        name: "Project",
        logo: `${import.meta.env.BASE_URL}images/software/project.svg`,
      },
      {
        name: "Word",
        logo: `${import.meta.env.BASE_URL}images/software/word.svg`,
      },
      {
        name: "Excel",
        logo: `${import.meta.env.BASE_URL}images/software/excel.svg`,
      },
      {
        name: "PowerPoint",
        logo: `${import.meta.env.BASE_URL}images/software/powerpoint.svg`,
      },
    ],
  },
];

function IsometricStationIllustration() {
  return (
    <svg
      viewBox="0 0 560 420"
      className="w-full h-auto max-w-xl"
      role="img"
      aria-labelledby="stnTitle stnDesc"
    >
      <title id="stnTitle">
        Modelo isométrico técnico de estación de tren e infraestructura
        viaductada
      </title>
      <desc id="stnDesc">
        Ilustración vectorial original con viaducto elevado, celosía metálica,
        columnas, vías múltiples, durmientes, rieles, perspectiva isométrica y
        detalles BIM.
      </desc>
      <defs>
        <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#0f3d56" />
        </linearGradient>
      </defs>
      <g strokeLinecap="round" strokeLinejoin="round">
        <rect width="560" height="420" fill="white" />
        <g opacity="0.4" stroke="#cbd5e1" strokeWidth="0.8">
          <line x1="40" y1="360" x2="520" y2="360" />
          <line x1="40" y1="320" x2="520" y2="320" />
          <line x1="40" y1="280" x2="520" y2="280" />
        </g>
        <polygon
          points="80,260 240,150 420,190 260,300"
          fill="#f8fafc"
          stroke="#475569"
          strokeWidth="1.2"
        />
        <polygon
          points="90,265 235,160 410,198 265,292"
          fill="none"
          stroke="#0f3d56"
          strokeWidth="1.6"
        />
        <g stroke="url(#beam)">
          <line x1="110" y1="250" x2="110" y2="320" strokeWidth="6" />
          <line x1="170" y1="210" x2="170" y2="280" strokeWidth="6" />
          <line x1="240" y1="170" x2="240" y2="240" strokeWidth="6" />
          <line x1="310" y1="190" x2="310" y2="260" strokeWidth="5" />
          <line x1="380" y1="210" x2="380" y2="280" strokeWidth="5" />
        </g>
        <g fill="none" stroke="#0f3d56">
          <polyline
            points="150,195 190,175 230,190 190,210 150,195"
            strokeWidth="1.8"
          />
          <polyline
            points="200,175 240,155 280,170 240,190 200,175"
            strokeWidth="1.8"
          />
          <polyline
            points="250,155 290,135 330,150 290,170 250,155"
            strokeWidth="1.8"
          />
        </g>
        <g stroke="#111827" strokeWidth="2.2">
          <path d="M 70 290 L 200 200 L 440 240" />
          <path d="M 75 298 L 205 208 L 445 248" />
          <path d="M 80 306 L 210 216 L 450 256" />
        </g>
        <g stroke="#f59e0b" strokeWidth="1.6">
          <path d="M 72 294 L 202 204 L 442 244" />
        </g>
        <g stroke="#475569" strokeWidth="1.2">
          <line x1="120" y1="245" x2="120" y2="320" />
          <line x1="150" y1="225" x2="150" y2="300" />
          <line x1="180" y1="205" x2="180" y2="280" />
          <line x1="210" y1="215" x2="210" y2="290" />
          <line x1="240" y1="225" x2="240" y2="300" />
          <line x1="270" y1="235" x2="270" y2="310" />
        </g>
        <g fill="#c8a84b" opacity="0.8">
          <rect
            x="165"
            y="170"
            width="6"
            height="6"
            transform="rotate(-30 168 173)"
          />
          <rect
            x="215"
            y="150"
            width="6"
            height="6"
            transform="rotate(-30 218 153)"
          />
          <rect
            x="265"
            y="130"
            width="6"
            height="6"
            transform="rotate(-30 268 133)"
          />
        </g>
      </g>
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollTo("inicio")}
              className="text-sm sm:text-base font-semibold tracking-wide hover:text-[#a6842a] transition-colors"
            >
              L.A. BERMÚDEZ CUEVAS
            </button>
            <div className="hidden lg:flex items-center gap-6">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="text-sm text-gray-700 hover:text-[#a6842a] transition-colors"
                >
                  {s.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <a
                href={cvData.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={cvData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver perfil de LinkedIn"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Menú de navegación"
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="text-left py-2 text-sm text-gray-700 hover:text-[#a6842a] transition-colors"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          id="inicio"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#a6842a] mb-4">
                Ingeniería Civil • Estructuras • Infraestructura
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900">
                {cvData.name}
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                {cvData.profile}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={cvData.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c8a84b] hover:bg-[#a6842a] text-white font-medium transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactar por WhatsApp
                </a>
                <a
                  href={cvData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver perfil de LinkedIn"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400 text-gray-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  Ver perfil de LinkedIn
                </a>
                <a
                  href={"mailto:" + cvData.contact.email}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400 text-gray-900 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {cvData.contact.email}
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <IsometricStationIllustration />
            </div>
          </div>
        </section>

        <section
          id="perfil"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20"
        >
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
              Perfil profesional
            </h2>
            <div className="h-1 w-20 bg-[#c8a84b]" />
          </div>
          <div className="p-6 sm:p-8 rounded-xl border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-700 leading-relaxed">{cvData.profile}</p>
          </div>
        </section>

        <section
          id="formacion"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20"
        >
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
              Formación
            </h2>
            <div className="h-1 w-20 bg-[#c8a84b]" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {cvData.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {edu.title}
                </h3>
                <p className="text-gray-600">{edu.date}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="experiencia"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20"
        >
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
              Experiencia
            </h2>
            <div className="h-1 w-20 bg-[#c8a84b]" />
          </div>
          <div className="space-y-8">
            {cvData.experience.map((exp, idx) => (
              <article
                key={idx}
                className="p-6 sm:p-8 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-[#a6842a] font-medium mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{exp.project}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <span className="text-[#c8a84b] mt-1">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="habilidades"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20"
        >
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
              Habilidades
            </h2>
            <div className="h-1 w-20 bg-[#c8a84b]" />
          </div>
          <div className="p-6 sm:p-8 rounded-xl border border-gray-200 bg-white shadow-sm">
            <ul className="grid sm:grid-cols-2 gap-3">
              {cvData.skills.map((s, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="text-[#c8a84b]">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="software"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20"
        >
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
              Software
            </h2>
            <div className="h-1 w-20 bg-[#c8a84b]" />
          </div>
          <div className="space-y-8">
            {softwareGroups.map((group, gidx) => (
              <div
                key={gidx}
                className="p-6 sm:p-8 rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-6 text-gray-900">
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {group.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={"Logotipo de " + item.name}
                          className="h-12 w-auto object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-lg bg-gray-50 flex items-center justify-center text-xs font-semibold text-gray-600 border border-gray-200">
                          {item.name.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                      <span className="text-xs text-center text-gray-800 font-medium leading-tight">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contacto"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20 scroll-mt-20"
        >
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
              Contacto
            </h2>
            <div className="h-1 w-20 bg-[#c8a84b]" />
          </div>
          <div className="p-6 sm:p-8 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-wrap justify-center items-center gap-4">
            <a
              href={cvData.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c8a84b] hover:bg-[#a6842a] text-white font-medium transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
            <a
              href={cvData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver perfil de LinkedIn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400 text-gray-900 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Ver perfil de LinkedIn
            </a>
            <a
              href={"mailto:" + cvData.contact.email}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400 text-gray-900 transition-colors"
            >
              <Mail className="w-5 h-5" />
              {cvData.contact.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} {cvData.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
