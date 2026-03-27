'use client'

import { useState } from 'react'

interface HeaderProps {
  title?: string
}

export default function Header({ title }: HeaderProps) {
  const [search, setSearch] = useState('')

  return (
    <header className="sticky top-0 z-40 flex justify-between items-center px-8 py-4 w-full border-b"
      style={{
        backgroundColor: 'rgba(15,23,42,0.8)',
        backdropFilter: 'blur(20px)',
        borderColor: 'rgba(255,255,255,0.05)',
        fontFamily: 'Manrope, sans-serif',
      }}>

      <div className="flex items-center gap-8 flex-1">
        {title && (
          <span className="text-xl font-bold tracking-tighter" style={{ color: '#22C55E' }}>
            {title}
          </span>
        )}
        <div className="hidden lg:flex relative items-center max-w-md w-full">
          <span className="material-symbols-outlined absolute left-4" style={{ color: '#64748b' }}>search</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full py-2.5 pl-11 pr-4 text-sm outline-none transition-all"
            style={{ backgroundColor: 'rgba(30,41,59,1)', border: 'none', color: '#dae2fd' }}
            placeholder="Search products, sales, customers..."
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full transition-all hover:bg-white/5" style={{ color: '#94a3b8' }}>
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 rounded-full transition-all hover:bg-white/5" style={{ color: '#94a3b8' }}>
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>
    </header>
  )
}