import { ArrowRight, Landmark } from "lucide-react";

const destinations = [
    {
        country: "Italy",
        flag: "🇮🇹",
        tagline: "Art, History & World-Class Education",
        description:
            "Italy offers some of Europe's oldest and most prestigious universities. Affordable tuition, rich culture, and a pathway to EU residency make it a top choice.",
        highlights: ["Affordable tuition fees", "Rich cultural heritage", "EU residency pathway", "Engineering & Arts"],
        color: "#009246",
        accentColor: "#CE2B37",
    },
    {
        country: "Georgia",
        flag: "🇬🇪",
        tagline: "Fast Processing, Affordable Living",
        description:
            "Georgia has emerged as a popular destination with English-taught programs, low cost of living, and straightforward visa processes for Nepali students.",
        highlights: ["Low cost of living", "English-taught programs", "Quick visa processing", "Medical & Engineering"],
        color: "#CC0000",
        accentColor: "#CC0000",
    },
    {
        country: "Malta",
        flag: "🇲🇹",
        tagline: "The Heart of the Mediterranean",
        description:
            "Malta's English-speaking environment, EU membership, and sunny climate create an ideal study destination. Small country, big opportunities.",
        highlights: ["English-speaking nation", "EU member state", "Safe & welcoming", "Tourism & Hospitality"],
        color: "#CF142B",
        accentColor: "#CF142B",
    },
    {
        country: "Cyprus",
        flag: "🇨🇾",
        tagline: "European Quality, Mediterranean Lifestyle",
        description:
            "Cyprus combines European academic standards with an affordable, relaxed lifestyle. With strong English proficiency and EU recognition, degrees open doors worldwide.",
        highlights: ["EU-recognized degrees", "Affordable tuition", "Safe environment", "Business & Law"],
        color: "#003087",
        accentColor: "#F5A623",
    },
    {
        country: "Netherlands",
        flag: "🇳🇱",
        tagline: "Innovation, Research & Opportunity",
        description:
            "The Netherlands consistently ranks among the world's top education systems. Known for innovative teaching, vibrant student cities, and a highly international atmosphere.",
        highlights: ["Top-ranked universities", "English-taught programs", "Strong job market", "Technology & Design"],
        color: "#AE1C28",
        accentColor: "#21468B",
    },
];

export default function Destinations() {
    return (
        <section id="destinations" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-[#f5a623] text-sm font-semibold uppercase tracking-widest">Explore</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2 mb-4">
                        Study Destinations
                    </h2>
                    <p className="text-[#6b7280] max-w-xl mx-auto leading-relaxed">
                        We specialize in placements across five European countries, each offering
                        distinct opportunities for Nepali students.
                    </p>
                    <div className="w-12 h-1 bg-[#f5a623] mx-auto mt-6 rounded-full" />
                </div>

                {/* Cards grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((dest) => (
                        <div
                            key={dest.country}
                            className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Top color stripe */}
                            <div
                                className="h-1.5 w-full"
                                style={{ backgroundColor: dest.color }}
                            />

                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <span className="text-3xl">{dest.flag}</span>
                                        <h3 className="text-xl font-bold text-[#1a1a2e] mt-2">{dest.country}</h3>
                                        <p className="text-[#2196C4] text-xs font-medium mt-0.5">{dest.tagline}</p>
                                    </div>
                                </div>

                                <p className="text-[#6b7280] text-sm leading-relaxed mb-5">
                                    {dest.description}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-1.5 mb-6">
                                    {dest.highlights.map((h) => (
                                        <li key={h} className="flex items-center gap-2 text-sm text-[#374151]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] flex-shrink-0" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2196C4] hover:text-[#f5a623] transition-colors group/link"
                                >
                                    Learn more
                                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}

                    {/* CTA card */}
                    <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#2196C4] to-[#1a7da8] rounded-xl p-6 text-white flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center mb-4">
                                <Landmark size={20} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Not sure where to go?</h3>
                            <p className="text-white/80 text-sm leading-relaxed mb-6">
                                Our counselors will help you find the right country and university
                                based on your academic profile, budget, and career goals.
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f5a623] text-white text-sm font-semibold rounded hover:bg-[#e09410] transition-colors w-fit"
                        >
                            Talk to a Counsellor
                            <ArrowRight size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
