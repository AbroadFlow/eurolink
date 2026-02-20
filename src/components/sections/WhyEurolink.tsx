import { ShieldCheck, HeartHandshake, Clock, Users, TrendingUp, Award } from "lucide-react";

const reasons = [
    {
        icon: ShieldCheck,
        title: "Proven Track Record",
        description:
            "With over 500 students successfully placed in European universities, our results speak louder than promises.",
    },
    {
        icon: HeartHandshake,
        title: "Honest Guidance",
        description:
            "We recommend what's right for you  not what's easy for us. Transparent advice, zero hidden fees.",
    },
    {
        icon: Clock,
        title: "End-to-End Support",
        description:
            "From selecting the right university to your pre-departure briefing, we're with you at every step.",
    },
    {
        icon: Users,
        title: "Personal Counselling",
        description:
            "No bulk processing. Each student gets personalized attention from a dedicated counsellor who knows Europe.",
    },
    {
        icon: TrendingUp,
        title: "98% Visa Success",
        description:
            "Our meticulous documentation support and interview preparation have earned us one of Nepal's highest visa success rates.",
    },
    {
        icon: Award,
        title: "Authorized & Trusted",
        description:
            "Licensed education consultancy based in Kupondole, Lalitpur. Trusted by families across Nepal since our founding.",
    },
];

export default function WhyEurolink() {
    return (
        <section id="why-eurolink" className="py-20 bg-[#f4f8fb]">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: text */}
                    <div>
                        <span className="text-[#f5a623] text-sm font-semibold uppercase tracking-widest">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2 mb-5">
                            Why Eurolink?
                        </h2>
                        <p className="text-[#4b5563] leading-relaxed mb-8">
                            Choosing the right consultancy can define your entire study-abroad
                            experience. At Eurolink, we believe education abroad should be
                            accessible, well-guided, and life-changing not overwhelming.
                        </p>
                        <p className="text-[#4b5563] leading-relaxed mb-8">
                            We are not a one-size-fits-all agency. We take the time to understand
                            your academic background, financial situation, and long-term goals
                            then craft a roadmap built specifically for you.
                        </p>
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#f5a623]/20">
                            <div className="w-12 h-12 rounded-full bg-[#f5a623]/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl font-bold text-[#f5a623]">5+</span>
                            </div>
                            <div>
                                <p className="font-semibold text-[#1a1a2e]">Years of Experience</p>
                                <p className="text-sm text-[#6b7280]">Trusted by hundreds of Nepali families</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: reason cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {reasons.map((r) => (
                            <div
                                key={r.title}
                                className="bg-white p-5 rounded-xl border border-gray-100 hover:border-[#2196C4]/30 hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="w-9 h-9 rounded-lg bg-[#2196C4]/10 flex items-center justify-center mb-3 group-hover:bg-[#2196C4] transition-colors">
                                    <r.icon
                                        size={17}
                                        className="text-[#2196C4] group-hover:text-white transition-colors"
                                    />
                                </div>
                                <h3 className="font-semibold text-[#1a1a2e] text-sm mb-1.5">{r.title}</h3>
                                <p className="text-[#6b7280] text-xs leading-relaxed">{r.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
