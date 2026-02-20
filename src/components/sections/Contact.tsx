"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock, CheckCircle } from "lucide-react";

const contactDetails = [
    {
        icon: MapPin,
        label: "Address",
        lines: ["Kupondole, Lalitpur", "Nepal, 44700"],
    },
    {
        icon: Phone,
        label: "Phone",
        lines: ["01-5400745", "+977 9851401745", "+977 9851422745"],
    },
    {
        icon: Mail,
        label: "Email",
        lines: ["eurolinkeduconsultancy@gmail.com"],
        link: "mailto:eurolinkeduconsultancy@gmail.com",
    },
    {
        icon: Clock,
        label: "Office Hours",
        lines: ["Sun to Fri: 9:00 AM to 6:00 PM"],
    },
];

const destinations = ["Italy", "Georgia", "Malta", "Cyprus", "Netherlands", "Not sure yet"];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        destination: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-[#f5a623] text-sm font-semibold uppercase tracking-widest">Get in Touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2 mb-4">
                        Contact Us
                    </h2>
                    <p className="text-[#6b7280] max-w-xl mx-auto leading-relaxed">
                        Drop by our office in Kupondole, call us, or fill out the form below.
                        Our counsellors respond within one business day.
                    </p>
                    <div className="w-12 h-1 bg-[#2196C4] mx-auto mt-6 rounded-full" />
                </div>

                <div className="grid md:grid-cols-5 gap-10">
                    {/* Contact info */}
                    <div className="md:col-span-2 space-y-5">
                        {contactDetails.map((c) => (
                            <div key={c.label} className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-lg bg-[#2196C4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <c.icon size={17} className="text-[#2196C4]" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-1">
                                        {c.label}
                                    </p>
                                    {c.lines.map((line) =>
                                        c.link ? (
                                            <a
                                                key={line}
                                                href={c.link}
                                                className="block text-sm text-[#374151] hover:text-[#2196C4] transition-colors"
                                            >
                                                {line}
                                            </a>
                                        ) : (
                                            <p key={line} className="text-sm text-[#374151]">
                                                {line}
                                            </p>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Map placeholder */}
                        <div className="mt-4 rounded-xl overflow-hidden border border-gray-100 h-44">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.923768579076!2d85.29898965541994!3d27.68698389999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190038f17727%3A0xa476f49673d209fa!2sEurolink%20Education%20Consultancy!5e0!3m2!1sen!2snp!4v1771567858012!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                                title="Eurolink Office Location"
                            />
                        </div>
                    </div>

                    {/* Form */}
                    <div className="md:col-span-3">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12 px-6 bg-[#f4f8fb] rounded-xl">
                                <CheckCircle size={48} className="text-[#2196C4] mb-4" />
                                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">
                                    We&apos;ll be in touch!
                                </h3>
                                <p className="text-[#6b7280] text-sm max-w-xs">
                                    Thank you for reaching out. A counsellor from Eurolink will contact
                                    you within one business day.
                                </p>
                                <button
                                    onClick={() => {
                                        setSubmitted(false);
                                        setForm({ name: "", phone: "", email: "", destination: "", message: "" });
                                    }}
                                    className="mt-6 text-[#2196C4] text-sm font-medium hover:underline"
                                >
                                    Submit another enquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#2196C4] focus:ring-2 focus:ring-[#2196C4]/10 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="98XXXXXXXX"
                                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#2196C4] focus:ring-2 focus:ring-[#2196C4]/10 transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#2196C4] focus:ring-2 focus:ring-[#2196C4]/10 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                                        Preferred Destination
                                    </label>
                                    <select
                                        name="destination"
                                        value={form.destination}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#2196C4] focus:ring-2 focus:ring-[#2196C4]/10 transition-all bg-white text-[#374151]"
                                    >
                                        <option value="">Select a country</option>
                                        {destinations.map((d) => (
                                            <option key={d} value={d}>
                                                {d}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                                        Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your academic background, the program you're interested in, or any questions you have..."
                                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#2196C4] focus:ring-2 focus:ring-[#2196C4]/10 transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#f5a623] text-white font-semibold rounded-lg hover:bg-[#e09410] transition-colors"
                                >
                                    <Send size={16} />
                                    Send Enquiry
                                </button>

                                <p className="text-xs text-[#9ca3af] text-center">
                                    We respect your privacy. Your details will never be shared.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
