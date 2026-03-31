'use client'

import { useState } from 'react'

const kpiCards = [
  { icon: 'payments', iconColor: '#4be277', iconBg: 'rgba(75,226,119,0.1)', badge: '+12.5%', badgeColor: '#4be277', badgeBg: 'rgba(75,226,119,0.1)', label: 'Total Revenue', value: '৳ 4,12,850.00', border: false },
  { icon: 'trending_up', iconColor: '#adc6ff', iconBg: 'rgba(173,198,255,0.1)', badge: '+8.2%', badgeColor: '#adc6ff', badgeBg: 'rgba(173,198,255,0.1)', label: 'Net Profit', value: '৳ 1,28,420.00', border: false },
  { icon: 'group', iconColor: '#ffba61', iconBg: 'rgba(255,186,97,0.1)', badge: 'Stable', badgeColor: 'rgba(255,255,255,0.4)', badgeBg: 'rgba(255,255,255,0.05)', label: 'Active Customers', value: '2,840', border: false },
  { icon: 'warning', iconColor: '#ffb4ab', iconBg: 'rgba(255,180,171,0.1)', badge: 'Action Required', badgeColor: '#ffb4ab', badgeBg: 'rgba(255,180,171,0.1)', label: 'Low Stock Items', value: '14 Items', border: true },
]

const chartBars = [
  { height: 40, highlight: false },
  { height: 65, highlight: false },
  { height: 55, highlight: false },
  { height: 90, highlight: true },
  { height: 75, highlight: false },
  { height: 60, highlight: false },
  { height: 82, highlight: false },
  { height: 95, highlight: true },
  { height: 70, highlight: false },
  { height: 85, highlight: false },
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']

const reportCards = [
  {
    icon: 'analytics', iconColor: '#4be277', iconBg: 'rgba(75,226,119,0.1)',
    arrowColor: '#4be277', title: 'Sales Reports',
    desc: 'Granular breakdowns of daily volume, refunds, and payment distributions.',
    tags: ['Daily Breakdown', 'Refund Ledger'],
  },
  {
    icon: 'inventory', iconColor: '#adc6ff', iconBg: 'rgba(173,198,255,0.1)',
    arrowColor: '#adc6ff', title: 'Inventory Reports',
    desc: 'Stock valuation, wastage tracking, and real-time replenishment needs.',
    tags: ['Valuation', 'Wastage'],
  },
  {
    icon: 'person_search', iconColor: '#ffba61', iconBg: 'rgba(255,186,97,0.1)',
    arrowColor: '#ffba61', title: 'Customer Analytics',
    desc: 'Loyalty tier performance, demographics, and top spender identification.',
    tags: ['Loyalty KPIs', 'Retention'],
  },
  {
    icon: 'badge', iconColor: '#adc6ff', iconBg: 'rgba(173,198,255,0.1)',
    arrowColor: '#adc6ff', title: 'Staff Performance',
    desc: 'Sales by team member, shift attendance, and commission tracking.',
    tags: ['Commission', 'Attendance'],
  },
]

const exports = [
  { icon: 'picture_as_pdf', iconColor: '#ffb4ab', title: 'EOD Sales Summary', meta: 'PDF Format • 2.4MB' },
  { icon: 'table_chart', iconColor: '#4be277', title: 'Inventory Master List', meta: 'CSV Format • 1.1MB' },
  { icon: 'group_add', iconColor: '#ffba61', title: 'Customer Mailing List', meta: 'XLSX Format • 840KB' },
]

export default function ReportsPage() {
  const [activeRange, setActiveRange] = useState('Today')

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style>{`.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }`}</style>

      <div className="px-8 lg:px-12 py-8 space-y-10 max-w-7xl" style={{ fontFamily: 'Manrope, sans-serif' }}>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-2">Reports Dashboard</h2>
            <p className="max-w-lg" style={{ color: '#bccbb9' }}>
              Advanced insights and comprehensive performance analytics for your supershop.
            </p>
          </div>
          <div className="flex items-center gap-1 p-1.5 rounded-xl" style={{ backgroundColor: '#131b2e' }}>
            {['Today', 'Week', 'Custom Range'].map(range => (
              <button key={range} onClick={() => setActiveRange(range)}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2"
                style={{
                  backgroundColor: activeRange === range
                    ? range === 'Custom Range' ? 'rgba(75,226,119,0.1)' : '#171f33'
                    : 'transparent',
                  color: activeRange === range
                    ? range === 'Custom Range' ? '#4be277' : '#dae2fd'
                    : '#94a3b8',
                  fontWeight: activeRange === range ? 700 : 500,
                }}>
                {range === 'Custom Range' && (
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                )}
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* KPI Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiCards.map((kpi, i) => (
            <div key={i} className="p-6 rounded-xl space-y-4"
              style={{
                backgroundColor: '#171f33',
                border: kpi.border ? '1px solid rgba(255,180,171,0.1)' : '1px solid transparent',
              }}>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: kpi.iconBg }}>
                  <span className="material-symbols-outlined" style={{ color: kpi.iconColor }}>{kpi.icon}</span>
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ color: kpi.badgeColor, backgroundColor: kpi.badgeBg }}>
                  {kpi.badge}
                </span>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: '#bccbb9' }}>{kpi.label}</p>
                <h3 className="text-2xl font-bold text-white mt-1">{kpi.value}</h3>
              </div>
            </div>
          ))}
        </section>

        {/* Chart */}
        <section className="p-8 rounded-xl" style={{ backgroundColor: '#171f33' }}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-white">Cumulative Performance</h3>
              <p className="text-sm mt-1" style={{ color: '#bccbb9' }}>
                Comparing total sales velocity and net profitability margins over time.
              </p>
            </div>
            <div className="flex items-center gap-4">
              {[{ color: '#4be277', label: 'Sales' }, { color: '#adc6ff', label: 'Profit' }].map(item => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs font-medium" style={{ color: '#bccbb9' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-72 w-full relative flex items-end justify-between gap-2 pt-8">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className="w-full border-t border-white"></div>
              ))}
            </div>
            {chartBars.map((bar, i) => (
              <div key={i} className="flex-1 rounded-t-lg transition-all cursor-pointer"
                style={{
                  height: `${bar.height}%`,
                  backgroundColor: bar.highlight ? 'rgba(75,226,119,0.8)' : '#2d3449',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = bar.highlight ? '#4be277' : 'rgba(75,226,119,0.2)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = bar.highlight ? 'rgba(75,226,119,0.8)' : '#2d3449'}>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4 px-1">
            {months.map(m => (
              <span key={m} className="text-xs font-bold uppercase tracking-widest" style={{ color: '#bccbb9' }}>{m}</span>
            ))}
          </div>
        </section>

        {/* Report Explorer + Exports */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Report Cards */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-white px-1">Report Explorer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reportCards.map((card, i) => (
                <div key={i} className="p-6 rounded-xl transition-all cursor-pointer group"
                  style={{ backgroundColor: '#171f33', border: '1px solid transparent' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#222a3d'; e.currentTarget.style.borderColor = 'rgba(75,226,119,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#171f33'; e.currentTarget.style.borderColor = 'transparent' }}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: card.iconBg }}>
                      <span className="material-symbols-outlined text-3xl" style={{ color: card.iconColor }}>{card.icon}</span>
                    </div>
                    <span className="material-symbols-outlined transition-colors"
                      style={{ color: 'rgba(255,255,255,0.2)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = card.arrowColor)}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}>
                      arrow_forward
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{card.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#bccbb9' }}>{card.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold uppercase tracking-tighter px-2 py-1 rounded"
                        style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#bccbb9' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">

            {/* Common Exports */}
            <div className="rounded-xl overflow-hidden shadow-xl" style={{ backgroundColor: '#171f33' }}>
              <div className="p-6 flex items-center gap-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="material-symbols-outlined" style={{ color: '#4be277' }}>download</span>
                <h3 className="font-bold text-white">Common Exports</h3>
              </div>
              <div className="p-2">
                {exports.map((item, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-4 rounded-lg transition-colors group"
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined" style={{ color: item.iconColor }}>{item.icon}</span>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs font-bold uppercase" style={{ color: '#bccbb9' }}>{item.meta}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined transition-colors" style={{ color: 'rgba(255,255,255,0.2)' }}>
                      download
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Marketing ROI */}
            <div className="relative p-6 rounded-xl overflow-hidden cursor-pointer group"
              style={{ backgroundColor: '#222a3d', border: '1px solid rgba(75,226,119,0.2)' }}>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 transition-all"
                style={{ backgroundColor: 'rgba(75,226,119,0.05)', filter: 'blur(48px)' }}></div>
              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(75,226,119,0.2)' }}>
                  <span className="material-symbols-outlined" style={{ color: '#4be277' }}>campaign</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Marketing ROI</h4>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: '#bccbb9' }}>
                    Track campaign spend vs conversion metrics in real-time.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div>
                    <p className="text-xs font-bold uppercase" style={{ color: '#bccbb9' }}>Current Spend</p>
                    <p className="text-lg font-bold text-white">৳ 12,400</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold uppercase" style={{ color: '#bccbb9' }}>Conversion</p>
                    <p className="text-lg font-bold" style={{ color: '#4be277' }}>14.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}