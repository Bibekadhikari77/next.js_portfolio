"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiPhone, FiMapPin } from 'react-icons/fi';
import { CosmicBackground } from "../ui/CosmicBackground";

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (e) {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 4000);
    }
  }

  return (
  <section id="contact" className="section-padding relative overflow-hidden scroll-mt-24">
      <CosmicBackground
        stars={40}
        meteors={1}
        enableMeteors
        collisionIntervalMs={2600}
        className="opacity-60"
        starClass="rounded-full bg-fuchsia-400/70 dark:bg-fuchsia-300/80"
        meteorClass="h-px bg-gradient-to-r from-fuchsia-400/70 via-fuchsia-200/50 to-transparent dark:from-fuchsia-300 dark:via-white"
      />
      <div className="container-base grid md:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-neutral-600 dark:text-neutral-300">Have a project, idea or just want to say hi? Reach out via email, phone, or the form. I usually respond within 24 hours.</p>
          <div className="space-y-3 text-neutral-700 dark:text-neutral-300">
            <div className="flex items-center gap-3">
              <FiMail className="text-primary-600" />
              <a href="mailto:email@example.com" className="hover:underline">email@example.com</a>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-primary-600" />
              <a href="tel:+1234567890" className="hover:underline">+977 9800662455</a>
            </div>
            <div className="flex items-start gap-3">
              <FiMapPin className="text-primary-600 mt-0.5" />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>
          <div className="relative h-56 md:h-64 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-fuchsia-500/5 to-indigo-500/5 pointer-events-none" />
            <iframe
              title="Location Map"
              aria-label="Location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.88541527837!2d85.28493395742186!3d27.708955944527555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190b6f05348b%3A0x54a6763d211fba19!2sKathmandu!5e0!3m2!1sen!2snp!4v1689080700000!5m2!1sen!2snp"
              allowFullScreen
            />
          </div>
        </div>
        <motion.form initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input id="name" type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full rounded-md border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input id="email" type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full rounded-md border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea id="message" required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className="w-full rounded-md border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900" />
          </div>
          <button disabled={status === 'loading'} className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-500 disabled:opacity-50">
            <FiSend /> {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : status === 'error' ? 'Error' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
