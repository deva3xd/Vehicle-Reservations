import BookingChart from "@/Components/BookingChart"
import PageLayout from "@/Layouts/PageLayout"

const Dashboard = ({ bookings }) => {
  return (
    <PageLayout title="Dashboard">
      <h1 className="font-bold text-4xl">Dashboard</h1>
      <div className="bg-white p-8">
        <span className="text-xl underline">Status Booking</span>
        <div className="flex justify-center">
          <div className="h-96 w-96">
            <BookingChart bookings={bookings} />
          </div>
        </div>
        <span className="font-bold text-red-600 text-lg">TOTAL: {bookings.length}</span>
        <div className="flex gap-3 text-lg">
          <span>Keterangan:</span>
          <div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-8 bg-[#facc15]"></div>
              <span>Menunggu</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-8 bg-[#ef4444]"></div>
              <span>Ditolak</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-8 bg-[#22c55e]"></div>
              <span>Disetujui</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-8 bg-[#3b82f6]"></div>
              <span>Selesai</span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Dashboard