/**
 * MedSpa Sprint — Dark Luxury Performance Agency
 * Dark charcoal + warm gold. High contrast, logic-first.
 * No fake testimonials. Real math instead.
 */

import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  Users,
  Zap,
  ShieldCheck,
  ChevronDown,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  MessageSquare,
  Target,
  Clock,
  TrendingUp,
  Lock,
  BarChart2,
} from "lucide-react";
import { useState } from "react";

/* ── Animation Variants ── */
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: "-60px" },
};

const childFade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

/* ── Data ── */
const faqs = [
  {
    q: "How is this different from our email marketing?",
    a: "Your promotional emails go to everyone. We target ONLY inactive patients (6–18 months dormant) with personalized messaging based on their treatment history. Different audience, different approach, higher engagement.",
  },
  {
    q: "Won't this annoy past patients?",
    a: "We use a consultative approach, not sales. Messages are personalized and relevant. Patients appreciate being remembered. If someone opts out, we never contact them again.",
  },
  {
    q: "What if we don't have many inactive patients?",
    a: "This works best for clinics with 1,500+ past patients. If your list is smaller, we can discuss alternative strategies or wait until your patient base grows.",
  },
  {
    q: "How do you get paid?",
    a: "Per booked appointment that shows up. We send you an invoice after appointments are confirmed. Simple, transparent, performance-based.",
  },
];

const processSteps = [
  {
    icon: Users,
    step: "01",
    title: "Access Inactive List",
    desc: "We identify patients who haven't visited in 6–18 months and segment them by treatment history and lifetime value.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Personalized Outreach",
    desc: "We contact them with targeted, consultative messaging — not mass emails. Each message is crafted for the individual.",
  },
  {
    icon: Calendar,
    step: "03",
    title: "Book Appointments",
    desc: "We pre-qualify interest and book appointments directly into your calendar. You show up and treat.",
  },
];

const qualifications = [
  "Owner-led practice (1–3 providers)",
  "Established patient base (1,000+ past patients)",
  "Schedule gaps you want to fill",
  "Ready to activate dormant revenue",
  "Want results, not reports",
];

const stats = [
  { value: "1–3%", label: "Of patients go inactive every month from missed rebookings", icon: TrendingUp },
  { value: "2,000+", label: "Avg. inactive patients per practice", icon: Users },
  { value: "14 days", label: "To your first reactivated appointments", icon: Clock },
  { value: "$0", label: "Upfront — you pay per booked appointment only", icon: Lock },
];

/* The Math rows — 14-day sprint framing, real industry estimates */
const mathRows = [
  {
    label: "Typical inactive patient list",
    value: "2,000 patients",
  },
  {
    label: "Conservative reactivation rate (industry behavior)",
    value: "1–2%",
  },
  {
    label: "Appointments unlocked in 14 days",
    value: "20–40 visits",
  },
  {
    label: "Average med spa visit value",
    value: "$250–$400",
  },
  {
    label: "Revenue in your first 14-day sprint",
    value: "$5,000–$15,000",
  },
];

/* ── Component ── */
export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
      <div className="noise" aria-hidden="true" />

      {/* ── Navigation ── */}
      <header role="banner">
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Main navigation"
          className="fixed top-4 left-4 right-4 z-50 nav-glass rounded-md px-6 py-3.5"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <a href="#" aria-label="MedSpa Sprint home" className="flex items-center gap-2.5 cursor-pointer">
              <div
                className="w-7 h-7 rounded flex items-center justify-center"
                style={{ background: "var(--color-gold)" }}
              >
                <Zap className="w-3.5 h-3.5" style={{ color: "#0e0e0e" }} aria-hidden="true" />
              </div>
              <span className="font-bold text-sm tracking-tight" style={{ fontFamily: "var(--font-sans)" }}>
                MEDSPA<span style={{ color: "var(--color-gold)" }}>SPRINT</span>
              </span>
            </a>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: "Process", href: "#process" },
                { label: "The Math", href: "#math" },
                { label: "FAQ", href: "#faq" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] cursor-pointer transition-colors duration-200"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
                >
                  {label}
                </a>
              ))}
              <a
                href="https://calendly.com/medspasprint/30min"
                target="_blank"
                rel="noopener noreferrer"
                id="nav-cta"
                className="btn-primary cursor-pointer !py-2.5 !px-5"
                aria-label="Book a free consultation call"
              >
                Book a Call
              </a>
            </div>
          </div>
        </motion.nav>
      </header>

      <main>
        {/* ── Hero ── */}
        <section
          aria-label="Hero"
          className="hero-bg relative flex flex-col items-center justify-center min-h-screen pt-24 pb-20 px-6 overflow-hidden"
        >
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Badge */}
              <div className="flex justify-center mb-8">
                <span className="gold-badge">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--color-gold)" }}
                    aria-hidden="true"
                  />
                  Exclusively for Med Spas
                </span>
              </div>

              {/* Headline */}
              <h1
                className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-display)", lineHeight: 1.08 }}
              >
                Revenue{" "}
                <span className="italic font-normal" style={{ color: "var(--color-text-muted)" }}>Reactivation</span>
                <br />
                <span className="text-gold-gradient">at Scale</span>
              </h1>

              {/* Sub */}
              <p
                className="text-base md:text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                Turn your inactive patient list into booked appointments.{" "}
                <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>
                  Performance-based service for owner-led med spas with 1,000+ past patients.
                </strong>
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a
                  href="https://calendly.com/medspasprint/30mmin"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-cta-primary"
                  className="btn-primary cursor-pointer"
                  aria-label="Book a free strategy consultation"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#process"
                  id="hero-cta-secondary"
                  className="btn-secondary cursor-pointer"
                  aria-label="See how our process works"
                >
                  See How It Works
                </a>
              </div>

              {/* Trust row */}
              <div
                className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{ color: "var(--color-text-dim)" }}
              >
                {[
                  { icon: ShieldCheck, label: "HIPAA Compliant" },
                  { icon: Lock, label: "No Upfront Fees" },
                  { icon: CheckCircle2, label: "Pay Per Result" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="w-3 h-3" style={{ color: "var(--color-gold-dim)" }} aria-hidden="true" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Stats Bar ── */}
        <section aria-label="Key statistics" className="py-14 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {stats.map(({ value, label, icon: Icon }) => (
                <motion.div key={label} variants={childFade} className="stat-card">
                  <div
                    className="icon-badge mx-auto mb-4"
                    aria-hidden="true"
                  >
                    <Icon className="w-4 h-4" style={{ color: "var(--color-gold)" }} />
                  </div>
                  <p
                    className="text-2xl md:text-3xl font-bold mb-1.5"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
                  >
                    {value}
                  </p>
                  <p className="text-xs font-medium leading-snug" style={{ color: "var(--color-text-muted)" }}>
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Problem Section ── */}
        <section aria-label="The problem" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeUp}>
                <span className="micro-label mb-4 block">The Context</span>
                <h2
                  className="text-4xl md:text-5xl mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  The Reality of Dormant Data
                </h2>
                <div className="space-y-5 text-base leading-relaxed font-light" style={{ color: "var(--color-text-muted)" }}>
                  <p>
                    Most med spas have{" "}
                    <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>1,000–5,000 past patients</strong>{" "}
                    sitting in their database gathering dust. These are not cold leads — they're warm relationships
                    that have gone quiet.
                  </p>
                  <p>
                    Meanwhile, your schedule has gaps and you're spending money to acquire{" "}
                    <em style={{ color: "var(--color-gold)" }}>new</em> patients. This is backwards.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mt-8">
                  {[
                    { text: "Dormant 6–18+ months", icon: Clock },
                    { text: "Pre-qualified by history", icon: Target },
                    { text: "High trust, low friction", icon: ShieldCheck },
                    { text: "Ready for reactivation", icon: Zap },
                  ].map(({ text, icon: Icon }) => (
                    <div
                      key={text}
                      className="flex items-center gap-3 p-4 rounded"
                      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                    >
                      <div className="icon-badge flex-shrink-0" style={{ width: "2rem", height: "2rem" }}>
                        <Icon className="w-3.5 h-3.5" style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--color-text)" }}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Callout card — two big numbers */}
              <motion.div {...fadeUp} className="card-gold rounded-lg p-10">
                <p className="micro-label mb-8">What You're Sitting On</p>
                <div className="space-y-8">

                  {/* ── Stat 1: The idle list ── */}
                  <div>
                    <p
                      className="text-7xl font-bold tracking-tight leading-none mb-3"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                    >
                      2,000+
                    </p>
                    <p className="text-sm font-light leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                      Patients — on average — sitting inactive in a med spa's database, uncontacted and unmonetized.
                    </p>
                  </div>

                  <div style={{ height: "1px", background: "var(--color-border)" }} />

                  {/* ── Stat 2: The dollar amount ── */}
                  <div>
                    <p
                      className="text-5xl font-bold tracking-tight leading-tight mb-3"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                    >
                      Tens of<br />thousands
                    </p>
                    <p className="text-sm font-light leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                      In dormant revenue inside that list. Even a{" "}
                      <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>1–2% reactivation rate</strong>{" "}
                      — conservative, based on industry behavior — unlocks{" "}
                      <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>$5,000–$15,000</strong>{" "}
                      in your first 14-day sprint.
                    </p>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Process ── */}
        <section id="process" aria-label="How it works" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.span {...fadeUp} className="micro-label mb-4 block">Our Framework</motion.span>
              <motion.h2
                {...fadeUp}
                className="text-4xl md:text-5xl mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How We Fix This
              </motion.h2>
              <motion.p
                {...fadeUp}
                className="text-base font-light max-w-lg mx-auto"
                style={{ color: "var(--color-text-muted)" }}
              >
                A 3-step reactivation engine designed to fill your calendar in weeks, not months.
              </motion.p>
            </div>

            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-4"
            >
              {processSteps.map(({ icon: Icon, step, title, desc }) => (
                <motion.article key={step} variants={childFade} className="process-step" aria-label={`Step ${step}: ${title}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="icon-badge">
                      <Icon className="w-4 h-4" style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                    </div>
                    <span
                      className="text-5xl font-bold leading-none"
                      style={{ fontFamily: "var(--font-display)", color: "rgba(201,168,76,0.07)" }}
                      aria-hidden="true"
                    >
                      {step}
                    </span>
                  </div>
                  <h3
                    className="text-sm font-bold uppercase tracking-[0.2em] mb-3"
                    style={{ color: "var(--color-text)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed font-light" style={{ color: "var(--color-text-muted)" }}>
                    {desc}
                  </p>
                </motion.article>
              ))}
            </motion.div>

            <motion.div {...fadeUp} className="mt-10 flex justify-center">
              <div
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.25em]"
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid var(--color-border-gold)",
                  color: "var(--color-gold)",
                }}
              >
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                Timeline: First results in 14–20 days
              </div>
            </motion.div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── The Math (replaces fake testimonials) ── */}
        <section id="math" aria-label="ROI breakdown" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <motion.span {...fadeUp} className="micro-label mb-4 block">The Math</motion.span>
              <motion.h2
                {...fadeUp}
                className="text-4xl md:text-5xl mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Why This Works
              </motion.h2>
              <motion.p
                {...fadeUp}
                className="text-base font-light max-w-lg mx-auto"
                style={{ color: "var(--color-text-muted)" }}
              >
                Conservative industry estimates. No hype, just the math on what's already sitting in your database.
              </motion.p>
            </div>

            <motion.div {...fadeUp} className="card-gold rounded-lg overflow-hidden">
              {/* Header row */}
              <div
                className="grid grid-cols-2 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{ borderBottom: "1px solid var(--color-border)", color: "var(--color-text-dim)" }}
              >
                <span>Assumption</span>
                <span className="text-right">Conservative Estimate</span>
              </div>

              {/* Math rows */}
              {mathRows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 px-8 py-5 items-center"
                  style={{
                    borderBottom: i < mathRows.length - 1 ? "1px solid var(--color-border-soft)" : "none",
                    background: i === mathRows.length - 1 ? "rgba(201,168,76,0.04)" : "transparent",
                  }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{ color: i === mathRows.length - 1 ? "var(--color-text)" : "var(--color-text-muted)" }}
                  >
                    {row.label}
                  </span>
                  <span
                    className="text-right font-bold"
                    style={{
                      fontFamily: i === mathRows.length - 1 ? "var(--font-display)" : "var(--font-sans)",
                      fontSize: i === mathRows.length - 1 ? "1.5rem" : "0.9375rem",
                      color: i === mathRows.length - 1 ? "var(--color-gold)" : "var(--color-text)",
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}

              {/* Footer note */}
              <div
                className="px-8 py-5"
                style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-surface-2)" }}
              >
                <div className="flex items-start gap-3">
                  <BarChart2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--color-gold-dim)" }} aria-hidden="true" />
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    Based on industry averages for aesthetic medicine practices. Your results will vary based on list
                    quality, service mix, and local market. We'll give you a honest assessment on our discovery call.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Qualifications + Pricing ── */}
        <section aria-label="Qualifications and pricing" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6">

              {/* Who It's For */}
              <motion.div {...fadeUp} className="card rounded-lg p-10">
                <span className="micro-label mb-4 block">Qualifications</span>
                <h2 className="text-3xl mb-8" style={{ fontFamily: "var(--font-display)" }}>
                  Ideal Med Spa Profile
                </h2>
                <ul className="space-y-4" aria-label="Qualification criteria">
                  {qualifications.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: "var(--color-gold)" }}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium leading-snug" style={{ color: "var(--color-text-muted)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Pricing */}
              <motion.div
                {...fadeUp}
                className="card-gold rounded-lg p-10 relative overflow-hidden"
              >
                <div
                  className="absolute top-6 right-6 px-3 py-1 rounded-sm text-[9px] font-bold uppercase tracking-widest"
                  style={{ border: "1px solid var(--color-border-gold)", color: "var(--color-gold)" }}
                >
                  Performance
                </div>

                <span className="micro-label mb-4 block">Investment</span>
                <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  No Upfront Fees
                </h2>
                <p className="text-sm mb-8 font-light leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  You only pay for results. We charge per booked appointment that shows up. No retainers. No risk.
                </p>

                <div
                  className="p-6 rounded mb-8"
                  style={{ border: "1px solid var(--color-border)", background: "var(--color-surface-2)" }}
                >
                  <p className="micro-label mb-2 opacity-60">Our Guarantee</p>
                  <p className="text-base font-bold leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                    If we don't book appointments, you don't pay. Period.
                  </p>
                </div>

                <a
                  href="https://calendly.com/medspasprint/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="pricing-cta"
                  className="btn-primary w-full cursor-pointer justify-center"
                  aria-label="Check if your practice qualifies"
                >
                  Check Eligibility
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── FAQ ── */}
        <section id="faq" aria-label="Frequently asked questions" className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <motion.span {...fadeUp} className="micro-label mb-4 block">Clarity</motion.span>
              <motion.h2
                {...fadeUp}
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Common Questions
              </motion.h2>
            </div>

            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-2"
            >
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={childFade} className="faq-item">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full px-7 py-5 flex items-center justify-between text-left cursor-pointer"
                    aria-expanded={activeFaq === i}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-btn-${i}`}
                  >
                    <span
                      className="font-bold text-sm pr-4 leading-snug"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`}
                      style={{ color: "var(--color-gold)" }}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        role="region"
                        aria-labelledby={`faq-btn-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <p
                          className="px-7 pb-6 text-sm leading-relaxed font-light"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── About ── */}
        <section aria-label="About MedSpa Sprint" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeUp}>
                <span className="micro-label mb-4 block">The Team</span>
                <h2 className="text-4xl mb-6" style={{ fontFamily: "var(--font-display)" }}>Who We Are</h2>
                <div className="space-y-5 text-sm leading-relaxed font-light" style={{ color: "var(--color-text-muted)" }}>
                  <p>
                    We're a revenue reactivation service{" "}
                    <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>exclusively for med spas</strong>.
                  </p>
                  <p>
                    We help owner-led practices fill schedule gaps by activating the revenue sitting in their inactive
                    patient database.
                  </p>
                  <p>
                    No complex funnels. No 6-month contracts. Just personalized outreach that books appointments.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeUp}>
                <div
                  className="aspect-video rounded overflow-hidden relative"
                  style={{ border: "1px solid var(--color-border)" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                    alt="Modern Med Spa treatment room"
                    className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:opacity-50"
                    style={{ opacity: 0.35, filter: "grayscale(30%)" }}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(14,14,14,0.7), transparent)" }}
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div
                      className="p-5 rounded"
                      style={{
                        background: "rgba(14,14,14,0.85)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <p className="micro-label mb-1">Focused Positioning</p>
                      <p className="text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>
                        "We only do med spas" — specialization drives results.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Final CTA ── */}
        <section aria-label="Get started" className="py-24 px-6 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-48 opacity-10 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #c9a84c, transparent)" }}
          />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div {...fadeUp}>
              <span className="micro-label mb-6 block">Next Step</span>
              <h2
                className="text-5xl md:text-6xl mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ready to fill your gaps?
              </h2>
              <p
                className="text-base mb-10 font-light max-w-lg mx-auto"
                style={{ color: "var(--color-text-muted)" }}
              >
                We'll review your situation and determine if this makes sense for your practice. No obligation.
              </p>
              <a
                href="https://calendly.com/medspasprint/30min"
                target="_blank"
                rel="noopener noreferrer"
                id="final-cta"
                className="btn-primary cursor-pointer"
                aria-label="Book your free strategy consultation now"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <p
                className="mt-6 text-[9px] font-bold uppercase tracking-[0.3em]"
                style={{ color: "var(--color-text-dim)" }}
              >
                Limited to 2 new partners per month.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        role="contentinfo"
        className="pt-14 pb-6 px-6"
        style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-surface)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: "var(--color-gold)" }}>
                  <Zap className="w-3.5 h-3.5" style={{ color: "#0e0e0e" }} aria-hidden="true" />
                </div>
                <span className="font-bold text-sm tracking-tight">
                  MEDSPA<span style={{ color: "var(--color-gold)" }}>SPRINT</span>
                </span>
              </div>
              <p className="text-xs max-w-xs mb-6 leading-relaxed font-light" style={{ color: "var(--color-text-muted)" }}>
                The performance-based revenue engine for owner-led med spas.
              </p>
              <div className="flex gap-5">
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/paytonjbennett/" },
                  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/medspasprint/" },
                  { icon: Mail, label: "Email", href: "mailto:payton@medspasprint.com" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel={label !== "Email" ? "noopener noreferrer" : undefined}
                    aria-label={`MedSpa Sprint on ${label}`}
                    className="cursor-pointer transition-colors duration-200"
                    style={{ color: "var(--color-text-dim)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-dim)")}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "var(--color-text-muted)" }}>
                Contact
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--color-gold-dim)" }} aria-hidden="true" />
                  <a href="mailto:payton@medspasprint.com" className="text-xs cursor-pointer transition-colors duration-200" style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}>
                    payton@medspasprint.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--color-gold-dim)" }} aria-hidden="true" />
                  <a href="tel:6076246099" className="text-xs cursor-pointer transition-colors duration-200" style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}>
                    (607) 624-6099
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "var(--color-text-muted)" }}>
                Trust
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: ShieldCheck, label: "HIPAA Compliant" },
                  { icon: Lock, label: "Performance Only" },
                  { icon: CheckCircle2, label: "No Upfront Fees" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--color-gold-dim)" }} aria-hidden="true" />
                    <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-[10px]"
            style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-text-dim)" }}
          >
            <p>© 2026 MedSpa Sprint. All rights reserved.</p>
            <div className="flex gap-8">
              {["Privacy Policy", "Terms of Service"].map(label => (
                <a key={label} href="#" className="cursor-pointer transition-colors duration-200 hover:underline"
                  style={{ color: "var(--color-text-dim)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-dim)")}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
