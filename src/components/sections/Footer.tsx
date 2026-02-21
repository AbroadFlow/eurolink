import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const footerLinks = {
    destinations: [
        { label: "Study in Italy", href: "#destinations" },
        { label: "Study in Georgia", href: "#destinations" },
        { label: "Study in Malta", href: "#destinations" },
        { label: "Study in Cyprus", href: "#destinations" },
        { label: "Study in Netherlands", href: "#destinations" },
    ],
    services: [
        { label: "University Selection", href: "#services" },
        { label: "Application Assistance", href: "#services" },
        { label: "Visa Counselling", href: "#services" },
        { label: "Scholarship Guidance", href: "#services" },
        { label: "Pre-Departure Briefing", href: "#services" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-white">
            {/* Main footer */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-14">
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="sm:col-span-2 md:col-span-1">
                        {/* logo */}
                        <Link href="#home" className="flex items-center gap-2 flex-shrink-0">
                            <div className="h-16 w-[160px] overflow-hidden">
                                <Image
                                    src="/logo.jpeg"
                                    alt="Eurolink Education Consultancy"
                                    width={160}
                                    height={92}
                                    className="h-full w-full object-cover object-center"
                                    priority
                                />
                            </div>
                        </Link>
                        <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
                            Your Gateway to European Education
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/people/Eurolink-Education-Consultancy/61575918413509/"
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f5a623] flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={15} />
                            </a>

                            <a
                                href="https://www.tiktok.com/@eurolinkconsultancy?_r=1&_t=ZS-945FGt4xEmm"
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f5a623] flex items-center justify-center transition-colors"
                                aria-label="TikTok"
                            >
                                <img src='/tiktok_outline.svg' alt="TikTok" className="w-[15px] h-[15px]" />
                            </a>
                        </div>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                            Destinations
                        </h4>
                        <ul className="space-y-2">
                            {footerLinks.destinations.map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        className="text-[#94a3b8] text-sm hover:text-[#f5a623] transition-colors"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                            Services
                        </h4>
                        <ul className="space-y-2">
                            {footerLinks.services.map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        className="text-[#94a3b8] text-sm hover:text-[#f5a623] transition-colors"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2.5">
                                <MapPin size={14} className="text-[#f5a623] mt-0.5 flex-shrink-0" />
                                <span className="text-[#94a3b8] text-sm">
                                    Kupondole, Lalitpur<br />Nepal, 44700
                                </span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <Phone size={14} className="text-[#f5a623] mt-0.5 flex-shrink-0" />
                                <div className="text-[#94a3b8] text-sm">
                                    <a href="tel:015400745" className="block hover:text-white transition-colors">01-5400745</a>
                                    <a href="tel:9851401745" className="block hover:text-white transition-colors">+977 9851401745</a>
                                    <a href="tel:+9779851422745" className="block hover:text-white transition-colors">+977 9851422745</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <Mail size={14} className="text-[#f5a623] mt-0.5 flex-shrink-0" />
                                <a
                                    href="mailto:info@eurolinkeducation.com.np"
                                    className="text-[#94a3b8] text-sm hover:text-white transition-colors break-all"
                                >
                                    info@eurolinkeducation.com.np
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-[#64748b] text-xs">
                        © {new Date().getFullYear()} Eurolink Education Consultancy. All rights reserved.
                    </p>
                    <p className="text-[#64748b] text-xs">
                        Kupondole, Lalitpur, Nepal
                    </p>
                </div>
            </div>
        </footer>
    );
}
