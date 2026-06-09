import React from 'react';
import { Link } from 'react-router-dom';

const whatWeBuild = [
  {
    title: 'Custom ML Models',
    description: 'We design and train machine learning models specific to your data and business problem — from classification and regression to recommendation engines and anomaly detection.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Intelligent Agents & Automation',
    description: 'Autonomous AI agents that can reason, plan, and execute multi-step tasks — from data pipelines and document workflows to customer service bots and internal tools.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'bg-violet-50 text-violet-600',
  },
  {
    title: 'LLM-Powered Applications',
    description: 'Applications built on top of large language models — document Q&A, internal knowledge bases, AI copilots, summarisation tools, and more — tailored to your content and workflows.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    color: 'bg-teal-50 text-teal-600',
  },
  {
    title: 'RAG Systems',
    description: 'Retrieval-Augmented Generation pipelines that ground AI responses in your own documents, databases, and knowledge sources — reducing hallucination and improving accuracy.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Computer Vision Systems',
    description: 'Image and video analysis solutions — object detection, classification, OCR, defect detection, and visual search — deployed to cloud or edge environments.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    color: 'bg-teal-50 text-teal-600',
  },
  {
    title: 'Data Pipelines & MLOps',
    description: 'End-to-end infrastructure for ingesting, processing, and serving AI models in production — including monitoring, versioning, retraining, and CI/CD for ML.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    color: 'bg-indigo-50 text-indigo-600',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery & Scoping',
    description: 'We start by understanding your business problem, data landscape, success metrics, and constraints — before writing a single line of code.',
  },
  {
    step: '02',
    title: 'Data Assessment',
    description: 'We audit the data you have, identify gaps, and define what data collection or preparation is needed to build a reliable model.',
  },
  {
    step: '03',
    title: 'Prototype & Validate',
    description: 'We build a fast proof-of-concept to validate technical feasibility and business value before committing to full development.',
  },
  {
    step: '04',
    title: 'Build & Iterate',
    description: 'Iterative development with regular checkpoints. We train, evaluate, and refine models using your real data and feedback.',
  },
  {
    step: '05',
    title: 'Deploy to Production',
    description: 'We deploy to your environment — cloud, on-premise, or edge — with monitoring, alerting, and rollback capability built in.',
  },
  {
    step: '06',
    title: 'Ongoing Support',
    description: 'AI models drift over time. We provide monitoring, retraining schedules, and ongoing optimisation to keep performance high.',
  },
];

const useCases = [
  { label: 'Document Intelligence', description: 'Automatically extract, classify, and summarise information from contracts, invoices, reports, and forms.' },
  { label: 'Customer Support AI', description: 'Intelligent chatbots and ticket routing systems that resolve queries faster with less human escalation.' },
  { label: 'Predictive Maintenance', description: 'Detect equipment failures before they happen by analysing sensor data and historical patterns.' },
  { label: 'Fraud Detection', description: 'Real-time anomaly detection models that flag suspicious transactions or behaviour with high precision.' },
  { label: 'Personalisation Engines', description: 'Recommendation systems that surface the right content, products, or actions for each user.' },
  { label: 'Internal Knowledge Bases', description: 'AI-powered search over your internal docs, wikis, and databases so teams can find answers instantly.' },
];

export default function CustomAIDevelopment() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 px-3 py-1 rounded-full mb-5">
            Custom
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Custom AI Development</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Tailored AI solutions built from the ground up to address your specific business challenges — from prototype to production.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">Off-the-shelf AI does not fit every problem</h2>
          <p className="text-slate-500 leading-relaxed mb-4">
            Generic AI products are built for the average use case. Your business is not average. We design and build AI systems tuned to your data, your processes, and your outcomes — delivering accuracy and reliability that pre-packaged tools simply cannot match.
          </p>
          <p className="text-slate-500 leading-relaxed">
            From a single intelligent feature to a fully autonomous AI pipeline, our engineering team handles the complete lifecycle: problem framing, data preparation, model development, integration, and production deployment.
          </p>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">What We Build</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Our development capabilities span the full spectrum of modern AI and machine learning.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeBuild.map(({ title, description, icon, color }) => (
              <div key={title} className="bg-white rounded-xl border border-slate-200 p-7 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color} mb-5`}>
                  {icon}
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Our Development Process</h2>
            <p className="text-slate-500 max-w-xl mx-auto">A structured, iterative approach that reduces risk and delivers working AI faster.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map(({ step, title, description }) => (
              <div key={step} className="relative">
                <div className="text-4xl font-bold text-indigo-100 mb-3">{step}</div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Example Use Cases</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Industries and problems where custom AI development delivers the most value.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map(({ label, description }) => (
              <div key={label} className="bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-300 hover:shadow-sm transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <h3 className="text-sm font-semibold text-slate-900">{label}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 to-violet-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have a problem AI could solve?</h2>
          <p className="text-indigo-100 mb-8">
            Tell us about your use case and we will scope out what a custom AI solution could look like for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Start a Conversation
            </Link>
            <Link
              to="/consulting"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              View Consulting Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
