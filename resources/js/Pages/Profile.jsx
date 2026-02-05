import PageLayout from "@/Layouts/PageLayout"
import { useForm, usePage } from "@inertiajs/react";
import { X, Pencil } from "lucide-react";
import { useState } from "react"

const Profile = ({ profile }) => {
  const { flash } = usePage().props;
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(true)
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

      {isOpen &&
        flash?.alert && (
          <div className="absolute animate-[slideInRight_0.3s_ease-out_forwards] top-4 right-4 bg-red-500 text-white font-semibold tracking-wide flex items-center min-w-xs max-w-lg p-4 rounded-md shadow-md shadow-red-100" role="alert">
            <div className="shrink-0 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white inline" viewBox="0 0 32 32">
                <path
                  d="M16 1a15 15 0 1 0 15 15A15 15 0 0 0 16 1zm6.36 20L21 22.36l-5-4.95-4.95 4.95L9.64 21l4.95-5-4.95-4.95 1.41-1.41L16 14.59l5-4.95 1.41 1.41-5 4.95z"
                  data-original="#ea2d3f" />
              </svg>
            </div>
            <span className="text-[15px] mr-3">{flash.alert}</span>
            <button onClick={() => setIsOpen(false)} className="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 cursor-pointer shrink-0 fill-white ml-auto"
                viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000" />
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000" />
              </svg>
            </button>
          </div>
        )
      }
    </PageLayout>
  )
}

export default Profile