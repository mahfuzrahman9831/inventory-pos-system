'use client'

import { useState } from 'react'

const categories = [
  { id: 'all', label: 'All Products', icon: 'grid_view' },
  { id: 'grocery', label: 'Grocery', icon: 'local_grocery_store' },
  { id: 'baby', label: 'Baby Food', icon: 'child_care' },
  { id: 'skin', label: 'Skin Care', icon: 'face' },
  { id: 'bags', label: 'Ladies Bag', icon: 'shopping_bag' },
  { id: 'school', label: 'School Bag', icon: 'backpack' },
]

const allProducts = [
  { id: 1, name: 'Grocery Bundle Pack', sub: '1kg Pack', price: 180, category: 'grocery', icon: 'local_grocery_store' },
  { id: 2, name: 'Baby Cerelac', sub: '400g Box', price: 350, category: 'baby', icon: 'child_care' },
  { id: 3, name: 'Skin Glow Cream', sub: '50ml Jar', price: 220, category: 'skin', icon: 'face' },
  { id: 4, name: 'Ladies Handbag', sub: 'Leather', price: 1200, category: 'bags', icon: 'shopping_bag' },
  { id: 5, name: 'School Backpack', sub: 'Large Size', price: 850, category: 'school', icon: 'backpack' },
  { id: 6, name: 'Rice Premium', sub: '5kg Bag', price: 420, category: 'grocery', icon: 'local_grocery_store' },
  { id: 7, name: 'Nan Pro Formula', sub: '900g Box', price: 780, category: 'baby', icon: 'child_care' },
  { id: 8, name: 'Face Wash', sub: '100ml Tube', price: 150, category: 'skin', icon: 'face' },
]

interface CartItem {
  id: number
  name: string
  price: number
  qty: number
  icon: string
}

export default function PosPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [cart, setCart] = useState<CartItem[]>([])
  const [isMarketing, setIsMarketing] = useState(false)
  const [promoCode, setPromoCode] = useState('')
  const [search, setSearch] = useState('')
  const [showPayModal, setShowPayModal] = useState(false)

  const filtered = allProducts.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const addToCart = (product: typeof allProducts[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1, icon: product.icon }]
    })
  }

  const updateQty = (id: number, delta: number) => {
    setCart(prev => prev.map(i => i.id === id
      ? { ...i, qty: Math.max(0, i.qty + delta) }
      : i).filter(i => i.qty > 0))
  }

  const clearCart = () => setCart([])

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const discount = subtotal * 0.1
  const tax = subtotal * 0.05
  const total = subtotal - discount + tax
  const orderNo = '#12844'

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="flex flex-col h-screen" style={{ fontFamily: 'Manrope, sans-serif' }}>

        {/* Top Header */}
        <header className="h-16 flex justify-between items-center px-8 border-b flex-shrink-0"
          style={{ backgroundColor: 'rgba(11,19,38,0.8)', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.05)' }}>
          <div className="flex items-center gap-6 flex-1">
            <h2 className="text-xl font-black text-white">Register</h2>
            <div className="relative max-w-md w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#64748b' }}>search</span>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full rounded-lg pl-10 pr-4 py-2 text-sm outline-none"
                style={{ backgroundColor: '#2d3449', border: 'none', color: '#dae2fd' }}
                placeholder="Search products or scan barcode..."
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 transition-all" style={{ color: '#94a3b8' }}>
              <span className="material-symbols-outlined">barcode_scanner</span>
            </button>
            <button className="p-2 transition-all relative" style={{ color: '#94a3b8' }}>
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full" style={{ backgroundColor: '#4be277', border: '2px solid #0b1326' }}></span>
            </button>
            <div className="h-8 w-px mx-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-white">Store Manager</p>
              <p className="text-xs" style={{ color: '#64748b' }}>Admin</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">

          {/* LEFT: Products */}
          <section className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: '#131b2e' }}>

            {/* Categories */}
            <div className="px-6 py-3 border-b flex items-center gap-2 overflow-x-auto no-scrollbar flex-shrink-0"
              style={{ backgroundColor: '#0b1326', borderColor: 'rgba(255,255,255,0.05)' }}>
              {categories.map(cat => (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all active:scale-95 whitespace-nowrap"
                  style={{
                    backgroundColor: activeCategory === cat.id ? 'rgba(75,226,119,0.1)' : 'transparent',
                    color: activeCategory === cat.id ? '#4be277' : '#94a3b8',
                    border: activeCategory === cat.id ? '1px solid rgba(75,226,119,0.2)' : '1px solid transparent',
                  }}>
                  <span className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: activeCategory === cat.id ? "'FILL' 1" : "'FILL' 0" }}>
                    {cat.icon}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-tight">{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-white">Available Products</h3>
                <div className="flex gap-2">
                  {['filter_list', 'sort'].map(icon => (
                    <button key={icon} className="px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1 transition-all"
                      style={{ backgroundColor: '#171f33', color: '#94a3b8' }}>
                      <span className="material-symbols-outlined text-sm">{icon}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filtered.map(product => (
                  <div key={product.id} onClick={() => addToCart(product)}
                    className="group rounded-xl p-4 cursor-pointer transition-all active:scale-95 shadow-lg"
                    style={{ backgroundColor: '#171f33' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#222a3d')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#171f33')}>

                    <div className="aspect-square rounded-lg mb-3 flex items-center justify-center relative"
                      style={{ backgroundColor: '#2d3449' }}>
                      <span className="material-symbols-outlined text-4xl" style={{ color: '#4be277' }}>
                        {product.icon}
                      </span>
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-xs font-bold"
                        style={{ backgroundColor: 'rgba(75,226,119,0.2)', color: '#4be277', backdropFilter: 'blur(4px)' }}>
                        In Stock
                      </div>
                    </div>

                    <h4 className="font-semibold text-white text-sm mb-1 truncate">{product.name}</h4>
                    <div className="flex justify-between items-end">
                      <p className="text-xs" style={{ color: '#64748b' }}>{product.sub}</p>
                      <p className="font-bold text-lg" style={{ color: '#4be277' }}>৳ {product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* RIGHT: Cart */}
          <section className="flex flex-col flex-shrink-0"
            style={{ width: '380px', backgroundColor: '#060e20', boxShadow: '-20px 0 40px rgba(0,0,0,0.3)', zIndex: 10 }}>

            {/* Cart Header */}
            <div className="p-5 flex items-center justify-between flex-shrink-0"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div>
                <h3 className="text-lg font-bold text-white">Current Order</h3>
                <p className="text-xs uppercase tracking-widest" style={{ color: '#64748b' }}>Order {orderNo}</p>
              </div>
              <button onClick={clearCart} className="p-2 rounded-lg transition-all"
                style={{ color: '#ffb4ab' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,180,171,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                <span className="material-symbols-outlined">delete_sweep</span>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto no-scrollbar px-5 py-4 space-y-3">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-3" style={{ color: '#334155' }}>
                  <span className="material-symbols-outlined text-5xl">shopping_cart</span>
                  <p className="text-sm font-medium">Cart is empty</p>
                  <p className="text-xs">Click on a product to add</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#171f33' }}>
                      <span className="material-symbols-outlined" style={{ color: '#4be277' }}>{item.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm font-semibold text-white truncate">{item.name}</h5>
                      <p className="text-xs" style={{ color: '#64748b' }}>৳ {item.price} / unit</p>
                    </div>
                    <div className="flex items-center rounded-lg p-1" style={{ backgroundColor: '#171f33' }}>
                      <button onClick={() => updateQty(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center transition-colors"
                        style={{ color: '#94a3b8' }}>
                        <span className="material-symbols-outlined text-xs">remove</span>
                      </button>
                      <span className="px-2 text-xs font-bold text-white w-6 text-center">
                        {String(item.qty).padStart(2, '0')}
                      </span>
                      <button onClick={() => updateQty(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center transition-colors"
                        style={{ color: '#4be277' }}>
                        <span className="material-symbols-outlined text-xs">add</span>
                      </button>
                    </div>
                    <div className="text-right w-16">
                      <p className="text-sm font-bold text-white">৳ {(item.price * item.qty).toLocaleString()}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Summary */}
            <div className="p-5 space-y-3 flex-shrink-0" style={{ backgroundColor: '#171f33' }}>

              {/* Marketing Toggle */}
              <div className="flex items-center justify-between p-3 rounded-xl"
                style={{ backgroundColor: '#2d3449', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined" style={{ color: '#adc6ff' }}>campaign</span>
                  <span className="text-sm font-medium text-white">For Marketing</span>
                </div>
                <button onClick={() => setIsMarketing(!isMarketing)}
                  className="w-11 h-6 rounded-full relative p-0.5 transition-colors"
                  style={{ backgroundColor: isMarketing ? 'rgba(173,198,255,0.3)' : 'rgba(45,52,73,1)' }}>
                  <div className="w-5 h-5 rounded-full transition-all"
                    style={{
                      backgroundColor: isMarketing ? '#adc6ff' : '#64748b',
                      marginLeft: isMarketing ? 'auto' : '0',
                    }}></div>
                </button>
              </div>

              {/* Promo Code */}
              <div className="flex items-center gap-2 p-3 rounded-xl"
                style={{ backgroundColor: '#2d3449' }}>
                <span className="material-symbols-outlined" style={{ color: '#64748b' }}>confirmation_number</span>
                <input
                  value={promoCode}
                  onChange={e => setPromoCode(e.target.value)}
                  className="bg-transparent text-sm flex-1 outline-none"
                  style={{ border: 'none', color: '#dae2fd' }}
                  placeholder="Apply Promo Code"
                />
                <button className="text-xs font-bold uppercase tracking-wider" style={{ color: '#4be277' }}>Apply</button>
              </div>

              {/* Totals */}
              <div className="space-y-2 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                {[
                  { label: 'Subtotal', value: `৳ ${subtotal.toLocaleString()}`, color: '#dae2fd' },
                  { label: 'Discount (10%)', value: `-৳ ${discount.toFixed(0)}`, color: '#ffb4ab' },
                  { label: 'Tax (5%)', value: `৳ ${tax.toFixed(0)}`, color: '#dae2fd' },
                ].map(row => (
                  <div key={row.label} className="flex justify-between text-sm">
                    <span style={{ color: '#64748b' }}>{row.label}</span>
                    <span className="font-medium" style={{ color: row.color }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-lg font-bold text-white">Total</span>
                {isMarketing ? (
                  <span className="px-3 py-1 rounded-lg font-bold text-xs uppercase tracking-widest"
                    style={{ backgroundColor: 'rgba(173,198,255,0.2)', color: '#adc6ff', border: '1px solid rgba(173,198,255,0.3)' }}>
                    Marketing Sample
                  </span>
                ) : (
                  <span className="text-2xl font-black" style={{ color: '#4be277' }}>
                    ৳ {total.toFixed(0)}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button className="py-3 rounded-xl font-bold flex flex-col items-center justify-center gap-1 transition-all"
                  style={{ backgroundColor: '#2d3449', color: '#cbd5e1' }}>
                  <span className="material-symbols-outlined">pause_circle</span>
                  <span className="text-xs uppercase tracking-widest">Hold Order</span>
                </button>
                <button className="py-3 rounded-xl font-bold flex flex-col items-center justify-center gap-1 transition-all"
                  style={{ backgroundColor: '#0566d9', color: '#dae2fd' }}>
                  <span className="material-symbols-outlined">credit_card</span>
                  <span className="text-xs uppercase tracking-widest">Pay Card</span>
                </button>
              </div>

              <button
                onClick={() => setShowPayModal(true)}
                className="w-full py-4 rounded-xl font-black text-lg transition-all active:scale-95 flex items-center justify-center gap-3 shadow-xl"
                style={{ background: 'linear-gradient(135deg, #4be277, #22c55e)', color: '#003915', boxShadow: '0 4px 20px rgba(75,226,119,0.1)' }}>
                <span className="material-symbols-outlined">shopping_cart_checkout</span>
                CHECKOUT CASH
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Payment Modal */}
      {showPayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
          <div className="w-full max-w-sm rounded-2xl p-8 shadow-2xl"
            style={{ backgroundColor: '#171f33', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 className="text-xl font-bold text-white mb-2">Payment</h3>
            <p className="text-sm mb-6" style={{ color: '#bccbb9' }}>Total Amount: <span className="font-black text-lg" style={{ color: '#4be277' }}>৳ {total.toFixed(0)}</span></p>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest mb-1 block" style={{ color: '#64748b' }}>
                  Cash Received
                </label>
                <input type="number" placeholder="0.00"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ backgroundColor: '#2d3449', border: 'none', color: '#dae2fd' }} />
              </div>
              <div className="p-3 rounded-xl" style={{ backgroundColor: '#2d3449' }}>
                <div className="flex justify-between text-sm">
                  <span style={{ color: '#bccbb9' }}>Change</span>
                  <span className="font-bold text-white">৳ 0.00</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowPayModal(false)}
                className="flex-1 py-3 rounded-xl font-bold text-sm"
                style={{ backgroundColor: '#2d3449', color: '#bccbb9' }}>
                Cancel
              </button>
              <button
                onClick={() => { clearCart(); setShowPayModal(false) }}
                className="flex-1 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #4be277, #22c55e)', color: '#003915' }}>
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAB Mobile */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center z-50 lg:hidden transition-all hover:scale-110 active:scale-95"
        style={{ backgroundColor: '#4be277', color: '#003915', boxShadow: '0 4px 20px rgba(75,226,119,0.4)' }}>
        <span className="material-symbols-outlined text-3xl">barcode_scanner</span>
      </button>
    </>
  )
}