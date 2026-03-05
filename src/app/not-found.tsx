import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="mt-4 text-lg text-neutral-400">
        Looks like you've wandered into uncharted territory.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-lg bg-emerald-500 px-6 py-3 font-medium text-black hover:bg-emerald-400"
      >
        Back to home
      </Link>
    </div>
  );
}
