import React from 'react';
import { Link } from 'react-router-dom';

const coreServices = [
  {
    badge: 'Enterprise',
    title: 'AI Strategy Consulting',
    description: 'Expert guidance on integrating AI into your business operations. Our consultants work with you to identify opportunities, develop roadmaps, and implement AI solutions that drive measurable results.',
    points: ['AI readiness assessment', 'Custom AI strategy development', 'ROI analysis and implementation planning'],
    color: 'from-blue-800 to-blue-600',
    to: '/consulting',
  },
  {
    badge: 'Custom',
    title: 'Custom AI Development',
    description: 'Tailored AI solutions built to address your specific business challenges. Our team of AI engineers and data scientists develop custom models and applications that deliver tangible business value.',
    points: ['Custom machine learning models', 'AI-powered application development', 'Integration with existing systems'],
    color: 'from-teal-500 to-emerald-600',
    to: '/custom-ai-development',
  },
];

const specialisedServices = [
  {
    badge: 'Vision',
    title: 'Computer Vision',
    description: 'Advanced image and video analysis systems that identify objects, people, and activities with high accuracy.',
    points: ['Object detection & recognition', 'Image classification & tagging', 'HEIC/HEIF image format support'],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    color: 'bg-teal-50 text-teal-600',
  },
  {
    badge: 'Language',
    title: 'Natural Language Processing',
    description: 'Text analysis and language understanding solutions that extract insights from documents, social media, and customer interactions.',
    points: ['Sentiment analysis & classification', 'Named entity recognition', 'Automated document summarisation'],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    color: 'bg-sky-50 text-sky-600',
  },
  {
    badge: 'Analytics',
    title: 'Predictive Analytics',
    description: 'Transform your data into actionable insights with advanced predictive analytics. Forecast trends and make data-driven decisions with confidence.',
    points: ['Time series forecasting', 'Customer behaviour analysis', 'Anomaly detection & risk assessment'],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'bg-blue-50 text-blue-600',
  },
];

export default function Services() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our AI Services</h1>
          <p className="text-slate-300 text-lg">
            Cutting-edge artificial intelligence solutions to transform your business and drive innovation.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">Core AI Services</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {coreServices.map(({ badge, title, description, points, color, to }) => (
              <div key={title} className={`bg-gradient-to-br ${color} rounded-2xl p-8 text-white`}>
                <div className="flex items-start justify-between mb-5">
                  <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">{badge}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">{description}</p>
                <ul className="space-y-2 mb-6">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-white/90">
                      <svg className="h-4 w-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to={to}
                  className="inline-flex items-center px-5 py-2.5 bg-white text-slate-900 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors shadow"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialised Services */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">Specialised AI Services</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
            {specialisedServices.map(({ badge, title, description, points, icon, color }) => (
              <div key={title} className="bg-white rounded-xl border border-slate-200 p-7 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>
                    {icon}
                  </div>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{badge}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>
                <ul className="space-y-1.5">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-slate-500">
                      <svg className="h-3.5 w-3.5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-blue-100 mb-8">Schedule a consultation with our experts to discuss your specific needs.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
