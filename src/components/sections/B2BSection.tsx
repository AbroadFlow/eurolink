import { ArrowRight, Handshake, FileCheck, Users, Briefcase } from "lucide-react";

export default function B2BPartners() {
    return (
        <section id="b2b" className="py-20 bg-[#f9fafb]">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-[#f5a623] text-sm font-semibold uppercase tracking-widest">
                        B2B Partnership
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2 mb-4">
                        Partner With Us 🤝 We Handle Everything
                    </h2>
                    <p className="text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
                        Are you an education consultancy? Forward your student documents to
                        us and relax. We manage the entire admission, documentation, visa,
                        and compliance process. <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-[#2196C4]/10 text-[#2196C4] border border-[#2196C4]/20">
                            Fast · Transparent · Reliable
                        </span>
                    </p>
                    <div className="w-12 h-1 bg-[#f5a623] mx-auto mt-6 rounded-full" />
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                    {[
                        {
                            icon: <FileCheck size={22} />,
                            title: "Document Processing",
                            desc: "Admission evaluation, offer letters, application filing, SOP guidance & compliance handling.",
                        },
                        {
                            icon: <Briefcase size={22} />,
                            title: "End-to-End Visa Handling",
                            desc: "We manage embassy documentation, appointments, interview prep & follow-ups.",
                        },
                        {
                            icon: <Users size={22} />,
                            title: "Dedicated Account Manager",
                            desc: "Single point of contact for every update, tracking, and student progress.",
                        },
                        {
                            icon: <Handshake size={22} />,
                            title: "Business Advantage",
                            desc: "Structured partner benefits with transparent reporting and fast settlements.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-10 h-10 rounded-lg bg-[#2196C4]/10 text-[#2196C4] flex items-center justify-center mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-[#6b7280] leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Process Flow */}
                <div className="bg-white border border-gray-100 rounded-xl p-8 mb-14">
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-6 text-center">
                        Simple 3-Step B2B Process
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        {[
                            {
                                step: "01",
                                title: "Forward Documents",
                                desc: "Send student documents and requirements.",
                            },
                            {
                                step: "02",
                                title: "We Process Everything",
                                desc: "Admission → Offer → Visa → Compliance.",
                            },
                            {
                                step: "03",
                                title: "Visa Grant + Credibility",
                                desc: "Successful visa outcome that strengthens your consultancy's trust and reputation.",
                            },
                        ].map((step, i) => (
                            <div key={i} className="relative">
                                <div className="w-12 h-12 rounded-full bg-[#2196C4] text-white flex items-center justify-center font-bold mx-auto mb-4">
                                    {step.step}
                                </div>
                                <h4 className="font-semibold mb-1">{step.title}</h4>
                                <p className="text-sm text-[#6b7280]">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-[#2196C4] to-[#1a7da8] rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-bold mb-2">
                            Become Our Official B2B Partner
                        </h3>
                        <p className="text-white/80 text-sm max-w-xl">
                            Expand your services, increase revenue, and let our experienced
                            processing team handle everything from admissions to visas.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5a623] text-white text-sm font-semibold rounded hover:bg-[#e09410] transition-colors whitespace-nowrap"
                    >
                        Partner With Us
                        <ArrowRight size={14} />
                    </a>
                </div>
            </div>
        </section>
    );
}