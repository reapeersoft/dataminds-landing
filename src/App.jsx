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
  { value: '38%', label: 'reducción de costos operativos' },
  { value: '2.4x', label: 'más velocidad en entregas' },
  { value: '+120%', label: 'crecimiento en conversión digital' },
]

const partners = ['Finloop', 'Novabank', 'Atlas Cloud', 'Vertex Health', 'RetailOS', 'Axiom']

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

        <header className="relative z-10">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center text-slate-900">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 4a4 4 0 0 0-4 4v2a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3h2" />
                  <path d="M15 4a4 4 0 0 1 4 4v2a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3h-2" />
                  <path d="M9 8h2m0 0v8m0-4h4m0-4h2" />
                </svg>
              </div>
              <div className="font-display text-lg font-semibold tracking-wide">Dataminds</div>
            </div>
            <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
              <a className="group relative transition hover:text-slate-900" href="#servicios">
                Servicios
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-slate-900 transition-all group-hover:w-full" />
              </a>
              <a className="group relative transition hover:text-slate-900" href="#proceso">
                Proceso
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-slate-900 transition-all group-hover:w-full" />
              </a>
              <a className="group relative transition hover:text-slate-900" href="#resultados">
                Resultados
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-slate-900 transition-all group-hover:w-full" />
              </a>
            </div>
            <button className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md motion-safe:animate-pulseRing">
              Agendar demo
            </button>
          </nav>
        </header>

        <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-12 md:flex-row md:items-center md:pt-20">
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-500">
              Desarrollo de software premium
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
              Software a medida para empresas que quieren crecer sin fricción.
            </h1>
            <p className="max-w-xl text-base text-slate-700 md:text-lg">
              En Dataminds construimos productos digitales con velocidad, claridad y una ingeniería que
              escala. Convertimos ideas complejas en experiencias simples y rentables.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group relative overflow-hidden rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5">
                <span className="relative z-10">Hablemos hoy</span>
                <span className="absolute inset-0 -translate-x-full bg-white/25 transition group-hover:translate-x-0" />
                <span className="absolute inset-0 -translate-x-full bg-white/10 blur-md motion-safe:animate-shimmer" />
              </button>
              <button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900">
                Ver casos reales
              </button>
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
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">Dashboard vivo</p>
                    <h3 className="font-display text-xl text-white">Monitor de impacto</h3>
                  </div>
                  <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs text-white">Live</span>
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
                    <span>Velocity</span>
                    <span>92%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-white to-slate-400 animate-sweep" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="mask-fade-x overflow-hidden rounded-2xl border border-slate-300/70 bg-[#f6f8fb] py-4 shadow-sm">
          <div className="flex w-[200%] animate-marquee gap-4 whitespace-nowrap">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="mx-2 inline-flex min-w-[180px] items-center justify-center rounded-xl border border-slate-300/70 bg-[#f0f3f7] px-4 py-3 text-xs uppercase tracking-[0.24em] text-slate-500"
              >
                {partner}
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
              <div className="mt-20 flex justify-center">
                <div className="relative flex h-28 w-28 items-center justify-center text-slate-900">
                  <span className="absolute h-full w-full rounded-full border border-slate-400/50 border-dashed [animation:spin_8s_linear_infinite]" />
                  <svg viewBox="0 0 24 24" className="logo-action h-24 w-24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 4a4 4 0 0 0-4 4v2a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3h2" />
                    <path d="M15 4a4 4 0 0 1 4 4v2a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3h-2" />
                    <path d="M9 8h2m0 0v8m0-4h4m0-4h2" />
                  </svg>
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
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Resultados</p>
            <h2 className="font-display text-3xl text-slate-800 md:text-4xl">
              Indicadores reales que muestran el impacto.
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Medimos la evolución de cada entrega y optimizamos en base a datos. Cada release deja un
              resultado tangible.
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

      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e9edf3] via-[#f3f5f8] to-[#e6ebf2]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="relative grid gap-8 overflow-hidden rounded-3xl border border-slate-300/70 bg-[#f3f7fc]/95 p-10 shadow-sm md:grid-cols-[1.2fr_0.8fr]">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand/20 blur-[100px]" />
            <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-pop/20 blur-[100px]" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Hablemos</p>
              <h2 className="font-display text-3xl text-slate-800 md:text-4xl">¿Listo para acelerar tu producto?</h2>
              <p className="mt-3 text-sm text-slate-600">
                Conversemos sobre tu roadmap y construyamos un plan de ejecución concreto.
              </p>
            </div>
            <form className="space-y-4">
              <input
                className="w-full rounded-2xl border border-slate-300/70 bg-[#eef3f9] px-4 py-3 text-sm text-slate-800 placeholder:text-slate-500 focus:border-brand focus:outline-none"
                placeholder="Nombre"
              />
              <input
                className="w-full rounded-2xl border border-slate-300/70 bg-[#eef3f9] px-4 py-3 text-sm text-slate-800 placeholder:text-slate-500 focus:border-brand focus:outline-none"
                placeholder="Email corporativo"
              />
              <button className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-night">
                Agendar reunión
              </button>
            </form>
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
                Diseñamos y desarrollamos software de alto impacto para equipos que necesitan escalar con rapidez y calidad.
              </p>
              <div className="mt-5 flex gap-3">
                {['in', 'be', 'gh'].map((item) => (
                  <button
                    key={item}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-slate-50 text-xs uppercase text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">Navegacion</h4>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <a className="block transition hover:text-slate-900" href="#servicios">Servicios</a>
                <a className="block transition hover:text-slate-900" href="#proceso">Proceso</a>
                <a className="block transition hover:text-slate-900" href="#resultados">Resultados</a>
                <a className="block transition hover:text-slate-900" href="#">Casos de exito</a>
              </div>
            </div>

            <div>
              <h4 className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">Contacto</h4>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>contacto@dataminds.dev</p>
                <p>+56 9 5555 5555</p>
                <p>Santiago, Chile</p>
              </div>
            </div>

            <div>
              <h4 className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">Newsletter</h4>
              <p className="mt-4 text-sm text-slate-600">Recibe ideas de producto y tecnologia cada 2 semanas.</p>
              <div className="mt-4 flex gap-2">
                <input
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
                  placeholder="Tu email"
                />
                <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                  Unirme
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Dataminds. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a className="transition hover:text-slate-900" href="#">Privacidad</a>
              <a className="transition hover:text-slate-900" href="#">Terminos</a>
              <a className="transition hover:text-slate-900" href="#">Cookies</a>
            </div>
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
