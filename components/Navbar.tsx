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
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 150);
  };

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="inline-block bg-[#1a3a5c] text-white font-bold text-xl px-5 py-2 rounded-full tracking-wide hover:bg-[#0f2540] transition-colors">
              Rec 2
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((nav) => (
              <div
                key={nav.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(nav.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all"
                  style={{
                    color:
                      pathname.startsWith(`/${nav.label.toLowerCase()}`)
                        ? nav.color
                        : undefined,
                  }}
                >
                  {nav.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${openMenu === nav.label ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {openMenu === nav.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      <div
                        className="h-1 w-full"
                        style={{ backgroundColor: nav.color }}
                      />
                      <div className="py-1">
                        {nav.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                            style={{
                              color:
                                pathname === item.href ? nav.color : undefined,
                              fontWeight:
                                pathname === item.href ? 600 : undefined,
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              href="/defence"
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                color: pathname === "/defence" ? "#f57c00" : "#374151",
                backgroundColor:
                  pathname === "/defence" ? "#fff7ed" : undefined,
              }}
            >
              Defence
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {NAV_ITEMS.map((nav) => (
                <div key={nav.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === nav.label ? null : nav.label
                      )
                    }
                    className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700"
                    style={{ color: nav.color }}
                  >
                    {nav.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${mobileExpanded === nav.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === nav.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 border-l-2 pl-3 mb-1"
                        style={{ borderColor: nav.color }}
                      >
                        {nav.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link
                href="/defence"
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-amber-700"
              >
                Defence
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
