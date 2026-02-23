import React, { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.name || !form.email || !form.message) {
      setError('Please fill all required fields.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess('Message sent successfully!');
      setForm({ name: '', email: '', company: '', message: '' });
    }, 1500);
  };

  return (
    <section className="py-16 px-4 bg-darkBg flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mb-12">Contact Us</h2>
      <form className="glass-card p-8 rounded-xl shadow-glow border border-accent w-full max-w-lg flex flex-col gap-4" onSubmit={handleSubmit} aria-label="Contact form">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name*" className="p-3 rounded bg-darkBg text-white border border-accent focus:outline-none focus:ring-2 focus:ring-accent" required aria-required="true" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email*" type="email" className="p-3 rounded bg-darkBg text-white border border-accent focus:outline-none focus:ring-2 focus:ring-accent" required aria-required="true" />
        <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="p-3 rounded bg-darkBg text-white border border-accent focus:outline-none focus:ring-2 focus:ring-accent" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message*" className="p-3 rounded bg-darkBg text-white border border-accent focus:outline-none focus:ring-2 focus:ring-accent" required aria-required="true" rows={5} />
        <button type="submit" className="px-6 py-3 rounded-lg bg-accent text-white font-semibold shadow-glow hover:scale-105 transition disabled:opacity-50" disabled={loading}>{loading ? 'Sending...' : 'Submit'}</button>
        {error && <span className="text-red-500 mt-2">{error}</span>}
        {success && <span className="text-green-500 mt-2">{success}</span>}
      </form>
    </section>
  );
};

export default ContactSection;
