import React from 'react';

const products = [
  {
    name: 'Document Summarizer',
    description: 'Instantly summarize lengthy documents using AI and chat with the content.',
    href: 'https://docsummarizer.deepthoughtnetworks.com',
    gradient: 'from-blue-600 to-sky-500',
    badge: 'NLP',
    features: [
      'Advanced AI-powered summarization',
      'Interactive chat with document content',
      'Support for multiple document formats',
      'Secure and private document processing',
    ],
    accentColor: 'text-blue-500',
  },
  {
    name: 'Research Agent',
    description: 'Generate comprehensive research reports on any topic using advanced AI.',
    href: 'https://researchagent.deepthoughtnetworks.com',
    gradient: 'from-teal-500 to-emerald-600',
    badge: 'Research',
    features: [
      'Comprehensive research reports on any topic',
      'Customizable report sections and content',
      'AI-powered insights and analysis',
      'Credit-based system for flexible usage',
    ],
    accentColor: 'text-teal-600',
  },
  {
    name: 'Personal Space',
    description: 'Secure cloud storage for your photos with AI-powered organization and HEIC support.',
    href: 'https://mypersonalspace.deepthoughtnetworks.com',
    gradient: 'from-blue-800 to-sky-500',
    badge: 'Storage',
    features: [
      'Full support for HEIC/HEIF images from Apple devices',
      'AI-generated image descriptions and tagging',
      'Metadata preservation and detailed viewing',
      'Custom albums and responsive gallery',
    ],
    accentColor: 'text-sky-600',
  },
];

export default function Products() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 px-4 relative overflow-hidden noise-overlay">
        <div className="aurora-blob animate-aurora-1 w-[500px] h-[500px] top-[-120px] left-[-80px]"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.5) 0%, transparent 70%)' }} />
        <div className="aurora-blob animate-aurora-2 w-[400px] h-[400px] top-[20px] right-[-60px]"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.35) 0%, transparent 70%)' }} />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: 'radial-gradient(circle, #60a5fa 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-slate-300 text-lg">
            Explore our suite of AI-powered tools designed to unlock new possibilities.
          </p>
        </div>
      </section>

      {/* Product cards grid */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map(({ name, description, href, gradient, badge }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${gradient} rounded-xl p-6 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group`}
              >
                <span className="text-xs font-semibold bg-white/20 text-white px-2.5 py-0.5 rounded-full self-start mb-4">{badge}</span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:underline">{name}</h3>
                <p className="text-white/75 text-sm leading-relaxed flex-grow">{description}</p>
                <div className="mt-5 flex items-center gap-1 text-white text-sm font-medium">
                  Try it now
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
            <div className="bg-slate-800 rounded-xl p-6 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center mb-3">
                <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <p className="text-slate-300 text-sm font-medium">More AI tools coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product deep-dives */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">Product Details</h2>
          <div className="space-y-8">
            {products.map(({ name, description, href, gradient, features, accentColor }, i) => (
              <div key={name} className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-2/5 bg-gradient-to-br ${gradient} p-10 flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-3">{name}</h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-6">{description}</p>
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
    </div>
  );
}
