'use client'

import { useState } from 'react'

const kpiData = [
  {
    icon: 'payments',
    iconColor: '#22C55E',
    iconBg: 'rgba(34,197,94,0.1)',
    badge: '+22%',
    badgeColor: '#22C55E',
    badgeBg: 'rgba(34,197,94,0.1)',
    label: 'Total Sales',
    value: '৳ 48,988,078',
  },
  {
    icon: 'assignment_return',
    iconColor: '#ffb4ab',
    iconBg: 'rgba(255,180,171,0.1)',
    badge: '-22%',
    badgeColor: '#ffb4ab',
    badgeBg: 'rgba(255,180,171,0.1)',
    label: 'Total Sales Return',
    value: '৳ 16,478,145',
  },
  {
    icon: 'shopping_cart',
    iconColor: '#adc6ff',
    iconBg: 'rgba(5,102,217,0.2)',
    badge: '+22%',
    badgeColor: '#22C55E',
    badgeBg: 'rgba(34,197,94,0.1)',
    label: 'Total Purchase',
    value: '৳ 24,145,789',
  },
  {
    icon: 'keyboard_return',
    iconColor: '#ffba61',
    iconBg: 'rgba(239,153,0,0.2)',
    badge: '+22%',
    badgeColor: '#22C55E',
    badgeBg: 'rgba(34,197,94,0.1)',
    label: 'Total Purchase Return',
    value: '৳ 18,458,747',
  },
]

const recentTransactions = [
  { date: '24 May 2024', customer: 'Andrea Willer', invoice: '#114589', status: 'Completed', total: '৳ 4,560', statusColor: '#22C55E', statusBg: 'rgba(34,197,94,0.1)' },
  { date: '23 May 2024', customer: 'Timothy Sanders', invoice: '#114590', status: 'Completed', total: '৳ 3,569', statusColor: '#22C55E', statusBg: 'rgba(34,197,94,0.1)' },
  { date: '22 May 2024', customer: 'Bonnie Rodrigues', invoice: '#114591', status: 'Draft', total: '৳ 4,560', statusColor: '#ffb4ab', statusBg: 'rgba(255,180,171,0.1)' },
]

const topCustomers = [
  { initials: 'CC', name: 'Carlos Curran', orders: '24 Orders', amount: '৳ 8,964', color: '#22C55E', bg: 'rgba(34,197,94,0.2)' },
  { initials: 'SG', name: 'Stan Gaunter', orders: '22 Orders', amount: '৳ 16,985', color: '#fb923c', bg: 'rgba(251,146,60,0.2)' },
  { initials: 'RW', name: 'Richard Wilson', orders: '14 Orders', amount: '৳ 5,366', color: '#60a5fa', bg: 'rgba(96,165,250,0.2)' },
]

const topProducts = [
  { icon: 'shopping_bag', name: 'Grocery Bundle Pack', sub: '৳ 187 • 247+ Sales', badge: '↑ 25%' },
  { icon: 'child_care', name: 'Baby Food Combo', sub: '৳ 145 • 189+ Sales', badge: '↑ 18%' },
]

const lowStockProducts = [
  { icon: 'face', name: 'Skin Care Kit', sku: 'ID: #665814', stock: '08' },
  { icon: 'shopping_bag', name: 'Ladies Handbag', sku: 'ID: #940004', stock: '14' },
]

const chartBars = [40, 65, 50, 85, 60, 95, 45, 75, 30, 55, 80, 90]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('Sale')
  const [activeChart, setActiveChart] = useState('1M')

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style>{`.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }`}</style>

      <div className="p-8 lg:p-10 space-y-8" style={{ fontFamily: 'Manrope, sans-serif' }}>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((kpi, i) => (
            <div key={i} className="p-6 rounded-xl transition-all duration-300"
              style={{ backgroundColor: '#1E293B' }}>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: kpi.iconBg, color: kpi.iconColor }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{kpi.icon}</span>
                </div>
                <span className="text-xs font-bold px-2 py-1 rounded"
                  style={{ color: kpi.badgeColor, backgroundColor: kpi.badgeBg }}>
                  {kpi.badge}
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#64748b' }}>{kpi.label}</p>
              <h3 className="text-2xl font-extrabold text-white">{kpi.value}</h3>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left: Chart + Transactions + Products */}
          <div className="lg:col-span-8 space-y-8">

            {/* Chart Card */}
            <div className="p-8 rounded-xl shadow-2xl" style={{ backgroundColor: '#1E293B' }}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-xl font-bold text-white">Sales & Purchase</h2>
                  <p className="text-xs mt-1" style={{ color: '#64748b' }}>Net movement across all accounts</p>
                </div>
                <div className="flex p-1 rounded-lg" style={{ backgroundColor: '#0f172a' }}>
                  {['1D', '1W', '1M', '1Y'].map((t) => (
                    <button key={t} onClick={() => setActiveChart(t)}
                      className="px-3 py-1 text-xs font-bold rounded-md transition-all uppercase tracking-tighter"
                      style={{
                        backgroundColor: activeChart === t ? '#1E293B' : 'transparent',
                        color: activeChart === t ? '#22C55E' : '#64748b',
                      }}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-64 w-full flex items-end justify-between gap-2 px-2">
                {chartBars.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-lg transition-all"
                    style={{
                      height: `${h}%`,
                      backgroundColor: i % 2 === 1 ? '#22C55E' : 'rgba(15,23,42,0.8)',
                      opacity: i % 2 === 1 ? (h === 95 ? 1 : 0.8) : 1,
                      boxShadow: i % 2 === 1 && h === 95 ? '0 0 20px rgba(34,197,94,0.3)' : 'none',
                    }} />
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#22C55E' }}></div>
                  <span className="text-xs font-medium" style={{ color: '#94a3b8' }}>Net Sales</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#0f172a' }}></div>
                  <span className="text-xs font-medium" style={{ color: '#94a3b8' }}>Purchase Volume</span>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1E293B' }}>
              <div className="p-6 flex justify-between items-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(249,115,22,0.1)', color: '#f97316' }}>
                    <span className="material-symbols-outlined">flag</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
                </div>
                <a href="/sales" className="text-xs font-bold transition-colors" style={{ color: '#64748b' }}>View All</a>
              </div>

              {/* Tabs */}
              <div className="px-6 flex gap-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                {['Sale', 'Purchase', 'Expenses'].map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    className="text-xs font-bold py-3 transition-colors"
                    style={{
                      color: activeTab === tab ? '#22C55E' : '#64748b',
                      borderBottom: activeTab === tab ? '2px solid #22C55E' : '2px solid transparent',
                    }}>
                    {tab}
                  </button>
                ))}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr style={{ color: '#64748b', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <th className="px-6 py-4 font-bold">Date</th>
                      <th className="px-6 py-4 font-bold">Customer</th>
                      <th className="px-6 py-4 font-bold">Status</th>
                      <th className="px-6 py-4 font-bold text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((tx, i) => (
                      <tr key={i} className="transition-colors hover:bg-white/5"
                        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td className="px-6 py-4 text-sm" style={{ color: '#94a3b8' }}>{tx.date}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                              style={{ backgroundColor: '#0f172a', color: '#22C55E' }}>
                              {tx.customer.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="font-bold text-white text-sm">{tx.customer}</p>
                              <p className="text-xs" style={{ color: '#64748b' }}>{tx.invoice}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-bold"
                            style={{ color: tx.statusColor, backgroundColor: tx.statusBg }}>
                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: tx.statusColor }}></span>
                            {tx.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-white">{tx.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top & Low Stock */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#1E293B' }}>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md" style={{ backgroundColor: 'rgba(34,197,94,0.1)', color: '#22C55E' }}>
                      <span className="material-symbols-outlined text-sm">inventory_2</span>
                    </div>
                    <h4 className="font-bold text-white text-sm">Top Selling Products</h4>
                  </div>
                </div>
                <div className="space-y-4">
                  {topProducts.map((p, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded flex items-center justify-center" style={{ backgroundColor: '#0f172a' }}>
                          <span className="material-symbols-outlined" style={{ color: '#64748b' }}>{p.icon}</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">{p.name}</p>
                          <p className="text-xs" style={{ color: '#64748b' }}>{p.sub}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-1.5 py-0.5 rounded"
                        style={{ color: '#22C55E', backgroundColor: 'rgba(34,197,94,0.1)' }}>{p.badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl" style={{ backgroundColor: '#1E293B' }}>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md" style={{ backgroundColor: 'rgba(255,180,171,0.1)', color: '#ffb4ab' }}>
                      <span className="material-symbols-outlined text-sm">warning</span>
                    </div>
                    <h4 className="font-bold text-white text-sm">Low Stock Products</h4>
                  </div>
                  <a href="/inventory" className="text-xs font-bold" style={{ color: '#64748b' }}>View All</a>
                </div>
                <div className="space-y-4">
                  {lowStockProducts.map((p, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded flex items-center justify-center" style={{ backgroundColor: '#0f172a' }}>
                          <span className="material-symbols-outlined" style={{ color: '#64748b' }}>{p.icon}</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">{p.name}</p>
                          <p className="text-xs" style={{ color: '#64748b' }}>{p.sku}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs" style={{ color: '#64748b' }}>Instock</p>
                        <p className="text-xs font-bold" style={{ color: '#f97316' }}>{p.stock}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Overall Info + Top Customers + Donut */}
          <div className="lg:col-span-4 space-y-8">

            {/* Overall Info */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#1E293B' }}>
              <h3 className="text-lg font-bold text-white mb-6">Overall Information</h3>
              <div className="space-y-5">
                {[
                  { icon: 'local_shipping', label: 'Active Suppliers', value: '6,987' },
                  { icon: 'groups', label: 'Total Customers', value: '4,896' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#0f172a', color: '#94a3b8' }}>
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase" style={{ color: '#64748b' }}>{item.label}</p>
                        <p className="text-lg font-bold text-white">{item.value}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: '#334155' }}>chevron_right</span>
                  </div>
                ))}

                <div className="pt-4 grid grid-cols-2 gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {[
                    { label: 'FIRST TIME', value: '5.5K', badge: '↑ 25%' },
                    { label: 'RETURN', value: '3.5K', badge: '↑ 21%' },
                  ].map((item, i) => (
                    <div key={i} className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(15,23,42,0.5)' }}>
                      <p className="text-xs font-bold" style={{ color: '#64748b' }}>{item.label}</p>
                      <div className="flex items-end gap-2">
                        <p className="text-xl font-bold text-white">{item.value}</p>
                        <span className="text-xs font-bold mb-1" style={{ color: '#22C55E' }}>{item.badge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Customers */}
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1E293B' }}>
              <div className="p-6 flex justify-between items-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(34,197,94,0.1)', color: '#22C55E' }}>
                    <span className="material-symbols-outlined">person_search</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Top Customers</h3>
                </div>
                <a href="/customers" className="text-xs font-bold" style={{ color: '#64748b' }}>View All</a>
              </div>
              <div className="p-6 space-y-5">
                {topCustomers.map((c, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm"
                        style={{ backgroundColor: c.bg, color: c.color }}>
                        {c.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{c.name}</p>
                        <p className="text-xs" style={{ color: '#64748b' }}>{c.orders}</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-white">{c.amount}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Donut Chart */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#1E293B' }}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Customers Overview</h3>
              </div>
              <div className="relative flex justify-center items-center py-4">
                <div className="w-40 h-40 rounded-full relative flex items-center justify-center"
                  style={{ border: '10px solid rgba(15,23,42,0.8)' }}>
                  <div className="absolute inset-[-10px] rounded-full"
                    style={{ border: '10px solid #22C55E', borderRightColor: 'transparent', borderBottomColor: 'transparent', transform: 'rotate(45deg)' }}>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-white">74%</span>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#64748b' }}>Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Inventory Health */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 p-8 rounded-xl relative overflow-hidden" style={{ backgroundColor: '#1E293B' }}>
            <div className="relative z-10">
              <h4 className="text-2xl font-black text-white mb-2">Inventory Health</h4>
              <p className="text-sm max-w-sm" style={{ color: '#94a3b8' }}>
                Manage your supershop catalog across all categories with real-time stock tracking.
              </p>
              <a href="/inventory">
                <button className="mt-6 px-6 py-2.5 rounded-full text-xs font-bold transition-colors hover:bg-white/10"
                  style={{ backgroundColor: 'rgba(15,23,42,0.8)', color: '#dae2fd' }}>
                  View Detailed Report
                </button>
              </a>
            </div>
            <span className="material-symbols-outlined absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ fontSize: '120px', color: 'rgba(255,255,255,0.05)' }}>warehouse</span>
          </div>

          <div className="p-8 rounded-xl flex flex-col justify-between"
            style={{ backgroundColor: '#1E293B', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(34,197,94,0.1)', color: '#22C55E' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <h4 className="text-lg font-bold text-white">System Status</h4>
              <p className="text-xs mt-2" style={{ color: '#64748b' }}>
                Operating at 99.98% with <span style={{ color: '#22C55E', fontWeight: 'bold' }}>12ms</span> latency.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <div className="h-1.5 flex-1 rounded-full overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
                <div className="h-full w-full rounded-full" style={{ backgroundColor: '#22C55E' }}></div>
              </div>
              <span className="text-xs font-bold" style={{ color: '#22C55E' }}>LIVE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}