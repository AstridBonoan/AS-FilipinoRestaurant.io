import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-brand-900/10 bg-brand-900 text-[#f5f0e8]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold">A&S Filipino Kitchen</p>
          <p className="mt-3 text-sm leading-relaxed text-[#f5f0e8]/75">
            Family-style Filipino dishes made for sharing — in our dining room or at yours.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-muted/90">
            Visit
          </p>
          <address className="mt-3 text-sm not-italic leading-relaxed text-[#f5f0e8]/85">
            123 Sample Street
            <br />
            New York, NY 10012
          </address>
          <p className="mt-2 text-sm">
            <a href="tel:+12125550199" className="hover:text-white">
              (212) 555-0199
            </a>
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-muted/90">
            Hours
          </p>
          <ul className="mt-3 space-y-1 text-sm text-[#f5f0e8]/85">
            <li>Tue–Thu · 11am – 10pm</li>
            <li>Fri–Sat · 11am – 11pm</li>
            <li>Sun · 11am – 9pm</li>
            <li className="text-[#f5f0e8]/55">Mon · Closed</li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-muted/90">
            Quick links
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/menu" className="hover:text-white">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" className="hover:text-white">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/order" className="hover:text-white">
                Order online
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-[#f5f0e8]/55">
        © {new Date().getFullYear()} A&S Filipino Kitchen. All rights reserved.
      </div>
    </footer>
  )
}
