"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from 'next-auth/react'

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    shopName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [strengthLabel, setStrengthLabel] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
    if (strength <= 1) setStrengthLabel("Weak");
    else if (strength === 2) setStrengthLabel("Medium");
    else if (strength === 3) setStrengthLabel("Good");
    else setStrengthLabel("Strong");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "password") checkPasswordStrength(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (formData.password !== formData.confirmPassword) {
      setError("Password মিলছে না!");
      return;
    }
    if (!formData.terms) {
      setError("Terms & Conditions এ সম্মতি দিন!");
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });
      if (res.ok) {
        window.location.href = "/login";
      } else {
        const data = await res.json();
        setError(data.message || "Registration failed!");
      }
    } catch {
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const strengthColors = ["#2d3449", "#2d3449", "#2d3449", "#2d3449"];
  for (let i = 0; i < passwordStrength; i++) {
    strengthColors[i] =
      passwordStrength === 1
        ? "#ffb4ab"
        : passwordStrength === 2
          ? "#ffba61"
          : passwordStrength === 3
            ? "#adc6ff"
            : "#4be277";
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .mesh-gradient {
          background-color: #0b1326;
          background-image: 
            radial-gradient(at 0% 0%, rgba(75, 226, 119, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(5, 102, 217, 0.1) 0px, transparent 50%);
        }
        .glass-effect {
          background: rgba(23, 31, 51, 0.8);
          backdrop-filter: blur(20px);
        }
        input::placeholder { color: rgba(134, 149, 133, 0.5); }
        input:focus { outline: none; box-shadow: 0 0 0 2px rgba(75, 226, 119, 0.2); }
        html, body { overflow: hidden; height: 100%; }
      `}</style>

      <main
        className="grid min-h-screen"
        style={{
          gridTemplateColumns: "1fr 1fr",
          backgroundColor: "#0b1326",
          fontFamily: "Inter, sans-serif",
          overflow: "hidden",
          height: "100vh",
        }}
      >
        {/* LEFT SIDE */}
        <section className="hidden lg:flex flex-col justify-between p-16 mesh-gradient relative overflow-hidden">
          {/* Logo */}
          <div className="z-10">
            <div className="flex items-center gap-2 cursor-pointer">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #4be277, #22c55e)",
                  boxShadow: "0 4px 15px rgba(75,226,119,0.2)",
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    color: "#004b1e",
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  inventory_2
                </span>
              </div>
              <span
                className="text-2xl font-extrabold tracking-tight"
                style={{ fontFamily: "Manrope, sans-serif", color: "#dae2fd" }}
              >
                Curator POS
              </span>
            </div>
          </div>

          {/* Hero */}
          <div className="z-10 max-w-xl">
            <h1
              className="font-extrabold text-5xl leading-tight mb-6"
              style={{ fontFamily: "Manrope, sans-serif", color: "#dae2fd" }}
            >
              Start Your Digital Journey with{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #4be277, #22c55e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Evergreen Slate.
              </span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-12"
              style={{ color: "#bccbb9" }}
            >
              Streamline your retail operations with our high-end POS and
              inventory management suite. Experience the intersection of
              editorial design and operational excellence.
            </p>

            {/* Image Card */}
            <div className="relative group">
              <div
                className="absolute -inset-1 rounded-2xl blur opacity-25"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(75,226,119,0.3), rgba(5,102,217,0.3))",
                }}
              ></div>
              <div
                className="relative rounded-2xl p-2 shadow-2xl overflow-hidden"
                style={{
                  backgroundColor: "#222a3d",
                  border: "1px solid rgba(61,74,61,0.1)",
                }}
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOn3UtMdlW5aXlAeWTkXsOLvCV9M-oh8VzooEBlE7BLKJCW31MwRDrArsGUtgHXv01CyMQ4wqSn3GgzGsCzthVpo7hF3p-YRL5y7PJhtCRiJUE1D9IfM2P0G3bsNPWXCDFNvLkeGD43ORLEdI2JRBQwu2Fxn4HIMuJsHstTJeZv0sX5Zkus1k65cGRE9M44-saX5Cp1owldhsRJSMCNX7A7oG2uA59bgpnhES9YEcYmrH54Qi4OyFrnV4f4vhmg_sPjPBUu_6dmnxJ"
                  alt="POS Interface"
                  className="rounded-xl w-full object-cover"
                  style={{ height: "280px", opacity: 0.8 }}
                />
                {/* Floating Card */}
                <div
                  className="absolute top-6 right-6 p-4 rounded-xl shadow-xl glass-effect"
                  style={{ border: "1px solid rgba(61,74,61,0.2)" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{
                        backgroundColor: "rgba(75,226,119,0.2)",
                        color: "#4be277",
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "18px" }}
                      >
                        trending_up
                      </span>
                    </div>
                    <div>
                      <div
                        className="font-bold uppercase tracking-widest"
                        style={{ fontSize: "10px", color: "#bccbb9" }}
                      >
                        Revenue
                      </div>
                      <div
                        className="font-bold text-lg"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                          color: "#dae2fd",
                        }}
                      >
                        +৳12,480.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Stats */}
          <div
            className="z-10 flex gap-12 pt-8"
            style={{ borderTop: "1px solid rgba(61,74,61,0.1)" }}
          >
            <div>
              <div
                className="text-xl font-bold"
                style={{ fontFamily: "Manrope, sans-serif", color: "#dae2fd" }}
              >
                2.4k+
              </div>
              <div
                className="text-xs font-medium uppercase tracking-widest"
                style={{ color: "#bccbb9" }}
              >
                Active Curators
              </div>
            </div>
            <div>
              <div
                className="text-xl font-bold"
                style={{ fontFamily: "Manrope, sans-serif", color: "#dae2fd" }}
              >
                99.9%
              </div>
              <div
                className="text-xs font-medium uppercase tracking-widest"
                style={{ color: "#bccbb9" }}
              >
                Uptime Record
              </div>
            </div>
          </div>

          {/* BG Decoration */}
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full"
            style={{
              backgroundColor: "rgba(75,226,119,0.05)",
              filter: "blur(120px)",
            }}
          ></div>
        </section>

        {/* RIGHT SIDE */}
        <section
          className="flex items-center justify-center p-8 lg:p-16 overflow-y-auto"
          style={{ backgroundColor: "#0b1326" }}
        >
          {/* Mobile Logo */}
          <div className="absolute top-8 left-8 lg:hidden flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#4be277" }}
            >
              <span
                className="material-symbols-outlined text-sm"
                style={{ color: "#003915", fontVariationSettings: "'FILL' 1" }}
              >
                inventory_2
              </span>
            </div>
            <span
              className="font-bold text-lg"
              style={{ fontFamily: "Manrope, sans-serif", color: "#dae2fd" }}
            >
              Curator POS
            </span>
          </div>

          <div className="w-full max-w-md">
            <div className="mb-8">
              <h2
                className="font-extrabold text-3xl mb-2"
                style={{ fontFamily: "Manrope, sans-serif", color: "#dae2fd" }}
              >
                Create your account
              </h2>
              <p style={{ color: "#bccbb9" }}>
                Elevate your business management today.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Shop */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-semibold ml-1"
                    style={{ color: "#bccbb9" }}
                  >
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Julian Vane"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{
                      backgroundColor: "#2d3449",
                      border: "none",
                      color: "#dae2fd",
                    }}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-semibold ml-1"
                    style={{ color: "#bccbb9" }}
                  >
                    Shop Name
                  </label>
                  <input
                    name="shopName"
                    type="text"
                    placeholder="The Atelier"
                    value={formData.shopName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{
                      backgroundColor: "#2d3449",
                      border: "none",
                      color: "#dae2fd",
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  className="text-sm font-semibold ml-1"
                  style={{ color: "#bccbb9" }}
                >
                  Email Address
                </label>
                <div className="relative">
                  <span
                    className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: "rgba(134,149,133,0.5)" }}
                  >
                    mail
                  </span>
                  <input
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl text-sm"
                    style={{
                      backgroundColor: "#2d3449",
                      border: "none",
                      color: "#dae2fd",
                    }}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label
                  className="text-sm font-semibold ml-1"
                  style={{ color: "#bccbb9" }}
                >
                  Password
                </label>
                <div className="relative">
                  <span
                    className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: "rgba(134,149,133,0.5)" }}
                  >
                    lock
                  </span>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-3 rounded-xl text-sm"
                    style={{
                      backgroundColor: "#2d3449",
                      border: "none",
                      color: "#dae2fd",
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
                    style={{ color: "rgba(134,149,133,0.5)" }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "20px" }}
                    >
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>

                {/* Strength Indicator */}
                {formData.password && (
                  <div className="px-1 pt-1">
                    <div className="flex justify-between items-center mb-1.5">
                      <span
                        className="font-bold uppercase tracking-widest"
                        style={{ fontSize: "10px", color: "#bccbb9" }}
                      >
                        Security Level
                      </span>
                      <span
                        className="font-bold uppercase tracking-widest"
                        style={{
                          fontSize: "10px",
                          color:
                            passwordStrength <= 1
                              ? "#ffb4ab"
                              : passwordStrength === 2
                                ? "#ffba61"
                                : passwordStrength === 3
                                  ? "#adc6ff"
                                  : "#4be277",
                        }}
                      >
                        {strengthLabel}
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      {strengthColors.map((color, i) => (
                        <div
                          key={i}
                          className="h-1 flex-1 rounded-full transition-all"
                          style={{
                            backgroundColor: color,
                            boxShadow:
                              color !== "#2d3449"
                                ? `0 0 8px ${color}50`
                                : "none",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label
                  className="text-sm font-semibold ml-1"
                  style={{ color: "#bccbb9" }}
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <span
                    className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: "rgba(134,149,133,0.5)" }}
                  >
                    shield
                  </span>
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl text-sm"
                    style={{
                      backgroundColor: "#2d3449",
                      border: "none",
                      color: "#dae2fd",
                    }}
                    required
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 px-1">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  checked={formData.terms}
                  onChange={handleInputChange}
                  className="h-5 w-5 rounded-md cursor-pointer mt-0.5"
                  style={{ accentColor: "#4be277", backgroundColor: "#2d3449" }}
                />
                <label
                  htmlFor="terms"
                  className="text-sm leading-tight cursor-pointer"
                  style={{ color: "#bccbb9" }}
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="font-semibold transition-colors"
                    style={{ color: "#dae2fd" }}
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-semibold transition-colors"
                    style={{ color: "#dae2fd" }}
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Error */}
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

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl font-bold text-lg transition-all active:scale-[0.98] disabled:opacity-50"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  background: "linear-gradient(90deg, #4be277, #22c55e)",
                  color: "#004b1e",
                }}
              >
                {isLoading ? "Creating..." : "Create Account"}
              </button>

              {/* Google Sign Up */}
              <button
                type="button"
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl transition-all"
                style={{
                  border: "1px solid rgba(61,74,61,0.3)",
                  backgroundColor: "#131b2e",
                  color: "#dae2fd",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Continue with Google
                </span>
              </button>

              {/* Divider */}
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div
                    className="w-full border-t"
                    style={{ borderColor: "rgba(61,74,61,0.1)" }}
                  ></div>
                </div>
                <div className="relative flex justify-center">
                  <span
                    className="px-4 text-xs font-bold uppercase tracking-widest"
                    style={{
                      backgroundColor: "#0b1326",
                      color: "rgba(134,149,133,0.5)",
                    }}
                  >
                    Partnership
                  </span>
                </div>
              </div>

              {/* Login Link */}
              <p className="text-center text-sm" style={{ color: "#bccbb9" }}>
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-bold transition-colors"
                  style={{ color: "#4be277" }}
                >
                  Log In
                </Link>
              </p>
            </form>

            {/* Copyright */}
            <div className="mt-8 text-center">
              <p className="text-xs" style={{ color: "rgba(134,149,133,0.4)" }}>
                © 2024 Curator POS. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
