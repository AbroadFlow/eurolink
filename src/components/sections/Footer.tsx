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
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/people/Eurolink-Education-Consultancy/61575918413509/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f5a623] flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={15} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@eurolinkconsultancy?_r=1&_t=ZS-945FGt4xEmm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#e53e3e] flex items-center justify-center transition-colors"
                                aria-label="TikTok"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/9779851422745"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
                                aria-label="WhatsApp"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                                </svg>
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
