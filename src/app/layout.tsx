import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Eurolink Education Consultancy | Study in Europe",
    description:
        "Eurolink Education Consultancy helps Nepali students pursue higher education in Europe — Italy, Georgia, Malta, Cyprus, and the Netherlands. Based in Kupondole, Lalitpur.",
    keywords: [
        "study abroad Nepal",
        "Europe education consultancy",
        "study in Italy",
        "study in Georgia",
        "study in Malta",
        "study in Cyprus",
        "study in Netherlands",
        "Eurolink consultancy Lalitpur",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>
                {children}

            </body>
        </html>
    );
}
