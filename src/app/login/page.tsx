"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Email বা Password ভুল হয়েছে!");
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <>
      <style>{`
        .bg-login-gradient { background: linear-gradient(135deg, #0b1326 0%, #171f33 100%); }
        .btn-primary-gradient { background: linear-gradient(135deg, #4be277 0%, #22c55e 100%); }
        input:focus { box-shadow: 0 0 0 2px rgba(75, 226, 119, 0.2); }
        .glass-panel { background: rgba(23, 31, 51, 0.7); backdrop-filter: blur(20px); border-top: 1px solid rgba(75, 226, 119, 0.1); }
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <main
        className="flex min-h-screen"
        style={{
          backgroundColor: "#0b1326",
          color: "#dae2fd",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Left Side এর পুরো section টা replace করুন */}
        <section className="hidden lg:flex flex-col w-1/2 p-12 relative overflow-hidden bg-login-gradient">
          <div
            className="absolute -top-20 -left-20 w-96 h-96 rounded-full"
            style={{
              backgroundColor: "rgba(75,226,119,0.05)",
              filter: "blur(100px)",
            }}
          ></div>
          <div
            className="absolute bottom-40 -right-20 w-80 h-80 rounded-full"
            style={{
              backgroundColor: "rgba(173,198,255,0.05)",
              filter: "blur(80px)",
            }}
          ></div>

          <div className="relative z-10 flex flex-col h-full justify-center gap-8">
            <div>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{
                  backgroundColor: "rgba(75,226,119,0.1)",
                  border: "1px solid rgba(75,226,119,0.2)",
                  color: "#4be277",
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  verified
                </span>
                The Digital Curator
              </span>

              <h1
                className="text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight max-w-xl mt-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Welcome Back to{" "}
                <span style={{ color: "#4be277" }}>Evergreen Slate.</span>
              </h1>

              <p
                className="mt-4 text-lg max-w-lg leading-relaxed"
                style={{ color: "#bccbb9" }}
              >
                Your digital curator for premium retail operations. Manage
                inventory, sales, and insights with effortless precision.
              </p>
            </div>

            {/* Image — fixed height দিয়ে overflow আটকানো */}
            <div
              className="rounded-xl overflow-hidden shadow-2xl flex-1 max-h-72"
              style={{ border: "1px solid rgba(61,74,61,0.3)" }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkWvldnSpqad3XPqOJXu2R8hLL2uHmij50ZDWVi4h7l3ovdRS0F7pXjF78bQC6wJCU2ELIB-WDPELBv6SR2IFx2EPlbxv9j_eFHDl6xSDv9Uwd971u6gra2WHWXO28r4x-2GmAlkLklybE1QVlP-tl5aMbLQl5uex0t-vAaNOrbqZ8KwtM9zUYUOFy7zkPuW5MKo2VU9f_n1AGx2mg6JGOvq9-nxVS8j9Zmp3Br5G3gDJunH_TDr6K-lp0lKwgAzRlqpkpYzxr0koe"
                alt="Dashboard visualization"
                className="w-full h-full object-cover object-top"
                style={{ opacity: 0.8 }}
              />
            </div>
          </div>

          <div className="absolute bottom-6 left-12">
            <p
              className="text-sm tracking-widest uppercase"
              style={{ color: "rgba(188,203,185,0.5)" }}
            >
              Version 1.0.0 • Supershop Edition
            </p>
          </div>
        </section>

        {/* Right Side: Login Form */}
        <section
          className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-20"
          style={{ backgroundColor: "#0b1326" }}
        >
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-3 mb-10">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#22c55e" }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    color: "#004b1e",
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  eco
                </span>
              </div>
              <span
                className="text-2xl font-bold tracking-tight"
                style={{ fontFamily: "Manrope, sans-serif", color: "#dae2fd" }}
              >
                Evergreen Slate
              </span>
            </div>

            {/* Desktop Logo */}
            <div className="hidden lg:flex items-center gap-3 mb-12">
              <div
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{ backgroundColor: "#22c55e" }}
              >
                <span
                  className="material-symbols-outlined text-xl"
                  style={{
                    color: "#004b1e",
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  eco
                </span>
              </div>
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: "Manrope, sans-serif", color: "#dae2fd" }}
              >
                Evergreen Slate
              </span>
            </div>

            <div className="space-y-2 mb-10">
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: "Manrope, sans-serif", color: "#dae2fd" }}
              >
                Log In
              </h2>
              <p style={{ color: "#bccbb9" }}>
                Enter your credentials to access your workspace.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium ml-1"
                  style={{ color: "#bccbb9" }}
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative group">
                  <span
                    className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 transition-colors"
                    style={{ color: "#bccbb9" }}
                  >
                    mail
                  </span>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                    className="w-full rounded-xl py-4 pl-12 pr-4 outline-none transition-all"
                    style={{
                      backgroundColor: "#2d3449",
                      border: "none",
                      color: "#dae2fd",
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium ml-1"
                  style={{ color: "#bccbb9" }}
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative group">
                  <span
                    className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: "#bccbb9" }}
                  >
                    lock
                  </span>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full rounded-xl py-4 pl-12 pr-12 outline-none transition-all"
                    style={{
                      backgroundColor: "#2d3449",
                      border: "none",
                      color: "#dae2fd",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
                    style={{ color: "#bccbb9" }}
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-5 h-5 rounded cursor-pointer"
                      style={{ accentColor: "#4be277" }}
                    />
                  </div>
                  <span className="text-sm" style={{ color: "#bccbb9" }}>
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm font-semibold transition-colors"
                  style={{ color: "#4be277" }}
                >
                  Forgot password?
                </a>
              </div>

              {/* Error Message */}
              {error && (
                <p
                  className="text-sm text-center py-2 px-4 rounded-lg"
                  style={{
                    color: "#ffb4ab",
                    backgroundColor: "rgba(147,0,10,0.2)",
                  }}
                >
                  {error}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  background:
                    "linear-gradient(135deg, #4be277 0%, #22c55e 100%)",
                  color: "#003915",
                }}
              >
                {loading ? "Accessing..." : "Access Workspace"}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div
                  className="w-full border-t"
                  style={{ borderColor: "rgba(61,74,61,0.3)" }}
                ></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest">
                <span
                  className="px-4 text-sm"
                  style={{ backgroundColor: "#0b1326", color: "#869585" }}
                >
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-3 py-3.5 rounded-xl transition-all"
                style={{
                  border: "1px solid rgba(61,74,61,0.3)",
                  backgroundColor: "#131b2e",
                  color: "#dae2fd",
                }}
              >
                <span className="text-sm font-medium">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-3 py-3.5 rounded-xl transition-all"
                style={{
                  border: "1px solid rgba(61,74,61,0.3)",
                  backgroundColor: "#131b2e",
                  color: "#dae2fd",
                }}
              >
                <span
                  className="material-symbols-outlined text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  ios
                </span>
                <span className="text-sm font-medium">Apple</span>
              </button>
            </div>

            <p
              className="mt-12 text-center text-sm"
              style={{ color: "#bccbb9" }}
            >
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="font-bold hover:underline ml-1"
                style={{ color: "#4be277" }}
              >
                Contact your Administrator
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-8 right-8 lg:right-12 z-20">
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs uppercase tracking-wider transition-colors"
            style={{ color: "#869585" }}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs uppercase tracking-wider transition-colors"
            style={{ color: "#869585" }}
          >
            Terms of Service
          </a>
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "rgba(75,226,119,0.4)" }}
          ></div>
          <span
            className="text-xs uppercase tracking-wider"
            style={{ color: "#869585" }}
          >
            System Status: Stable
          </span>
        </div>
      </footer>
    </>
  );
}
