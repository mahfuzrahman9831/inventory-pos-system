'use client'

import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Acoustix Pro Max',
    sub: 'Gen 4 Wireless',
    sku: 'SKU-24901-AC',
    category: 'Electronics',
    stock: 124,
    price: '৳ 349.00',
    status: 'In Stock',
    addedBy: 'AS',
    addedByName: 'Alex S.',
  },
  {
    id: 2,
    name: 'Chronos Epoch',
    sub: 'Titanium Limited',
    sku: 'SKU-88210-WT',
    category: 'Accessories',
    stock: 8,
    price: '৳ 1,200.00',
    status: 'Low Stock',
    addedBy: 'JM',
    addedByName: 'Jordan M.',
  },
  {
    id: 3,
    name: 'Velox Run III',
    sub: 'Crimson Red',
    sku: 'SKU-44119-SH',
    category: 'Apparel',
    stock: 0,
    price: '৳ 185.00',
    status: 'Out of Stock',
    addedBy: 'SK',
    addedByName: 'Sarah K.',
  },
  {
    id: 4,
    name: 'Lumina Desk Arc',
    sub: 'Brass Edition',
    sku: 'SKU-10293-LM',
    category: 'Furniture',
    stock: 45,
    price: '৳ 210.00',
    status: 'In Stock',
    addedBy: 'AS',
    addedByName: 'Alex S.',
  },
]

const categories = ['All Items', 'Grocery', 'Baby Food', 'Skin Care', 'Ladies Bag', 'School Bag']

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'In Stock':
      return { color: '#4be277', dotColor: '#4be277', shadow: '0 0 8px rgba(75,226,119,0.5)' }
    case 'Low Stock':
      return { color: '#ffba61', dotColor: '#ffba61', shadow: '0 0 8px rgba(255,186,97,0.5)' }
    case 'Out of Stock':
      return { color: '#ffb4ab', dotColor: '#ffb4ab', shadow: '0 0 8px rgba(255,180,171,0.5)' }
    default:
      return { color: '#94a3b8', dotColor: '#94a3b8', shadow: 'none' }
  }
}

export default function InventoryPage() {
  const [activeCategory, setActiveCategory] = useState('All Items')
  const [sortBy, setSortBy] = useState('Newest First')
  const [currentPage, setCurrentPage] = useState(1)
  const [showAddModal, setShowAddModal] = useState(false)

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0b1326; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #2d3449; border-radius: 10px; }
        .group:hover .group-hover\\:opacity-100 { opacity: 1; }
      `}</style>

      <div className="pt-6 pb-12 px-8 lg:px-12" style={{ fontFamily: 'Manrope, sans-serif' }}>

        {/* Page Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Product Catalog</h2>
            <p className="mt-2 font-medium" style={{ color: '#bccbb9' }}>
              Manage and monitor your supershop inventory assets.
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:opacity-90 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #4be277, #22c55e)', color: '#004b1e', boxShadow: '0 4px 15px rgba(75,226,119,0.2)' }}>
            <span className="material-symbols-outlined">add</span>
            Add Product
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-12 gap-6 mb-10">
          {/* Total Valuation */}
          <div className="col-span-12 md:col-span-8 rounded-2xl p-8 flex justify-between items-center shadow-lg"
            style={{ backgroundColor: '#171f33', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="space-y-1">
              <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#bccbb9' }}>Total Valuation</p>
              <h3 className="text-5xl font-black text-white">৳ 4,28,940.00</h3>
              <div className="flex items-center gap-2 pt-2" style={{ color: '#4be277' }}>
                <span className="material-symbols-outlined text-sm">trending_up</span>
                <span className="text-sm font-bold">+12.5% this month</span>
              </div>
            </div>

            {/* Mini Chart */}
            <div className="hidden lg:block h-32 w-64 rounded-xl relative overflow-hidden"
              style={{ backgroundColor: '#131b2e' }}>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(75,226,119,0.1), transparent)' }}></div>
              <div className="absolute bottom-4 left-4 right-4 h-16 flex items-end gap-1">
                {[50, 75, 67, 100, 75].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t transition-all"
                    style={{ height: `${h}%`, backgroundColor: `rgba(75,226,119,${0.2 + i * 0.1})` }}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Stock Alerts */}
          <div className="col-span-12 md:col-span-4 rounded-2xl p-8 shadow-lg"
            style={{ backgroundColor: 'rgba(45,52,73,0.4)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(4px)' }}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#bccbb9' }}>Stock Alerts</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">Low Stock Items</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: '#ef9900', color: '#5c3800' }}>14</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">Out of Stock</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: '#93000a', color: '#ffdad6' }}>03</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4 flex-wrap">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
              style={{ backgroundColor: '#222a3d', border: '1px solid rgba(255,255,255,0.05)', color: '#dae2fd' }}>
              <span className="material-symbols-outlined text-lg">filter_list</span>
              Filters
            </button>

            <div className="h-6 w-px" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}></div>

            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <span key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="text-xs px-3 py-1.5 rounded-full font-bold cursor-pointer transition-all"
                  style={{
                    backgroundColor: activeCategory === cat ? 'rgba(75,226,119,0.1)' : 'transparent',
                    color: activeCategory === cat ? '#4be277' : '#bccbb9',
                    border: activeCategory === cat ? '1px solid rgba(75,226,119,0.2)' : '1px solid transparent',
                  }}>
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-xs font-medium" style={{ color: '#bccbb9' }}>Sort by:</p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-bold rounded-xl py-2 pl-4 pr-10 cursor-pointer outline-none"
              style={{ backgroundColor: '#171f33', border: 'none', color: '#dae2fd' }}>
              <option>Newest First</option>
              <option>Stock (Low to High)</option>
              <option>Price (High to Low)</option>
            </select>
          </div>
        </div>

        {/* Product Table */}
        <div className="rounded-2xl overflow-hidden shadow-2xl"
          style={{ backgroundColor: '#171f33', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr style={{ backgroundColor: 'rgba(19,27,46,0.5)' }}>
                  {['Product', 'SKU / Barcode', 'Category', 'Stock', 'Price', 'Status', 'Added By', 'Actions'].map((h, i) => (
                    <th key={i} className="py-5 px-6 font-black uppercase"
                      style={{ color: '#bccbb9', fontSize: '10px', letterSpacing: '0.2em', textAlign: i === 7 ? 'right' : 'left', paddingLeft: i === 0 ? '2rem' : undefined, paddingRight: i === 7 ? '2rem' : undefined }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  const statusStyle = getStatusStyle(product.status)
                  return (
                    <tr key={product.id} className="group transition-colors"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>

                      {/* Product */}
                      <td className="py-5 px-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm"
                            style={{ backgroundColor: '#2d3449', color: '#4be277' }}>
                            {product.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-white font-bold text-sm">{product.name}</p>
                            <p className="text-xs" style={{ color: '#bccbb9' }}>{product.sub}</p>
                          </div>
                        </div>
                      </td>

                      {/* SKU */}
                      <td className="py-5 px-6">
                        <span className="font-mono text-xs" style={{ color: '#bccbb9' }}>{product.sku}</span>
                      </td>

                      {/* Category */}
                      <td className="py-5 px-6">
                        <span className="px-3 py-1 rounded-lg text-xs font-semibold text-white"
                          style={{ backgroundColor: '#2d3449' }}>{product.category}</span>
                      </td>

                      {/* Stock */}
                      <td className="py-5 px-6">
                        <p className="text-white font-bold">
                          {product.stock} <span className="font-normal text-xs ml-1" style={{ color: '#bccbb9' }}>units</span>
                        </p>
                      </td>

                      {/* Price */}
                      <td className="py-5 px-6 text-white font-bold">{product.price}</td>

                      {/* Status */}
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-1.5" style={{ color: statusStyle.color }}>
                          <div className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: statusStyle.dotColor, boxShadow: statusStyle.shadow }}></div>
                          <span className="text-xs font-bold">{product.status}</span>
                        </div>
                      </td>

                      {/* Added By */}
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                            style={{ backgroundColor: 'rgba(75,226,119,0.2)', color: '#4be277', border: '1px solid rgba(75,226,119,0.2)' }}>
                            {product.addedBy}
                          </div>
                          <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>{product.addedByName}</span>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-5 px-8 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 rounded-lg transition-colors hover:bg-white/10"
                            style={{ color: '#bccbb9' }}>
                            <span className="material-symbols-outlined text-xl">edit</span>
                          </button>
                          <button className="p-2 rounded-lg transition-colors hover:bg-red-500/10"
                            style={{ color: '#bccbb9' }}>
                            <span className="material-symbols-outlined text-xl">delete</span>
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
          <div className="px-8 py-4 flex items-center justify-between"
            style={{ backgroundColor: 'rgba(19,27,46,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p className="text-xs font-medium" style={{ color: '#bccbb9' }}>
              Showing 1 to 4 of 124 products
            </p>
            <div className="flex items-center gap-2">
              <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors hover:bg-white/5"
                style={{ color: '#bccbb9' }}>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              {[1, 2, 3].map((page) => (
                <button key={page} onClick={() => setCurrentPage(page)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-colors"
                  style={{
                    backgroundColor: currentPage === page ? 'rgba(75,226,119,0.2)' : 'transparent',
                    color: currentPage === page ? '#4be277' : '#bccbb9',
                  }}>
                  {page}
                </button>
              ))}
              <button onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors hover:bg-white/5"
                style={{ color: '#bccbb9' }}>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Add Product Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
            <div className="w-full max-w-lg rounded-2xl p-8 shadow-2xl"
              style={{ backgroundColor: '#171f33', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Add New Product</h3>
                <button onClick={() => setShowAddModal(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  style={{ color: '#bccbb9' }}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Product Name', placeholder: 'e.g. Baby Food Combo' },
                  { label: 'SKU', placeholder: 'e.g. SKU-00001-BF' },
                  { label: 'Price (৳)', placeholder: 'e.g. 250.00' },
                  { label: 'Stock Quantity', placeholder: 'e.g. 100' },
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

                <div>
                  <label className="text-sm font-semibold mb-1 block" style={{ color: '#bccbb9' }}>Category</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none cursor-pointer"
                    style={{ backgroundColor: '#2d3449', border: 'none', color: '#dae2fd' }}>
                    {['Grocery', 'Baby Food', 'Skin Care', 'Ladies Bag', 'School Bag'].map((cat) => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button onClick={() => setShowAddModal(false)}
                  className="flex-1 py-3 rounded-xl font-bold text-sm transition-colors"
                  style={{ backgroundColor: '#2d3449', color: '#bccbb9' }}>
                  Cancel
                </button>
                <button
                  className="flex-1 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #4be277, #22c55e)', color: '#004b1e' }}>
                  Add Product
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}