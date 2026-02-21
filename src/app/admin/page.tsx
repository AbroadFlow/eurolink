"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { RefreshCw } from "lucide-react";


// Redirects to dashboard if logged in, otherwise to login
export default function AdminRootPage() {
    const router = useRouter();

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            if (data.session) {
                router.replace("/admin/dashboard");
            } else {
                router.replace("/admin/login");
            }
        });
    }, [router]);

    return (
        <div className="min-h-screen bg-[#f4f8fb] flex items-center justify-center">
            <RefreshCw size={22} className="text-[#2196C4] animate-spin" />
        </div>
    );
}