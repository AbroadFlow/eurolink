"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import {
    LogOut, RefreshCw, Search, Shield, Mail, Phone,
    MapPin, MessageSquare, Clock, Users, TrendingUp,
    Eye, ChevronDown, X, Calendar,
    ArrowUpRight,
} from "lucide-react";

type Submission = {
    id: string;
    name: string;
    phone: string;
    email: string;
    destination: string;
    message: string;
    created_at: string;
};

import Image from "next/image";

export default function AdminDashboardPage() {
    const router = useRouter();
    const [authChecked, setAuthChecked] = useState(false);
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState("");
    const [search, setSearch] = useState("");
    const [destFilter, setDestFilter] = useState("All");
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [sortAsc, setSortAsc] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    // Auth guard
    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            if (!data.session) {
                router.replace("/admin/login");
            } else {
                setUserEmail(data.session.user.email ?? "");
                setAuthChecked(true);
            }
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
            if (!session) router.replace("/admin/login");
        });

        return () => subscription.unsubscribe();
    }, [router]);

    // Fetch data
    const fetchSubmissions = useCallback(async () => {
        setLoading(true);
        setFetchError("");

        const { data, error } = await supabase
            .from("contact_submissions")
            .select("*")
            .order("created_at", { ascending: sortAsc });

        if (error) {
            console.error("Supabase fetch error:", error);
            // Common error codes to give actionable messages
            if (error.code === "42501" || error.message?.includes("permission")) {
                setFetchError("Permission denied. Make sure your Supabase RLS policy allows authenticated users to SELECT from this table. See the setup instructions below.");
            } else if (error.code === "42P01") {
                setFetchError(`Table not found. Check that "contact_submissions" is the correct table name in your Supabase project.`);
            } else {
                setFetchError(`Error: ${error.message}`);
            }
        } else {
            setSubmissions(data ?? []);
        }

        setLoading(false);
    }, [sortAsc]);

    useEffect(() => {
        if (authChecked) fetchSubmissions();
    }, [authChecked, fetchSubmissions]);

    // Logout 
    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.replace("/admin/login");
    };

    // Derived data 
    const destinations = ["All", ...Array.from(new Set(submissions.map(s => s.destination).filter(Boolean)))];

    const filtered = submissions.filter(s => {
        const q = search.toLowerCase();
        const matchSearch =
            s.name?.toLowerCase().includes(q) ||
            s.email?.toLowerCase().includes(q) ||
            s.phone?.includes(q) ||
            s.destination?.toLowerCase().includes(q) ||
            s.message?.toLowerCase().includes(q);
        const matchDest = destFilter === "All" || s.destination === destFilter;
        return matchSearch && matchDest;
    });

    const totalPages = Math.ceil(filtered.length / pageSize);
    const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const todayCount = submissions.filter(
        s => new Date(s.created_at).toDateString() === new Date().toDateString()
    ).length;

    const uniqueDests = new Set(submissions.map(s => s.destination).filter(Boolean)).size;

    // Loading state (auth check)
    if (!authChecked) {
        return (
            <div className="min-h-screen bg-[#f4f8fb] flex items-center justify-center">
                <RefreshCw size={22} className="text-[#2196C4] animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f4f8fb]">

            {/* ── Top nav ── */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
                <div className="max-w-7xl mx-auto px-4  md:px-6 h-14 flex items-center justify-between">
                    <div className="flex  items-center gap-3">
                        <div className="w-8 h-8  rounded-sm bg-[#2196C4]/10 flex items-center justify-center border border-[#2196C4]/15">
                            <div className="w-8 h-8 rounded-sm bg-[#2196C4]/10 flex items-center justify-center border border-[#2196C4]/15 overflow-hidden">
                                <Image
                                    src="/eurolink_light.png"
                                    alt="Eurolink"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 object-contain"
                                />
                            </div>
                        </div>
                        <span className="font-bold text-[#1a1a2e] text-sm">Eurolink Admin</span>
                        <span className="hidden sm:block text-gray-200">·</span>
                        <span className="hidden sm:block text-[#9ca3af] text-xs truncate max-w-[180px]">{userEmail}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={fetchSubmissions}
                            className="flex items-center gap-1.5 text-xs text-[#6b7280] hover:text-[#2196C4] transition px-3 py-1.5 rounded-lg hover:bg-[#2196C4]/5"
                        >
                            <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
                            <span className="hidden sm:inline">Refresh</span>
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-600 transition px-3 py-1.5 rounded-lg hover:bg-red-50"
                        >
                            <LogOut size={13} />
                            <span className="hidden sm:inline">Sign Out</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">

                {/* ── Page title ── */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-[#1a1a2e]">Contact Submissions</h1>
                    <p className="text-[#9ca3af] text-sm mt-0.5">All inquiries from the website contact form</p>
                </div>


                {/* ── Stats ── */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                        { label: "Total", value: submissions.length, icon: Users, color: "#2196C4" },
                        { label: "Today", value: todayCount, icon: TrendingUp, color: "#f5a623" },
                        { label: "Countries", value: uniqueDests, icon: MapPin, color: "#10b981" },
                    ].map(({ label, value, icon: Icon, color }) => (
                        <div key={label} className="bg-white rounded-sm border border-gray-100 p-5 shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-medium text-[#9ca3af] uppercase tracking-wide">{label}</span>
                                <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: `${color}15` }}
                                >
                                    <Icon size={15} style={{ color }} />
                                </div>
                            </div>
                            <p className="text-3xl font-bold text-[#1a1a2e]">{value}</p>
                        </div>
                    ))}
                </div>

                {/* ── Filters ── */}
                <div className="flex flex-col sm:flex-row gap-3 mb-5">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" />
                        <input
                            type="text"
                            placeholder="Search name, email, phone, message…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-sm pl-10 pr-9 py-2.5 text-sm text-[#1a1a2e] placeholder-gray-300 focus:outline-none focus:border-[#2196C4] focus:ring-2 focus:ring-[#2196C4]/10 transition shadow-sm"
                        />
                        {search && (
                            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition">
                                <X size={13} />
                            </button>
                        )}
                    </div>

                    {/* Destination filter */}
                    <div className="relative">
                        <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                        <select
                            value={destFilter}
                            onChange={e => setDestFilter(e.target.value)}
                            className="appearance-none bg-white border border-gray-200 rounded-sm pl-9 pr-8 py-2.5 text-xs font-semibold text-[#6b7280] focus:outline-none focus:border-[#2196C4] focus:ring-2 focus:ring-[#2196C4]/10 transition shadow-sm cursor-pointer hover:border-[#2196C4]/40 hover:text-[#2196C4]"
                        >
                            {destinations.map(d => (
                                <option key={d} value={d}>
                                    {d === "All" ? "All Countries" : d}
                                </option>
                            ))}
                        </select>
                        <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                    </div>


                    {/* Sort */}
                    <button
                        onClick={() => setSortAsc(v => !v)}
                        className="flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 rounded-sm text-xs text-[#6b7280] hover:text-[#2196C4] hover:border-[#2196C4]/40 transition shadow-sm whitespace-nowrap"
                    >
                        <Clock size={12} />
                        {sortAsc ? "Oldest first" : "Newest first"}
                        <ChevronDown size={12} className={`transition-transform ${sortAsc ? "rotate-180" : ""}`} />
                    </button>
                </div>

                {/* Results count */}
                <p className="text-[#9ca3af] text-xs mb-4">
                    {loading ? "Loading…" : `${filtered.length} result${filtered.length !== 1 ? "s" : ""}${search || destFilter !== "All" ? " (filtered)" : ""}`}
                </p>

                {/* ── Submissions list ── */}
                {loading ? (
                    <div className="space-y-3">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="bg-white  border border-gray-100 h-[72px] animate-pulse shadow-sm" />
                        ))}
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="text-center py-24 text-[#d1d5db]">
                        <MessageSquare size={36} className="mx-auto mb-3" />
                        <p className="text-sm text-[#9ca3af]">No submissions found</p>
                        {search && <p className="text-xs text-[#d1d5db] mt-1">Try clearing your search</p>}
                    </div>
                ) : (
                    <div className="space-y-2">
                        {filtered.map(s => (
                            <div
                                key={s.id}
                                className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:border-[#2196C4]/25 hover:shadow-md transition-all duration-200"
                            >
                                {/* Collapsed row */}
                                <button
                                    onClick={() => setExpandedId(expandedId === s.id ? null : s.id)}
                                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                                >
                                    {/* Avatar */}
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2196C4] to-[#1a7da8] flex items-center justify-center flex-shrink-0 text-sm font-bold text-white shadow-sm">
                                        {s.name?.charAt(0).toUpperCase() ?? "?"}
                                    </div>

                                    <div className="flex-1 min-w-0 grid grid-cols-2 sm:grid-cols-4 gap-x-4">
                                        {/* Name + phone */}
                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold text-[#1a1a2e] truncate">{s.name}</p>
                                            <p className="text-xs text-[#9ca3af] flex items-center gap-1 truncate mt-0.5">
                                                <Phone size={9} />{s.phone}
                                            </p>
                                        </div>
                                        {/* Email */}
                                        <div className="hidden sm:flex flex-col items-center justify-center min-w-0">
                                            <p className="text-xs text-[#6b7280] flex items-center gap-1 truncate">
                                                <Mail size={9} />{s.email}
                                            </p>
                                        </div>
                                        {/* Destination */}
                                        <div className="flex items-center">
                                            {s.destination ? (
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#f5a623]/10 text-[#f5a623] text-xs rounded-full border border-[#f5a623]/20 font-medium whitespace-nowrap">
                                                    <MapPin size={9} />{s.destination}
                                                </span>
                                            ) : (
                                                <span className="text-xs text-gray-200">—</span>
                                            )}
                                        </div>
                                        {/* Date */}
                                        <div className="hidden sm:flex items-center justify-end gap-1 text-xs text-[#9ca3af] whitespace-nowrap">
                                            <Calendar size={10} />
                                            {new Date(s.created_at).toLocaleDateString("en-GB", {
                                                day: "numeric", month: "short", year: "numeric"
                                            })}
                                        </div>
                                    </div>

                                    {/* Expand icon */}
                                    <Eye
                                        size={15}
                                        className={`flex-shrink-0 transition-colors ${expandedId === s.id ? "text-[#2196C4]" : "text-gray-200"
                                            }`}
                                    />
                                </button>

                                {/* Expanded detail */}
                                {expandedId === s.id && (
                                    <div className="border-t border-gray-50 px-5 pb-5 pt-4 bg-[#f9fbfd]">
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                            {[
                                                { label: "Full Name", value: s.name, icon: Users },
                                                { label: "Email", value: s.email, icon: Mail },
                                                { label: "Phone", value: s.phone, icon: Phone },
                                                { label: "Destination", value: s.destination || "Not specified", icon: MapPin },
                                            ].map(({ label, value, icon: Icon }) => (
                                                <div key={label}>
                                                    <p className="text-xs text-[#9ca3af] uppercase tracking-wider mb-1 flex items-center gap-1">
                                                        <Icon size={9} />{label}
                                                    </p>
                                                    <p className="text-sm text-[#1a1a2e] font-medium">{value}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mb-1">
                                            <p className="text-xs text-[#9ca3af] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                                                <MessageSquare size={9} />Message
                                            </p>
                                            <p className="text-sm text-[#374151] bg-white rounded-sm p-4 border border-gray-100 leading-relaxed min-h-[48px]">
                                                {s.message || <span className="text-gray-300 italic">No message provided</span>}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-2 mt-4">
                                            <a
                                                href={`mailto:${s.email}`}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2196C4] text-white text-xs font-semibold rounded-lg hover:bg-[#1a7da8] transition"
                                            >
                                                <Mail size={11} /> Email Student
                                                <ArrowUpRight size={10} />
                                            </a>
                                            <a
                                                href={`tel:${s.phone}`}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f5a623] text-white text-xs font-semibold rounded-lg hover:bg-[#e09410] transition"
                                            >
                                                <Phone size={11} /> Call
                                                <ArrowUpRight size={10} />
                                            </a>
                                            <span className="ml-auto text-xs text-[#9ca3af] flex items-center gap-1">
                                                <Clock size={10} />
                                                {new Date(s.created_at).toLocaleString("en-GB", {
                                                    day: "numeric", month: "long", year: "numeric",
                                                    hour: "2-digit", minute: "2-digit"
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}