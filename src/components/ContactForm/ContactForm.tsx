import { useState, FormEvent } from 'react';
import { Mail, Send, CheckCircle2, ArrowRight, Terminal as TerminalIcon, Github, Linkedin, MapPin, Copy, Check, MessageCircle, Phone } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<'email' | 'whatsapp'>('email');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    if (activeTab === 'email') {
      // Buka email dengan pesan
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Nama: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Pesan:\n${formData.message}`
      );
      window.open(`mailto:${socials.find(s => s.platform === 'email')?.value || 'alfrzimhmd.2603@gmail.com'}?subject=${subject}&body=${body}`, '_blank');
    } else {
      // Buka WhatsApp dengan pesan
      const phoneNumber = '6285292165080'; // Nomor WhatsApp
      const message = encodeURIComponent(
        `Halo, saya ${formData.name}.\n\n` +
        `Pesan: ${formData.message}\n\n` +
        `Email: ${formData.email || 'Tidak diisi'}`
      );
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    }

    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(socials.find(s => s.platform === 'email')?.value || 'alfrzimhmd.2603@gmail.com');
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

          {/* Tab Switcher */}
          <div className="flex gap-2 mb-6 bg-[var(--surface-secondary)] p-1 rounded-xl border border-[var(--border-main)]">
            <button
              onClick={() => setActiveTab('email')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'email'
                  ? 'bg-cyan-500 text-black shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </button>
            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'whatsapp'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4 rounded-xl bg-[var(--surface-secondary)] border border-cyan-500/30">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-[var(--text-primary)]">
                {activeTab === 'email' ? 'Email Opened' : 'WhatsApp Opened'}
              </h4>
              <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
                {activeTab === 'email' 
                  ? `Email client has been opened with your message to ${formData.name}. Please review and send.`
                  : `WhatsApp has been opened with your message to ${formData.name}. Please review and send.`
                }
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="mt-4 px-4 py-2 rounded-lg border border-[var(--border-main)] bg-[var(--surface-main)] text-xs font-mono text-[var(--text-primary)] hover:border-cyan-500/40 cursor-pointer"
              >
                Send Another Message
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
                    placeholder="Nama lengkap"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] text-[var(--text-primary)] placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 text-sm font-sans"
                  />
                </div>

                {activeTab === 'email' && (
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
                      placeholder="email@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] text-[var(--text-primary)] placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 text-sm font-sans"
                    />
                  </div>
                )}

                {activeTab === 'whatsapp' && (
                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="text-[var(--text-secondary)] uppercase tracking-wider block">
                      WHATSAPP <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="0852-9216-5080"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] text-[var(--text-primary)] placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 text-sm font-sans"
                    />
                  </div>
                )}
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
                  placeholder="Subjek pesan"
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
                  placeholder={activeTab === 'email' 
                    ? "Tulis pesan Anda di sini..."
                    : "Tulis pesan WhatsApp Anda di sini..."
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] text-[var(--text-primary)] placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 text-sm font-sans resize-y"
                />
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm font-sans transition-all duration-200 shadow-md cursor-pointer ${
                  activeTab === 'email'
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-black hover:shadow-cyan-500/20'
                    : 'bg-green-500 hover:bg-green-400 text-white hover:shadow-green-500/20'
                }`}
              >
                <span>{activeTab === 'email' ? 'Send Email' : 'Send WhatsApp'}</span>
                {activeTab === 'email' ? (
                  <Mail className="w-4 h-4" />
                ) : (
                  <MessageCircle className="w-4 h-4" />
                )}
              </button>

              <div className="pt-2 text-[10px] font-mono text-[var(--text-secondary)]">
                {activeTab === 'email' 
                  ? 'Your message will be sent via your default email client.'
                  : 'Your message will be sent via WhatsApp web or mobile app.'
                }
              </div>
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
                <span className="text-[var(--text-primary)] font-semibold">mhmdalfrzi.03@gmail.com</span>
              </div>
              <button
                onClick={copyEmail}
                className="p-1.5 rounded-lg hover:bg-[var(--surface-main)] text-[var(--text-secondary)] hover:text-cyan-400 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp item */}
            <div className="p-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-main)] flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase block">WHATSAPP</span>
                <span className="text-[var(--text-primary)] font-semibold">+62 852-9216-5080</span>
              </div>
              <a
                href="https://wa.me/6285292165080"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:bg-[var(--surface-main)] text-[var(--text-secondary)] hover:text-green-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* GitHub item */}
            <div className="p-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-main)] flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase block">GITHUB</span>
                <span className="text-[var(--text-primary)] font-semibold">@alfrzimhmd</span>
              </div>
              <a
                href="https://github.com/alfrzimhmd"
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
                <span className="text-[var(--text-primary)] font-semibold">Muhammad Alfarizi</span>
              </div>
              <a
                href="https://www.linkedin.com/in/mhmd-alfrzi-80b15334b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:bg-[var(--surface-main)] text-[var(--text-secondary)] hover:text-blue-500 transition-colors"
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

        {/* Technical Terminal Snippet */}
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