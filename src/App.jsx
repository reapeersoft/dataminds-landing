import { useEffect, useState } from 'react'

const highlights = [
  {
    title: 'Entrega veloz sin sacrificar calidad',
    copy: 'Sprints cortos, validaciones continuas y foco total en impacto de negocio.',
    iconColor: 'text-brand',
    iconBg: 'bg-brand/10 ring-brand/30',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12h6l2 3 4-8h4" />
        <path d="M4 6h6" />
      </svg>
    ),
  },
  {
    title: 'Equipo senior dedicado',
    copy: 'Ingenieros, UX y PM con experiencia en productos críticos y escalables.',
    iconColor: 'text-pop',
    iconBg: 'bg-pop/10 ring-pop/30',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 14c-2.5 1-4 3-4 5h16c0-2-1.5-4-4-5" />
        <circle cx="9" cy="8" r="3" />
        <circle cx="16" cy="7" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Arquitectura preparada para crecer',
    copy: 'Pensamos en performance, seguridad y datos desde el primer día.',
    iconColor: 'text-mint',
    iconBg: 'bg-mint/10 ring-mint/30',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <path d="M14 14h7v7h-7z" />
      </svg>
    ),
  },
]

const services = [
  {
    name: 'Web apps y plataformas',
    desc: 'Productos rápidos, elegantes y orientados a conversión.',
    iconColor: 'text-sun',
    iconBg: 'bg-sun/10 ring-sun/30',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 20h10" />
      </svg>
    ),
  },
  {
    name: 'Mobile & multiplataforma',
    desc: 'Experiencias fluidas con métricas de negocio en tiempo real.',
    iconColor: 'text-pop',
    iconBg: 'bg-pop/10 ring-pop/30',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    ),
  },
  {
    name: 'Integraciones y automatización',
    desc: 'Conectamos tus sistemas para eliminar fricción operativa.',
    iconColor: 'text-sun',
    iconBg: 'bg-sun/10 ring-sun/30',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 12h8" />
        <path d="M12 8v8" />
        <circle cx="5" cy="12" r="3" />
        <circle cx="19" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: 'IA aplicada y analítica',
    desc: 'Modelos prácticos para optimizar decisiones y procesos.',
    iconColor: 'text-mint',
    iconBg: 'bg-mint/10 ring-mint/30',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 3h10v4H7z" />
        <rect x="5" y="7" width="14" height="14" rx="3" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
]

const steps = [
  {
    title: 'Descubrimiento',
    copy: 'Entendemos tu negocio y definimos objetivos claros.',
    iconColor: 'text-cyan-700',
    iconBg: 'bg-cyan-100 ring-cyan-200',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="6" />
        <path d="M16 16l4 4" />
      </svg>
    ),
  },
  {
    title: 'Diseño',
    copy: 'Prototipos rápidos y validación con usuarios reales.',
    iconColor: 'text-fuchsia-700',
    iconBg: 'bg-fuchsia-100 ring-fuchsia-200',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 18l4-1 9-9-3-3-9 9-1 4z" />
        <path d="M13 5l3 3" />
      </svg>
    ),
  },
  {
    title: 'Desarrollo',
    copy: 'Construcción iterativa con foco en performance.',
    iconColor: 'text-emerald-700',
    iconBg: 'bg-emerald-100 ring-emerald-200',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 8l-4 4 4 4" />
        <path d="M16 8l4 4-4 4" />
        <path d="M13 6l-2 12" />
      </svg>
    ),
  },
  {
    title: 'Lanzamiento',
    copy: 'Go-live acompañado y métricas accionables.',
    iconColor: 'text-amber-700',
    iconBg: 'bg-amber-100 ring-amber-200',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 13l6-6 8-2-2 8-6 6-6-6z" />
        <circle cx="14.5" cy="9.5" r="1.2" />
      </svg>
    ),
  },
]

const metrics = [
  { value: '72h', label: 'squad asignado y kick-off' },
  { value: '2 sem', label: 'ciclos de delivery con demo' },
  { value: 'mismo día', label: 'respuesta hábil a tu propuesta' },
]

const clients = [
  { name: 'Cloudata', logo: '/clients/cloudata.png', bg: 'bg-slate-800' },
  { name: 'Forgal', logo: '/clients/forgal.png' },
  { name: 'Agrícola y Forestal Doña Isidora', logo: '/clients/isidora.jpg' },
  { name: 'Sportlife', logo: '/clients/sportlife.png', invert: true },
  { name: 'M2 Technic', logo: '/clients/m2technic.png', invert: true },
  { name: 'Comag SpA', logo: '/clients/comag.svg' },
]

const WHATSAPP_RAW = '56964582696'
const PHONE_DISPLAY = '+56 9 6458 2696'
const EMAIL_ADDRESS = 'hola@dataminds.lat'

const isMobileDevice = () => typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)

const openWhatsApp = (text) => {
  const onMobile = isMobileDevice()
  const url = onMobile
    ? `https://wa.me/${WHATSAPP_RAW}${text ? `?text=${encodeURIComponent(text)}` : ''}`
    : `https://web.whatsapp.com/send?phone=${WHATSAPP_RAW}${text ? `&text=${encodeURIComponent(text)}` : ''}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

const copyToClipboard = async (value) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value)
      return true
    }
  } catch { /* fall through */ }
  try {
    const ta = document.createElement('textarea')
    ta.value = value
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.left = '-9999px'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(ta)
    return ok
  } catch { return false }
}

const capabilities = [
  {
    title: 'Product Discovery + Delivery',
    desc: 'Desde hipótesis de negocio hasta releases semanales con aprendizaje continuo.',
    tag: 'End-to-end',
  },
  {
    title: 'Data + IA en producción',
    desc: 'Pipelines, observabilidad y modelos prácticos conectados a tus operaciones.',
    tag: 'Data-driven',
  },
  {
    title: 'Arquitectura de alto rendimiento',
    desc: 'Diseño técnico para escalar equipos, tráfico y complejidad sin deuda innecesaria.',
    tag: 'Scalable Core',
  },
]

export default function App() {
  const [showTopButton, setShowTopButton] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowTopButton(window.scrollY > 360)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const buildContactMessage = (data) => {
    const nombre = (data.get('nombre') || '').toString().trim()
    const email = (data.get('email') || '').toString().trim()
    const mensaje = (data.get('mensaje') || '').toString().trim()
    return `Hola Dataminds!\n\nSoy ${nombre} (${email}).\n\n${mensaje}\n\n— Enviado desde dataminds.lat`
  }

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault()
    openWhatsApp(buildContactMessage(new FormData(e.currentTarget)))
  }

  const copyEmail = async () => {
    const ok = await copyToClipboard(EMAIL_ADDRESS)
    setEmailCopied(ok)
    if (ok) setTimeout(() => setEmailCopied(false), 2000)
  }

  const copyPhone = async () => {
    const ok = await copyToClipboard(PHONE_DISPLAY)
    setPhoneCopied(ok)
    if (ok) setTimeout(() => setPhoneCopied(false), 2000)
  }

  const handleSendEmail = (form) => {
    if (!form) return
    if (typeof form.reportValidity === 'function' && !form.reportValidity()) return
    const data = new FormData(form)
    const subject = `Consulta de ${(data.get('nombre') || '').toString().trim() || 'contacto'}`
    const body = buildContactMessage(data)
    window.location.href = `mailto:hola@dataminds.lat?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="min-h-screen bg-[#eef2f6] text-slate-800">
      <div className="relative overflow-hidden bg-white text-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100" />
        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-slate-200/60 blur-[120px] animate-glow" />
        <div className="absolute top-40 right-10 h-48 w-48 rounded-full bg-slate-300/40 blur-[100px] animate-drift" />
        <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-slate-200/70 blur-[90px] animate-drift" />
        <div className="absolute left-1/4 top-24 h-3 w-3 rounded-full bg-slate-500/60 animate-bob" />
        <div className="absolute right-1/3 bottom-24 h-2 w-2 rounded-full bg-slate-400/70 animate-bob" />

        <header className="relative z-20">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <a href="#" className="flex items-center gap-3" onClick={closeMenu}>
              <div className="flex items-center justify-center text-slate-900">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 4a4 4 0 0 0-4 4v2a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3h2" />
                  <path d="M15 4a4 4 0 0 1 4 4v2a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3h-2" />
                  <path d="M9 8h2m0 0v8m0-4h4m0-4h2" />
                </svg>
              </div>
              <div className="font-display text-lg font-semibold tracking-wide">Dataminds</div>
            </a>

            <div className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
              <a className="group relative transition hover:text-slate-900" href="#servicios">
                Servicios
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-slate-900 transition-all group-hover:w-full" />
              </a>
              <a
                className="group relative transition hover:text-slate-900"
                href="https://spector.dataminds.lat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spector
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-slate-900 transition-all group-hover:w-full" />
                <svg viewBox="0 0 24 24" className="ml-1 inline-block h-3 w-3 -translate-y-px text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M14 5h5v5M19 5l-9 9M5 9v10h10" />
                </svg>
              </a>
              <a className="group relative transition hover:text-slate-900" href="#proceso">
                Proceso
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-slate-900 transition-all group-hover:w-full" />
              </a>
              <a className="group relative transition hover:text-slate-900" href="#resultados">
                Resultados
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-slate-900 transition-all group-hover:w-full" />
              </a>
              <a className="group relative transition hover:text-slate-900" href="#contacto">
                Contacto
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-slate-900 transition-all group-hover:w-full" />
              </a>
            </div>

            <a
              href="#contacto"
              className="hidden rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md motion-safe:animate-pulseRing md:inline-flex"
            >
              Agendar demo
            </a>

            <button
              type="button"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:hidden"
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </nav>

          <div
            id="mobile-menu"
            className={`absolute inset-x-0 top-full origin-top px-6 transition-all duration-300 md:hidden ${
              menuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
            }`}
          >
            <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-card backdrop-blur">
              <nav className="flex flex-col text-base text-slate-700">
                <a onClick={closeMenu} href="#servicios" className="rounded-xl px-4 py-3 transition hover:bg-slate-100 hover:text-slate-900">Servicios</a>
                <a
                  onClick={closeMenu}
                  href="https://spector.dataminds.lat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl px-4 py-3 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  <span>Spector</span>
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M14 5h5v5M19 5l-9 9M5 9v10h10" />
                  </svg>
                </a>
                <a onClick={closeMenu} href="#proceso" className="rounded-xl px-4 py-3 transition hover:bg-slate-100 hover:text-slate-900">Proceso</a>
                <a onClick={closeMenu} href="#resultados" className="rounded-xl px-4 py-3 transition hover:bg-slate-100 hover:text-slate-900">Resultados</a>
                <a onClick={closeMenu} href="#contacto" className="rounded-xl px-4 py-3 transition hover:bg-slate-100 hover:text-slate-900">Contacto</a>
              </nav>
              <a
                onClick={closeMenu}
                href="#contacto"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-night"
              >
                Agendar demo
                <span aria-hidden>→</span>
              </a>
              <div className="mt-3 flex items-center justify-around border-t border-slate-200 pt-3 text-xs text-slate-500">
                <button
                  type="button"
                  onClick={async () => { await copyEmail(); closeMenu(); }}
                  className="transition hover:text-slate-900"
                >
                  hola@dataminds.lat
                </button>
                <button
                  type="button"
                  onClick={() => { closeMenu(); openWhatsApp() }}
                  className="transition hover:text-emerald-700"
                >
                  +56 9 6458 2696
                </button>
              </div>
            </div>
          </div>

          <div
            onClick={closeMenu}
            className={`fixed inset-0 z-[-1] bg-slate-900/30 backdrop-blur-sm transition-opacity md:hidden ${
              menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            aria-hidden="true"
          />
        </header>

        <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-12 md:flex-row md:items-center md:pt-20">
          <div className="flex-1 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                Desarrollo de software premium
              </p>
              <p className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Desde 2018
              </p>
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
              Software a medida para empresas que quieren crecer sin fricción.
            </h1>
            <p className="max-w-xl text-base text-slate-700 md:text-lg">
              En Dataminds construimos productos digitales con velocidad, claridad y una ingeniería que
              escala. Convertimos ideas complejas en experiencias simples y rentables.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="group relative overflow-hidden rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5"
              >
                <span className="relative z-10">Hablemos de tu proyecto</span>
                <span className="absolute inset-0 -translate-x-full bg-white/25 transition group-hover:translate-x-0" />
                <span className="absolute inset-0 -translate-x-full bg-white/10 blur-md motion-safe:animate-shimmer" />
              </a>
              <a
                href="#servicios"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
              >
                Ver qué hacemos
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-500" />
                Squad dedicado en 72h
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-800" />
                SLAs y métricas claras
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-soft backdrop-blur motion-safe:animate-float">
              <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-slate-700/20 blur-3xl animate-drift" />
              <div className="absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-slate-500/20 blur-3xl animate-pulseSoft" />
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">Cómo trabajamos</p>
                    <h3 className="font-display text-xl text-white">Compromisos operativos</h3>
                  </div>
                  <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs text-white">Estándar</span>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {metrics.map((metric) => (
                    <div
                      key={metric.value}
                      className="rounded-2xl border border-white/70 bg-slate-900 p-4 transition hover:-translate-y-1 hover:border-white"
                    >
                      <p className="font-display text-2xl text-white">{metric.value}</p>
                      <p className="text-xs text-white/75">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/70 bg-slate-900 p-4">
                  <div className="flex items-center justify-between text-xs text-white/75">
                    <span>Transparencia del sprint</span>
                    <span>cada viernes</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-white to-slate-400 animate-sweep" />
                  </div>
                  <p className="mt-3 text-[11px] text-white/60">Demo + métricas + backlog actualizado.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <p className="mb-4 text-center text-[11px] uppercase tracking-[0.3em] text-slate-500">
          Confían en nosotros desde 2018
        </p>
        <div className="mask-fade-x overflow-hidden rounded-2xl border border-slate-300/70 bg-white py-5 shadow-sm">
          <div className="flex w-max animate-marquee gap-4 whitespace-nowrap">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className={`group mx-2 inline-flex h-20 min-w-[220px] items-center justify-center rounded-xl border border-slate-200 px-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow ${client.bg || 'bg-white'}`}
                title={client.name}
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className={`max-h-12 max-w-[180px] object-contain transition duration-300 group-hover:scale-105 ${
                      client.invert ? 'invert' : ''
                    }`}
                  />
                ) : (
                  <span className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-300/70 bg-[#f6f8fb] p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-pop/40 hover:shadow-lg motion-safe:animate-rise"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl ring-1 transition group-hover:scale-110 ${item.iconColor} ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className="font-display text-xl text-slate-800">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.copy}</p>
              </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-slate-300/70 bg-gradient-to-br from-[#f6f8fb] to-[#e8f2fb] p-8 shadow-sm md:p-10">
          <div className="absolute inset-0 bg-grid-fade grid-overlay opacity-[0.05]" />
          <div className="absolute -left-20 -top-16 h-52 w-52 rounded-full bg-brand/20 blur-[90px]" />
          <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-pop/20 blur-[80px]" />
          <div className="relative grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Capacidades</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-slate-800 md:text-4xl">
                Lo técnico no se negocia,
                <span className="font-semibold text-slate-700">
                  {' '}la experiencia tampoco.
                </span>
              </h2>
              <p className="mt-4 max-w-md text-sm text-slate-600">
                Combinamos producto, ingeniería y data para convertir roadmap en resultados visibles.
              </p>
              <div className="mt-10 rounded-2xl border border-slate-300/70 bg-slate-950 p-5 font-mono text-[12px] leading-relaxed text-slate-200 shadow-soft">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-white/40">delivery.yml</span>
                </div>
                <div className="space-y-1">
                  <p><span className="text-emerald-300">discovery</span>: <span className="text-white/70">1–2 semanas</span></p>
                  <p><span className="text-emerald-300">squad</span>: <span className="text-white/70">PM · ENG · UX</span></p>
                  <p><span className="text-emerald-300">ciclos</span>: <span className="text-white/70">2 semanas con demo</span></p>
                  <p><span className="text-emerald-300">stack</span>: <span className="text-white/70">React, Node, Postgres, AWS</span></p>
                  <p><span className="text-emerald-300">handoff</span>: <span className="text-white/70">repo + docs + métricas</span></p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {capabilities.map((item, index) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-300/70 bg-[#f7f9fc] p-5 transition duration-500 hover:-translate-y-1 hover:border-sun/40 hover:shadow-md motion-safe:animate-rise"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -left-16 top-0 h-full w-16 -skew-x-12 bg-slate-100/70 blur-lg transition group-hover:translate-x-[420px]" />
                  <div className="mb-3 inline-flex rounded-full border border-sun/30 bg-sun/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-sun">
                    {item.tag}
                  </div>
                  <h3 className="font-display text-xl text-slate-800">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Servicios</p>
            <h2 className="font-display text-3xl text-slate-800 md:text-4xl">Construimos tu stack ideal, sin rigidez.</h2>
          </div>
          <a
            href="/brochure-dataminds.pdf"
            download="brochure-dataminds.pdf"
            className="rounded-full border border-slate-400/70 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-pop hover:text-slate-800"
          >
            Descargar brochure
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
              <div
                key={service.name}
                className="group relative overflow-hidden rounded-3xl border border-slate-300/70 bg-[#f6f8fb] p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-brand/60 hover:shadow-lg motion-safe:animate-rise"
              >
                <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-brand/20 blur-3xl" />
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl ring-1 transition group-hover:scale-110 ${service.iconColor} ${service.iconBg}`}>
                  {service.icon}
                </div>
                <h3 className="font-display text-xl text-slate-800">{service.name}</h3>
                <p className="mt-3 text-sm text-slate-600">{service.desc}</p>
              </div>
          ))}
        </div>
      </section>

      <section id="proceso" className="relative bg-[#e8edf3] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Proceso</p>
              <h2 className="font-display text-3xl text-slate-800 md:text-4xl">Claridad desde el primer sprint.</h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">
              Te acompañamos de punta a punta con un flujo transparente y decisiones rápidas.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative rounded-2xl border border-slate-300/70 bg-[#f3f7fc] p-5 shadow-sm motion-safe:animate-rise">
                {index < steps.length - 1 ? (
                  <span className="absolute -right-4 top-10 hidden h-px w-8 bg-gradient-to-r from-sun/60 to-transparent md:block" />
                ) : null}
                <div className="mb-3 flex items-center justify-between">
                  <div className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ${step.iconColor} ${step.iconBg}`}>
                    {step.icon}
                  </div>
                  <div className="text-xs text-slate-500">0{index + 1}</div>
                </div>
                <h3 className="mt-2 font-display text-lg text-slate-800">{step.title}</h3>
                <p className="mt-2 text-xs text-slate-600">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resultados" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Compromisos</p>
            <h2 className="font-display text-3xl text-slate-800 md:text-4xl">
              Lo que puedes esperar desde el día uno.
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              No prometemos números mágicos sin contexto. Nos comprometemos con cadencia, transparencia y
              entregas que puedas medir. Los KPIs los definimos juntos al cierre del discovery.
            </p>
          </div>
          <div className="space-y-4">
            {metrics.map((metric) => (
              <div
                key={metric.value}
                className="rounded-2xl border border-slate-300/70 bg-[#f6f8fb] p-5 shadow-sm transition hover:-translate-y-1 hover:border-pop/40 hover:shadow-md motion-safe:animate-rise"
              >
                <p className="font-display text-2xl text-slate-800">{metric.value}</p>
                <p className="text-xs text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e9edf3] via-[#f3f5f8] to-[#e6ebf2]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Contacto</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-slate-800 md:text-5xl">
                Hablemos de <span className="text-brand">tu operación.</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm text-slate-600 md:text-base">
                Si quieres ver una demo, tienes un caso particular o necesitas cotización para un
                equipo grande, escríbenos. Respondemos el mismo día hábil.
              </p>

              <div className="mt-8 space-y-3">
                <button
                  type="button"
                  onClick={copyPhone}
                  aria-label="Copiar teléfono +56 9 6458 2696"
                  className="group flex w-full items-center justify-between rounded-2xl border border-slate-300/70 bg-[#f6f8fb] p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-500 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/5 ring-1 ring-slate-300/70 text-slate-700">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1 .35 2 .65 2.94a2 2 0 0 1-.45 2.11L8.09 10.09a16 16 0 0 0 6 6l1.32-1.32a2 2 0 0 1 2.11-.45c.94.3 1.94.52 2.94.65A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Teléfono / WhatsApp</p>
                      <p className="font-display text-base text-slate-800">+56 9 6458 2696</p>
                    </div>
                  </div>
                  {phoneCopied ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-300">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Copiado
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-slate-500 transition group-hover:text-slate-800">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="11" height="11" rx="2" />
                        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                      </svg>
                      Copiar
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => openWhatsApp('Hola Dataminds, quiero conversar sobre mi proyecto.')}
                  aria-label="Abrir WhatsApp con Dataminds"
                  className="group flex w-full items-center justify-between rounded-2xl border border-slate-300/70 bg-[#f6f8fb] p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-300/60 text-emerald-700">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">WhatsApp directo</p>
                      <p className="font-display text-base text-slate-800">Escríbenos por WhatsApp</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-emerald-700 transition group-hover:translate-x-1">
                    Abrir
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 5h5v5M19 5l-9 9M5 9v10h10" />
                    </svg>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copiar email hola@dataminds.lat"
                  className="group flex w-full items-center justify-between rounded-2xl border border-slate-300/70 bg-[#f6f8fb] p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-500 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/5 ring-1 ring-slate-300/70 text-slate-700">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Email</p>
                      <p className="font-display text-base text-slate-800">hola@dataminds.lat</p>
                    </div>
                  </div>
                  {emailCopied ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-300">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Copiado
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-slate-500 transition group-hover:text-slate-800">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="11" height="11" rx="2" />
                        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                      </svg>
                      Copiar
                    </span>
                  )}
                </button>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-300/70 bg-[#f6f8fb] p-4 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/5 ring-1 ring-slate-300/70 text-slate-700">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Horario</p>
                    <p className="font-display text-base text-slate-800">Lun a Vie · 9:00 a 19:00 (CLT)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-300/70 bg-[#f6f8fb] p-4 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/5 ring-1 ring-slate-300/70 text-slate-700">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Operamos desde</p>
                    <p className="font-display text-base text-slate-800">Concepción, Chile · Servimos a todo LATAM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/20 blur-[100px]" />
              <div className="absolute -bottom-10 -left-6 h-40 w-40 rounded-full bg-pop/20 blur-[100px]" />
              <div className="relative rounded-3xl border border-slate-300/70 bg-white/80 p-6 shadow-card backdrop-blur md:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Mensaje rápido</p>
                <h3 className="mt-2 font-display text-2xl text-slate-800">Cuéntanos en 30 segundos</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Te respondemos por el canal que prefieras (email o WhatsApp).
                </p>
                <form className="mt-6 space-y-3" onSubmit={handleSubmitWhatsApp} noValidate>
                  <input
                    name="nombre"
                    required
                    className="w-full rounded-2xl border border-slate-300/70 bg-[#eef3f9] px-4 py-3 text-sm text-slate-800 placeholder:text-slate-500 focus:border-brand focus:outline-none"
                    placeholder="Tu nombre"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-2xl border border-slate-300/70 bg-[#eef3f9] px-4 py-3 text-sm text-slate-800 placeholder:text-slate-500 focus:border-brand focus:outline-none"
                    placeholder="Email corporativo"
                  />
                  <textarea
                    name="mensaje"
                    rows={4}
                    required
                    className="w-full resize-none rounded-2xl border border-slate-300/70 bg-[#eef3f9] px-4 py-3 text-sm text-slate-800 placeholder:text-slate-500 focus:border-brand focus:outline-none"
                    placeholder="Contexto del proyecto, plazos, equipo actual…"
                  />
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-emerald-700"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    Enviar por WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleSendEmail(e.currentTarget.form)}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-900"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                    Enviar por email
                  </button>
                  <p className="text-center text-[11px] text-slate-500">
                    Sin spam, sin pop-ups. Te respondemos por donde escribiste.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
        <div className="absolute -left-16 top-0 h-44 w-44 rounded-full bg-slate-200/70 blur-[90px]" />
        <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-slate-300/50 blur-[90px]" />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center text-slate-900">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 4a4 4 0 0 0-4 4v2a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3h2" />
                    <path d="M15 4a4 4 0 0 1 4 4v2a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3h-2" />
                    <path d="M9 8h2m0 0v8m0-4h4m0-4h2" />
                  </svg>
                </div>
                <span className="font-display text-lg font-semibold text-slate-900">Dataminds</span>
              </div>
              <p className="mt-4 max-w-sm text-sm text-slate-600">
                Desarrollamos software de alto impacto desde 2018 para equipos que necesitan escalar con rapidez y calidad. Desde Concepción, Chile, para todo LATAM.
              </p>
            </div>

            <div>
              <h4 className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">Navegación</h4>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <a className="block transition hover:text-slate-900" href="#servicios">Servicios</a>
                <a className="block transition hover:text-slate-900" href="#proceso">Proceso</a>
                <a className="block transition hover:text-slate-900" href="#resultados">Resultados</a>
                <a className="block transition hover:text-slate-900" href="#contacto">Contacto</a>
              </div>
            </div>

            <div>
              <h4 className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">Contacto</h4>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>
                  <button type="button" onClick={copyEmail} className="text-left transition hover:text-slate-900">
                    hola@dataminds.lat
                    {emailCopied && <span className="ml-2 text-[10px] uppercase tracking-[0.16em] text-emerald-600">✓ copiado</span>}
                  </button>
                </p>
                <p>
                  <button type="button" onClick={() => openWhatsApp()} className="text-left transition hover:text-emerald-700">
                    +56 9 6458 2696
                  </button>
                </p>
                <p>Concepción, Chile · Servimos a todo LATAM</p>
                <p className="text-xs text-slate-500">Lun a Vie · 9:00 a 19:00 (CLT)</p>
              </div>
            </div>

            <div>
              <h4 className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">Empezar</h4>
              <p className="mt-4 text-sm text-slate-600">
                Cuéntanos qué quieres construir. Te respondemos el mismo día hábil.
              </p>
              <a
                href="#contacto"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-night"
              >
                Hablemos de tu proyecto
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Dataminds. Todos los derechos reservados.</p>
            <p>
              Hecho en Concepción, Chile ·{' '}
              <button type="button" onClick={copyEmail} className="transition hover:text-slate-900">
                hola@dataminds.lat
              </button>
            </p>
          </div>
        </div>
      </footer>

      <button
        aria-label="Volver al inicio"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-pop/90 text-paper shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-pop focus:outline-none focus:ring-2 focus:ring-sun/50 ${
          showTopButton ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 18V6" />
          <path d="M7 11l5-5 5 5" />
        </svg>
      </button>
    </div>
  )
}
