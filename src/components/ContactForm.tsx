'use client';

import { useState } from 'react';
import { sendContactEmail } from '@/app/actions';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = new FormData(e.currentTarget);
    const result = await sendContactEmail(form);

    if (result.success) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        required
        className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-2 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
      />
      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        required
        className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-2 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
        required
        rows={4}
        className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-2 text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-lg bg-emerald-500 py-2 text-black font-medium hover:bg-emerald-400 disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Send message'}
      </button>

      {status === 'success' && (
        <p className="text-emerald-400 text-sm">Message received! I'll get back to you soon.</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm">Error sending message. Please try again.</p>
      )}
    </form>
  );
}
