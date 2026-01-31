import { router, usePage, Link } from "@inertiajs/react";
import { House, LogOut, NotepadText, CarFront, ContactRound, Gauge, CircleUserRound } from "lucide-react";

export default function Sidebar() {
  const role = usePage().props.auth.user.role;

  return (
    <div className="bg-white shadow-md border-r border-gray-200 h-screen fixed top-0 left-0 w-[250px] py-6 px-4 overflow-auto">
      <span className="text-center font-bold text-3xl"><span className="text-blue-600">Vehicle</span> Reservations</span>
      <div className="bg-black h-1"></div>
      {role === "admin" ? (
        <>
          <ul className="mt-6">
            <li>
              <Link href={route('admin.dashboard')}
                className="text-slate-800 font-medium hover:text-slate-900 text-[15px] flex items-center gap-2 hover:bg-gray-100 rounded px-4 py-2 transition-all">
                <House size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
          </ul>

          <div className="mt-6">
            <h6 className="text-blue-600 text-[15px] font-semibold px-4">Information</h6>
            <ul className="space-y-1 mt-3">

              {/* menu */}
              <li>
                <a href={routes('admin.bookings')}
                  className="text-slate-800 font-medium hover:text-slate-900 text-[15px] flex items-center gap-2 hover:bg-gray-100 rounded px-4 py-2 transition-all">
                  <NotepadText size={20} />
                  <span>Bookings</span>
                </a>
              </li>
              <li>
                <Link href={route('admin.drivers')}
                  className="text-slate-800 font-medium hover:text-slate-900 text-[15px] flex items-center gap-2 hover:bg-gray-100 rounded px-4 py-2 transition-all"
                >
                  <ContactRound size={20} />
                  <span>Drivers</span>
                </Link>
              </li>
              <li>
                <Link href={route('admin.usages')}
                  className="text-slate-800 font-medium hover:text-slate-900 text-[15px] flex items-center gap-2 hover:bg-gray-100 rounded px-4 py-2 transition-all">
                  <Gauge size={20} />
                  <span>Usage</span>
                </Link>
              </li>
              <li>
                <Link href={route('admin.vehicles')}
                  className="text-slate-800 font-medium hover:text-slate-900 text-[15px] flex items-center gap-2 hover:bg-gray-100 rounded px-4 py-2 transition-all">
                  <CarFront size={20} />
                  <span>Vehicles</span>
                </Link>
              </li>

            </ul>
          </div>
        </>
      ) : (
        <>
          <ul className="mt-6">
            <li>
              <Link href={route('dashboard')}
                className="text-slate-800 font-medium hover:text-slate-900 text-[15px] flex items-center gap-2 hover:bg-gray-100 rounded px-4 py-2 transition-all">
                <House size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
          </ul>

          <div className="mt-6">
            <h6 className="text-blue-600 text-[15px] font-semibold px-4">Information</h6>
            <ul className="space-y-1 mt-3">

              {/* menu */}
              <li>
                <Link href={route('bookings')}
                  className="text-slate-800 font-medium hover:text-slate-900 text-[15px] flex items-center gap-2 hover:bg-gray-100 rounded px-4 py-2 transition-all">
                  <NotepadText size={20} />
                  <span>Bookings</span>
                </Link>
              </li>

            </ul>
          </div>
        </>
      )}

      <div className="mt-6">
        <h6 className="text-blue-600 text-[15px] font-semibold px-4">Actions</h6>
        <ul className="space-y-1 mt-3">
          {role !== "admin" && (
            <li>
              <Link href={route('profile.edit')}
                className="text-slate-800 font-medium hover:text-slate-900 text-[15px] flex items-center gap-2 hover:bg-gray-100 rounded px-4 py-2 transition-all"
              >
                <CircleUserRound size={20} />
                <span>Profile</span>
              </Link>
            </li>
          )}
          <li>
            <button
              onClick={() => router.post(route('logout'))}
              className="text-slate-800 font-medium hover:text-red-600 text-[15px] flex items-center gap-2 hover:bg-gray-100 w-full rounded px-4 py-2 transition-all"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
