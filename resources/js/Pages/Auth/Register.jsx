import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
  const { data, setData, post, errors, reset } = useForm({
    email: '',
    password: '',
    password_confirmation: '',
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <h1 className="text-slate-900 text-center text-3xl font-semibold">Register</h1>
      <form onSubmit={submit} className="my-4 space-y-3">
        <div>
          <label className="text-slate-900 text-sm font-medium mb-2 block">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            placeholder="Masukkan email"
            required
            className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
          />
          <InputError message={errors.email} />
        </div>

        <div>
          <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
            placeholder="Masukkan password"
            required
            className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
          />
          <InputError message={errors.password} />
        </div>

        <div>
          <label className="text-slate-900 text-sm font-medium mb-2 block">Konfirmasi Password</label>
          <input
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            onChange={(e) =>
              setData('password_confirmation', e.target.value)
            }
            placeholder="Masukkan kembali password"
            required
            className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
          />
          <InputError message={errors.password_confirmation} />
        </div>
        <button type="submit" className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
          Register
        </button>
        <p className="text-slate-900 text-sm !mt-6 text-center">Sudah punya akun? <Link href={route('login')} className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Login</Link> sekarang</p>
      </form>
    </GuestLayout>
  );
}
