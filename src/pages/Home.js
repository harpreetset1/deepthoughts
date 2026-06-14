import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ── Rotating words ───────────────────────────────────────────── */
const WORDS = ['Autonomy', 'Intelligence', 'Innovation', 'Precision'];

/* ── Marquee keywords ─────────────────────────────────────────── */
const TICKER_ITEMS = [
  'LLM Fine-Tuning', 'Agentic Workflows', 'RAG Pipelines', 'Vector Search',
  'Computer Vision', 'NLP', 'Predictive Analytics', 'MLOps', 'GenAI',
  'Embeddings', 'Multimodal AI', 'Prompt Engineering', 'AI Strategy',
  'Cloud ML', 'Neural Networks',
];

/* ── Scroll reveal hook ───────────────────────────────────────── */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

/* ── Count-up hook ────────────────────────────────────────────── */
function useCountUp(target, duration = 1800, suffix = '') {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const isFloat = String(target).includes('.');
          const numericTarget = parseFloat(String(target).replace(/[^0-9.]/g, ''));
          const start = performance.now();
          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = isFloat
              ? (eased * numericTarget).toFixed(1)
              : Math.round(eased * numericTarget);
            setCount(current);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, display: `${count}${suffix}` };
}

/* ── Stat item ────────────────────────────────────────────────── */
function StatItem({ value, label }) {
  const suffix = value.replace(/[0-9.]/g, '');
  const { ref, display } = useCountUp(value, 1600, suffix);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-blue-600">{display}</div>
      <div className="text-sm text-slate-500 mt-1">{label}</div>
    </div>
  );
}

/* ── Data ─────────────────────────────────────────────────────── */
const products = [
  {
    name: 'Document Summarizer',
    description: 'Instantly summarize lengthy documents using AI and chat with the content.',
    href: 'https://docsummarizer.deepthoughtnetworks.com',
    gradient: 'from-blue-600 to-sky-500',
    features: ['AI-powered summarization', 'Chat with your document', 'Multi-format support', 'Private & secure'],
    accentColor: 'text-blue-500',
  },
  {
    name: 'Research Agent',
    description: 'Generate comprehensive research reports on any topic using advanced AI.',
    href: 'https://researchagent.deepthoughtnetworks.com',
    gradient: 'from-teal-500 to-emerald-600',
    features: ['Comprehensive reports', 'Customizable sections', 'AI-powered insights', 'Credit-based usage'],
    accentColor: 'text-teal-500',
  },
  {
    name: 'Personal Space',
    description: 'Secure cloud storage for your photos with AI-powered organization and HEIC support.',
    href: 'https://mypersonalspace.deepthoughtnetworks.com',
    gradient: 'from-blue-800 to-sky-500',
    features: ['HEIC/HEIF support', 'AI image tagging', 'Custom albums', 'Metadata preservation'],
    accentColor: 'text-sky-500',
  },
];

const services = [
  {
    title: 'AI Consulting',
    description: 'Strategy, implementation, and optimization for businesses leveraging AI capabilities.',
    to: '/consulting',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Custom AI Solutions',
    description: 'Tailored AI products designed to address your unique business challenges.',
    to: '/custom-ai-development',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'AI/ML Model Development',
    description: 'End-to-end model development and deployment for production environments.',
    to: '/consulting',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
];

/* ── Component ────────────────────────────────────────────────── */
export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setWordVisible(true);
      }, 350);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const servicesRef = useScrollReveal();
  const productsRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="flex flex-col">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 py-32 px-4 overflow-hidden noise-overlay">

        {/* Aurora blobs — blue/sky/cyan palette */}
        <div
          className="aurora-blob animate-aurora-1 w-[600px] h-[600px] top-[-100px] left-[-100px]"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.5) 0%, transparent 70%)' }}
        />
        <div
          className="aurora-blob animate-aurora-2 w-[500px] h-[500px] top-[60px] right-[-80px]"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.4) 0%, transparent 70%)' }}
        />
        <div
          className="aurora-blob animate-aurora-3 w-[400px] h-[400px] bottom-[-60px] left-[35%]"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)' }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: 'radial-gradient(circle, #60a5fa 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 text-sky-300 text-sm px-4 py-1.5 rounded-full mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse" />
            Next-Generation AI Solutions
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Built for AI&nbsp;
            <span
              className="inline-block gradient-text transition-opacity duration-300"
              style={{ opacity: wordVisible ? 1 : 0 }}
            >
              {WORDS[wordIndex]}
            </span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Where intelligent agents don't just respond—they anticipate, adapt, and act with purpose.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Link
              to="/consulting"
              className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 animate-pulse-glow"
            >
              Explore AI Consulting
            </Link>
            <Link
              to="/products"
              className="px-8 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* Marquee ticker */}
        <div
          className="relative z-10 mt-16 overflow-hidden border-y border-white/10 py-3 animate-fade-up"
          style={{ animationDelay: '0.45s' }}
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 text-xs font-medium text-sky-300/70 uppercase tracking-widest mx-6">
                <span className="w-1 h-1 bg-sky-500/60 rounded-full" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-3 gap-6 text-center divide-x divide-slate-100">
          <StatItem value="3+" label="AI Products" />
          <StatItem value="6" label="Consulting Areas" />
          <StatItem value="100%" label="AI-Powered" />
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal visible">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3 block">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our AI Services</h2>
            <p className="max-w-2xl mx-auto text-slate-500">
              Cutting-edge AI solutions designed to transform your business and drive measurable results.
            </p>
          </div>
          <div ref={servicesRef} className="reveal grid grid-cols-1 sm:grid-cols-3 gap-6">
            {services.map(({ title, description, to, icon }) => (
              <div
                key={title}
                className="shimmer-card bg-white rounded-xl border border-slate-200 p-7 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{description}</p>
                <Link to={to} className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more
                  <svg className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal visible">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3 block">Live & Ready</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Products</h2>
            <p className="max-w-2xl mx-auto text-slate-500">
              AI-powered tools built to enhance productivity and deliver real results.
            </p>
          </div>
          <div ref={productsRef} className="reveal space-y-8">
            {products.map(({ name, description, href, gradient, features, accentColor }, i) => (
              <div
                key={name}
                className="shimmer-card rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-2/5 bg-gradient-to-br ${gradient} p-10 flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float">
                        <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{name}</h3>
                      <p className="text-white/80 mb-6 text-sm leading-relaxed">{description}</p>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-slate-900 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors shadow"
                      >
                        Try it now
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="md:w-3/5 bg-white p-10">
                    <h4 className="text-base font-semibold text-slate-900 mb-5">Key Features</h4>
                    <ul className="space-y-3">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-slate-600 text-sm">
                          <svg className={`h-5 w-5 ${accentColor} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-600 overflow-hidden noise-overlay">
        <div
          className="aurora-blob animate-aurora-2 w-[500px] h-[500px] top-[-100px] right-[-100px] opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.5) 0%, transparent 70%)' }}
        />
        <div ref={ctaRef} className="reveal relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to transform your business with AI?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us today to discuss how our AI solutions can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-xl animate-pulse-glow"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
