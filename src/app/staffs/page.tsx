'use client'

import { useState } from 'react'

const staffList = [
  { id: 1, name: 'Elara Vance', email: 'elara.v@shop.pos', role: 'ADMIN', active: true, initials: 'EV', color: '#22C55E', bg: 'rgba(34,197,94,0.1)' },
  { id: 2, name: 'Marcus Thorne', email: 'm.thorne@shop.pos', role: 'STAFF', active: false, initials: 'MT', color: '#60a5fa', bg: 'rgba(96,165,250,0.1)' },
  { id: 3, name: 'Sienna Blake', email: 's.blake@shop.pos', role: 'STAFF', active: true, initials: 'SB', color: '#c084fc', bg: 'rgba(192,132,252,0.1)' },
  { id: 4, name: 'Arthur Sterling', email: 'sterling.a@shop.pos', role: 'MANAGER', active: false, initials: 'AS', color: '#fb923c', bg: 'rgba(251,146,60,0.1)' },
]

const getRoleBadge = (role: string) => {
  switch (role) {
    case 'ADMIN':
      return { color: '#4be277', bg: 'rgba(75,226,119,0.1)', border: 'rgba(75,226,119,0.2)' }
    case 'MANAGER':
      return { color: '#4be277', bg: 'rgba(75,226,119,0.1)', border: 'rgba(75,226,119,0.2)' }
    case 'STAFF':
      return { color: '#adc6ff', bg: 'rgba(5,102,217,0.1)', border: 'rgba(5,102,217,0.2)' }
    default:
      return { color: '#bccbb9', bg: 'rgba(45,52,73,0.5)', border: 'rgba(61,74,61,0.2)' }
  }
}

export default function StaffsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '', email: '', role: 'STAFF', password: ''
  })

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style>{`.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }`}</style>

      <div className="p-8 lg:p-12 space-y-10" style={{ fontFamily: 'Manrope, sans-serif', paddingBottom: '6rem' }}>

        {/* Page Header */}
        <section>
          <h2 className="text-4xl font-extrabold tracking-tight text-white">User Management</h2>
          <p className="mt-2 text-lg font-light leading-relaxed max-w-2xl" style={{ color: '#bccbb9' }}>
            Configure access levels, monitor staff status, and manage your team members efficiently.
          </p>
        </section>

        <div className="grid grid-cols-12 gap-10">

          {/* LEFT: Staff Table */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <div className="rounded-xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: '#171f33', border: '1px solid rgba(255,255,255,0.05)' }}>

              {/* Table Header */}
              <div className="px-8 py-6 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 className="font-semibold" style={{ color: '#e2e8f0' }}>Active Staff Registry</h3>
                <div className="flex gap-2">
                  {['Export CSV', 'Filters'].map((btn) => (
                    <button key={btn} className="px-4 py-2 text-xs font-semibold rounded-lg transition-colors"
                      style={{ backgroundColor: '#2d3449', color: '#cbd5e1' }}>
                      {btn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-xs font-bold uppercase"
                      style={{ color: '#64748b', letterSpacing: '0.2em', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(19,27,46,0.5)' }}>
                      <th className="px-8 py-4">Identity</th>
                      <th className="px-8 py-4">Access Tier</th>
                      <th className="px-8 py-4">Activity Status</th>
                      <th className="px-8 py-4 text-right">Control</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffList.map((staff) => {
                      const roleBadge = getRoleBadge(staff.role)
                      return (
                        <tr key={staff.id} className="group transition-colors"
                          style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}
                          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'}
                          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>

                          {/* Identity */}
                          <td className="px-8 py-5">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                                style={{ backgroundColor: staff.bg, color: staff.color }}>
                                {staff.initials}
                              </div>
                              <div>
                                <p className="text-sm font-semibold" style={{ color: '#e2e8f0' }}>{staff.name}</p>
                                <p className="text-xs" style={{ color: '#64748b' }}>{staff.email}</p>
                              </div>
                            </div>
                          </td>

                          {/* Role */}
                          <td className="px-8 py-5">
                            <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                              style={{ backgroundColor: roleBadge.bg, color: roleBadge.color, border: `1px solid ${roleBadge.border}` }}>
                              {staff.role}
                            </span>
                          </td>

                          {/* Status */}
                          <td className="px-8 py-5">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: staff.active ? '#4be277' : '#475569' }}></span>
                              <span className="text-xs font-medium" style={{ color: staff.active ? '#94a3b8' : '#475569' }}>
                                {staff.active ? 'Active Now' : 'Offline'}
                              </span>
                            </div>
                          </td>

                          {/* Actions */}
                          <td className="px-8 py-5 text-right">
                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="p-2 rounded-lg transition-colors hover:bg-white/10"
                                style={{ color: '#94a3b8' }}>
                                <span className="material-symbols-outlined text-lg">edit</span>
                              </button>
                              <button className="p-2 rounded-lg transition-colors"
                                style={{ color: 'rgba(255,180,171,0.6)' }}
                                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,180,171,0.1)')}
                                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                                <span className="material-symbols-outlined text-lg">block</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-8 py-5 flex items-center justify-between"
                style={{ backgroundColor: 'rgba(19,27,46,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: '#64748b' }}>
                  Showing 4 of 24 staff members
                </p>
                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-lg transition-colors opacity-20 cursor-not-allowed"
                    style={{ color: '#94a3b8' }} disabled>
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <span className="text-xs font-bold" style={{ color: '#4be277' }}>1</span>
                  <button className="p-2 rounded-lg transition-colors hover:bg-white/5"
                    style={{ color: '#94a3b8' }}>
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Add Staff Form */}
          <div className="col-span-12 lg:col-span-4">
            <div className="rounded-xl shadow-2xl sticky top-24"
              style={{ backgroundColor: '#171f33', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#e2e8f0' }}>Onboard Staff</h3>
                  <p className="text-xs font-medium uppercase tracking-wider mt-1" style={{ color: '#64748b' }}>
                    Invite a new team member
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest ml-1" style={{ color: '#64748b' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahim Uddin"
                      className="w-full py-3.5 px-5 rounded-xl text-sm outline-none"
                      style={{ backgroundColor: '#2d3449', border: 'none', color: '#e2e8f0' }}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest ml-1" style={{ color: '#64748b' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahim@shop.pos"
                      className="w-full py-3.5 px-5 rounded-xl text-sm outline-none"
                      style={{ backgroundColor: '#2d3449', border: 'none', color: '#e2e8f0' }}
                    />
                  </div>

                  {/* Role */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest ml-1" style={{ color: '#64748b' }}>
                      Access Tier
                    </label>
                    <div className="relative">
                      <select
                        value={formData.role}
                        onChange={e => setFormData({ ...formData, role: e.target.value })}
                        className="w-full py-3.5 px-5 rounded-xl text-sm outline-none appearance-none cursor-pointer"
                        style={{ backgroundColor: '#2d3449', border: 'none', color: '#e2e8f0' }}>
                        <option value="STAFF">Staff Member</option>
                        <option value="MANAGER">Manager</option>
                        <option value="ADMIN">Administrator</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                        style={{ color: '#64748b' }}>unfold_more</span>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest ml-1" style={{ color: '#64748b' }}>
                      Temporary Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                        placeholder="••••••••••••"
                        className="w-full py-3.5 px-5 pr-12 rounded-xl text-sm outline-none"
                        style={{ backgroundColor: '#2d3449', border: 'none', color: '#e2e8f0' }}
                      />
                      <button type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
                        style={{ color: '#64748b' }}>
                        <span className="material-symbols-outlined text-lg">
                          {showPassword ? 'visibility_off' : 'visibility'}
                        </span>
                      </button>
                    </div>
                    <p className="text-xs italic px-1" style={{ color: '#475569' }}>
                      User will be prompted to reset upon first login.
                    </p>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      className="w-full py-4 rounded-xl font-bold text-sm tracking-tight transition-all hover:opacity-90 active:scale-[0.98] shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #4be277, #22c55e)', color: '#004b1e', boxShadow: '0 4px 15px rgba(75,226,119,0.1)' }}>
                      Generate Invitation
                    </button>
                    <p className="text-center text-xs mt-3 uppercase tracking-tighter" style={{ color: '#475569' }}>
                      Secure invitation will be sent via email
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Footer Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-6 px-8 py-3.5 rounded-full shadow-2xl z-50"
        style={{ backgroundColor: 'rgba(23,31,51,0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4be277' }}></div>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#94a3b8' }}>
            Active Seats: 12/25
          </span>
        </div>
        <div className="w-px h-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
        <button className="flex items-center gap-2 transition-colors" style={{ color: '#94a3b8' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#4be277')}
          onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}>
          <span className="material-symbols-outlined text-sm">security</span>
          <span className="text-xs font-bold uppercase tracking-widest">Audit Logs</span>
        </button>
        <div className="w-px h-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
        <button className="flex items-center gap-2 transition-colors" style={{ color: '#94a3b8' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#4be277')}
          onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}>
          <span className="material-symbols-outlined text-sm">history_edu</span>
          <span className="text-xs font-bold uppercase tracking-widest">Permissions</span>
        </button>
      </div>
    </>
  )
}