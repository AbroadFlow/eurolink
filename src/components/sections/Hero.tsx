import { ArrowRight, GraduationCap, Globe, Users } from "lucide-react";

const stats = [
    { value: "500+", label: "Students" },
    { value: "6+", label: "Countries" },
    { value: "98%", label: "Visa Success Rate" },
    { value: "5+", label: "Years Experience" },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{ paddingTop: "96px" }}
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f4f9fc] via-white to-[#fef9f0]" />

            {/* Decorative circles */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#2196C4]/5 rounded-full -translate-y-1/4 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f5a623]/5 rounded-full translate-y-1/4 -translate-x-1/4" />

            <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-[#2196C4]/10 text-[#2196C4] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                            <Globe size={13} />
                            Nepal&apos;s Trusted Europe Consultancy
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] leading-tight mb-5">
                            Your Journey to{" "}
                            <span className="text-[#2196C4]">European</span>{" "}
                            Education Starts{" "}
                            <span className="text-[#f5a623]">Here</span>
                        </h1>

                        <p className="text-[#4b5563] text-lg leading-relaxed mb-8 max-w-lg">
                            We connect ambitious Nepali students with world-class universities
                            across Europe, guiding in each and every step to fulfill your dream of studying in Europe.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 mb-12">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#f5a623] text-white font-semibold rounded hover:bg-[#e09410] transition-colors"
                            >
                                Get Free Counselling
                                <ArrowRight size={16} />
                            </a>
                            <a
                                href="#destinations"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#2196C4] text-[#2196C4] font-semibold rounded hover:bg-[#2196C4] hover:text-white transition-colors"
                            >
                                Explore Destinations
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {stats.map((s) => (
                                <div key={s.label} className="text-center">
                                    <div className="text-2xl font-bold text-[#2196C4]">{s.value}</div>
                                    <div className="text-xs text-[#6b7280] mt-0.5">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right visual */}
                    <div className="relative flex justify-center">
                        {/* Central illustration */}
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            {/* Background circle */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2196C4]/10 to-[#f5a623]/10" />

                            {/* Center icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-3 border-2 border-[#f5a623]/20">
                                        <GraduationCap size={40} className="text-[#2196C4]" />
                                    </div>
                                    <p className="text-sm font-semibold text-[#1a1a2e]">Study in Europe</p>
                                    <p className="text-xs text-[#6b7280]">6 Countries Available</p>
                                </div>
                            </div>

                            {/* Floating destination badges */}
                            {[
                                {
                                    label: "Italy",
                                    pos: "top-4 left-4",
                                    flag: "https://flagcdn.com/w80/it.png",
                                    delay: "0s",
                                },
                                {
                                    label: "Georgia",
                                    pos: "top-4 right-4",
                                    flag: "https://flagcdn.com/w80/ge.png",
                                    delay: "0.5s",
                                },
                                {
                                    label: "Austria",
                                    pos: "top-40 -left-8",
                                    flag: "https://flagcdn.com/w80/at.png",
                                    delay: "0s",
                                },
                                {
                                    label: "Malta",
                                    pos: "bottom-4 left-4",
                                    flag: "https://flagcdn.com/w80/mt.png",
                                    delay: "1s",
                                },
                                {
                                    label: "Cyprus",
                                    pos: "bottom-4 right-4",
                                    flag: "https://flagcdn.com/w80/cy.png",
                                    delay: "1.5s",
                                },
                                {
                                    label: "Netherlands",
                                    pos: "top-1/2 -right-4 -translate-y-1/2",
                                    flag: "https://flagcdn.com/w80/nl.png",
                                    delay: "2s",
                                },
                            ].map((d) => (
                                <div
                                    key={d.label}
                                    className={`absolute ${d.pos} bg-white rounded-xl shadow-md p-1.5 border border-gray-100`}
                                    style={{
                                        animation: `floatBadge 3s ease-in-out infinite`,
                                        animationDelay: d.delay,
                                    }}
                                >
                                    <img
                                        src={d.flag}
                                        alt={d.label}
                                        className="w-12 h-8 rounded-md object-cover shadow-sm"
                                        title={d.label}
                                    />
                                </div>
                            ))}

                        </div>

                        {/* Floating card */}
                        {/* <div className="absolute bottom-26 left-0 bg-white rounded-xl shadow-lg p-4 border border-gray-100 flex items-center gap-3 max-w-[200px]">
                            <div className="w-9 h-9 rounded-full bg-[#f5a623]/10 flex items-center justify-center flex-shrink-0">
                                <Users size={16} className="text-[#f5a623]" />
                            </div>
                            <div>
                                <p className="text-xs text-[#6b7280]">Students helped</p>
                                <p className="text-sm font-bold text-[#1a1a2e]">500+ this year</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
