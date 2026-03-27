import Sidebar from "@/app/components/layout/Sidebar";
import Header from "@/app/components/layout/Header";

// এখানে আর কোনো Provider লাগবে না, কারণ Root Layout-এ আছে
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "#dae2fd",
      }}
    >
      <Sidebar />
      <div className="md:ml-64 flex flex-col min-h-screen">
        <Header title="Digital Curator" />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}