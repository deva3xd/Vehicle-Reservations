import PageLayout from "@/Layouts/PageLayout";
import InputError from '@/Components/InputError';
import { Link, useForm } from "@inertiajs/react";

const Edit = ({ vehicle }) => {
  const { data, setData, patch, errors } = useForm({
    jenis: vehicle.jenis,
    plat: vehicle.plat,
    merk: vehicle.merk,
    tahun: vehicle.tahun,
    status: vehicle.status
  });

  const submit = (e) => {
    e.preventDefault();

    patch(route('admin.vehicles.update', vehicle.id));
  };

  return (
    <PageLayout title="Vehicles - Edit">
      <ul className="flex items-center space-x-4">
        <li className="text-slate-500 font-medium text-base">
          Vehicles
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
        <h1 className="font-bold text-4xl">Vehicles</h1>
        <Link href={route('admin.vehicles')} className="px-6 py-2 rounded-lg cursor-pointer text-white text-className tracking-wider font-medium border-0 outline-0 outline-none bg-red-700 hover:bg-red-800 active:bg-red-700">Back</Link>
      </div>

      {/* content */}
      <div className="bg-white py-8">
        <form onSubmit={submit} className="flex flex-col justify-center max-w-lg mx-auto px-4">
          <div className="mb-2">
            <label className="text-slate-900 font-medium text-lg block">Jenis Kendaraan</label>
            <select
              name="jenis"
              value={data.jenis}
              onChange={(e) => setData('jenis', e.target.value)}
              required
              className="px-4 py-2 text-className rounded-md bg-white border border-gray-400 w-full max-w-className outline-blue-500"
            >
              <option value="" disabled>Pilih jenis</option>
              <option value="mobil">Mobil</option>
              <option value="truk">Truk</option>
            </select>
            <InputError message={errors.jenis} />
          </div>

          <div className="mb-2">
            <label className="text-slate-900 font-medium text-lg block">Plat</label>
            <input
              id="plat"
              type="text"
              name="plat"
              value={data.plat}
              isfocused="true"
              onChange={(e) => setData('plat', e.target.value)}
              placeholder="Masukkan plat"
              required
              className="px-4 py-2 text-className rounded-md bg-white border border-gray-400 w-full max-w-className outline-blue-500"
            />
            <InputError message={errors.plat} />
          </div>

          <div className="mb-2">
            <label className="text-slate-900 font-medium text-lg block">Merk</label>
            <input
              id="merk"
              type="text"
              name="merk"
              value={data.merk}
              isfocused="true"
              onChange={(e) => setData('merk', e.target.value)}
              placeholder="Masukkan merk"
              required
              className="px-4 py-2 text-className rounded-md bg-white border border-gray-400 w-full max-w-className outline-blue-500"
            />
            <InputError message={errors.merk} />
          </div>

          <div className="mb-2">
            <label className="text-slate-900 font-medium text-lg block">Tahun</label>
            <input
              id="tahun"
              type="number"
              name="tahun"
              value={data.tahun}
              isfocused="true"
              onChange={(e) => setData('tahun', e.target.value)}
              placeholder="Masukkan tahun"
              required
              min="0"
              className="px-4 py-2 text-className rounded-md bg-white border border-gray-400 w-full max-w-className outline-blue-500"
            />
            <InputError message={errors.tahun} />
          </div>

          <div className="mb-2">
            <label className="text-slate-900 font-medium text-lg block">Status</label>
            <select
              name="status"
              value={data.status}
              onChange={(e) => setData('status', e.target.value)}
              required
              className="px-4 py-2 rounded-md bg-white border border-gray-400 
               w-full outline-blue-500"
            >
              <option value="" disabled>
                Pilih status kendaraan
              </option>
              <option value="tersedia">Tersedia</option>
              <option value="dipakai">Dipakai</option>
              <option value="servis">Servis</option>
            </select>
            <InputError message={errors.status} />
          </div>
          <button type="submit" className="px-6 py-2 rounded-lg cursor-pointer text-white text-className tracking-wider font-medium border-0 outline-0 outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700">Submit</button>
        </form>
      </div>
    </PageLayout>
  )
}

export default Edit