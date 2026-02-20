import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Destinations from "@/components/sections/Destinations";
import WhyEurolink from "@/components/sections/WhyEurolink";
import Services from "@/components/sections/Services";
import B2BPartners from "@/components/sections/B2BSection";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Destinations />
            <WhyEurolink />
            <Services />
            <B2BPartners />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
