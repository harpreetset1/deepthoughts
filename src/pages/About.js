import React from 'react';
import { Link } from 'react-router-dom';

const values = [
  {
    title: 'Innovation First',
    description: 'We stay at the cutting edge of AI research and apply the latest advancements to real-world business problems.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Human-Centred',
    description: 'Every AI system we build is designed to augment human capability, not replace it — keeping people at the centre of the experience.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: 'bg-teal-50 text-teal-600',
  },
  {
    title: 'Responsible AI',
    description: 'We build with ethics, transparency, and governance in mind — ensuring AI solutions that are safe, explainable, and trustworthy.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'bg-sky-50 text-sky-600',
  },
  {
    title: 'Results-Driven',
    description: 'We measure success by the tangible business outcomes our AI solutions deliver — not just technical benchmarks.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'bg-blue-50 text-blue-600',
  },
];

export default function About() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">About Us</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Redefining the Human Machine Interface through innovative AI solutions that empower people and organisations worldwide.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Mission</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-5">
                Bridging the gap between humans and intelligent machines
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Deep Thought Networks is dedicated to redefining the Human Machine Interface through innovative AI solutions. Our team is passionate about building seamless, intelligent, and user-friendly technology that empowers people and organisations worldwide.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Founded by experts in artificial intelligence, our mission is to bridge the gap between humans and machines by delivering consulting services and products that are both cutting-edge and practical.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '3+', label: 'AI Products Launched' },
                { value: '6', label: 'Consulting Specialisms' },
                { value: '100%', label: 'AI-Powered Stack' },
                { value: '∞', label: 'Possibilities' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{value}</div>
                  <div className="text-sm text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Our Values</h2>
            <p className="text-slate-500 max-w-xl mx-auto">The principles that guide everything we build and every partnership we form.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ title, description, icon, color }) => (
              <div key={title} className="bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-md transition-all">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color} mb-4`}>
                  {icon}
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want to work with us?</h2>
          <p className="text-blue-100 mb-8">
            Whether you're looking to build something new or transform what you have, we'd love to talk.
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
