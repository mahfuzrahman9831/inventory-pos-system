import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'

export default function SalesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#0b1326', minHeight: '100vh', color: '#dae2fd' }}>
      <Sidebar />
      <div className="md:ml-64 flex flex-col" style={{ minHeight: '100vh' }}>
        <Header title="Sales Report" />
        <main className="flex-1" style={{ overflowY: 'auto' }}>
          {children}
        </main>
      </div>
    </div>
  )
}