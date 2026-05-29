"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 120);
  };

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-[0_1px_0_0_var(--border)]"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <span className="font-display font-700 text-[1.35rem] tracking-[-0.03em] text-[var(--navy)] group-hover:text-[var(--navy-mid)] transition-colors">
              Rec<span className="text-[var(--navy-mid)]"> 2</span>
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
                    className="relative flex items-center gap-1 px-4 py-[18px] text-[0.8125rem] font-medium transition-colors"
                    style={{ color: active ? nav.color : "var(--navy)" }}
                  >
                    {nav.label}
                    <ChevronDown
                      size={12}
                      strokeWidth={2.5}
                      className={`opacity-50 transition-transform duration-200 ${
                        openMenu === nav.label ? "rotate-180 opacity-100" : ""
                      }`}
                    />
                    {/* Active underline */}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                        style={{ backgroundColor: nav.color }}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {openMenu === nav.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.14, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-0 w-52 bg-white shadow-xl border border-[var(--border)] overflow-hidden"
                        style={{ borderRadius: "0 0 12px 12px" }}
                      >
                        {/* Sector color bar */}
                        <div className="h-[3px]" style={{ backgroundColor: nav.color }} />
                        <div className="py-1.5">
                          {nav.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center justify-between px-4 py-2.5 text-[0.8125rem] text-[var(--navy)] hover:bg-[var(--surface)] transition-colors group/item"
                            >
                              <span style={{ color: pathname === item.href ? nav.color : undefined, fontWeight: pathname === item.href ? 500 : undefined }}>
                                {item.label}
                              </span>
                              <span className="opacity-0 group-hover/item:opacity-40 transition-opacity text-xs">→</span>
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

          {/* Contact CTA */}
          <div className="hidden md:block">
            <a
              href="mailto:V@v-group.in"
              className="text-[0.8125rem] font-medium px-4 py-2 border border-[var(--border-strong)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] rounded-full transition-all duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[var(--navy)]"
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
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[var(--border)] bg-white overflow-hidden"
          >
            <div className="px-6 py-4 space-y-0.5">
              {NAV_ITEMS.map((nav) => (
                <div key={nav.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === nav.label ? null : nav.label)
                    }
                    className="flex items-center justify-between w-full py-3 text-[0.875rem] font-medium"
                    style={{ color: nav.color }}
                  >
                    {nav.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform ${mobileExpanded === nav.label ? "rotate-180" : ""}`}
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
                            className="block py-2 text-[0.8125rem] text-[var(--muted)] hover:text-[var(--navy)] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
