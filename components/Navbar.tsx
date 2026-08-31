"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 lg:px-[52px]"
      style={{
        background: "rgba(250,250,248,0.92)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(26,26,26,0.08)",
      }}
    >
      {/* Logo */}
      <Link href="/" className="font-display text-[21px] font-semibold tracking-[0.07em] text-[var(--charcoal)] flex-shrink-0">
        REC 2
      </Link>

      {/* Desktop sector nav — lg+ only; tablet portrait gets hamburger like mobile */}
      <div className="hidden lg:flex items-center gap-1.5" onMouseLeave={() => setHovered(null)}>
        <div className="relative" onMouseEnter={() => setHovered("Mechatronics")}>
          <Link
            href="/mechatronics"
            className="relative z-10 nlink text-[10px] tracking-[0.13em] uppercase font-medium text-[var(--muted)] px-2.5 py-1.5"
          >
            Mechatronics
          </Link>
          {hovered === "Mechatronics" && (
            <motion.div
              layoutId="nav-hover-underline"
              className="absolute left-2.5 right-2.5 bottom-0 h-[2px]"
              style={{ backgroundColor: "var(--charcoal)" }}
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
            />
          )}
        </div>
        <div className="w-px h-3.5" style={{ backgroundColor: "var(--border)" }} />
        {NAV_ITEMS.map((nav) => (
          <div key={nav.label} className="relative" onMouseEnter={() => setHovered(nav.label)}>
            <Link
              href={nav.href}
              className="relative z-10 nlink text-[10px] tracking-[0.13em] uppercase font-bold px-2.5 py-1.5"
              style={{ color: nav.color }}
            >
              {nav.label}
            </Link>
            {hovered === nav.label && (
              <motion.div
                layoutId="nav-hover-underline"
                className="absolute left-2.5 right-2.5 bottom-0 h-[2px]"
                style={{ backgroundColor: nav.color }}
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Contact button */}
      <Link
        href="/contact"
        className="hidden lg:inline-block text-[10px] tracking-[0.12em] font-bold uppercase px-[22px] py-2.5 rounded-sm"
        style={{ border: "1.5px solid rgba(26,26,26,0.28)", background: "transparent", color: "var(--charcoal)" }}
      >
        Contact →
      </Link>

      {/* Mobile / tablet-portrait toggle */}
      <button
        className="lg:hidden p-2 text-[var(--charcoal)]"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden absolute top-16 left-0 right-0 overflow-hidden"
            style={{ background: "var(--cream)", borderTop: "1px solid var(--border)" }}
          >
            <div className="px-6 py-4 space-y-0.5">
              <Link
                href="/mechatronics"
                className="block py-3 text-[0.875rem] font-medium text-[var(--charcoal)] border-b"
                style={{ borderColor: "var(--border)" }}
              >
                Mechatronics
              </Link>

              {NAV_ITEMS.map((nav) => {
                const active = isActive(`/${nav.label.toLowerCase()}`);
                return (
                  <div key={nav.label}>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === nav.label ? null : nav.label)}
                      className="flex items-center justify-between w-full py-3 text-[0.875rem] font-bold"
                      style={{ color: nav.color }}
                    >
                      {nav.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform ${mobileExpanded === nav.label || active ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {(mobileExpanded === nav.label) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 border-l pl-4 pb-2 space-y-0.5"
                          style={{ borderColor: nav.color + "40" }}
                        >
                          {nav.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block py-2 text-[0.8125rem] text-[var(--muted)]"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <div className="pt-3 pb-1">
                <Link
                  href="/contact"
                  className="block text-center text-[0.8rem] font-bold uppercase tracking-[0.12em] py-2.5 rounded-sm"
                  style={{ border: "1.5px solid rgba(26,26,26,0.28)", color: "var(--charcoal)" }}
                >
                  Contact →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
