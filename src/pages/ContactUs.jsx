import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';
      const response = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col items-center justify-center p-8">
      <Link to="/" className="text-primary hover:underline mb-8 absolute top-8 left-8 flex items-center gap-2">
        <span className="material-symbols-outlined">arrow_back</span> Back to Home
      </Link>
      <div className="w-full max-w-md bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 shadow-2xl">
        <h2 className="text-3xl font-bold font-manrope mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-on-surface-variant mb-1">Name</label>
            <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-surface-container-lowest border border-outline-variant rounded p-3 text-white focus:border-primary focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-on-surface-variant mb-1">Email</label>
            <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-surface-container-lowest border border-outline-variant rounded p-3 text-white focus:border-primary focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-on-surface-variant mb-1">Message</label>
            <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-surface-container-lowest border border-outline-variant rounded p-3 text-white focus:border-primary focus:outline-none" />
          </div>
          <button type="submit" disabled={status === 'submitting'} className="mt-4 w-full bg-primary text-on-primary font-bold py-3 rounded hover:bg-primary-container transition-colors disabled:opacity-50">
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && <p className="text-secondary text-sm text-center mt-2">Message sent successfully!</p>}
          {status === 'error' && <p className="text-error text-sm text-center mt-2">Failed to send message. Please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
