"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get("website");
    
    if (honeypot) {
      // Bot detected, silently succeed
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="email-signup" className="w-full bg-patriot-red py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4 drop-shadow-sm">
          Join the Patriot List
        </h2>
        <p className="font-body text-lg md:text-xl text-red-100 mb-8 max-w-2xl">
          Get exclusive deals, new design drops, and patriot content — straight to your inbox. No spam. Unsubscribe anytime.
        </p>

        {status === "success" ? (
          <div className="bg-red-800/50 p-6 rounded-sm border border-red-700 w-full max-w-md animate-fade-in">
            <p className="font-heading text-3xl font-bold text-white uppercase tracking-wider">
              You're in, Patriot! 🇺🇸
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col sm:flex-row gap-3">
            {/* Honeypot field for basic spam prevention */}
            <input 
              type="text" 
              name="website" 
              tabIndex={-1} 
              autoComplete="off" 
              className="hidden" 
              aria-hidden="true" 
            />
            
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-grow px-4 py-4 text-patriot-navy font-body outline-none focus:ring-2 focus:ring-patriot-gold rounded-sm placeholder-gray-500"
              disabled={status === "loading"}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-4 bg-patriot-navy hover:bg-black text-patriot-gold font-heading font-bold text-lg uppercase tracking-wider transition-colors rounded-sm shadow-md whitespace-nowrap disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Signing Up..." : "Sign Me Up"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm font-semibold text-white bg-red-900/50 px-4 py-2 rounded">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
