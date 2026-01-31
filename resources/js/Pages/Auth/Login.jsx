import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login() {
  const { data, setData, post, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Sign in" />

      <h1 className="text-slate-900 text-center text-3xl font-semibold">Sign in</h1>
      <form onSubmit={submit} className="my-4 space-y-3">
        <div>
          <label className="text-slate-900 text-sm font-medium mb-2 block">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={data.email}
            isfocused="true"
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
        <button type="submit" className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
          Sign in
        </button>
        <p className="text-slate-900 text-sm !mt-6 text-center">Don't have an account? <Link href={route('register')} className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</Link></p>
      </form>

    </GuestLayout>
  );
}
