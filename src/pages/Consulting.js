import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    badge: 'Security',
    title: 'AI Security & Governance',
    description: 'Establish robust security frameworks and governance policies for your AI systems. We help you implement responsible AI practices aligned with regulatory requirements and ethical standards.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'bg-blue-50 text-blue-600',
  },
  {
    badge: 'Assessment',
    title: 'AI Readiness Assessments',
    description: "Evaluate your organisation's preparedness for AI adoption. We identify gaps, opportunities, and provide a clear path forward for successful AI implementation.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'bg-teal-50 text-teal-600',
  },
  {
    badge: 'Strategy',
    title: 'Strategic AI Roadmaps',
    description: 'Develop a comprehensive AI strategy aligned with your business objectives. Our roadmaps provide a clear implementation timeline, resource requirements, and expected ROI.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    color: 'bg-sky-50 text-sky-600',
  },
  {
    badge: 'Integration',
    title: 'AI Solutions & Integration',
    description: 'Seamlessly integrate AI solutions into your existing workflows. We provide hands-on support for deployment, scaling, and ongoing optimisation.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    color: 'bg-blue-50 text-blue-600',
  },
  {
    badge: 'Finetuning',
    title: 'Model Finetuning',
    description: 'Customise and finetune state-of-the-art AI models for your specific data and use cases, maximising performance and relevance for your domain.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    color: 'bg-blue-50 text-blue-600',
  },
  {
    badge: 'Enterprise',
    title: 'Enterprise RAG Deployment',
    description: 'Deploy Retrieval-Augmented Generation (RAG) systems at scale for enterprise knowledge management, intelligent search, and workflow automation.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function Consulting() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">AI Consulting Services</h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Our expert team brings deep expertise in artificial intelligence, machine learning, and digital transformation. We partner with organisations to deliver strategic AI solutions tailored to your unique challenges.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Our AI Consulting Expertise</h2>
            <p className="max-w-2xl mx-auto text-slate-500">
              Comprehensive AI consulting services to help you navigate the complex landscape of artificial intelligence and implement solutions that drive real business value.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ badge, title, description, icon, color }) => (
              <div key={title} className="bg-white rounded-xl border border-slate-200 p-7 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>
                    {icon}
                  </div>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{badge}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to start your AI journey?</h2>
          <p className="text-blue-100 mb-8">
            Let's discuss how we can tailor our consulting services to your specific needs and goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
