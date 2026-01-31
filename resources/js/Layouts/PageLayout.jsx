import Sidebar from "@/Components/Sidebar";
import { Head } from "@inertiajs/react";

export default function PageLayout({ children, title }) {
  return (
    <div>
      <Head title={title} />
      <Sidebar />
      <div className="ml-[250px] p-6 bg-gray-100 min-h-screen">
        <div className="mx-auto max-w-6xl">
          {children}
        </div>
      </div>
    </div>
  )
}
