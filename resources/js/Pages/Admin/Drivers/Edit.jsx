import PageLayout from "@/Layouts/PageLayout";
import InputError from '@/Components/InputError';
import { Link, useForm } from "@inertiajs/react";

const Edit = ({ driver }) => {
  const { data, setData, patch, errors } = useForm({
    nama: driver.nama,
    no_hp: driver.no_hp,
  });

  const submit = (e) => {
    e.preventDefault();

    patch(route('admin.drivers.update', driver.id));
  };

  return (
    <PageLayout title="Drivers - Edit">
      <ul className="flex items-center space-x-4">
        <li className="text-slate-500 font-medium text-base">
          Drivers
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
        <h1 className="font-bold text-4xl">Drivers</h1>
        <Link href={route('admin.drivers')} className="px-6 py-2 rounded-lg cursor-pointer text-white text-className tracking-wider font-medium border-0 outline-0 outline-none bg-red-700 hover:bg-red-800 active:bg-red-700">Back</Link>
      </div>

      {/* content */}
      <div className="bg-white py-8">
        <form onSubmit={submit} className="flex flex-col justify-center max-w-lg mx-auto px-4">
          <div className="mb-2">
            <label className="text-slate-900 font-medium text-lg block">Nama</label>
            <input
              id="nama"
              type="text"
              name="nama"
              value={data.nama}
              isfocused="true"
              onChange={(e) => setData('nama', e.target.value)}
              placeholder="Masukkan nama"
              required
              className="px-4 py-2 text-className rounded-md bg-white border border-gray-400 w-full max-w-className outline-blue-500"
            />
            <InputError message={errors.nama} />
          </div>

          <div className="mb-2">
            <label className="text-slate-900 font-medium text-lg block">No Hp</label>
            <input
              id="no_hp"
              type="number"
              name="no_hp"
              value={data.no_hp}
              isfocused="true"
              onChange={(e) => setData('no_hp', e.target.value)}
              placeholder="Masukkan no_hp"
              required
              min="0"
              className="px-4 py-2 text-className rounded-md bg-white border border-gray-400 w-full max-w-className outline-blue-500"
            />
            <InputError message={errors.no_hp} />
          </div>
          <button type="submit" className="px-6 py-2 rounded-lg cursor-pointer text-white text-className tracking-wider font-medium border-0 outline-0 outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700">Submit</button>
        </form>
      </div>
    </PageLayout>
  )
}

export default Edit