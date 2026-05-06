import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'block rounded-lg px-3 py-2 text-[15px] font-medium tracking-wide transition-colors',
    isActive
      ? 'bg-brand-900/5 text-brand-900'
      : 'text-brand-800 hover:bg-brand-900/5 hover:text-brand-900',
  ].join(' ')

const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-md px-2 py-1 text-sm font-medium tracking-wide transition-colors',
    isActive ? 'text-brand-900' : 'text-brand-800 hover:text-brand-900',
  ].join(' ')

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-brand-900/10 bg-[#faf8f5]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
          <Link
            to="/"
            className="font-display text-xl font-semibold tracking-tight text-brand-950 md:text-2xl"
          >
            A&S{' '}
            <span className="font-normal text-brand-800">Filipino Kitchen</span>
          </Link>

          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Main"
          >
            <NavLink to="/" end className={desktopLinkClass}>
              Home
            </NavLink>
            <NavLink to="/menu" className={desktopLinkClass}>
              Menu
            </NavLink>
            <NavLink to="/about" className={desktopLinkClass}>
              About
            </NavLink>
            <NavLink to="/reservations" className={desktopLinkClass}>
              Reservations
            </NavLink>
            <NavLink to="/order" className={desktopLinkClass}>
              Order Online
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/reservations"
              className="hidden rounded-full border border-brand-900/15 bg-white px-4 py-2 text-sm font-semibold text-brand-900 shadow-sm transition hover:border-brand-900/25 hover:shadow md:inline-flex"
            >
              Reserve
            </Link>
            <Link
              to="/order"
              className="hidden rounded-full bg-brand-900 px-4 py-2 text-sm font-semibold text-[#faf8f5] shadow-sm transition hover:bg-brand-800 md:inline-flex"
            >
              Order
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-900/10 bg-white text-brand-900 shadow-sm transition hover:bg-brand-900/5 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={[
          'fixed inset-0 z-40 bg-brand-950/40 transition-opacity duration-300 ease-out md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        aria-hidden
        onClick={() => setOpen(false)}
      />

      {/* Right drawer */}
      <div
        id="mobile-menu"
        className={[
          'fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col border-l border-brand-900/10 bg-[#faf8f5] shadow-2xl transition-transform duration-300 ease-out md:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-brand-900/10 px-4 py-4">
          <span className="font-display text-lg font-semibold text-brand-950">Menu</span>
          <button
            type="button"
            className="rounded-full p-2 text-brand-800 hover:bg-brand-900/5"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Mobile">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/menu" className={navLinkClass}>
            Menu
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/reservations" className={navLinkClass}>
            Reservations
          </NavLink>
          <NavLink to="/order" className={navLinkClass}>
            Order Online
          </NavLink>
        </nav>

        <div className="border-t border-brand-900/10 p-4">
          <Link
            to="/reservations"
            className="mb-3 block w-full rounded-full border border-brand-900/15 bg-white py-3 text-center text-sm font-semibold text-brand-900 shadow-sm"
            onClick={() => setOpen(false)}
          >
            Book a table
          </Link>
          <Link
            to="/order"
            className="block w-full rounded-full bg-brand-900 py-3 text-center text-sm font-semibold text-[#faf8f5]"
            onClick={() => setOpen(false)}
          >
            Order for pickup or delivery
          </Link>
        </div>
      </div>
    </>
  )
}
