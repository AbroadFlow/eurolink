"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Destinations", href: "#destinations" },
    { label: "Services", href: "#services" },
    { label: "Why Eurolink", href: "#why-eurolink" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white shadow-md"
                : "bg-white/95 backdrop-blur-sm"
                }`}
        >
            {/* Top bar */}
            <div className="bg-[#2196C4] text-white text-xs py-1.5 px-4 hidden md:block">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <span className="opacity-90">Your Gateway to European Education</span>
                    <div className="flex items-center gap-4">
                        <a href="tel:01-5400745" className="flex items-center gap-1 hover:text-[#f5a623] transition-colors">
                            <Phone size={11} />
                            01-5400745
                        </a>
                        <a href="mailto:info@eurolinkeducation.com.np" className="hover:text-[#f5a623] transition-colors">
                            info@eurolinkeducation.com.np
                        </a>
                    </div>
                </div>
            </div>

            {/* Main nav */}
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="#home" className="flex items-center gap-2 flex-shrink-0">
                        <Image
                            src="/eurolink_light.png"
                            alt="Eurolink Education Consultancy"
                            width={160}
                            height={56}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-3.5 py-2 text-sm font-medium text-[#1a1a2e] hover:text-[#2196C4] transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5a623] group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="ml-3 px-5 py-2 bg-[#f5a623] text-white text-sm font-semibold rounded hover:bg-[#e09410] transition-colors"
                        >
                            Free Counselling
                        </a>
                    </nav>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden p-2 text-[#1a1a2e]"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-3 text-sm font-medium text-[#1a1a2e] border-b border-gray-50 hover:text-[#2196C4] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-3 block text-center py-2.5 bg-[#f5a623] text-white text-sm font-semibold rounded hover:bg-[#e09410] transition-colors"
                    >
                        Free Counselling
                    </a>
                </div>
            )}
        </header>
    );
}
