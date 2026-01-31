import PageLayout from "@/Layouts/PageLayout";
import InputError from '@/Components/InputError';
import { Link, useForm } from "@inertiajs/react";

const Edit = ({ usage, vehicles }) => {
  console.log(usage)
  const { data, setData, patch, errors } = useForm({
    vehicle_id: usage.vehicle.id,
    penggunaan_bbm: usage.penggunaan_bbm,
    jadwal_servis: usage.jadwal_servis,
  });

  const submit = (e) => {
    e.preventDefault();

    patch(route('admin.usages.update', usage.id));
  };

  return (
    <PageLayout title="Usages - Edit">
      <ul className="flex items-center space-x-4">
        <li className="text-slate-500 font-medium text-base">
          Usages
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-slate-500 w-3 -rotate-90" viewBox="0 0 24 24">
            <path fillRule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clipRule="evenodd" data-original="#000000"></path>
          </svg>
        </li>
        <li className="text-slate-500 font-medium text-base">
          Edit
        </li>
      </ul>
      <div className="flex justify-between items-center my-2">
        <h1 className="font-bold text-4xl">Usages</h1>
        <Link href={route('admin.usages')} className="px-6 py-2 rounded-lg cursor-pointer text-white text-className tracking-wider font-medium border-0 outline-0 outline-none bg-red-700 hover:bg-red-800 active:bg-red-700">Back</Link>
      </div>

      {/* content */}
      <div className="bg-white py-8">
        <form onSubmit={submit} className="flex flex-col justify-center max-w-lg mx-auto px-4">
          <div className="mb-2">
            <label className="text-slate-900 font-medium text-lg block">Plat Kendaraan</label>
            <select
              name="vehicle_id"
              value={data.vehicle_id}
              onChange={(e) => setData('vehicle_id', e.target.value)}
              required
              className="px-4 py-2 text-className rounded-md bg-white border border-gray-400 w-full max-w-className outline-blue-500"
            >
              <option value="" disabled>Pilih plat</option>
              {vehicles.map((v, i) => (
                <option key={i} value={v.id}>{v.plat}</option>
              ))}
            </select>
            <InputError message={errors.vehicle_id} />
          </div>

          <div className="mb-2">
            <label className="text-slate-900 font-medium text-lg block">Penggunaan BBM</label>
            <input
              id="penggunaan_bbm"
              type="text"
              name="penggunaan_bbm"
              value={data.penggunaan_bbm}
              isfocused="true"
              onChange={(e) => setData('penggunaan_bbm', e.target.value)}
              placeholder="Masukkan penggunaan bbm"
              required
              className="px-4 py-2 text-className rounded-md bg-white border border-gray-400 w-full max-w-className outline-blue-500"
            />
            <InputError message={errors.penggunaan_bbm} />
          </div>

          <div className="mb-2">
            <label className="text-slate-900 font-medium text-lg block">Jadwal Servis</label>
            <input
              id="jadwal_servis"
              type="date"
              name="jadwal_servis"
              value={data.jadwal_servis}
              isfocused="true"
              onChange={(e) => setData('jadwal_servis', e.target.value)}
              required
              className="px-4 py-2 text-className rounded-md bg-white border border-gray-400 w-full max-w-className outline-blue-500"
            />
            <InputError message={errors.jadwal_servis} />
          </div>
          <button type="submit" className="px-6 py-2 rounded-lg cursor-pointer text-white text-className tracking-wider font-medium border-0 outline-0 outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700">Submit</button>
        </form>
      </div>
    </PageLayout>
  )
}

export default Edit