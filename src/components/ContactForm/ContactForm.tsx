import { useState, FormEvent } from 'react';
import { Mail, Send, CheckCircle2, ArrowRight, Terminal as TerminalIcon, Github, Linkedin, MapPin, Copy, Check } from 'lucide-react';
import { socials, personalInfo } from '../../data/socials';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(socials.find(s => s.platform === 'Email')?.value || '[EMAIL]');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      {/* Left Column: Contact Form */}
      <div className="lg:col-span-7">
        <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 shadow-xl">
          <div className="pb-4 border-b border-[var(--border-main)] mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">
                DISPATCH_TRANSMISSION // FORM
              </span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400">
              ENCRYPTION: ACTIVE
            </span>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4 rounded-xl bg-[var(--surface-secondary)] border border-cyan-500/30">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-[var(--text-primary)]">
                Message Dispatched
              </h4>
              <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
                Thank you, {formData.name}. Your message has been routed to my personal inbox. I will review and reply as soon as possible.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="mt-4 px-4 py-2 rounded-lg border border-[var(--border-main)] bg-[var(--surface-main)] text-xs font-mono text-[var(--text-primary)] hover:border-cyan-500/40 cursor-pointer"
              >
                Send Another Transmission
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-[var(--text-secondary)] uppercase tracking-wider block">
                    NAME <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] text-[var(--text-primary)] placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 text-sm font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-[var(--text-secondary)] uppercase tracking-wider block">
                    EMAIL <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ada@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] text-[var(--text-primary)] placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 text-sm font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-[var(--text-secondary)] uppercase tracking-wider block">
                  SUBJECT
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software Development / Interface Collaboration"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] text-[var(--text-primary)] placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 text-sm font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-[var(--text-secondary)] uppercase tracking-wider block">
                  MESSAGE <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, technical inquiry, or collaborative idea..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] text-[var(--text-primary)] placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 text-sm font-sans resize-y"
                />
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm font-sans transition-all duration-200 shadow-md hover:shadow-cyan-500/20 cursor-pointer"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Right Column: Side Panel & Terminal Connection */}
      <div className="lg:col-span-5 space-y-6">
        {/* Contact Coordinates Panel */}
        <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-main)]">
            <span className="font-mono text-xs font-semibold uppercase text-[var(--text-primary)]">
              DIRECT COORDINATES
            </span>
            <span className="font-mono text-[10px] text-cyan-400">ID // ASIA-JKT</span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {/* Email item */}
            <div className="p-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-main)] flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase block">EMAIL</span>
                <span className="text-[var(--text-primary)] font-semibold">{personalInfo.name ? socials[0].value : '[EMAIL]'}</span>
              </div>
              <button
                onClick={copyEmail}
                className="p-1.5 rounded-lg hover:bg-[var(--surface-main)] text-[var(--text-secondary)] hover:text-cyan-400 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* GitHub item */}
            <div className="p-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-main)] flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase block">GITHUB</span>
                <span className="text-[var(--text-primary)] font-semibold">{socials[1].value}</span>
              </div>
              <a
                href={socials[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:bg-[var(--surface-main)] text-[var(--text-secondary)] hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* LinkedIn item */}
            <div className="p-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-main)] flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase block">LINKEDIN</span>
                <span className="text-[var(--text-primary)] font-semibold">{socials[2].value}</span>
              </div>
              <a
                href={socials[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:bg-[var(--surface-main)] text-[var(--text-secondary)] hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Location item */}
            <div className="p-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-main)] flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase block">LOCATION</span>
                <span className="text-[var(--text-primary)] font-semibold">{personalInfo.location}</span>
              </div>
              <MapPin className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Technical Terminal Snippet from Section 32 */}
        <div className="rounded-2xl border border-[var(--border-main)] bg-[#07090C] p-4 font-mono text-xs text-gray-300 shadow-xl space-y-2">
          <div className="flex items-center justify-between pb-2 border-b border-[#181C24] text-[10px] text-gray-500">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <TerminalIcon className="w-3 h-3" /> listener.socket.ts
            </span>
            <span className="text-emerald-400">&bull; LISTENING</span>
          </div>
          <div className="p-2 text-[11px] leading-relaxed space-y-1">
            <p className="text-cyan-300">
              <span className="text-purple-400">const</span> connection = socket.initialize();
            </p>
            <p className="text-emerald-400 font-semibold">
              connection.status = <span className="text-amber-300">&quot;open&quot;</span>;
            </p>
            <p className="text-gray-400 flex items-center gap-1.5 pt-1">
              <span className="animate-pulse text-cyan-400">&gt;</span>
              <span>waiting_for_message...</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
