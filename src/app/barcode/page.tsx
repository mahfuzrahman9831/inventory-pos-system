'use client'

import { useState } from 'react'

const initialProducts = [
  { id: 1, name: 'Grocery Bundle Pack', category: 'Grocery', sku: 'GR001', code: 'HG3FK', qty: 12, price: '৳ 400.00' },
  { id: 2, name: 'Baby Food Combo', category: 'Baby Food', sku: 'BF045', code: 'JD99L', qty: 5, price: '৳ 300.00' },
]

const barWidths = [1, 2, 4, 1, 3, 1, 2, 4, 2, 1, 3, 2, 1, 4, 1, 2, 3]

export default function Barcode() {
  const [products, setProducts] = useState(initialProducts)
  const [showStoreName, setShowStoreName] = useState(true)
  const [showProductName, setShowProductName] = useState(true)
  const [showPrice, setShowPrice] = useState(true)
  const [paperSize, setPaperSize] = useState('50x30 mm (Standard)')
  const [warehouse, setWarehouse] = useState('Main Distribution Hub')
  const [generated, setGenerated] = useState(false)

  const totalLabels = products.reduce((sum, p) => sum + p.qty, 0)

  const updateQty = (id: number, delta: number) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p
    ))
  }

  const removeProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; }
      `}</style>

      <div className="flex flex-col min-h-screen" style={{ fontFamily: 'Manrope, sans-serif' }}>
        <div className="flex-1 pt-6 px-8 lg:px-12 pb-8 flex flex-col gap-8">

          {/* Page Header */}
          <section>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Barcode Lab</h2>
            <p className="text-sm mt-1 max-w-2xl opacity-80" style={{ color: '#bccbb9' }}>
              Precision generation and thermal printing for your supershop inventory. Ensure every product is perfectly labeled.
            </p>
          </section>

          {/* Main Grid */}
          <div className="grid grid-cols-12 gap-8 items-start">

            {/* LEFT: Inventory Queue + Config */}
            <div className="col-span-12 xl:col-span-8 flex flex-col gap-6">

              {/* Inventory Queue */}
              <div className="rounded-xl p-8 shadow-xl relative overflow-hidden"
                style={{ backgroundColor: '#171f33' }}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16"
                  style={{ backgroundColor: 'rgba(75,226,119,0.05)', filter: 'blur(48px)' }}></div>

                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{ color: '#4be277' }}>list_alt</span>
                    Inventory Queue
                  </h3>
                  <button className="text-xs font-bold uppercase tracking-widest transition-colors"
                    style={{ color: '#4be277' }}>
                    Add Custom Entry +
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left" style={{ borderSpacing: '0 12px', borderCollapse: 'separate' }}>
                    <thead>
                      <tr className="text-xs font-bold uppercase" style={{ color: '#64748b', letterSpacing: '0.2em' }}>
                        <th className="pb-2 px-4">Product Name</th>
                        <th className="pb-2 px-4 text-center">SKU</th>
                        <th className="pb-2 px-4 text-center">Code</th>
                        <th className="pb-2 px-4 text-center">Print Qty</th>
                        <th className="pb-2 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="transition-colors"
                          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#222a3d'}
                          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#131b2e'}
                          style={{ backgroundColor: '#131b2e', borderRadius: '12px' }}>

                          <td className="px-4 py-5" style={{ borderRadius: '12px 0 0 12px' }}>
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm"
                                style={{ backgroundColor: '#0b1326', color: '#4be277', border: '1px solid rgba(61,74,61,0.1)' }}>
                                {product.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-bold text-white text-sm">{product.name}</p>
                                <p className="text-xs" style={{ color: '#64748b' }}>{product.category}</p>
                              </div>
                            </div>
                          </td>

                          <td className="px-4 py-5 text-center font-mono text-xs" style={{ color: '#adc6ff' }}>
                            {product.sku}
                          </td>

                          <td className="px-4 py-5 text-center font-mono text-xs" style={{ color: '#bccbb9' }}>
                            {product.code}
                          </td>

                          <td className="px-4 py-5">
                            <div className="flex items-center justify-center gap-3">
                              <button onClick={() => updateQty(product.id, -1)}
                                className="w-6 h-6 rounded-full flex items-center justify-center transition-all"
                                style={{ backgroundColor: '#0b1326', color: '#94a3b8' }}>
                                -
                              </button>
                              <span className="text-white text-sm font-bold w-8 text-center">{product.qty}</span>
                              <button onClick={() => updateQty(product.id, 1)}
                                className="w-6 h-6 rounded-full flex items-center justify-center transition-all"
                                style={{ backgroundColor: '#0b1326', color: '#94a3b8' }}>
                                +
                              </button>
                            </div>
                          </td>

                          <td className="px-4 py-5 text-right" style={{ borderRadius: '0 12px 12px 0' }}>
                            <button onClick={() => removeProduct(product.id)}
                              className="transition-colors"
                              style={{ color: '#475569' }}
                              onMouseEnter={e => (e.currentTarget.style.color = '#ffb4ab')}
                              onMouseLeave={e => (e.currentTarget.style.color = '#475569')}>
                              <span className="material-symbols-outlined">delete</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Print Configuration */}
              <div className="rounded-xl p-8 shadow-xl" style={{ backgroundColor: '#171f33' }}>
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined" style={{ color: '#adc6ff' }}>tune</span>
                  Print Configuration
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                  {/* Selectors */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: '#64748b' }}>
                        Warehouse
                      </label>
                      <select value={warehouse} onChange={e => setWarehouse(e.target.value)}
                        className="w-full rounded-lg text-sm py-3 px-4 outline-none cursor-pointer"
                        style={{ backgroundColor: '#2d3449', border: 'none', color: '#dae2fd' }}>
                        <option>Main Distribution Hub</option>
                        <option>North Annex Storage</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: '#64748b' }}>
                        Store Location
                      </label>
                      <select className="w-full rounded-lg text-sm py-3 px-4 outline-none cursor-pointer"
                        style={{ backgroundColor: '#2d3449', border: 'none', color: '#dae2fd' }}>
                        <option>Taqwa Supershop - Main</option>
                        <option>Taqwa Supershop - Branch</option>
                      </select>
                    </div>
                  </div>

                  {/* Toggles */}
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: '#64748b' }}>
                      Display Attributes
                    </label>
                    {[
                      { label: 'Show Store Name', value: showStoreName, setter: setShowStoreName },
                      { label: 'Show Product Name', value: showProductName, setter: setShowProductName },
                      { label: 'Show Price Tag', value: showPrice, setter: setShowPrice },
                    ].map((toggle) => (
                      <div key={toggle.label} className="flex items-center justify-between">
                        <span className="text-sm" style={{ color: '#cbd5e1' }}>{toggle.label}</span>
                        <button onClick={() => toggle.setter(!toggle.value)}
                          className="w-10 h-5 rounded-full relative p-0.5 transition-colors"
                          style={{ backgroundColor: toggle.value ? 'rgba(75,226,119,0.2)' : 'rgba(71,85,105,0.3)' }}>
                          <div className="w-4 h-4 rounded-full transition-all"
                            style={{
                              backgroundColor: toggle.value ? '#4be277' : '#64748b',
                              marginLeft: toggle.value ? 'auto' : '0',
                            }}></div>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Paper Size */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: '#64748b' }}>
                        Paper Size (Thermal)
                      </label>
                      <select value={paperSize} onChange={e => setPaperSize(e.target.value)}
                        className="w-full rounded-lg text-sm py-3 px-4 outline-none cursor-pointer"
                        style={{ backgroundColor: '#2d3449', border: 'none', color: '#dae2fd' }}>
                        <option>50x30 mm (Standard)</option>
                        <option>40x25 mm (Small)</option>
                        <option>80x50 mm (Large Asset)</option>
                      </select>
                    </div>
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#0b1326', border: '1px solid rgba(61,74,61,0.1)' }}>
                      <div className="flex items-center gap-3 text-xs" style={{ color: '#94a3b8' }}>
                        <span className="material-symbols-outlined text-lg" style={{ color: '#4be277' }}>print_connect</span>
                        <span>Printer: Thermal Printer<br />Status: Ready to Print</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Live Preview */}
            <div className="col-span-12 xl:col-span-4 sticky top-24">
              <div className="rounded-xl p-8 shadow-xl"
                style={{ backgroundColor: '#171f33', border: '1px solid rgba(255,255,255,0.05)' }}>

                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-white">Live Preview</h3>
                  <span className="text-xs font-bold px-2 py-1 rounded"
                    style={{ color: '#64748b', backgroundColor: '#0b1326', border: '1px solid rgba(61,74,61,0.1)' }}>
                    WYSIWYG
                  </span>
                </div>

                {/* Label Previews */}
                <div className="flex flex-col items-center gap-4 py-10 rounded-2xl border-2 border-dashed relative"
                  style={{ backgroundColor: '#0b1326', borderColor: 'rgba(61,74,61,0.2)' }}>
                  {products.slice(0, 2).map((product, i) => (
                    <div key={product.id} className="bg-white p-3 rounded shadow-2xl transition-transform duration-500"
                      style={{
                        width: '190px',
                        transform: i === 0 ? 'rotate(1deg)' : 'rotate(-2deg)',
                        marginTop: i === 1 ? '-50px' : '0',
                        marginLeft: i === 1 ? '16px' : '0',
                      }}>
                      {showStoreName && (
                        <p className="font-bold text-black uppercase tracking-tight leading-none mb-1"
                          style={{ fontSize: '9px' }}>Taqwa Supershop</p>
                      )}
                      {showProductName && (
                        <p className="font-medium text-black leading-tight mb-2"
                          style={{ fontSize: '10px' }}>{product.name}</p>
                      )}
                      {/* Barcode Bars */}
                      <div className="w-full h-10 bg-white flex items-center justify-between px-1">
                        {barWidths.map((w, idx) => (
                          <div key={idx} className="h-9 bg-black"
                            style={{ width: `${w * 2}px` }}></div>
                        ))}
                      </div>
                      <div className="flex justify-between items-end mt-1">
                        <span className="font-mono font-bold text-black" style={{ fontSize: '8px' }}>
                          {product.sku}-{product.code}
                        </span>
                        {showPrice && (
                          <span className="font-black text-black" style={{ fontSize: '11px' }}>
                            {product.price}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col gap-3">
                  <button
                    onClick={() => setGenerated(true)}
                    className="w-full py-4 rounded-xl font-extrabold uppercase tracking-widest text-sm transition-all active:scale-95 shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #ffba61, #ef9900)', color: '#472a00' }}>
                    Generate Barcode
                  </button>
                  <button
                    className="w-full py-4 rounded-xl font-extrabold uppercase tracking-widest text-sm transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #4be277, #22c55e)', color: '#003915' }}>
                    <span className="material-symbols-outlined">print</span>
                    Print Barcode
                  </button>
                  <button
                    onClick={() => setGenerated(false)}
                    className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors"
                    style={{ backgroundColor: '#2d3449', color: '#cbd5e1' }}>
                    Reset Barcode
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <footer className="px-12 py-5 flex items-center justify-between"
          style={{ backgroundColor: 'rgba(15,23,42,0.3)', backdropFilter: 'blur(4px)', borderTop: '1px solid rgba(61,74,61,0.1)' }}>
          <div className="flex gap-10">
            {[
              { label: 'Selected Items', value: `0${products.length}`, color: '#dae2fd' },
              { label: 'Total Labels', value: totalLabels < 10 ? `0${totalLabels}` : `${totalLabels}`, color: '#dae2fd' },
              { label: 'Paper Type', value: 'Thermal Matte', color: '#4be277' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#64748b' }}>{stat.label}</p>
                <p className="text-lg font-extrabold" style={{ color: stat.color }}>{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs font-medium" style={{ color: '#64748b' }}>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#60a5fa' }}></span>
              Bluetooth Connected
            </span>
            <span className="h-4 w-px" style={{ backgroundColor: '#1e293b' }}></span>
            <span>Last Printed: 14:20 PM</span>
          </div>
        </footer>
      </div>
    </>
  )
}