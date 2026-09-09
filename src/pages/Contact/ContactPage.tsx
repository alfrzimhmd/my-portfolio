import ContactForm from '../../components/ContactForm/ContactForm';
import { Mail, Sparkles, Terminal, MessageSquare, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div id="contact-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest block">
          05 — DISPATCH &amp; COLLABORATION
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
          Let&apos;s Build Something Interesting.
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
          Whether it&apos;s a software project, interface design, technical discussion, or an interesting idea, feel free to reach out via Email or WhatsApp.
        </p>
      </div>

      {/* Main Contact Form & Coordinates Panel */}
      <ContactForm />
    </div>
  );
}