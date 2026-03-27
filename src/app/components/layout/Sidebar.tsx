'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

const navItems = [
  { href: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { href: '/pos', icon: 'point_of_sale', label: 'Register' },
  { href: '/inventory', icon: 'inventory_2', label: 'Inventory' },
  { href: '/sales', icon: 'payments', label: 'Sales' },
  { href: '/suppliers', icon: 'local_shipping', label: 'Suppliers' },
  { href: '/customers', icon: 'groups', label: 'Customers' },
  { href: '/marketing', icon: 'campaign', label: 'Marketing' },
  { href: '/reports', icon: 'analytics', label: 'Reports' },
  { href: '/settings', icon: 'settings', label: 'Settings' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <aside className="fixed left-0 top-0 h-screen w-64 z-50 flex flex-col gap-y-2 py-8 px-4 shadow-2xl"
        style={{ backgroundColor: '#131b2e', fontFamily: 'Manrope, sans-serif', fontSize: '14px', fontWeight: 500 }}>

        {/* Logo */}
        <div className="px-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #22C55E, #22c55e)' }}>
              <span className="material-symbols-outlined" style={{ color: '#004b1e', fontVariationSettings: "'FILL' 1" }}>view_quilt</span>
            </div>
            <div>
              <h1 className="text-lg font-black text-white leading-tight">Evergreen Slate</h1>
              <p className="text-slate-500 uppercase tracking-widest" style={{ fontSize: '10px' }}>Supershop POS</p>
            </div>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200"
                style={{
                  backgroundColor: isActive ? 'rgba(34,197,94,0.1)' : 'transparent',
                  color: isActive ? '#22C55E' : '#94a3b8',
                  borderLeft: isActive ? '3px solid #22C55E' : '3px solid transparent',
                  fontWeight: isActive ? 600 : 400,
                }}>
                <span className="material-symbols-outlined"
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Bottom */}
        <div className="pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <Link href="/pos"
            className="w-full font-bold py-3 rounded-xl mb-4 flex items-center justify-center gap-2 transition-all active:scale-95"
            style={{ background: 'linear-gradient(135deg, #22C55E, #16a34a)', color: '#003915' }}>
            <span className="material-symbols-outlined text-sm">add</span>
            New Sale
          </Link>

          <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="w-full flex items-center gap-3 px-4 py-2 transition-all hover:bg-white/5 rounded-lg"
            style={{ color: '#94a3b8' }}>
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </button>

          {/* User Info */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl mt-2" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
              style={{ backgroundColor: 'rgba(34,197,94,0.2)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.3)' }}>
              {session?.user?.name?.charAt(0) || 'A'}
            </div>
            <div className="overflow-hidden">
              <p className="text-white font-semibold truncate text-sm">{session?.user?.name || 'Admin'}</p>
              <p className="text-slate-500 truncate" style={{ fontSize: '10px' }}>
                {(session?.user as any)?.role || 'ADMIN'}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}