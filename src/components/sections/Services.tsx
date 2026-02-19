import {
    Search,
    FileText,
    GraduationCap,
    Plane,
    MessageSquare,
    BookOpen,
} from "lucide-react";

const services = [
    {
        icon: Search,
        title: "University Selection",
        description:
            "We evaluate your academic profile and match you with the right universities in your chosen European country — balancing your career goals with admission feasibility.",
        step: "01",
    },
    {
        icon: FileText,
        title: "Application Assistance",
        description:
            "From crafting a compelling Statement of Purpose to organizing transcripts and recommendation letters, we handle your application with precision.",
        step: "02",
    },
    {
        icon: MessageSquare,
        title: "Visa Counselling",
        description:
            "We guide you through the entire student visa process — documentation, embassy appointments, and interview preparation — with one of the highest success rates in Nepal.",
        step: "03",
    },
    {
        icon: BookOpen,
        title: "Test Preparation Guidance",
        description:
            "We advise on language requirements (IELTS, TOEFL, Italian B1/B2) and connect you with trusted test preparation resources.",
        step: "04",
    },
    {
        icon: GraduationCap,
        title: "Scholarship Guidance",
        description:
            "Many European universities offer scholarships for international students. We identify and help you apply for scholarships that suit your profile.",
        step: "05",
    },
    {
        icon: Plane,
        title: "Pre-Departure Briefing",
        description:
            "Before you fly, we prepare you — accommodation tips, local culture, banking, SIM cards, and connecting you with our alumni network in your destination city.",
        step: "06",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-[#f5a623] text-sm font-semibold uppercase tracking-widest">What We Do</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2 mb-4">
                        Our Services
                    </h2>
                    <p className="text-[#6b7280] max-w-xl mx-auto leading-relaxed">
                        A complete roadmap from first enquiry to setting foot on European soil.
                    </p>
                    <div className="w-12 h-1 bg-[#2196C4] mx-auto mt-6 rounded-full" />
                </div>

                {/* Services grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="relative p-6 border border-gray-100 rounded-xl hover:border-[#2196C4]/20 hover:shadow-md transition-all duration-300 group bg-white"
                        >
                            {/* Step number */}
                            <span className="absolute top-4 right-4 text-4xl font-black text-[#f5a623]/10 leading-none select-none">
                                {s.step}
                            </span>

                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2196C4]/10 to-[#2196C4]/5 flex items-center justify-center mb-4 group-hover:from-[#2196C4] group-hover:to-[#1a7da8] transition-all duration-300">
                                <s.icon
                                    size={20}
                                    className="text-[#2196C4] group-hover:text-white transition-colors"
                                />
                            </div>

                            <h3 className="font-bold text-[#1a1a2e] mb-2">{s.title}</h3>
                            <p className="text-[#6b7280] text-sm leading-relaxed">{s.description}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-[#4b5563] mb-4">
                        Ready to start your European education journey?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-[#f5a623] text-white font-semibold rounded hover:bg-[#e09410] transition-colors"
                    >
                        Book a Free Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}
