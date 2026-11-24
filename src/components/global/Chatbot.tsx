import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  User,
  Sparkles,
  RefreshCw,
  ChevronRight,
  Cookie,
  HeadphonesIcon,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ChatMessage {
  id: string;
  sender: 'support' | 'user';
  text: string;
  timestamp: string;
  actions?: { label: string; href?: string; onClickPrompt?: string }[];
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: '1',
    sender: 'support',
    text: "Hello! Welcome to Cittagent Technologies. I'm here to help you explore our industrial monitoring solutions, pricing, or schedule a consultation with our engineering team.",
    timestamp: 'Just now',
    actions: [
      { label: 'How does it work?', onClickPrompt: 'How does it work?' },
      { label: 'Deployment & setup time?', onClickPrompt: 'Deployment and setup time?' },
      { label: 'Energy savings & ROI?', onClickPrompt: 'Energy savings and ROI?' },
      { label: 'Book a consultation', href: '/book-a-demo' },
    ],
  },
];

const RESPONSES: Record<string, { text: string; actions?: { label: string; href?: string; onClickPrompt?: string }[] }> = {
  'how does it work': {
    text: 'Our platform uses non-intrusive clip-on sensors to continuously monitor your equipment. We detect abnormalities like bearing wear, pressure drops, and temperature spikes up to 14 days before failure — with zero disruption to your production line.',
    actions: [
      { label: 'View Platform Overview', href: '/solutions' },
      { label: 'Book a Consultation', href: '/book-a-demo' },
    ],
  },
  'deployment': {
    text: 'Setup takes under 15 minutes per machine. Our sensors attach magnetically with no rewiring, no PLC changes, and zero production downtime. Your team will be live with real-time dashboards the same day.',
    actions: [
      { label: 'See Hardware Details', href: '/platform' },
      { label: 'Schedule a Briefing', href: '/contact' },
    ],
  },
  'energy': {
    text: 'Most clients reduce compressed air costs by 18–22% within the first quarter. We identify hidden inefficiencies like micro-leaks and unnecessary idling cycles. Full return on investment is typically achieved within 90 days.',
    actions: [
      { label: 'Request a Plant Assessment', href: '/book-a-demo' },
      { label: 'Explore Case Studies', href: '/insights' },
    ],
  },
  'roi': {
    text: 'Most clients reduce compressed air costs by 18–22% within the first quarter. We identify hidden inefficiencies like micro-leaks and unnecessary idling cycles. Full return on investment is typically achieved within 90 days.',
    actions: [
      { label: 'Request a Plant Assessment', href: '/book-a-demo' },
      { label: 'Explore Case Studies', href: '/insights' },
    ],
  },
  'book': {
    text: 'Our team offers a complimentary 48-hour on-site baseline audit. We deploy temporary sensors, map your equipment, and deliver a full efficiency and ROI report — no commitment required.',
    actions: [{ label: 'Request Your Free Audit', href: '/book-a-demo' }],
  },
  'price': {
    text: 'Pricing is based on the number of machines and monitoring scope. We offer flexible monthly and annual plans. Our team will prepare a custom quote after a brief needs assessment.',
    actions: [
      { label: 'Talk to Sales', href: '/contact' },
      { label: 'Book a Demo', href: '/book-a-demo' },
    ],
  },
  'contact': {
    text: 'You can reach our team directly via our contact page. We typically respond within one business day. For urgent inquiries, our engineering team is available Monday–Friday, 9am–6pm.',
    actions: [{ label: 'Go to Contact Page', href: '/contact' }],
  },
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [cookieDismissed, setCookieDismissed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend ?? inputValue).trim();
    if (!text) return;

    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = text.toLowerCase();
      let matched = null;
      for (const [key, val] of Object.entries(RESPONSES)) {
        if (lower.includes(key)) { matched = val; break; }
      }
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'support',
        text: matched?.text ??
          `Thank you for reaching out. Our team will be happy to assist you with that. For detailed enquiries, you can connect directly with one of our industrial specialists.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: matched?.actions ?? [
          { label: 'Book a Consultation', href: '/book-a-demo' },
          { label: 'Contact Our Team', href: '/contact' },
        ],
      }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* ── Trigger Button ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full text-white shadow-xl cursor-pointer flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            aria-label="Open Support Chat"
          >
            <Sparkles className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[390px] flex flex-col rounded-2xl overflow-hidden"
            style={{
              maxHeight: 'min(620px, 90vh)',
              background: '#13131a',
              boxShadow: '0 0 0 1px rgba(99,102,241,0.2), 0 24px 60px rgba(0,0,0,0.6)',
            }}
          >
            {/* ── Header ── */}
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #1a1a2e 100%)' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                >
                  <HeadphonesIcon className="text-white" style={{ width: 18, height: 18 }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight tracking-tight">Cittagent Support</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    <span className="text-[11px]" style={{ color: 'rgba(167,139,250,0.7)' }}>Online · Typically replies instantly</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => { setMessages(INITIAL_MESSAGES); setCookieDismissed(false); }}
                  className="p-2 rounded-lg transition-colors cursor-pointer"
                  style={{ color: 'rgba(167,139,250,0.5)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(99,102,241,0.1)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  title="Reset conversation"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg transition-colors cursor-pointer"
                  style={{ color: 'rgba(167,139,250,0.5)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.1)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(167,139,250,0.5)'; }}
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ── Cookie Notice ── */}
            <AnimatePresence>
              {!cookieDismissed && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-start gap-2.5 px-4 py-2.5"
                  style={{ background: '#1a1a2e', borderBottom: '1px solid rgba(99,102,241,0.15)' }}
                >
                  <Cookie style={{ width: 14, height: 14, color: '#a78bfa', marginTop: 2, flexShrink: 0 }} />
                  <p className="text-[11px] leading-relaxed flex-1" style={{ color: 'rgba(167,139,250,0.65)' }}>
                    By chatting, you agree to our{' '}
                    <Link to="/privacy" onClick={() => setIsOpen(false)} style={{ color: '#a78bfa' }} className="underline underline-offset-2">
                      cookie & privacy policy
                    </Link>.
                  </p>
                  <button
                    onClick={() => setCookieDismissed(true)}
                    className="cursor-pointer shrink-0 mt-0.5"
                    style={{ color: 'rgba(167,139,250,0.4)' }}
                    aria-label="Dismiss"
                  >
                    <X style={{ width: 13, height: 13 }} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Messages ── */}
            <div
              className="flex-1 overflow-y-auto px-4 py-5 space-y-4"
              style={{ minHeight: 0, scrollbarWidth: 'none' }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.16 }}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar */}
                  <div className="shrink-0 mt-0.5">
                    {msg.sender === 'support' ? (
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                      >
                        <HeadphonesIcon className="text-white" style={{ width: 13, height: 13 }} />
                      </div>
                    ) : (
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: '#1e1b4b', border: '1px solid rgba(99,102,241,0.4)' }}
                      >
                        <User style={{ width: 13, height: 13, color: '#a78bfa' }} />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5 max-w-[79%]">
                    {/* Bubble */}
                    {msg.sender === 'support' ? (
                      <div
                        className="px-4 py-3 rounded-2xl rounded-tl-sm text-[12.5px] leading-relaxed"
                        style={{
                          background: '#1c1c2e',
                          border: '1px solid rgba(99,102,241,0.18)',
                          color: '#c4c4d4',
                        }}
                      >
                        {msg.text}
                      </div>
                    ) : (
                      <div
                        className="px-4 py-3 rounded-2xl rounded-tr-sm text-[12.5px] leading-relaxed text-white"
                        style={{ background: 'linear-gradient(135deg, #6366f1, #7c3aed)' }}
                      >
                        {msg.text}
                      </div>
                    )}

                    {/* Actions */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {msg.actions.map((act, i) =>
                          act.href ? (
                            <Link
                              key={i}
                              to={act.href}
                              onClick={() => setIsOpen(false)}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all"
                              style={{ color: '#a78bfa', border: '1px solid rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)' }}
                            >
                              <ExternalLink style={{ width: 10, height: 10 }} />
                              {act.label}
                            </Link>
                          ) : (
                            <button
                              key={i}
                              type="button"
                              onClick={() => handleSend(act.onClickPrompt)}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all cursor-pointer"
                              style={{ color: '#8b8ba8', border: '1px solid rgba(99,102,241,0.15)', background: 'transparent' }}
                              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.1)'; e.currentTarget.style.color = '#a78bfa'; }}
                              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8b8ba8'; }}
                            >
                              <ChevronRight style={{ width: 10, height: 10 }} />
                              {act.label}
                            </button>
                          )
                        )}
                      </div>
                    )}

                    <span
                      className={`text-[10px] font-mono ${msg.sender === 'user' ? 'text-right' : ''}`}
                      style={{ color: 'rgba(99,102,241,0.3)' }}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Typing dots */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-2.5 items-center"
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                    >
                      <HeadphonesIcon className="text-white" style={{ width: 13, height: 13 }} />
                    </div>
                    <div
                      className="px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5"
                      style={{ background: '#1c1c2e', border: '1px solid rgba(99,102,241,0.18)' }}
                    >
                      {[0, 0.18, 0.36].map((delay, i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            background: '#6366f1',
                            animation: `chatbounce 1.1s ease-in-out ${delay}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* ── Input Bar ── */}
            <div style={{ background: '#17172a', borderTop: '1px solid rgba(99,102,241,0.12)' }}>
              <form
                onSubmit={e => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2.5 px-4 py-3"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  placeholder="Type your message…"
                  className="flex-1 rounded-xl px-4 py-2.5 text-[12.5px] focus:outline-none transition-all"
                  style={{
                    background: '#1c1c2e',
                    border: '1px solid rgba(99,102,241,0.2)',
                    color: '#e2e2f0',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)')}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #7c3aed)' }}
                  aria-label="Send"
                >
                  <Send style={{ width: 14, height: 14, marginLeft: 1 }} />
                </button>
              </form>

              {/* Cookie footer */}
              <div
                className="flex items-center justify-center gap-1.5 pb-3 text-[10px]"
                style={{ color: 'rgba(99,102,241,0.3)' }}
              >
                <Cookie style={{ width: 11, height: 11 }} />
                <span>We use cookies ·</span>
                <Link
                  to="/privacy"
                  onClick={() => setIsOpen(false)}
                  className="underline underline-offset-2 transition-colors"
                  style={{ color: 'rgba(99,102,241,0.4)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#a78bfa')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(99,102,241,0.4)')}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes chatbounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}
