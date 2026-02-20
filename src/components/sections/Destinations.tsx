import { ArrowRight, Landmark } from "lucide-react";

const destinations = [
    {
        country: "Italy",
        code: 'it',
        tagline: "Art, History & World-Class Education",
        description:
            "Italy offers some of Europe's oldest and most prestigious universities. Affordable tuition, rich culture, and a pathway to EU residency make it a top choice.",
        highlights: [
            "Free Education",
            "Upto 8000 Euros Stipend",
            "Low CGPA can apply",
            "Gap Accepted",
            "Wide range of courses",
        ],
        color: "#009246",
    },
    {
        country: "Georgia",
        code: 'ge',
        tagline: "Worlds 4th Safest Country (Global Peace Index)",
        description:
            "Georgia has emerged as a popular destination with English-taught programs, low cost of living, and fast visa processes.",
        highlights: [
            "IELTS/PTE Not Required",
            "Low GPA Accepted",
            "Affordable Tuition Fee (6–8 lakhs NPR)",
            "10+ Years Gap Accepted",
            "100% TRC",
            "100% Visa Success Rate",
        ],
        color: "#CC0000",
    },
    {
        country: "Malta",
        code: 'mt',
        tagline: "The Heart of the Mediterranean",
        description:
            "Malta's English-speaking environment, EU membership, and sunny climate create an ideal study destination.",
        highlights: [
            "IELTS/PTE Not Required",
            "Low GPA Accepted",
            "Affordable Tuition Fee",
            "Gap Accepted",
            "Easy Processing",
            "Part-time Work Allowed",
        ],
        color: "#28afd8",
    },
    {
        country: "Cyprus",
        code: 'cy',
        tagline: "European Quality, Mediterranean Lifestyle",
        description:
            "Cyprus combines European academic standards with an affordable, relaxed lifestyle.",
        highlights: [
            "Fee after Visa",
            "With or Without IELTS option",
            "Gap Accepted",
            "Low GPA Accepted",
            "No Interview Necessary",
            "Part time Job Allowed",
            "High Visa Success Rate",
        ],
        color: "#003087",
    },
    {
        country: "Netherlands",
        code: 'nl',
        tagline: "Innovation, Research & Opportunity",
        description:
            "The Netherlands consistently ranks among the world's top education systems.",
        highlights: [
            "Schollarhip upto 50%",
            "Dependent Allowed",
            "95% Visa Success Rate",
            "1 Year Masters",
            "2 Year Post Study Visa",
            "20 hrs/week Part Time Work Allowed"
        ],
        color: "#AE1C28",
    },
    {
        country: "Austria",
        code: 'at',
        tagline: "High Quality Education in the Heart of Europe",
        description:
            "Austria offers high-quality education in a culturally rich environment.",
        highlights: [
            "Free Education",
            "With or Without IELTS option",
            "High Visa Success Rate",
            "English Taught Programs",
            "1 Year Post Study Visa",
            "20 hrs/week Part Time Work Allowed"
        ],
        color: "#AE1C28",
    },
];

const doubled = [...destinations, ...destinations];

export default function Destinations() {
    return (
        <section id="destinations" className="py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-[#f5a623] text-sm font-semibold uppercase tracking-widest">
                        Explore
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-2 mb-4">
                        Study Destinations
                    </h2>
                    <p className="text-[#6b7280] max-w-xl mx-auto leading-relaxed">
                        We specialize in placements across five European countries, each
                        offering distinct opportunities for Nepali students.
                    </p>
                    <div className="w-12 h-1 bg-[#f5a623] mx-auto mt-6 rounded-full" />
                </div>
            </div>

            {/* Marquee */}
            <div className="relative w-full">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent" />

                <div className="flex gap-6 w-max px-6 animate-dest-marquee hover:[animation-play-state:paused]">
                    {doubled.map((dest, i) => (
                        <div
                            key={`${dest.country}-${i}`}
                            className="w-[300px] flex-shrink-0 bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div
                                className="h-1.5 w-full"
                                style={{ backgroundColor: dest.color }}
                            />

                            <div className="p-6">
                                <img
                                    src={`https://flagcdn.com/w40/${dest.code}.png`}
                                    alt={dest.country}
                                    className="w-10 h-auto rounded-sm shadow-sm"
                                />
                                <h3 className="text-xl font-bold text-[#1a1a2e] mt-2">
                                    {dest.country}
                                </h3>
                                <p className="text-[#2196C4] text-xs font-medium mt-0.5">
                                    {dest.tagline}
                                </p>

                                <p className="text-[#6b7280] text-sm leading-relaxed my-5">
                                    {dest.description}
                                </p>

                                <ul className="space-y-1.5">
                                    {dest.highlights.map((h) => (
                                        <li
                                            key={h}
                                            className="flex items-center gap-2 text-sm text-[#374151]"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA  */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 mt-14">
                <div className="bg-gradient-to-br from-[#2196C4] to-[#1a7da8] rounded-xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center mb-3">
                            <Landmark size={20} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                            Not sure where to go?
                        </h3>
                        <p className="text-white/80 text-sm">
                            Our counselors will help you find the right country and university
                            based on your academic profile, budget, and career goals.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5a623] text-white text-sm font-semibold rounded hover:bg-[#e09410] transition-colors whitespace-nowrap"
                    >
                        Talk to a Counsellor
                        <ArrowRight size={14} />
                    </a>
                </div>
            </div>
        </section>
    );
}