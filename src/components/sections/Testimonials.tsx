import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Priya Maharjan",
        location: "Now studying in Bologna, Italy",
        program: "B.Sc. Computer Engineering",
        quote:
            "I was completely lost when I started looking into studying abroad. Eurolink not only helped me find the right university in Italy but walked me through every document, every email, every step. I got my visa on the first attempt.",
        initials: "PM",
        country: "🇮🇹",
    },
    {
        name: "Roshan Tamang",
        location: "Now studying in Tbilisi, Georgia",
        program: "MBBS Medicine",
        quote:
            "The counsellors at Eurolink genuinely care. They told me which universities were realistic for my grades instead of just taking my money. That honesty made all the difference. I'm now in my second year of medicine.",
        initials: "RT",
        country: "🇬🇪",
    },
    {
        name: "Sujata Khadka",
        location: "Now studying in Valletta, Malta",
        program: "BSc Hospitality Management",
        quote:
            "Malta was not even on my radar, but Eurolink showed me why it was perfect for my course and budget. The pre-departure briefing they gave was incredibly detailed. I felt prepared on day one.",
        initials: "SK",
        country: "🇲🇹",
    },
    {
        name: "Anil Shrestha",
        location: "Now studying in Nicosia, Cyprus",
        program: "MBA Business Administration",
        quote:
            "Very professional team. They helped me get a partial scholarship as well which I had no idea I was eligible for. Highly recommend Eurolink to anyone serious about studying in Europe.",
        initials: "AS",
        country: "🇨🇾",
    },
    {
        name: "Kritika Gurung",
        location: "Now studying in Amsterdam, Netherlands",
        program: "MSc Data Science",
        quote:
            "The Netherlands was my dream and Eurolink made it happen. The documentation process was intense but they guided me every step. The team is incredibly responsive — always answering my calls and messages.",
        initials: "KG",
        country: "🇳🇱",
    },
    {
        name: "Dipesh Adhikari",
        location: "Now studying in Rome, Italy",
        program: "BArch Architecture",
        quote:
            "I'd been to two other consultancies before Eurolink. The difference was immediately clear — they actually know Europe. They even helped me understand the Italian language requirement timeline and set me up with classes.",
        initials: "DA",
        country: "🇮🇹",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-[#f4f8fb]">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-[#f5a623] text-sm font-semibold uppercase tracking-widest">Real Stories</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2 mb-4">
                        From Our Students
                    </h2>
                    <p className="text-[#6b7280] max-w-xl mx-auto leading-relaxed">
                        Don&apos;t take our word for it. Here&apos;s what students who trusted us have to say.
                    </p>
                    <div className="w-12 h-1 bg-[#f5a623] mx-auto mt-6 rounded-full" />
                </div>

                {/* Testimonial grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col"
                        >
                            <Quote size={24} className="text-[#f5a623]/40 mb-4" />
                            <p className="text-[#374151] text-sm leading-relaxed mb-6 flex-1">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2196C4] to-[#1a7da8] flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-sm font-bold">{t.initials}</span>
                                </div>
                                <div className="min-w-0">
                                    <p className="font-semibold text-[#1a1a2e] text-sm flex items-center gap-1.5">
                                        {t.name}
                                        <span className="text-base">{t.country}</span>
                                    </p>
                                    <p className="text-[#2196C4] text-xs truncate">{t.program}</p>
                                    <p className="text-[#9ca3af] text-xs truncate">{t.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
