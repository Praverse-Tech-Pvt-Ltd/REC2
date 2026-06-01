"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";

export default function Navbar() {
  const [openMenu, setOpenMenu]       = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled]       = useState(false);
  const pathname  = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 140);
  };

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--cream)] shadow-[0_1px_0_0_var(--border)]"
          : "bg-[var(--cream)]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <span className="font-display text-[1.3rem] tracking-[-0.02em] text-[var(--charcoal)] italic">
              REC 2
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0">
            {NAV_ITEMS.map((nav) => {
              const active = isActive(`/${nav.label.toLowerCase()}`);
              return (
                <div
                  key={nav.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(nav.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="relative flex items-center gap-1 px-4 py-[18px] text-[0.8rem] font-medium transition-colors text-[var(--charcoal-light)] hover:text-[var(--charcoal)]"
                    style={active ? { color: nav.color } : undefined}
                  >
                    {nav.label}
                    <ChevronDown
                      size={11}
                      strokeWidth={2}
                      className={`opacity-40 transition-transform duration-200 ${
                        openMenu === nav.label ? "rotate-180 opacity-70" : ""
                      }`}
                    />
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-[1.5px]"
                        style={{ backgroundColor: nav.color }}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {openMenu === nav.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.12, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-0 w-52 bg-[var(--white)] shadow-lg border border-[var(--border)] overflow-hidden"
                        style={{ borderRadius: "0 0 10px 10px" }}
                      >
                        <div className="h-[2px]" style={{ backgroundColor: nav.color }} />
                        <div className="py-1.5">
                          {nav.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center justify-between px-4 py-2.5 text-[0.8rem] text-[var(--charcoal)] hover:bg-[var(--cream)] transition-colors group/item"
                            >
                              <span
                                style={{
                                  color: pathname === item.href ? nav.color : undefined,
                                  fontWeight: pathname === item.href ? 500 : undefined,
                                }}
                              >
                                {item.label}
                              </span>
                              <span className="opacity-0 group-hover/item:opacity-30 transition-opacity text-xs">→</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/contact"
              className="text-[0.78rem] font-medium px-4 py-1.5 border border-[var(--border-strong)] text-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-white hover:border-[var(--charcoal)] rounded-full transition-all duration-200"
            >
              Contact
            </Link>
            {/* <Link
              href="/energy/hydrogen-hybrid"
              className="text-[0.78rem] font-medium px-4 py-1.5 bg-[var(--sage)] text-white hover:bg-[var(--sage-dark)] rounded-full transition-all duration-200"
            >
              H₂ Festival →
            </Link> */}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[var(--charcoal)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-[var(--border)] bg-[var(--cream)] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-0.5">
              {NAV_ITEMS.map((nav) => (
                <div key={nav.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === nav.label ? null : nav.label)
                    }
                    className="flex items-center justify-between w-full py-3 text-[0.875rem] font-medium text-[var(--charcoal)]"
                  >
                    <span style={{ color: nav.color }}>{nav.label}</span>
                    <ChevronDown
                      size={13}
                      className={`text-[var(--muted)] transition-transform ${
                        mobileExpanded === nav.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === nav.label && (
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
                            className="block py-2 text-[0.8125rem] text-[var(--muted)] hover:text-[var(--charcoal)] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-3 pb-1 flex gap-2">
                <a
                  href="mailto:V@v-group.in"
                  className="flex-1 text-center text-[0.8rem] font-medium py-2 border border-[var(--border-strong)] text-[var(--charcoal)] rounded-full"
                >
                  Contact
                </a>
                {/* <Link
                  href="/energy/hydrogen-hybrid"
                  className="flex-1 text-center text-[0.8rem] font-medium py-2 bg-[var(--sage)] text-white rounded-full"
                >
                  H₂ Festival
                </Link> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
