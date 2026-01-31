import PageLayout from "@/Layouts/PageLayout"
import { useForm } from "@inertiajs/react";
import { X, Pencil } from "lucide-react";
import { useState } from "react"

const Profile = ({ profile }) => {
  const [isActive, setIsActive] = useState(false);
  const { data, setData, patch } = useForm({
    nama: profile?.nama ?? '',
    ttl: profile?.ttl ?? '',
    no_hp: profile?.no_hp ?? '',
    jk: profile?.jk ?? '', // still have a bug can't store value "perempuan"
    alamat: profile?.alamat ?? '',
  });

  const submit = (e) => {
    e.preventDefault();

    patch(route('profile.update'), {
      onSuccess: () => {
        setIsActive(false)
      }
    });
  };

  return (
    <PageLayout title="Profile">
      <ul className="flex items-center space-x-4">
        <li className="text-slate-500 font-medium text-base">
          Profile
        </li>
      </ul>
      <div className="flex justify-between items-center my-2">
        <h1 className="font-bold text-4xl">Profile</h1>
      </div>

      {/* content */}
      <div className="bg-white p-8">
        <div className="flex justify-end">
          <button onClick={() => setIsActive(!isActive)} className={`inline-block p-2 text-white rounded-md ${!isActive ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600'}`}>
            {isActive ? <X size={20} /> : <Pencil size={20} />}
          </button>
        </div>
        <form onSubmit={submit}>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Nama</label>
              <input
                id="nama"
                name="nama"
                type="text"
                value={data.nama}
                onChange={(e) => setData('nama', e.target.value)}
                placeholder="Masukkan nama"
                disabled={!isActive}
                className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all disabled:bg-slate-200"
              />
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Tempat dan Tanggal Lahir</label>
              <input
                id="ttl"
                name="ttl"
                type="text"
                value={data.ttl}
                onChange={(e) => setData('ttl', e.target.value)}
                placeholder="Kediri, 01-01-2001"
                disabled={!isActive}
                className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all disabled:bg-slate-200"
              />
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Nomor Handphone</label>
              <input
                id="no_hp"
                name="no_hp"
                type="number"
                min="0"
                value={data.no_hp}
                onChange={(e) => setData('no_hp', e.target.value)}
                placeholder="Kediri, 01-01-2001"
                disabled={!isActive}
                className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all disabled:bg-slate-200"
              />
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Jenis Kelamin</label>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="jk"
                    name="jk"
                    value="laki-laki"
                    checked={data.jk === 'laki-laki'}
                    onChange={(e) => setData('jk', e.target.value)}
                    className="w-5 h-5 focus:ring-0"
                  />
                  <label className="text-sm text-black ml-2">
                    Laki-laki
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="jk"
                    name="jk"
                    value="perempuan"
                    checked={data.jk === 'perempuan'}
                    onChange={(e) => setData('jk', e.target.value)}
                    className="w-5 h-5 focus:ring-0"
                  />
                  <label className="text-sm text-black ml-2">
                    Perempuan
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Alamat</label>
              <textarea
                placeholder="Masukkan alamat"
                rows="6"
                name="alamat"
                value={data.alamat}
                onChange={(e) => setData('alamat', e.target.value)}
                disabled={!isActive}
                className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all disabled:bg-slate-200"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button type="submit" className="block min-w-32 py-3 px-6 text-sm font-medium tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer disabled:bg-opacity-80 disabled:pointer-events-none" disabled={!isActive}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  )
}

export default Profile