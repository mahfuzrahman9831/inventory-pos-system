import Sidebar from '@/components/layout/Sidebar'

export default function PosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#0b1326', height: '100vh', overflow: 'hidden', color: '#dae2fd' }}>
      <Sidebar />
      <div className="md:ml-64" style={{ height: '100vh' }}>
        {children}
      </div>
    </div>
  )
}