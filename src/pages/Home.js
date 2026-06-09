import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Document Summarizer',
    description: 'Instantly summarize lengthy documents using AI and chat with the content.',
    href: 'https://docsummarizer.deepthoughtnetworks.com',
    gradient: 'from-violet-600 to-indigo-600',
    features: ['AI-powered summarization', 'Chat with your document', 'Multi-format support', 'Private & secure'],
    accentColor: 'text-violet-600',
  },
  {
    name: 'Research Agent',
    description: 'Generate comprehensive research reports on any topic using advanced AI.',
    href: 'https://researchagent.deepthoughtnetworks.com',
    gradient: 'from-teal-500 to-emerald-600',
    features: ['Comprehensive reports', 'Customizable sections', 'AI-powered insights', 'Credit-based usage'],
    accentColor: 'text-teal-600',
  },
  {
    name: 'Personal Space',
    description: 'Secure cloud storage for your photos with AI-powered organization and HEIC support.',
    href: 'https://mypersonalspace.deepthoughtnetworks.com',
    gradient: 'from-indigo-500 to-blue-600',
    features: ['HEIC/HEIF support', 'AI image tagging', 'Custom albums', 'Metadata preservation'],
    accentColor: 'text-indigo-600',
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
    to: '/consulting',
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

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-slate-900 py-28 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 via-transparent to-violet-950/40" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
            Next-Generation AI Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Forging the Next<br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
              Frontier of AI
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
            Where intelligent agents don't just respond—they anticipate, adapt, and act with purpose.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/consulting"
              className="px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
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
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-3 gap-4 text-center">
          {[
            { value: '3+', label: 'AI Products' },
            { value: '6', label: 'Consulting Areas' },
            { value: '100%', label: 'AI-Powered' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl md:text-3xl font-bold text-indigo-600">{value}</div>
              <div className="text-sm text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our AI Services</h2>
            <p className="max-w-2xl mx-auto text-slate-500">
              Cutting-edge AI solutions designed to transform your business and drive measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {services.map(({ title, description, to, icon }) => (
              <div key={title} className="bg-white rounded-xl border border-slate-200 p-7 hover:border-indigo-300 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{description}</p>
                <Link to={to} className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700">
                  Learn more
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Products</h2>
            <p className="max-w-2xl mx-auto text-slate-500">
              AI-powered tools built to enhance productivity and deliver real results.
            </p>
          </div>
          <div className="space-y-8">
            {products.map(({ name, description, href, gradient, features, accentColor }, i) => (
              <div key={name} className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-2/5 bg-gradient-to-br ${gradient} p-10 flex items-center justify-center`}>
                    <div className="text-center text-white">
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-violet-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to transform your business with AI?
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            Contact us today to discuss how our AI solutions can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
