import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-800/70">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-brand-950">Page not found</h1>
      <p className="mt-3 text-sm text-brand-800/85">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-[#faf8f5] hover:bg-brand-800"
      >
        Back to home
      </Link>
    </div>
  )
}
