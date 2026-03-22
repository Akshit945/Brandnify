import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PLANS = ['Flash – ₹499/mo', 'Showcase – ₹1,499/mo', 'Full-Stack Rental – ₹2,999+/mo', 'Brand-in-a-Box – Custom', 'Not sure yet'];

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', plan: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.trim() && !formData.phone.trim()) {
      alert("Please provide either your Email Address or Phone Number so we can reach you.");
      return;
    }
    setStatus('submitting');
    try {
      const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'https://brandnify-backend.vercel.app/api';
      const response = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', plan: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-outline-variant/10 px-6 py-4 flex items-center">
        <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-xl">arrow_back</span>
          <span className="font-manrope font-bold text-xl text-white">Brandnify</span>
        </Link>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left — Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-manrope tracking-tight mb-3">
                Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Accelerate</span> Together.
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed">Tell us about your brand and we'll get back to you within 24 hours.</p>
            </div>

            <div className="space-y-5">
              <a href="mailto:hello@brandnify.in" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant mb-0.5 uppercase tracking-widest font-semibold">Email Us</p>
                  <p className="text-on-surface font-semibold group-hover:text-primary transition-colors">hello@brandnify.in</p>
                </div>
              </a>

              <a href="tel:+919876543210" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary">call</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant mb-0.5 uppercase tracking-widest font-semibold">Call / WhatsApp</p>
                  <p className="text-on-surface font-semibold group-hover:text-primary transition-colors">+91 98765 43210</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant mb-0.5 uppercase tracking-widest font-semibold">Response Time</p>
                  <p className="text-on-surface font-semibold">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Tier cards — quick reference */}
            <div className="hidden md:block rounded-xl bg-surface-container-low border border-outline-variant/10 p-6">
              <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold mb-4">Our Plans</p>
              <div className="space-y-2">
                {PLANS.slice(0, 4).map(p => (
                  <div key={p} className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-surface-container-high rounded-2xl border border-outline-variant/10 p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl font-bold font-manrope mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-on-surface-variant mb-1.5 font-semibold uppercase tracking-wider">Full Name *</label>
                  <input required name="name" value={formData.name} onChange={handleChange} placeholder="Riya Sharma"
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-3 text-white placeholder-zinc-600 focus:border-primary focus:outline-none text-sm transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant mb-1.5 font-semibold uppercase tracking-wider">Phone / WhatsApp</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" type="tel"
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-3 text-white placeholder-zinc-600 focus:border-primary focus:outline-none text-sm transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-on-surface-variant mb-1.5 font-semibold uppercase tracking-wider">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@yourbrand.com"
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-3 text-white placeholder-zinc-600 focus:border-primary focus:outline-none text-sm transition-colors" />
              </div>

              <div>
                <label className="block text-xs text-on-surface-variant mb-1.5 font-semibold uppercase tracking-wider">Plan You're Interested In</label>
                <select name="plan" value={formData.plan} onChange={handleChange}
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-3 text-white focus:border-primary focus:outline-none text-sm transition-colors appearance-none cursor-pointer">
                  <option value="" className="bg-zinc-900">Select a plan...</option>
                  {PLANS.map(p => <option key={p} value={p} className="bg-zinc-900">{p}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs text-on-surface-variant mb-1.5 font-semibold uppercase tracking-wider">Tell Us About Your Brand *</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="4"
                  placeholder="What products do you sell? What's your biggest challenge right now?"
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-3 text-white placeholder-zinc-600 focus:border-primary focus:outline-none text-sm transition-colors resize-none" />
              </div>

              <button type="submit" disabled={status === 'submitting'}
                className="mt-1 w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-3.5 rounded-lg hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-50 text-sm">
                {status === 'submitting' ? 'Sending...' : 'Send Message →'}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 justify-center text-secondary text-sm bg-secondary/10 rounded-lg p-3">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  Message sent! We'll reach out within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 justify-center text-error text-sm bg-error/10 rounded-lg p-3">
                  <span className="material-symbols-outlined text-base">error</span>
                  Failed to send. Please try again or email us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
