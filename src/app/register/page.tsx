'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    shopName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  })
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  // পাসওয়ার্ড স্ট্রেংথ চেক
  const checkPasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    setPasswordStrength(strength)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    if (name === 'password') {
      checkPasswordStrength(value)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // ভ্যালিডেশন
    if (formData.password !== formData.confirmPassword) {
      alert('পাসওয়ার্ড মিলছে না!')
      setIsLoading(false)
      return
    }

    if (!formData.terms) {
      alert('আপনাকে Terms & Conditions মেনে চলতে হবে!')
      setIsLoading(false)
      return
    }

    // API কল (পরে কনফিগার করবেন)
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        window.location.href = '/login'
      } else {
        const data = await response.json()
        alert(data.message || 'রেজিস্ট্রেশন ব্যর্থ হয়েছে!')
      }
    } catch (error) {
      console.error('Registration error:', error)
      alert('সার্ভার এরর! আবার চেষ্টা করুন।')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left Side: Branding/Illustration */}
      <section className="hidden lg:flex flex-col justify-between p-16 mesh-gradient relative overflow-hidden">
        {/* Brand Logo */}
        <div className="z-10">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-lg shadow-primary/20">
              <span
                className="material-symbols-outlined text-on-primary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                inventory_2
              </span>
            </div>
            <span className="font-headline font-extrabold text-2xl tracking-tight text-on-surface">
              Curator POS
            </span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="z-10 max-w-xl">
          <h1 className="font-headline font-extrabold text-5xl leading-tight mb-6 text-on-surface">
            Start Your Digital Journey with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              Evergreen Slate.
            </span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
            Streamline your retail operations with our high-end POS and inventory
            management suite. Experience the intersection of editorial design and
            operational excellence.
          </p>

          {/* Abstract Visual Element */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary-container/30 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-surface-container-high rounded-2xl border border-outline-variant/10 p-2 shadow-2xl overflow-hidden">
              <img
                alt="Luxury retail POS interface showing inventory analytics"
                className="rounded-xl w-full h-[400px] object-cover opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOn3UtMdlW5aXlAeWTkXsOLvCV9M-oh8VzooEBlE7BLKJCW31MwRDrArsGUtgHXv01CyMQ4wqSn3GgzGsCzthVpo7hF3p-YRL5y7PJhtCRiJUE1D9IfM2P0G3bsNPWXCDFNvLkeGD43ORLEdI2JRBQwu2Fxn4HIMuJsHstTJeZv0sX5Zkus1k65cGRE9M44-saX5Cp1owldhsRJSMCNX7A7oG2uA59bgpnhES9YEcYmrH54Qi4OyFrnV4f4vhmg_sPjPBUu_6dmnxJ"
              />
              {/* Floating Data Cards */}
              <div className="absolute top-8 right-8 glass-effect p-4 rounded-xl border border-outline-variant/20 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    <span className="material-symbols-outlined text-sm">
                      trending_up
                    </span>
                  </div>
                  <div>
                    <div className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
                      Revenue
                    </div>
                    <div className="font-headline font-bold text-lg text-on-surface">
                      +$12,480.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="z-10 flex gap-12 border-t border-outline-variant/10 pt-8">
          <div>
            <div className="text-on-surface font-headline font-bold text-xl">
              2.4k+
            </div>
            <div className="text-on-surface-variant text-xs font-medium uppercase tracking-widest">
              Active Curators
            </div>
          </div>
          <div>
            <div className="text-on-surface font-headline font-bold text-xl">
              99.9%
            </div>
            <div className="text-on-surface-variant text-xs font-medium uppercase tracking-widest">
              Uptime Record
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      </section>

      {/* Right Side: Sign Up Form */}
      <section className="flex items-center justify-center p-8 lg:p-20 bg-background relative overflow-y-auto">
        {/* Mobile Header Only */}
        <div className="absolute top-8 left-8 lg:hidden">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span
                className="material-symbols-outlined text-on-primary text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                inventory_2
              </span>
            </div>
            <span className="font-headline font-bold text-lg text-on-surface">
              Curator POS
            </span>
          </div>
        </div>

        <div className="w-full max-w-[480px]">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="font-headline font-extrabold text-3xl text-on-surface mb-3">
              Create your account
            </h2>
            <p className="text-on-surface-variant">
              Elevate your business management today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Shop Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  className="font-label text-sm font-semibold text-on-surface-variant ml-1"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3.5 text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Julian Vane"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  className="font-label text-sm font-semibold text-on-surface-variant ml-1"
                  htmlFor="shopName"
                >
                  Shop Name
                </label>
                <input
                  className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3.5 text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  id="shopName"
                  name="shopName"
                  type="text"
                  placeholder="The Atelier"
                  value={formData.shopName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                className="font-label text-sm font-semibold text-on-surface-variant ml-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline/50 group-focus-within:text-primary transition-colors">
                  mail
                </span>
                <input
                  className="w-full bg-surface-container-highest border-none rounded-xl pl-12 pr-4 py-3.5 text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Password Group */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  className="font-label text-sm font-semibold text-on-surface-variant ml-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline/50 group-focus-within:text-primary transition-colors">
                    lock
                  </span>
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-xl pl-12 pr-12 py-3.5 text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-outline/50 hover:text-on-surface transition-colors"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>

                {/* Strength Indicator */}
                <div className="px-1 pt-2">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
                      Security Level
                    </span>
                    <span
                      className={`text-[10px] uppercase tracking-widest font-bold ${
                        passwordStrength >= 3 ? 'text-primary' : 'text-outline/50'
                      }`}
                    >
                      {passwordStrength >= 3
                        ? 'Strong'
                        : passwordStrength >= 2
                        ? 'Medium'
                        : 'Weak'}
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full ${
                          level <= passwordStrength
                            ? 'bg-primary shadow-[0_0_8px_rgba(74,225,118,0.3)]'
                            : 'bg-surface-container-high'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="font-label text-sm font-semibold text-on-surface-variant ml-1"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline/50 group-focus-within:text-primary transition-colors">
                    shield
                  </span>
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-xl pl-12 pr-4 py-3.5 text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-3 px-1">
              <div className="flex items-center h-6">
                <input
                  className="h-5 w-5 rounded-md bg-surface-container-highest border-none text-primary focus:ring-primary/20 transition-all cursor-pointer"
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleInputChange}
                />
              </div>
              <label
                className="text-sm text-on-surface-variant leading-tight"
                htmlFor="terms"
              >
                I agree to the{' '}
                <a
                  className="text-on-surface font-semibold hover:text-primary transition-colors"
                  href="#"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  className="text-on-surface font-semibold hover:text-primary transition-colors"
                  href="#"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Actions */}
            <div className="pt-2 space-y-6">
              <button
                className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-headline font-bold py-4 rounded-xl shadow-xl shadow-primary/10 hover:shadow-primary/20 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-outline-variant/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-[0.2em] font-bold">
                  <span className="bg-background px-4 text-outline/50">
                    Partnership
                  </span>
                </div>
              </div>

              <p className="text-center text-on-surface-variant text-sm">
                Already have an account?{' '}
                <Link
                  className="text-primary font-bold hover:text-primary-fixed-dim transition-colors ml-1"
                  href="/login"
                >
                  Log In
                </Link>
              </p>
            </div>
          </form>

          {/* Footer Copyright */}
          <div className="mt-12 text-center">
            <p className="text-xs text-outline/40 font-inter">
              © 2024 Curator POS. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}