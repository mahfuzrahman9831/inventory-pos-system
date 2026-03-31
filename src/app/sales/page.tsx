'use client'

import { useState } from 'react'

const kpiData = [
  { icon: 'payments', iconColor: '#4be277', iconBg: 'rgba(75,226,119,0.1)', label: 'New Sales', value: '৳ 1,42,850', badge: '+25.5%', badgeColor: '#4be277', badgeBg: 'rgba(75,226,119,0.05)', up: true },
  { icon: 'shopping_bag', iconColor: '#adc6ff', iconBg: 'rgba(5,102,217,0.1)', label: 'Total Orders', value: '1,842', badge: '+12.3%', badgeColor: '#4be277', badgeBg: 'rgba(75,226,119,0.05)', up: true },
  { icon: 'group', iconColor: '#ffba61', iconBg: 'rgba(239,153,0,0.1)', label: 'Total Customers', value: '12,402', badge: '+8.1%', badgeColor: '#4be277', badgeBg: 'rgba(75,226,119,0.05)', up: true },
  { icon: 'inventory', iconColor: '#ffb4ab', iconBg: 'rgba(255,180,171,0.1)', label: 'Units Sold', value: '5,190', badge: '-2.4%', badgeColor: '#ffb4ab', badgeBg: 'rgba(255,180,171,0.05)', up: false },
]

const chartData = [
  { month: 'JAN', sales: 75, marketing: 50 },
  { month: 'FEB', sales: 65, marketing: 40 },
  { month: 'MAR', sales: 80, marketing: 60 },
  { month: 'APR', sales: 60, marketing: 50 },
  { month: 'MAY', sales: 85, marketing: 65 },
  { month: 'JUN', sales: 75, marketing: 50 },
  { month: 'JUL', sales: 95, marketing: 75 },
  { month: 'AUG', sales: 65, marketing: 50 },
]

const products = [
  { sku: '#GR-001', name: 'Grocery Bundle Pack', brand: 'Local', category: 'Grocery', soldQty: 245, soldAmount: '৳ 48,755', instock: 82, status: 'in' },
  { sku: '#BF-002', name: 'Baby Cerelac Pack', brand: 'Nestle', category: 'Baby Food', soldQty: 189, soldAmount: '৳ 32,130', instock: 14, status: 'low' },
  { sku: '#SK-003', name: 'Skin Glow Cream', brand: 'Garnier', category: 'Skin Care', soldQty: 112, soldAmount: '৳ 39,200', instock: 45, status: 'in' },
  { sku: '#LB-004', name: 'Ladies Leather Bag', brand: 'Local', category: 'Ladies Bag', soldQty: 78, soldAmount: '৳ 28,500', instock: 0, status: 'out' },
  { sku: '#SB-005', name: 'School Backpack XL', brand: 'Polo', category: 'School Bag', soldQty: 156, soldAmount: '৳ 22,800', instock: 32, status: 'in' },
]

const getStatusDot = (status: string) => {
  if (status === 'in') return { color: '#4be277', pulse: false }
  if (status === 'low') return { color: '#ffba61', pulse: true }
  return { color: '#ffb4ab', pulse: false }
}

export default function Sales() {
  const [currentPage, setCurrentPage] = useState(1)
  const [dateRange] = useState('Nov 01, 2024 - Nov 30, 2024')

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0b1326; }
        ::-webkit-scrollbar-thumb { background: #2d3449; border-radius: 10px; }
      `}</style>

      <div className="px-8 lg:px-12 py-8 space-y-10" style={{ fontFamily: 'Manrope, sans-serif' }}>

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Sales Report</h1>
            <p style={{ color: '#bccbb9' }}>Detailed performance analysis and inventory velocity.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-pointer transition-colors"
              style={{ backgroundColor: '#131b2e', border: '1px solid rgba(61,74,61,0.1)' }}>
              <span className="material-symbols-outlined text-xl" style={{ color: '#4be277' }}>calendar_today</span>
              <span className="text-sm font-medium text-white">{dateRange}</span>
              <span className="material-symbols-outlined text-lg" style={{ color: '#bccbb9' }}>expand_more</span>
            </div>
            <button className="flex items-center gap-2 py-2.5 px-6 rounded-xl text-sm font-bold transition-opacity hover:opacity-90 shadow-lg"
              style={{ backgroundColor: '#4be277', color: '#003915', boxShadow: '0 4px 15px rgba(75,226,119,0.1)' }}>
              <span className="material-symbols-outlined text-lg">download</span>
              Generate Report
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {kpiData.map((kpi, i) => (
            <div key={i} className="p-8 rounded-xl relative overflow-hidden group transition-all"
              style={{ backgroundColor: '#171f33', border: '1px solid rgba(61,74,61,0.05)' }}>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <span className="material-symbols-outlined text-6xl" style={{ color: kpi.iconColor }}>{kpi.icon}</span>
              </div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: kpi.iconBg, color: kpi.iconColor }}>
                  <span className="material-symbols-outlined">{kpi.icon}</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold px-2 py-1 rounded"
                  style={{ color: kpi.badgeColor, backgroundColor: kpi.badgeBg }}>
                  <span className="material-symbols-outlined text-sm">{kpi.up ? 'arrow_upward' : 'arrow_downward'}</span>
                  {kpi.badge}
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#bccbb9' }}>{kpi.label}</div>
              <div className="text-3xl font-extrabold text-white">{kpi.value}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="p-10 rounded-xl shadow-2xl"
          style={{ backgroundColor: '#171f33', border: '1px solid rgba(61,74,61,0.05)' }}>
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-bold text-white">Revenue Growth vs Marketing</h3>
              <p className="text-sm mt-1" style={{ color: '#bccbb9' }}>Monthly comparison between gross sales and ad spend.</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#4be277' }}></div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#bccbb9' }}>Sales</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#adc6ff' }}></div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#bccbb9' }}>Marketing</span>
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="relative h-72 w-full flex items-end gap-2 px-4">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full border-t" style={{ borderColor: 'rgba(61,74,61,0.1)' }}></div>
              ))}
            </div>

            {chartData.map((item, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end items-center gap-1 h-full group relative">
                {/* Tooltip */}
                <div className="absolute -top-8 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap"
                  style={{ backgroundColor: '#31394d', color: '#dae2fd' }}>
                  Sales: {item.sales}%
                </div>
                {/* Marketing Bar */}
                <div className="w-4 rounded-t-full transition-all"
                  style={{ height: `${item.marketing}%`, backgroundColor: 'rgba(173,198,255,0.2)' }}></div>
                {/* Sales Bar */}
                <div className="w-4 rounded-t-full transition-all"
                  style={{
                    height: `${item.sales}%`,
                    backgroundColor: '#4be277',
                    boxShadow: item.sales >= 90 ? '0 0 20px rgba(75,226,119,0.3)' : 'none',
                  }}></div>
                <span className="text-xs font-bold mt-3" style={{ color: '#bccbb9' }}>{item.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Table */}
        <div className="rounded-xl overflow-hidden"
          style={{ backgroundColor: '#171f33', border: '1px solid rgba(61,74,61,0.05)' }}>

          {/* Table Header */}
          <div className="px-8 py-6 flex justify-between items-center"
            style={{ backgroundColor: 'rgba(34,42,61,0.5)', borderBottom: '1px solid rgba(61,74,61,0.1)' }}>
            <h3 className="text-xl font-bold text-white">Inventory Performance</h3>
            <div className="flex items-center gap-2">
              {['file_download', 'picture_as_pdf', 'more_vert'].map((icon, i) => (
                <>
                  {i === 2 && <div key="divider" className="h-6 w-px mx-1" style={{ backgroundColor: 'rgba(61,74,61,0.2)' }}></div>}
                  <button key={icon} className="p-2 rounded-lg transition-colors"
                    style={{ color: '#bccbb9' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#4be277'; e.currentTarget.style.backgroundColor = 'rgba(45,52,73,1)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#bccbb9'; e.currentTarget.style.backgroundColor = 'transparent' }}>
                    <span className="material-symbols-outlined text-xl">{icon}</span>
                  </button>
                </>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ backgroundColor: 'rgba(19,27,46,0.5)', borderBottom: '1px solid rgba(61,74,61,0.1)' }}>
                  {['SKU', 'Product Name', 'Brand', 'Category', 'Sold Qty', 'Sold Amount', 'Instock', 'Status'].map((h, i) => (
                    <th key={i} className="px-8 py-4 text-xs font-bold uppercase tracking-widest"
                      style={{
                        color: '#bccbb9',
                        textAlign: i >= 4 && i <= 6 ? 'right' : i === 7 ? 'center' : 'left',
                      }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => {
                  const dot = getStatusDot(product.status)
                  return (
                    <tr key={i} className="transition-colors"
                      style={{ borderBottom: '1px solid rgba(61,74,61,0.05)' }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(45,52,73,0.2)'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>

                      <td className="px-8 py-5 text-sm font-mono" style={{ color: '#bccbb9' }}>{product.sku}</td>

                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: '#0b1326' }}>
                            <span className="material-symbols-outlined text-sm" style={{ color: '#4be277' }}>inventory_2</span>
                          </div>
                          <span className="text-sm font-semibold text-white">{product.name}</span>
                        </div>
                      </td>

                      <td className="px-8 py-5 text-sm" style={{ color: '#bccbb9' }}>{product.brand}</td>

                      <td className="px-8 py-5">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
                          style={{ backgroundColor: '#2d3449', color: '#bccbb9' }}>
                          {product.category}
                        </span>
                      </td>

                      <td className="px-8 py-5 text-right text-sm font-semibold text-white">{product.soldQty}</td>
                      <td className="px-8 py-5 text-right text-sm font-bold" style={{ color: '#4be277' }}>{product.soldAmount}</td>
                      <td className="px-8 py-5 text-right text-sm text-white">{product.instock}</td>

                      <td className="px-8 py-5">
                        <div className="flex justify-center">
                          <span className="flex h-2 w-2 rounded-full"
                            style={{ backgroundColor: dot.color, animation: dot.pulse ? 'pulse 2s infinite' : 'none' }}></span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-8 py-4 flex items-center justify-between"
            style={{ backgroundColor: 'rgba(19,27,46,0.3)', borderTop: '1px solid rgba(61,74,61,0.05)' }}>
            <span className="text-xs" style={{ color: '#bccbb9' }}>Showing 1-5 of 42 products</span>
            <div className="flex items-center gap-2">
              <button disabled className="p-2 opacity-30" style={{ color: '#bccbb9' }}>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              {[1, 2, 3].map(p => (
                <button key={p} onClick={() => setCurrentPage(p)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-colors"
                  style={{
                    backgroundColor: currentPage === p ? '#4be277' : 'transparent',
                    color: currentPage === p ? '#003915' : '#bccbb9',
                  }}>
                  {p}
                </button>
              ))}
              <button className="p-2 transition-colors" style={{ color: '#bccbb9' }}>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Status Bar */}
      <div className="fixed bottom-6 right-6 flex items-center gap-3 px-4 py-2 rounded-full shadow-xl"
        style={{ backgroundColor: 'rgba(49,57,77,0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(75,226,119,0.2)' }}>
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4be277' }}></div>
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#dae2fd' }}>System Live</span>
        <div className="h-4 w-px" style={{ backgroundColor: 'rgba(61,74,61,0.3)' }}></div>
        <span className="text-xs" style={{ color: '#bccbb9' }}>Syncing: 2s ago</span>
      </div>
    </>
  )
}