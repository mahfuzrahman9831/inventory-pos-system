'use client'

import { useState } from 'react'

const customers = [
  { id: '#CUST-9021', name: 'Elena Rodriguez', tier: 'VIP Tier: Gold', email: 'elena.rod@vogue.com', phone: '+1 (555) 012-3456', location: 'Madrid, Spain', status: 'Active', initials: 'ER', color: '#4be277', bg: 'rgba(75,226,119,0.2)' },
  { id: '#CUST-8442', name: 'Marcus Chen', tier: 'Standard Client', email: 'marcus.c@techcorp.io', phone: '+65 9872 4431', location: 'Singapore', status: 'Inactive', initials: 'MC', color: '#60a5fa', bg: 'rgba(96,165,250,0.2)' },
  { id: '#CUST-7712', name: 'Sarah Jenkins', tier: 'VIP Tier: Platinum', email: 's.jenkins@lifestyle.com', phone: '+44 20 7946 0111', location: 'London, UK', status: 'Active', initials: 'SJ', color: '#c084fc', bg: 'rgba(192,132,252,0.2)' },
  { id: '#CUST-6550', name: 'Arthur Morgan', tier: 'New Client', email: 'a.morgan@frontier.net', phone: '+1 (202) 555-0182', location: 'Austin, USA', status: 'Active', initials: 'AM', color: '#fb923c', bg: 'rgba(251,146,60,0.2)' },
]

export default function Customers() {
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', country: 'Bangladesh'
  })

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #3d4a3d; border-radius: 10px; }
      `}</style>

      <div className="p-8 lg:p-10" style={{ fontFamily: 'Manrope, sans-serif' }}>

        {/* Page Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Customer Database</h2>
            <p className="text-sm mt-1" style={{ color: '#94a3b8' }}>
              Manage your boutique clientele and loyalty profiles.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
              style={{ backgroundColor: '#4be277', color: '#003915', boxShadow: '0 4px 15px rgba(75,226,119,0.2)' }}>
              <span className="material-symbols-outlined text-sm">person_add</span>
              Add New Customer
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-colors"
              style={{ border: '1px solid rgba(61,74,61,0.3)', color: '#dae2fd' }}>
              <span className="material-symbols-outlined text-sm">download</span>
              Export
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-colors"
              style={{ backgroundColor: '#222a3d', color: '#dae2fd' }}>
              <span className="material-symbols-outlined text-sm">filter_list</span>
              Filters
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden shadow-xl"
          style={{ backgroundColor: '#131b2e', border: '1px solid rgba(30,41,59,0.3)' }}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr style={{ backgroundColor: 'rgba(15,23,42,0.3)' }}>
                {['Code', 'Client Name', 'Contact Details', 'Location', 'Status', 'Actions'].map((h, i) => (
                  <th key={i} className="px-6 py-4 text-xs font-bold uppercase tracking-widest"
                    style={{ color: '#64748b', textAlign: i === 4 ? 'center' : i === 5 ? 'right' : 'left' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, i) => (
                <tr key={i} className="group transition-all duration-300"
                  style={{ borderTop: '1px solid rgba(30,41,59,0.3)' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(30,41,59,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>

                  {/* Code */}
                  <td className="px-6 py-5 font-mono text-xs" style={{ color: 'rgba(75,226,119,0.7)' }}>
                    {customer.id}
                  </td>

                  {/* Name */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0"
                        style={{ backgroundColor: customer.bg, color: customer.color, border: '2px solid rgba(30,41,59,1)' }}>
                        {customer.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{customer.name}</p>
                        <p className="text-xs font-medium mt-0.5" style={{ color: '#64748b' }}>{customer.tier}</p>
                      </div>
                    </div>
                  </td>

                  {/* Contact */}
                  <td className="px-6 py-5">
                    <p className="text-xs" style={{ color: '#dae2fd' }}>{customer.email}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#64748b' }}>{customer.phone}</p>
                  </td>

                  {/* Location */}
                  <td className="px-6 py-5 text-xs" style={{ color: '#94a3b8' }}>{customer.location}</td>

                  {/* Status */}
                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      {customer.status === 'Active' ? (
                        <span className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{ backgroundColor: 'rgba(75,226,119,0.1)', color: '#4be277', border: '1px solid rgba(75,226,119,0.2)' }}>
                          Active
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{ backgroundColor: 'rgba(30,41,59,1)', color: '#64748b', border: '1px solid rgba(51,65,85,1)' }}>
                          Inactive
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {[
                        { icon: 'edit', hoverColor: '#fff', hoverBg: 'rgba(51,65,85,1)' },
                        { icon: 'visibility', hoverColor: '#fff', hoverBg: 'rgba(51,65,85,1)' },
                        { icon: 'delete', hoverColor: '#ffb4ab', hoverBg: 'rgba(255,180,171,0.1)' },
                      ].map((btn, j) => (
                        <button key={j}
                          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                          style={{ backgroundColor: 'rgba(30,41,59,1)', color: j === 2 ? 'rgba(255,180,171,0.6)' : '#94a3b8' }}
                          onMouseEnter={e => { e.currentTarget.style.color = btn.hoverColor; e.currentTarget.style.backgroundColor = btn.hoverBg }}
                          onMouseLeave={e => { e.currentTarget.style.color = j === 2 ? 'rgba(255,180,171,0.6)' : '#94a3b8'; e.currentTarget.style.backgroundColor = 'rgba(30,41,59,1)' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{btn.icon}</span>
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-between"
            style={{ borderTop: '1px solid rgba(30,41,59,0.3)', backgroundColor: 'rgba(15,23,42,0.1)' }}>
            <p className="text-xs" style={{ color: '#64748b' }}>
              Showing <span className="text-white font-medium">4</span> of{' '}
              <span className="text-white font-medium">1,240</span> customers
            </p>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg transition-all"
                style={{ color: '#64748b' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(30,41,59,1)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#64748b' }}>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              {[1, 2, 3, '...', 42].map((page, i) => (
                <button key={i}
                  onClick={() => typeof page === 'number' && setCurrentPage(page)}
                  className="w-8 h-8 rounded-lg text-xs font-bold transition-all"
                  style={{
                    backgroundColor: currentPage === page ? '#4be277' : 'transparent',
                    color: currentPage === page ? '#003915' : '#64748b',
                    cursor: page === '...' ? 'default' : 'pointer',
                  }}>
                  {page}
                </button>
              ))}
              <button className="p-2 rounded-lg transition-all"
                style={{ color: '#64748b' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(30,41,59,1)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#64748b' }}>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Customer Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(2,6,23,0.8)', backdropFilter: 'blur(4px)' }}
          onClick={e => e.target === e.currentTarget && setShowModal(false)}>
          <div className="relative rounded-3xl p-8 shadow-2xl w-full max-w-md mx-4"
            style={{ backgroundColor: '#171f33', border: '1px solid rgba(255,255,255,0.05)' }}>

            {/* Close Button */}
            <button onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 transition-colors"
              style={{ color: '#64748b' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}>
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Modal Header */}
            <div className="mb-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(75,226,119,0.1)', color: '#4be277' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
              </div>
              <h3 className="text-xl font-extrabold text-white">Add New Profile</h3>
              <p className="text-sm mt-2" style={{ color: '#94a3b8' }}>
                Initialize a new customer record with loyalty integration.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-5">
              {[
                { label: 'Full Name', placeholder: 'e.g. Rahim Uddin', type: 'text', key: 'name', icon: null },
                { label: 'Email Address', placeholder: 'client@example.com', type: 'email', key: 'email', icon: null },
                { label: 'Phone Number', placeholder: '01711000000', type: 'tel', key: 'phone', icon: 'call' },
              ].map(field => (
                <div key={field.key} className="space-y-1.5">
                  <label className="text-xs uppercase tracking-widest font-bold pl-1" style={{ color: '#64748b' }}>
                    {field.label}
                  </label>
                  <div className="relative">
                    {field.icon && (
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-lg" style={{ color: '#64748b' }}>
                        {field.icon}
                      </span>
                    )}
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="w-full py-3 px-4 rounded-xl text-sm outline-none"
                      style={{
                        backgroundColor: '#2d3449',
                        border: 'none',
                        color: '#dae2fd',
                        paddingLeft: field.icon ? '3rem' : '1rem',
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* Country */}
              <div className="space-y-1.5 pb-2">
                <label className="text-xs uppercase tracking-widest font-bold pl-1" style={{ color: '#64748b' }}>
                  Country
                </label>
                <select
                  value={formData.country}
                  onChange={e => setFormData({ ...formData, country: e.target.value })}
                  className="w-full py-3 px-4 rounded-xl text-sm outline-none appearance-none cursor-pointer"
                  style={{ backgroundColor: '#2d3449', border: 'none', color: '#dae2fd' }}>
                  <option>Bangladesh</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Submit */}
              <div className="pt-5" style={{ borderTop: '1px solid rgba(30,41,59,0.5)' }}>
                <button
                  className="w-full font-bold py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #4be277, #22c55e)', color: '#004b1e', boxShadow: '0 4px 20px rgba(75,226,119,0.1)' }}>
                  Create Profile
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
                <p className="text-center text-xs mt-4 leading-relaxed px-4" style={{ color: '#64748b' }}>
                  By creating a profile, the customer will automatically be enrolled in the{' '}
                  <span style={{ color: 'rgba(75,226,119,0.8)' }}>Silver Tier</span> loyalty program.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}