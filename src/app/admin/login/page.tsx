"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Shield, Eye, EyeOff, AlertCircle, RefreshCw, Lock } from "lucide-react";
import Image from "next/image";

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000;

function getAttempts(): number {
    if (typeof window === "undefined") return 0;
    return parseInt(localStorage.getItem("adm_attempts") ?? "0", 10);
}
function incrementAttempts(): number {
    const n = getAttempts() + 1;
    localStorage.setItem("adm_attempts", String(n));
    if (n >= MAX_ATTEMPTS) localStorage.setItem("adm_lockout", String(Date.now() + LOCKOUT_MS));
    return n;
}
function resetAttempts() {
    localStorage.removeItem("adm_attempts");
    localStorage.removeItem("adm_lockout");
}
function getLockoutRemaining(): number {
    const until = parseInt(localStorage.getItem("adm_lockout") ?? "0", 10);
    return Math.max(0, until - Date.now());
}

export default function AdminLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [lockRemaining, setLockRemaining] = useState(0);

    // Check existing session
    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            if (data.session) router.replace("/admin/dashboard");
        });
        setLockRemaining(getLockoutRemaining());
    }, [router]);

    // Countdown timer for lockout
    useEffect(() => {
        if (lockRemaining <= 0) return;
        const t = setInterval(() => {
            const r = getLockoutRemaining();
            setLockRemaining(r);
            if (r <= 0) resetAttempts();
        }, 1000);
        return () => clearInterval(t);
    }, [lockRemaining]);

    const locked = lockRemaining > 0;
    const lockMins = Math.ceil(lockRemaining / 60000);
    const lockSecs = Math.ceil((lockRemaining % 60000) / 1000);

    async function handleLogin() {
        setError("");
        if (locked) return;
        if (!email.trim() || !password) { setError("Enter your email and password."); return; }

        setLoading(true);
        const { data, error: authErr } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
        setLoading(false);

        if (authErr) {
            const attempts = incrementAttempts();
            const rem = getLockoutRemaining();
            if (rem > 0) {
                setLockRemaining(rem);
            } else {
                const left = MAX_ATTEMPTS - attempts;
                setError(left > 0 ? `Invalid credentials. ${left} attempt(s) left.` : "Too many attempts.");
            }
        } else if (data.session) {
            resetAttempts();
            router.replace("/admin/dashboard");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f4f8fb] px-4">
            {/* Subtle grid bg */}
            <div
                className="fixed inset-0 opacity-[0.035] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#2196C4 1px,transparent 1px),linear-gradient(90deg,#2196C4 1px,transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative w-full max-w-[380px]">
                {/* Brand */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center h-16 px-4 rounded-2xl bg-white shadow-md border border-[#2196C4]/10 mb-4 overflow-hidden">
                        <Image
                            src="/eurolink_light.png"
                            alt="Eurolink"
                            width={92}
                            height={32}
                            className="h-8 w-auto object-contain"
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-[#1a1a2e] tracking-tight">Admin Portal</h1>
                    <p className="text-[#6b7280] text-sm mt-1">
                        Eurolink Education ·{" "}
                        <span className="inline-flex items-center gap-1 bg-orange-50 text-yellow-600 text-xs font-semibold px-2 py-0.5 rounded-full border border-orange-100">
                            <Lock size={10} />
                            Authorized access only
                        </span>
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">

                    {/* Lockout banner */}
                    {locked && (
                        <div className="flex items-center gap-2.5 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl px-4 py-3 mb-6">
                            <Lock size={14} className="flex-shrink-0" />
                            <span>
                                Locked for <strong>{lockMins}:{String(lockSecs).padStart(2, "0")}</strong> — too many failed attempts.
                            </span>
                        </div>
                    )}

                    {/* Error */}
                    {error && !locked && (
                        <div className="flex items-start gap-2 bg-amber-50 border border-amber-100 text-amber-700 text-sm rounded-xl px-4 py-3 mb-6">
                            <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                            {error}
                        </div>
                    )}

                    <div className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-xs font-semibold text-[#374151] uppercase tracking-wide mb-1.5">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                onKeyDown={e => e.key === "Enter" && handleLogin()}
                                disabled={locked || loading}
                                placeholder="you@eurolink.com"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#1a1a2e] placeholder-gray-300 focus:outline-none focus:border-[#2196C4] focus:ring-2 focus:ring-[#2196C4]/10 transition disabled:opacity-50 disabled:bg-gray-50"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-xs font-semibold text-[#374151] uppercase tracking-wide mb-1.5">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPass ? "text" : "password"}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    onKeyDown={e => e.key === "Enter" && handleLogin()}
                                    disabled={locked || loading}
                                    placeholder="••••••••"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 pr-10 text-sm text-[#1a1a2e] placeholder-gray-300 focus:outline-none focus:border-[#2196C4] focus:ring-2 focus:ring-[#2196C4]/10 transition disabled:opacity-50 disabled:bg-gray-50"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(v => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition"
                                >
                                    {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            onClick={handleLogin}
                            disabled={locked || loading}
                            className="w-full py-2.5 bg-[#2196C4] hover:bg-[#1a7da8] active:scale-[0.98] text-white font-semibold rounded-xl text-sm transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
                        >
                            {loading ? (
                                <><RefreshCw size={14} className="animate-spin" /> Signing in…</>
                            ) : "Sign In"}
                        </button>
                    </div>
                </div>

                <p className="text-center text-gray-300 text-xs mt-6">
                    This panel is monitored. Unauthorized access is prohibited.
                </p>
            </div>
        </div>
    );
}