import Card from "@/Components/Card";
import BookingChart from "@/Components/BookingChart";
import PageLayout from "@/Layouts/PageLayout";
import { NotepadText, CarFront, ContactRound, Gauge } from "lucide-react";
import VehicleChart from "@/Components/VehicleChart";

const Dashboard = ({ bookings, vehicles, count }) => {
  return (
    <PageLayout title="Dashboard">
      <h1 className="font-bold text-4xl">Dashboard</h1>
      <div className="grid sm:grid-cols-4 gap-2">
        <Card value={count.booking} label="Bookings" link={route('admin.bookings')} icon={<NotepadText size={50} />} color="blue" />
        <Card value={count.driver} label="Drivers" link={route('admin.drivers')} icon={<ContactRound size={50} />} color="green" />
        <Card value={count.usage} label="Usages" link={route('admin.usages')} icon={<Gauge size={50} />} color="yellow" />
        <Card value={count.vehicle} label="Vehicles" link={route('admin.vehicles')} icon={<CarFront size={50} />} color="red" />
      </div>
      <div className="bg-white p-8 my-2 flex">
        <div className="w-full">
          <span className="text-xl underline">Status Booking</span>
          <div className="flex justify-center">
            <div className="w-1/2">
              <BookingChart bookings={bookings} />
            </div>
          </div>
          <div className="flex gap-3 text-lg mt-8">
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
        <div className="w-full">
          <span className="text-xl underline">Status Vehicle</span>
          <div className="flex justify-center">
            <div className="w-1/2">
              <VehicleChart vehicles={vehicles} />
            </div>
          </div>
          <div className="flex gap-3 text-lg mt-8">
            <span>Keterangan:</span>
            <div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-8 bg-[#facc15]"></div>
                <span>Tersedia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-8 bg-[#ef4444]"></div>
                <span>Dipakai</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-8 bg-[#22c55e]"></div>
                <span>Servis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Dashboard