"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Send, CheckCircle, Mail, Globe, ArrowLeft, User, Building2, MessageSquare, ChevronDown,
} from "lucide-react";
import FadeUp from "@/components/FadeUp";
import RevealLine from "@/components/RevealLine";

const SUBJECTS = [
  "Energy — Solar, Hydrogen or Hybrid",
  "Recycling — Battery, Solar or ASWM",
  "Materials — Alloys, Rare Metals or SMR",
  "Chips — Photonics or Biochips",
  "Robotics — Flow Chemistry or Reactors",
  "Sports — Investments or Partnerships",
  "H₂ Festival — Register Interest",
  "General Enquiry",
  "Partnership Opportunity",
  "Media & Press",
];

type FormState = "idle" | "loading" | "success";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", subject: "", message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject)        e.subject = "Please select a subject";
    if (!form.message.trim()) e.message = "Message cannot be empty";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setState("loading");
    // Simulate network delay — swap for real API/Formspree/Resend call
    await new Promise((r) => setTimeout(r, 1600));
    setState("success");
  };

  const Field = ({
    id, label, required, children,
  }: { id: string; label: string; required?: boolean; children: React.ReactNode }) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="label" style={{ color: "var(--charcoal-light)" }}>
        {label}{required && <span style={{ color: "var(--sage)" }} className="ml-0.5">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {errors[id] && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-[0.75rem] text-red-500/80"
          >
            {errors[id]}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );

  const inputClass = (id: string) =>
    `w-full bg-[var(--white)] border text-[0.875rem] text-[var(--charcoal)] px-4 py-3 outline-none transition-all duration-200 focus:border-[var(--sage)] focus:ring-2 focus:ring-[var(--sage)]/10 placeholder:text-[var(--muted)] ${
      errors[id] ? "border-red-400/60" : "border-[var(--border)]"
    }`;

  return (
    <div className="min-h-screen bg-[var(--cream)] pt-20">

      {/* Header breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-0">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 label text-[var(--muted)] hover:text-[var(--charcoal)] transition-colors"
        >
          <ArrowLeft size={12} strokeWidth={2} />
          Back to REC 2
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-16 items-start">

          {/* ── LEFT: Info panel ── */}
          <FadeUp>
            <div className="lg:sticky lg:top-24">
              <p className="label text-[var(--muted)] mb-4">Get in touch</p>
              <RevealLine className="mb-8" />

              <h1 className="font-display italic text-[var(--charcoal)] text-[clamp(2.6rem,6vw,4.2rem)] leading-[1.05] tracking-[-0.02em] mb-6">
                Let&apos;s build something{" "}
                <span style={{ color: "var(--sage)" }}>sustainable.</span>
              </h1>

              <p className="text-[var(--charcoal-light)] text-[0.9375rem] leading-relaxed max-w-sm mb-10">
                Whether you&apos;re exploring a partnership, interested in our H₂ Festival,
                or want to understand how REC 2 can support your sustainability goals —
                we&apos;d love to hear from you.
              </p>

              {/* Contact details */}
              <div className="space-y-4">
                <a
                  href="mailto:V@v-group.in"
                  className="flex items-center gap-3 group"
                >
                  <span
                    className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ backgroundColor: "var(--sage-pale)" }}
                  >
                    <Mail size={15} strokeWidth={1.6} style={{ color: "var(--sage)" }} />
                  </span>
                  <span className="text-[0.875rem] text-[var(--charcoal-light)] group-hover:text-[var(--charcoal)] transition-colors">
                    V@v-group.in
                  </span>
                </a>

                <a
                  href="https://rec2.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span
                    className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--sage-pale)" }}
                  >
                    <Globe size={15} strokeWidth={1.6} style={{ color: "var(--sage)" }} />
                  </span>
                  <span className="text-[0.875rem] text-[var(--charcoal-light)] group-hover:text-[var(--charcoal)] transition-colors">
                    rec2.org
                  </span>
                </a>
              </div>

              {/* Decorative vertical rule with sector pills */}
              <div className="mt-12 pt-10 border-t border-[var(--border)]">
                <p className="label text-[var(--muted)] mb-4">Our sectors</p>
                <div className="flex flex-wrap gap-2">
                  {["Energy","Recycle","Materials","Chips","Robotics","Sports"].map((s) => (
                    <span
                      key={s}
                      className="text-[0.72rem] font-medium px-3 py-1 border border-[var(--border)] text-[var(--charcoal-light)]"
                      style={{ borderRadius: "2px" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* ── RIGHT: Form ── */}
          <FadeUp delay={0.1}>
            <AnimatePresence mode="wait">
              {state === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[var(--sage-pale)] border border-[var(--sage)]/30 p-10 lg:p-14 flex flex-col items-start"
                  style={{ borderRadius: "2px" }}
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4, type: "spring", stiffness: 200 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: "var(--sage)" }}
                  >
                    <CheckCircle size={22} strokeWidth={1.8} color="white" />
                  </motion.div>
                  <h2 className="font-display italic text-[var(--charcoal)] text-3xl mb-3">
                    Message received.
                  </h2>
                  <p className="text-[var(--charcoal-light)] text-[0.9375rem] leading-relaxed mb-8 max-w-sm">
                    Thank you for reaching out. A member of the REC 2 team will
                    respond to your enquiry within 2 business days.
                  </p>
                  <button
                    onClick={() => { setState("idle"); setForm({ name:"", email:"", company:"", subject:"", message:"" }); }}
                    className="label text-[var(--sage)] hover:text-[var(--sage-dark)] transition-colors flex items-center gap-1.5"
                  >
                    <ArrowLeft size={12} /> Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name + Company row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field id="name" label="Full Name" required>
                      <div className="relative">
                        <User size={14} strokeWidth={1.6} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none" />
                        <input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Vishal Jajodia"
                          className={inputClass("name") + " pl-9"}
                          autoComplete="name"
                        />
                      </div>
                    </Field>

                    <Field id="company" label="Company">
                      <div className="relative">
                        <Building2 size={14} strokeWidth={1.6} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none" />
                        <input
                          id="company"
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="V Group"
                          className={inputClass("company") + " pl-9"}
                          autoComplete="organization"
                        />
                      </div>
                    </Field>
                  </div>

                  {/* Email */}
                  <Field id="email" label="Email Address" required>
                    <div className="relative">
                      <Mail size={14} strokeWidth={1.6} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none" />
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className={inputClass("email") + " pl-9"}
                        autoComplete="email"
                      />
                    </div>
                  </Field>

                  {/* Subject */}
                  <Field id="subject" label="Subject" required>
                    <div className="relative">
                      <select
                        id="subject"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className={inputClass("subject") + " appearance-none pr-9 cursor-pointer"}
                      >
                        <option value="">Select a topic...</option>
                        {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <ChevronDown size={14} strokeWidth={1.6} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none" />
                    </div>
                  </Field>

                  {/* Message */}
                  <Field id="message" label="Message" required>
                    <div className="relative">
                      <MessageSquare size={14} strokeWidth={1.6} className="absolute left-3.5 top-4 text-[var(--muted)] pointer-events-none" />
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your project, interest or question..."
                        className={inputClass("message") + " pl-9 resize-none leading-relaxed"}
                      />
                    </div>
                  </Field>

                  {/* Privacy note */}
                  <p className="text-[0.75rem] text-[var(--muted)] leading-relaxed">
                    By submitting this form you agree to be contacted by the REC 2 team.
                    We do not share your information with third parties.
                  </p>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={state === "loading"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 text-[0.875rem] font-medium text-white disabled:opacity-70 transition-colors"
                    style={{
                      backgroundColor: "var(--sage)",
                      borderRadius: "2px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--sage-dark)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--sage)")}
                  >
                    {state === "loading" ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                          className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={14} strokeWidth={2} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeUp>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[var(--charcoal)] mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.07]">
          <Link href="/" className="font-display italic text-white/70 text-lg">REC 2</Link>
          <p className="label text-white/25">© 2026 · Renewable Energy · Carbon Credits · Innovation · Sustainable Future</p>
        </div>
      </footer>
    </div>
  );
}
