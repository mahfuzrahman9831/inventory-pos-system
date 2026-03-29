'use client'

import { useState } from 'react'

const suppliers = [
  { id: 1, name: 'ABC Traders', initial: 'A', color: '#22C55E', bg: 'rgba(34,197,94,0.1)', category: 'Grocery', contact: 'Rahim Uddin', lastPurchase: 'Oct 24, 2024', status: 'Active' },
  { id: 2, name: 'XYZ Wholesale', initial: 'X', color: '#fb923c', bg: 'rgba(251,146,60,0.1)', category: 'Baby Food', contact: 'Karim Mia', lastPurchase: 'Nov 02, 2024', status: 'Active' },
  { id: 3, name: 'Skin Care Hub', initial: 'S', color: '#60a5fa', bg: 'rgba(96,165,250,0.1)', category: 'Skin Care', contact: 'Nasrin Akter', lastPurchase: 'Sep 15, 2024', status: 'Inactive' },
  { id: 4, name: 'Fashion House', initial: 'F', color: '#c084fc', bg: 'rgba(192,132,252,0.1)', category: 'Ladies Bag', contact: 'Sonia Begum', lastPurchase: 'Nov 12, 2024', status: 'Active' },
]

const lineItems = [
  { product: 'Grocery Bundle Pack', qty: 12, price: 45.00 },
]

export default function Suppliers() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedSupplier, setSelectedSupplier] = useState('ABC Traders')
  const [purchaseDate, setPurchaseDate] = useState('2024-11-15')
  const [items, setItems] = useState(lineItems)

  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0)
  const tax = subtotal * 0.08
  const grandTotal = subtotal + tax

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0b1326; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #2d3449; border-radius: 10px; }
      `}</style>

      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-30">
        <div className="absolute -top-1/5 -right-1/10 w-3/5 h-3/5 rounded-full"
          style={{ backgroundColor: 'rgba(75,226,119,0.2)', filter: 'blur(120px)' }}></div>
        <div className="absolute -bottom-1/10 -left-1/20 w-2/5 h-2/5 rounded-full"
          style={{ backgroundColor: 'rgba(173,198,255,0.1)', filter: 'blur(100px)' }}></div>
      </div>

      <div className="pt-6 pb-16 px-8 md:px-12 max-w-screen-xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">

          {/* LEFT: Supplier List */}
          <section className="xl:col-span-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight">Suppliers</h3>
                <p className="text-sm mt-1" style={{ color: '#bccbb9' }}>
                  Manage and track your premium vendor network.
                </p>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90 active:scale-95 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #4be277, #22c55e)', color: '#003915', boxShadow: '0 4px 15px rgba(75,226,119,0.2)' }}>
                <span className="material-symbols-outlined text-sm">add</span>
                Add Supplier
              </button>
            </div>

            {/* Table */}
            <div className="rounded-xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: '#171f33', boxShadow: '0 40px 60px -15px rgba(0,0,0,0.3)' }}>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: '#222a3d' }}>
                      {['Supplier Name', 'Category', 'Contact Person', 'Last Purchase', 'Status'].map((h, i) => (
                        <th key={i} className="px-6 py-5 text-xs font-bold uppercase tracking-widest"
                          style={{ color: '#bccbb9', textAlign: i === 4 ? 'right' : 'left' }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {suppliers.map((supplier) => (
                      <tr key={supplier.id} className="transition-colors"
                        style={{ borderBottom: '1px solid rgba(61,74,61,0.1)' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(45,52,73,0.3)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>

                        <td className="px-6 py-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm"
                              style={{ backgroundColor: supplier.bg, color: supplier.color }}>
                              {supplier.initial}
                            </div>
                            <span className="font-semibold text-white">{supplier.name}</span>
                          </div>
                        </td>

                        <td className="px-6 py-6 text-sm" style={{ color: '#bccbb9' }}>{supplier.category}</td>
                        <td className="px-6 py-6 text-sm" style={{ color: '#bccbb9' }}>{supplier.contact}</td>
                        <td className="px-6 py-6 text-sm italic" style={{ color: '#bccbb9' }}>{supplier.lastPurchase}</td>

                        <td className="px-6 py-6 text-right">
                          {supplier.status === 'Active' ? (
                            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tight"
                              style={{ backgroundColor: 'rgba(75,226,119,0.1)', color: '#4be277' }}>
                              Active
                            </span>
                          ) : (
                            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tight"
                              style={{ backgroundColor: '#2d3449', color: '#bccbb9' }}>
                              Inactive
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* RIGHT: New Purchase Form */}
          <aside className="xl:col-span-4 rounded-2xl p-8 shadow-2xl"
            style={{ backgroundColor: '#131b2e', border: '1px solid rgba(61,74,61,0.1)' }}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="material-symbols-outlined" style={{ color: '#4be277' }}>receipt_long</span>
                New Purchase
              </h3>
              <p className="text-xs mt-2 font-medium" style={{ color: '#bccbb9' }}>
                Record incoming inventory assets
              </p>
            </div>

            <div className="space-y-5">
              {/* Select Supplier */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest ml-1" style={{ color: '#bccbb9' }}>
                  Select Supplier
                </label>
                <div className="relative">
                  <select
                    value={selectedSupplier}
                    onChange={e => setSelectedSupplier(e.target.value)}
                    className="w-full py-3 px-4 rounded-lg text-sm appearance-none outline-none cursor-pointer"
                    style={{ backgroundColor: '#2d3449', border: 'none', color: '#dae2fd' }}>
                    {suppliers.map(s => (
                      <option key={s.id}>{s.name}</option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: '#bccbb9' }}>expand_more</span>
                </div>
              </div>

              {/* Purchase Date */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest ml-1" style={{ color: '#bccbb9' }}>
                  Purchase Date
                </label>
                <input
                  type="date"
                  value={purchaseDate}
                  onChange={e => setPurchaseDate(e.target.value)}
                  className="w-full py-3 px-4 rounded-lg text-sm outline-none"
                  style={{ backgroundColor: '#2d3449', border: 'none', color: '#dae2fd', colorScheme: 'dark' }}
                />
              </div>

              {/* Line Items */}
              <div className="pt-4" style={{ borderTop: '1px solid rgba(61,74,61,0.1)' }}>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-xs font-bold uppercase tracking-widest ml-1" style={{ color: '#bccbb9' }}>
                    Line Items
                  </label>
                  <button
                    onClick={() => setItems([...items, { product: '', qty: 1, price: 0 }])}
                    className="flex items-center gap-1 text-xs font-bold uppercase transition-colors"
                    style={{ color: '#4be277' }}>
                    <span className="material-symbols-outlined text-sm">add_circle</span>
                    Add Item
                  </button>
                </div>

                <div className="space-y-3 max-h-64 overflow-y-auto pr-1 custom-scrollbar">
                  {items.map((item, i) => (
                    <div key={i} className="p-4 rounded-xl space-y-3 relative group"
                      style={{ backgroundColor: '#2d3449' }}>
                      <button
                        onClick={() => setItems(items.filter((_, idx) => idx !== i))}
                        className="absolute -top-2 -right-2 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: '#93000a', color: '#ffb4ab' }}>
                        <span className="material-symbols-outlined text-xs">close</span>
                      </button>
                      <input
                        value={item.product}
                        onChange={e => {
                          const newItems = [...items]
                          newItems[i].product = e.target.value
                          setItems(newItems)
                        }}
                        className="w-full bg-transparent text-sm pb-2 outline-none"
                        style={{ borderBottom: '1px solid rgba(61,74,61,0.2)', color: '#dae2fd' }}
                        placeholder="Search Product / SKU"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <span className="text-xs font-bold uppercase opacity-60" style={{ color: '#bccbb9', fontSize: '9px' }}>Qty</span>
                          <input
                            type="number"
                            value={item.qty}
                            onChange={e => {
                              const newItems = [...items]
                              newItems[i].qty = Number(e.target.value)
                              setItems(newItems)
                            }}
                            className="w-full py-1 px-2 rounded-md text-xs text-center outline-none"
                            style={{ backgroundColor: '#171f33', border: 'none', color: '#dae2fd' }}
                          />
                        </div>
                        <div className="space-y-1 text-right">
                          <span className="text-xs font-bold uppercase opacity-60" style={{ color: '#bccbb9', fontSize: '9px' }}>Unit Price (৳)</span>
                          <input
                            type="number"
                            value={item.price}
                            onChange={e => {
                              const newItems = [...items]
                              newItems[i].price = Number(e.target.value)
                              setItems(newItems)
                            }}
                            className="w-full py-1 px-2 rounded-md text-xs text-right outline-none"
                            style={{ backgroundColor: '#171f33', border: 'none', color: '#dae2fd' }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Empty Item Placeholder */}
                  <div className="p-4 rounded-xl border border-dashed"
                    style={{ borderColor: 'rgba(61,74,61,0.3)', backgroundColor: 'rgba(45,52,73,0.4)' }}>
                    <input
                      className="w-full bg-transparent text-xs outline-none"
                      style={{ color: '#bccbb9', border: 'none' }}
                      placeholder="Start typing SKU..."
                      type="text"
                    />
                  </div>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="pt-5 space-y-3" style={{ borderTop: '1px solid rgba(61,74,61,0.2)' }}>
                {[
                  { label: 'Subtotal', value: `৳ ${subtotal.toFixed(2)}`, color: '#dae2fd' },
                  { label: 'Tax (8%)', value: `৳ ${tax.toFixed(2)}`, color: '#dae2fd' },
                  { label: 'Discount', value: '- ৳ 0.00', color: '#ffb4ab' },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center text-xs">
                    <span style={{ color: '#bccbb9' }}>{row.label}</span>
                    <span className="font-medium" style={{ color: row.color }}>{row.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-3"
                  style={{ borderTop: '1px solid rgba(61,74,61,0.1)' }}>
                  <span className="font-bold text-sm text-white">Grand Total</span>
                  <span className="font-extrabold text-xl" style={{ color: '#4be277' }}>
                    ৳ {grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                className="w-full py-4 rounded-xl font-extrabold text-sm transition-all hover:opacity-90 active:scale-[0.98] shadow-xl"
                style={{ background: 'linear-gradient(135deg, #4be277, #22c55e)', color: '#003915', boxShadow: '0 4px 20px rgba(75,226,119,0.1)' }}>
                SUBMIT PURCHASE ORDER
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* Add Supplier Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
          <div className="w-full max-w-md rounded-2xl p-8 shadow-2xl"
            style={{ backgroundColor: '#171f33', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Add New Supplier</h3>
              <button onClick={() => setShowAddModal(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                style={{ color: '#bccbb9' }}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Supplier Name', placeholder: 'e.g. ABC Traders' },
                { label: 'Contact Person', placeholder: 'e.g. Rahim Uddin' },
                { label: 'Phone Number', placeholder: 'e.g. 01711000000' },
                { label: 'Email', placeholder: 'e.g. abc@traders.com' },
                { label: 'Address', placeholder: 'e.g. Dhaka, Bangladesh' },
              ].map((field) => (
                <div key={field.label}>
                  <label className="text-sm font-semibold mb-1 block" style={{ color: '#bccbb9' }}>
                    {field.label}
                  </label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ backgroundColor: '#2d3449', border: 'none', color: '#dae2fd' }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowAddModal(false)}
                className="flex-1 py-3 rounded-xl font-bold text-sm"
                style={{ backgroundColor: '#2d3449', color: '#bccbb9' }}>
                Cancel
              </button>
              <button
                className="flex-1 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all"
                style={{ background: 'linear-gradient(135deg, #4be277, #22c55e)', color: '#003915' }}>
                Add Supplier
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}